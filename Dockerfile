# 빌드 및 의존성 설치
FROM node:20-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm install --force

FROM node:20-alpine AS build
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN npm run build

# 최종 실행 이미지
FROM node:20-alpine
WORKDIR /app

# 정적 파일 서빙 툴 설치
RUN npm install -g serve

# 빌드된 정적 파일 복사
COPY --from=build /app/dist ./dist

# 포트 5173 노출
EXPOSE 5173

# 정적 서버 실행
CMD ["serve", "-s", "dist", "-l", "5173"]