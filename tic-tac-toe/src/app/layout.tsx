import Header from "./components/Header";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Tic Tac Toe</title>
        <link rel="icon" href="/tic-tac-toe.ico" />
      </head>
      <body className='flex flex-col justify-between w-full min-h-svh'>
        <Header />
        <main className="flex flex-grow items-center justify-center">{children}</main>
      </body>
    </html>
  );
}
