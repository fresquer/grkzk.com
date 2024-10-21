import Image from 'next/image'

export default function Footer() {
    return (
        <footer className="flex justify-center flex-col items-center py-8 text-[#BECDCA] text-xs">
            <div className="rrss flex gap-12 mb-8">
                <a className="hover:opacity-70 transition-opacity " href="https://www.instagram.com/grkzk/" target="_blank" rel="noopener noreferrer">
                    <span>
                        .insta/  @grkzk
                    </span>
                </a>
                <a className="hover:opacity-70 transition-opacity " href="https://twitter.com/grkzkzk" target="_blank" rel="noopener noreferrer">
                    <span>
                        .tw/   @grkzkzk
                    </span>
                </a>
                <p>
                    <span>
                        .mail/ grkzkzk [at] gmail.com
                    </span>
                </p>
            </div>
            <p className="text-xs text-[#b1b1b1]">@ {new Date().getFullYear()} grkzk.</p>
        </footer>
    )
}
