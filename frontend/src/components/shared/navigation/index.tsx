import Link from "next/link";
import Image from "next/image";
import { APP_NAME } from "@lib/constants/app";

export function Navigation() {
    return (
        <nav className="py-4 px-10 font-semibold">
            <Link href="/" className="flex items-center">
                <Image src="/app-icon.svg" width={30} height={30} alt="App logo" />
                <h3>{APP_NAME}</h3>
            </Link>
        </nav>
    )
}