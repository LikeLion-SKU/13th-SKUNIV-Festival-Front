# Welcome to React Router!

A modern, production-ready template for building full-stack React applications using React Router.

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/remix-run/react-router-templates/tree/main/default)

## Features

🎉 Start: Start New Project [:tada]
✨ Feat: 새로운 기능을 추가 [:sparkles]
🐛 Fix: 버그 수정 [:bug]
🎨 Design: CSS 등 사용자 UI 디자인 변경 [:art]
♻️ Refactor: 코드 리팩토링 [:recycle]
🔧 Settings: Changing configuration files [:wrench]
🗃️ Comment: 필요한 주석 추가 및 변경 [:card_file_box]
➕ Dependency/Plugin: Add a dependency/plugin [:heavy_plus_sign]
📝 Docs: 문서 수정 [:memo]
🔀 Merge: Merge branches [:twisted_rightwards_arrows:]
🚀 Deploy: Deploying stuff [:rocket]
🚚 Rename: 파일 혹은 폴더명을 수정하거나 옮기는 작업만인 경우 [:truck]
🔥 Remove: 파일을 삭제하는 작업만 수행한 경우 [:fire]
⏪️ Revert: 전 버전으로 롤백 [:rewind]

## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

### Docker Deployment

To build and run using Docker:

```bash
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

---

Built with ❤️ using React Router.
