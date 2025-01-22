import Link from "next/link";

export default function TopBannerIndex() {
    return (
        <section>
            <div className="md:mb-16 block md:flex justify-center py-8">
                <div className="flex justify-center px-16 mb-8 md:mb-0">
                    <img src="/images/portada-grkzk.webp" alt="portada" className="w-full max-w-64 box-shadow-cover rounded-xl" />
                </div>
                <div className="flex items-center justify-center flex-col">
                    <p className="text-center text-sm mb-4 text-brand-blue">new album</p>
                    <p className="text-center text-[#fff] text-4xl font-bold underline mb-6">
                        <Link href="/no-place-for-fear" className="text-white">
                            no place for fear
                        </Link>
                    </p>
                    <p className="text-center text-sm mb-4 text-brand-blue">
                        <Link href="/no-place-for-fear" className="text-white">
                            listen
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    )
}
