#!/usr/bin/env bash

echo "Starting backend..."
cd backend
dotnet watch run --launch-profile https &
echo "Starting frontend..."
cd ../frontend
npm install && npm run dev
