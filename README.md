# Poizon Market Monorepo

Монорепозиторий для e-commerce приложения, построенный на Next.js и NestJS.

## Структура проекта

```
ecommerce-app/
├── apps/
│   ├── frontend/           # Next.js (Tailwind, MobX, Axios)
│   └── backend/            # NestJS (PostgreSQL, Auth)
├── docker/
│   └── nginx/
│       └── nginx.conf      # Конфиг Nginx для HTTPS + прокси
├── .github/
│   └── workflows/
│       └── deploy.yml      # CI/CD на GitHub Actions
├── docker-compose.yml              # для продакшена
├── docker-compose.dev.yml          # для разработки
├── .env.frontend                   # переменные для frontend
├── .env.backend                    # переменные для backend
└── README.md
```

## Разработка

1. Клонируйте репозиторий
2. Скопируйте `.env.frontend.example` в `.env.frontend`
3. Скопируйте `.env.backend.example` в `.env.backend`
4. Запустите разработку:
   ```bash
   docker-compose -f docker-compose.dev.yml up
   ```

## Продакшен

1. Настройте SSL сертификаты в директории `certs/`
2. Обновите переменные окружения для продакшена
3. Запустите:
   ```bash
   docker-compose up -d
   ```

## CI/CD

Проект настроен на автоматический деплой при пуше в ветку `main`:
1. Сборка Docker образов
2. Пуш в Docker Hub
3. Деплой на VPS через SSH

## Требования

- Docker
- Docker Compose
- Node.js 18+
- PostgreSQL 15+ 