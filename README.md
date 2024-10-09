# Interview Test

## Introduction

We are changing the world.

### Instructions

## To build backend

docker compose build --no-cache

## To run backend

docker-compose down --remove-orphans && ./gradlew clean build && docker-compose build --no-cache && docker-compose up --force-recreate

## To run frontend

cd finance-tracker-frontend/ && npm i && npm run dev
