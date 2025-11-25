# Restate — Real Estate Finder

Restate is a React Native app built with Expo Router that lets users browse, filter, and view detailed information about properties. It integrates Appwrite for data and auth, and uses Tailwind (via NativeWind) for styling.

## Key Features
- Browse featured and recommended properties on the home tab.
- Search and filter (type, query) in Explore.
- Property detail pages with photos, facilities, reviews, and agent info.
- Expo Router file-based navigation.
- Appwrite backend for properties, galleries, reviews, agents, and auth.

## Project Structure
- `app/` – Expo Router entry point.
  - `_layout.tsx` – Root layout and providers.
  - `(root)/` – Authenticated stack.
    - `_layout.tsx` – Tabs layout.
    - `(tabs)/index.tsx` – Home feed (featured + recommended).
    - `(tabs)/Explore.tsx` – Search/filter screen.
    - `(tabs)/Profile.tsx` – User profile tab.
    - `properties/[id].tsx` – Property detail page.
  - `SignIn.tsx` – Sign-in flow.
- `components/` – UI components (cards, search, filters, comments, etc.).
- `constants/` – Icons, images, and static data.
- `libs/` – Appwrite client, hooks (`useAppwrite`), and data functions.
- `types/` – Shared TypeScript types.

## Data & Functionality
- Fetch properties: `libs/appwrite.ts#getProperties` and `getLatestProperties` query Appwrite collections with filters/search.
- Fetch a property by id: `getPropertyById` returns the property plus related agent, gallery items, and reviews (joined by `propertyId`).
- Global auth: `libs/appwrite.ts#login/logout/getCurrentUser` manage Appwrite sessions; `libs/globalProvider` (not shown here) exposes `useGlobalContext` in screens.
- UI: Cards trigger `router.push('/properties/[id]')` to open the detail screen. Detail renders ratings, facilities, gallery, reviews, and agent contact.

## Getting Started
1) Install dependencies

```bash
npm install
```

2) Add environment config (see `.env` or Expo public vars) for Appwrite:
- `EXPO_PUBLIC_APPWRITE_ENDPOINT`
- `EXPO_PUBLIC_APPWRITE_PROJECT_ID`
- `EXPO_PUBLIC_APPWRITE_DATABASE_ID`
- `EXPO_PUBLIC_APPWRITE_PROPERTIES_TABLE_ID`
- `EXPO_PUBLIC_APPWRITE_GALERIES_TABLE_ID`
- `EXPO_PUBLIC_APPWRITE_REVIEWS_TABLE_ID`
- `EXPO_PUBLIC_APPWRITE_AGENTS_TABLE_ID`

3) Run the app

```bash
npx expo start
```

Open on Expo Go, iOS simulator, or Android emulator. Tabs are registered via Expo Router; deep links follow the file paths above.

## Notes & Troubleshooting
- If properties or agents don’t load, ensure the Appwrite collections contain documents with `propertyId` set in galleries/reviews and an agent id on the property (field `agentId` or `agent` relation).
- The detail screen expects optional arrays; missing data will render empty states instead of errors.

## Scripts
- `npm start` / `npx expo start` – Run Metro bundler.
- `npm run lint` – Lint project files.
