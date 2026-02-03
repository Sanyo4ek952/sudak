# Sudak Stay — MVP

Production-ориентированный MVP для бронирования жилья/номеров в Судаке.

## Локальный запуск

```bash
cp .env.example .env
npm install
npx prisma generate
npx prisma migrate dev
npx prisma db seed
npm run dev
```

## Скрипты

- `npm run dev` — запуск Next.js
- `npm run test` — unit-тесты pricing engine
- `npm run lint` — линтинг

## Стек

- Next.js App Router, TypeScript
- Tailwind CSS
- Prisma + PostgreSQL
- React Hook Form + Zod (подключается на формах)
