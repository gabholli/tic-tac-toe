import Link from "next/link"
import Image from "next/image"

export default function NumPlayers() {
    return (
        <div>
            <main className="grid grid-areas-playersScreen">
                <Image
                    className="grid-in-imageOne"
                    src=""
                    alt="One player"
                    width="50"
                    height="50"
                />

                <h1 className="grid-in-one">One</h1>

                <Image
                    className="grid-in-imageTwo"
                    src=""
                    alt="Two player"
                    width="50"
                    height="50"
                />

                <h1 className="grid-in-two">Two</h1>

            </main>
        </div>
    )
}
