#!/usr/bin/env bash

echo "Building database..."
docker compose build
echo "Building backend..."
cd backend
dotnet build
echo "Building frontend..."
cd ../frontend
npm install
