import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main className="flex flex-col justify-center items-center gap-y-4">
        <div>
          <h1 className="text-2xl md:text-3xl">Welcome to Tic-Tac-Toe</h1>
        </div>
        <Link
          className="bg-black px-8 py-2 rounded-xl text-lg md:text-2xl hover:underline text-white"
          href="/board"
        >
          Begin Game
        </Link>
      </main>
    </div>
  )
}
