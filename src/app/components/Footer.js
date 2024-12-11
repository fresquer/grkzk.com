import Image from 'next/image'

export default function Footer() {
    return (
        <footer className="flex justify-center flex-col items-center py-8 text-[#BECDCA] text-xs">
            <div className="rrss block space-y-4 md:space-y-0 md:flex gap-12 mb-8">
                <a className="block hover:opacity-70 transition-opacity " href="https://www.instagram.com/grkzk/" target="_blank" rel="noopener noreferrer">
                    <span>
                        .insta/  @grkzk
                    </span>
                </a>
                <a className="block hover:opacity-70 transition-opacity " href="https://bsky.app/profile/grkzk.bsky.social" target="_blank" rel="noopener noreferrer">
                    <span>
                        .bsky/   @grkzk
                    </span>
                </a>
                <a className="block hover:opacity-70 transition-opacity " href="mailto:grkzkzk@gmail.com" target="_blank" rel="noopener noreferrer">
                    <span>
                        .mail/ grkzkzk [at] gmail.com
                    </span>
                </a>
            </div>
            <p className="text-xs text-[#b1b1b1]">@ {new Date().getFullYear()} grkzk.</p>
        </footer>
    )
}
