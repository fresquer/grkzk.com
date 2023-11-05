import Image from 'next/image'

export default function Footer() {
    return (
        <footer className="flex justify-center flex-col items-center py-8">
            <div className="rrss flex gap-12 mb-8">
                <a href="https://www.instagram.com/grkzk/" target="_blank" rel="noopener noreferrer">
                    <Image src="/images/instagram-icon.svg" width={32} height={32} alt="Instagram" />
                </a>
                <a href="https://twitter.com/grkzkzk" target="_blank" rel="noopener noreferrer">
                    <Image src="/images/twitter-icon.svg" width={32} height={32} alt="Twitter" />
                </a>
            </div>
            <p className="text-sm text-[#b1b1b1]">@ {new Date().getFullYear()} grkzk.</p>
        </footer>
    )
}
