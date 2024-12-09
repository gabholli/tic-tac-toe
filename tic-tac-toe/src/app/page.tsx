import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main className="flex flex-col justify-center items-center gap-y-4">
        <div>
          <h1 className="text-3xl">Welcome to Tic-Tac-Toe</h1>
        </div>
        <Link
          className="bg-black px-8 py-2 rounded-xl text-xl hover:underline text-white"
          href="game"
        >
          Begin Game
        </Link>
      </main>
    </div>
  )
}
