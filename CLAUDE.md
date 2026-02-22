# CLAUDE.md - Kurly Clone Project

## Project Overview
Market Kurly / Beauty Kurly 모바일 커머스 클론 앱 (React + Vite)

## Tech Stack
- **Framework**: React 19 + Vite (rolldown-vite)
- **Routing**: React Router DOM 7
- **State**: Zustand (global), React Query (server state)
- **Styling**: Tailwind CSS 4 (utility-first, no CSS-in-JS)
- **API**: Axios + MSW (mock), React Query
- **SVG**: vite-plugin-svgr (import as React components)

## Commands
- `npm run dev` — Start dev server
- `npm run build` — Production build
- `npm run lint` — ESLint
- `npm run preview` — Preview production build

## Project Structure
```
src/
├── api/              # Axios instance, API services
├── assets/           # Images, icons, banners
├── components/
│   ├── common/       # Shared: ProductCard, Layout, Header, Footer, Dialog, Button
│   └── feature/      # Feature-specific: DTI/, HOM/, LST/, MEN/
├── constants/        # App constants
├── hooks/controllers/# Custom hooks
├── mocks/            # MSW handlers & mock data
├── pages/            # Pages by feature code (HOM/, DTI/, LGN/, LST/, MEN/)
├── routes/           # MenuInfo.json config, RootRoute, ProtectedRoute
├── stores/           # Zustand stores (auth, theme, history, layer)
└── utils/            # ApiUtils, LayerUtils
```

## Conventions

### Naming
- **Pages**: 3-letter feature code + number — `HOM001.jsx`, `DTI001.jsx`
- **Page folders**: `HOM/`, `DTI/`, `LGN/`, `LST/`, `MEN/`
- **Components**: PascalCase — `ProductCard.jsx`, `HomHeader.jsx`
- **Stores**: `useXXXStore.js` pattern
- **Hooks**: `useXXXController.js` pattern

### Path Alias
- `@` → `src/` (configured in vite.config.js and jsconfig.json)

### Routing
- Routes defined in `src/routes/MenuInfo.json` (JSON-driven)
- Dynamic route generation via `RootRoute.jsx` with lazy-loaded pages
- Route `filePath` maps to `src/pages/{filePath}.jsx`

### Components
- Functional components with hooks only
- Feature components in `components/feature/{CODE}/`
- Shared components in `components/common/`
- ProductCard supports 3 layouts: `vertical`, `horizontal`, `simple-horizontal`

### Styling
- Tailwind CSS only — no inline styles or CSS modules
- Primary color: `#5F0080` (Kurly purple)
- Font: Pretendard (primary), Roboto, AppleSDGothicNeo
- Mobile-first design (min ~340px viewport)

### State Management
- `useThemeStore` — market/beauty theme toggle
- `useAuthStore` — login state
- `useHistoryStore` — navigation history & page params
- `useLayerStore` — dialog/popup layer stack

### Dialog System
- `LayerUtils.showCenterPopup()`, `showFullPopup()`, `showBottomPopup()`
- Promise-based API for dialog callbacks

### Comments
- Korean (한국어) comments throughout codebase
