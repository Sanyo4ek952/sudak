import type { Metadata } from 'next';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'Судак — бронирование жилья',
  description: 'Премиальный сервис бронирования жилья и номеров в Судаке.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <div className="min-h-screen bg-pearl-50">
          <header className="border-b border-pearl-200 bg-pearl-50/90 backdrop-blur">
            <div className="container-page flex h-16 items-center justify-between">
              <div className="font-display text-2xl">Sudak Stay</div>
              <nav className="flex items-center gap-6 text-sm text-ink-700">
                <a href="/search">Поиск</a>
                <a href="/host">Хозяевам</a>
                <a href="/guest">Мои брони</a>
              </nav>
            </div>
          </header>
          {children}
          <footer className="border-t border-pearl-200 py-10">
            <div className="container-page flex flex-col gap-3 text-sm text-ink-700">
              <p>Sudak Stay · Прозрачное бронирование · all-in цена</p>
              <p>Поддержка: hello@sudak.local</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
