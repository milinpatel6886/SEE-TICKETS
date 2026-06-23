# Locality Clone

A React + Vite scaffold replicating the dark-themed event-card grid UI
(navbar + responsive card grid with poster, title, location, date, price/badge).

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview   # to preview the production build locally
```

## Folder structure

```
src/
├── components/
│   ├── common/        # Button, Badge, Skeleton — generic, no business logic
│   ├── layout/         # Navbar, Footer
│   └── events/          # EventCard, EventGrid, EventMeta — feature-specific
├── pages/
│   └── EventsListPage/  # Composes Navbar + EventGrid into a page
├── data/
│   └── events.js          # Mock data — replace with a real API call
├── hooks/
│   └── useEvents.js        # Data-fetching logic, separate from UI
├── utils/
│   ├── formatDate.js         # "2026-06-20" -> "20 Jun 2026"
│   └── truncate.js            # Long address truncation with "..."
├── styles/
│   ├── variables.css           # Design tokens (colors, spacing, fonts)
│   └── globals.css              # Resets and base styles
├── App.jsx
└── main.jsx
```

## Connecting to a real API

Everything funnels through `src/hooks/useEvents.js`. Replace the mock
`setTimeout` logic with a real `fetch()`:

```js
useEffect(() => {
  fetch('/api/events')
    .then((res) => res.json())
    .then(setEvents)
    .catch(setError)
    .finally(() => setIsLoading(false))
}, [])
```

No component code needs to change — `EventsListPage`, `EventGrid`, and
`EventCard` only care about the shape of the data, not where it comes from.

## Event data shape

```js
{
  id: string,
  title: string,
  tagline: string,        // small text shown over the poster
  image: string,            // poster image URL
  location: string,
  date: string,               // ISO format, e.g. "2026-06-20"
  priceLabel: string | null,    // e.g. "From ₹649"
  badge: string | null,           // e.g. "Invites Only" — shown instead of price
}
```

## Notes

- Styling uses CSS Modules (`*.module.css`) scoped per component — no Tailwind
  required, but the structure adapts easily if you'd rather use it.
- Icons come from `react-icons` (Feather icon set, `react-icons/fi`).
- Poster images in `src/data/events.js` are placeholder Unsplash URLs — swap
  in your own assets or API-served images.
