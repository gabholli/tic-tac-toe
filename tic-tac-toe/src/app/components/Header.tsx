import Link from "next/link"

export default function Header() {
    return (
        <header className="bg-black h-20 flex justify-center items-center
            text-xl text-white">
            <div className="flex gap-10">
                <Link
                    className="hover:underline"
                    href="/">
                    Home
                </Link>
            </div>
        </header>
    )
}