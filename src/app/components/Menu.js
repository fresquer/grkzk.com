import Link from 'next/link';

export default function Menu() {
    return (
        <div className="text-white flex justify-between items-center py-4 px-8 border-b border-[#2f2f2f]">
            <div>
                <Link href="/">
                    <img src="/images/grkzk-logo.svg" alt="logo" />
                </Link>
            </div>
            <nav>
                <ul className="flex gap-8">
                    <li className="text-white hover:underline">
                        <Link href="/">work</Link>
                    </li>
                    <li className="text-white hover:underline">
                        <Link href="/no-place-for-fear">no place for fear</Link>
                    </li>
                    <li className="text-white hover:underline">
                        <Link href="/about-me">about me</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
