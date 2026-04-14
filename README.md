# Mecenate — Feed Screen

Экран ленты публикаций (Patreon/Boosty-аналог) на **React Native + Expo + TypeScript**.

## Стек
- Expo SDK 54 (managed workflow), React Native 0.81
- TypeScript (strict)
- **React Query** — пагинация (`useInfiniteQuery`), кеш, refetch
- **MobX** — хранилище авторизации (UUID токен)
- **axios** — HTTP-клиент с Bearer interceptor
- **expo-image** — кеш обложек и аватаров
- **expo-blur** — overlay для paid-постов
- **Дизайн-токены** — `src/theme/tokens.ts`

## Функциональность
- Лента постов (`GET /posts`) с курсорной пагинацией — подгрузка при скролле вниз.
- Pull-to-refresh.
- Закрытый пост (`tier: "paid"`) — blur-оверлей с заглушкой «Контент скрыт пользователем. Доступ откроется после доната».
- Error state: «Не удалось загрузить публикации» + кнопка «Повторить» (ре-fetch).

## Запуск

```bash
cd mecenate-feed
npm install
cp .env.example .env   # при необходимости отредактировать
npx expo start
```

Отсканируйте QR-код через Expo Go (iOS/Android).

### Переменные окружения
| Переменная | Назначение | Дефолт |
|---|---|---|
| `EXPO_PUBLIC_API_URL` | Base URL API | `https://k8s.mectest.ru/test-app` |
| `EXPO_PUBLIC_DEFAULT_USER_UUID` | UUID пользователя для Bearer-токена | `550e8400-e29b-41d4-a716-446655440000` |

Можно подставить любой валидный UUID — бэкенд принимает любой.

> `.env` закоммичивать **не нужно** — он в `.gitignore`. В репозитории хранится только `.env.example` с дефолтными значениями/плейсхолдерами; при клоне делайте `cp .env.example .env` и правьте под себя. Реальные секреты (ключи, токены) кладите только в локальный `.env`.

## Структура
```
src/
  api/          # axios client + типы из openapi.json
  stores/       # MobX: AuthStore, RootStore + Provider
  hooks/        # usePostsFeed (useInfiniteQuery)
  theme/        # дизайн-токены + ThemeProvider
  components/   # PostCard, PaidOverlay, FeedError, FeedFooter ...
  screens/      # FeedScreen
App.tsx          # SafeArea + QueryClient + Store + Theme providers
```

## Проверка error state
В `src/api/posts.ts` передайте `{ simulateError: true }` в `getPostsFeed` — API вернёт 500 и экран покажет компонент `FeedError` с кнопкой «Повторить».

## Дизайн
Токены и layout соответствуют макету из Figma (`Test-Assignment`) — см. `src/theme/tokens.ts`.
