# nextjs,tailwindcss,typescriptによってフロントエンドを提供するDockerfile

FROM node:18.16.0-slim

WORKDIR /app

RUN apt-get update && apt-get install -y openssl

# 依存関係のインストール
COPY package.json ./
COPY package-lock.json ./
RUN npm install

# ソース全体のコピー
COPY . .
