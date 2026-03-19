import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient,QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import MainPage from './pages/MainPage.tsx'
import FavoritesPage from './pages/FavoritesPage.tsx'
import CoinPage from './pages/CoinPage.tsx'

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Navigate to="/main" replace />} />
            <Route path="main" element={<MainPage />} />
            <Route path="favorite" element={<FavoritesPage />} />
            <Route path="coin/:id" element={<CoinPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>
)
