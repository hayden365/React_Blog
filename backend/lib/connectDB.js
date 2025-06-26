import mongoose from "mongoose";

let isConnected = false;

const connectDB = async () => {
  // 이미 연결되어 있다면 재연결하지 않음
  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }

  // 연결 중이라면 대기
  if (mongoose.connection.readyState === 1) {
    isConnected = true;
    return;
  }

  try {
    const conn = await mongoose.connect(process.env.MONGO_URL, {
      // 최신 권장 옵션들
      maxPoolSize: 10, // 최대 연결 풀 크기
      serverSelectionTimeoutMS: 5000, // 서버 선택 타임아웃
      socketTimeoutMS: 45000, // 소켓 타임아웃
      bufferCommands: false, // 명령 버퍼링 비활성화
    });

    isConnected = true;
    console.log(`MongoDB Connected: ${conn.connection.host}`);

    // 연결 이벤트 리스너
    mongoose.connection.on("error", (err) => {
      console.error("MongoDB connection error:", err);
      isConnected = false;
    });

    mongoose.connection.on("disconnected", () => {
      console.log("MongoDB disconnected");
      isConnected = false;
    });
  } catch (err) {
    console.log(err);
  }
};

export default connectDB;
