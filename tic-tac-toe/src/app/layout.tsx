import Header from "./components/Header";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Tic Tac Toe</title>
        <link rel="icon" href="/tic-tac-toe.ico" />
      </head>
      <body className='grid grid-rows-[auto_1fr_auto] grid-cols-1 w-full min-h-svh'>
        <Header />
        <main className="flex items-center justify-center">{children}</main>
      </body>
    </html>
  );
}
