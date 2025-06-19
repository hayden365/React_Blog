# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

- imagekit : 이미지 사용시 높은 사용자 경험을 위해서 해당 라이브러리 사용
- clerk: 로그인, 소셜로그인 기능 사용, 웹훅을 이용한 사용자 데이터활용위해서 사용
- ngrok: To test a webhook locally, you need to expose your local server to the internet. This guide uses ngrok which creates a forwarding URL that sends the webhook payload to your local server. 유저등록 단계에서 웹훅사용시, 로컬환경에서도 사용하기 위해.
- TanStack Query: 포스트 작성 단계에서 도입.
