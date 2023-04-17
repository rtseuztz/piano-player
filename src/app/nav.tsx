import Link from "next/link";

export default function Nav() {

    return (
        <nav className="flex flex-row justify-between w-full">
            <Link className="flex flex-row" href={"/piano-screen"}>Piano</Link>
            <div className="flex flex-row">item2</div>
        </nav>
    )
}