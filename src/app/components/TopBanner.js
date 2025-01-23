
export default function TopBanner() {
    return (
        <section>
            <div className="mb-16 mt-10">
                <div className="flex justify-center px-16 mb-8">
                    <img src="/images/portada-grkzk.webp" alt="portada" className="w-full max-w-md box-shadow-cover rounded-xl" />
                </div>
                <div>
                    <p className="text-center text-sm mb-4 text-brand-blue">new album</p>
                    <p className="text-center text-[#fff] text-4xl font-bold underline">
                        no place for fear
                    </p>
                </div>
            </div>
            <div>
                <img src="./images/glitch.svg" className="opacity-10 w-full h-6" alt="glitch" />
            </div>
        </section>
    )
}
