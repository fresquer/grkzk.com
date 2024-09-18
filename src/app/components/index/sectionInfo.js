export default function SectionInfo({ title, data }) {
    return (
        <section className="container mx-auto text-white">
            <h3 className="px-16 mb-4 text-2xl">{title}</h3>
            <div>
                <div className="flex flex-wrap gap-0 justify-center">
                    {data.map((item, index) => (
                        <div key={index} className="flex flex-col gap-4 w-full border-dashed border-t border-b border-[#2f2f2f] py-4 px-16">
                            <div className="flex flex-col gap-2">
                                <a href={item.link} target="_blank" rel="noreferrer" className="text-sm hover:underline">
                                    <span className="font-bold">
                                        {item.title}
                                    </span>
                                </a>
                                <p className="text-xs text-slate-400">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}