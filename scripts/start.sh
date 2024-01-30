#!/usr/bin/env bash

echo "Starting database..."
docker compose up -d
echo "Starting backend..."
cd backend
dotnet watch run &
echo "Starting frontend..."
cd ../frontend
npm run dev
