
export default function TopBannerIndex() {
    return (
        <section>
            <div className="md:mb-16 block md:flex justify-center py-8">
                <div className="flex justify-center px-16 mb-8 md:mb-0">
                    <img src="/images/portada-grkzk.webp" alt="portada" className="w-full max-w-64 box-shadow-cover rounded-xl" />
                </div>
                <div className="flex items-center justify-center flex-col">
                    <p className="text-center text-sm mb-4 text-brand-blue">new album</p>
                    <p className="text-center text-[#fff] gothic-font leading-4 text-5xl underline mb-6">
                        <a href="https://orcd.co/noplaceforfear" target="_blank" rel="noopener noreferrer">no place for fear</a>
                    </p>
                    <p className="text-center text-sm mb-4 text-brand-blue">
                        <a href="https://orcd.co/noplaceforfear" target="_blank" rel="noopener noreferrer">listen</a>
                    </p>

                </div>
            </div>
        </section>
    )
}
