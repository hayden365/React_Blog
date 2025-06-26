import express from "express";
import userRouter from "./routes/user.route.js";
import postRouter from "./routes/post.route.js";
import commentRouter from "./routes/comment.route.js";
import webHookRouter from "./routes/webhook.route.js";
import connectDB from "./lib/connectDB.js";
import { clerkMiddleware } from "@clerk/express";
import cors from "cors";

const app = express();

// DB 연결 (서버리스 환경에서는 앱 초기화 시 연결)
connectDB().catch(console.error);

app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(clerkMiddleware());
app.use("/webhooks", webHookRouter);
app.use(express.json());

// app.get("/test", (req, res) => res.status(200).send("it works!"));

app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/comments", commentRouter);

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    message: error.message || "Something went wrong!",
    status: error.status,
    stack: error.stack,
  });
});

// if (process.env.NODE_ENV !== "production") {
//   const PORT = process.env.PORT || 3000;
//   app.listen(PORT, async () => {
//     await connectDB();
//     console.log(`Server is running on port ${PORT}!`);
//   });
// } else {
//   connectDB().catch(console.error);
// }

// Vercel에서는 앱을 export해야 함 (listen 호출하지 않음)
export default app;
