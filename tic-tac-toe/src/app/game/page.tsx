import Link from "next/link"
import Image from "next/image"

export default function NumPlayers() {
    return (
        <div className="flex flex-col justify-center items-center gap-y-24">
            <h1 className="text-2xl">Select number of players:</h1>
            <main className="grid grid-areas-playersScreen gap-4 ">
                <Link
                    href="components/board"
                    className="grid-in-imageOne border-4 h-64 w-32 flex justify-center items-center text-9xl">1</Link>
                {/* <Image
                    className="grid-in-imageOne"
                    src=""
                    alt="One player"
                    width="50"
                    height="50"
                /> */}

                <h1 className="grid-in-one text-center">One</h1>

                <h1 className="grid-in-imageTwo border-4 h-64 w-32 flex justify-center items-center text-9xl">2</h1>
                {/* <Image
                    className="grid-in-imageTwo"
                    src=""
                    alt="Two player"
                    width="50"
                    height="50"
                /> */}

                <h1 className="grid-in-two text-center">Two</h1>

            </main>
        </div>
    )
}
