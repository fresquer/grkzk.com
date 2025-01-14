export default function SectionInfo({ title, data }) {
    return (
        <section className="container mx-auto text-white">
            <h3 className="px-16 mb-4 text-2xl">{title}</h3>
            <div>
                <div className="flex flex-wrap gap-0 justify-center">
                    {data.map((item, index) => (
                        <div key={index} className="flex flex-col gap-4 w-full border-dashed border-t border-b border-[#2f2f2f] py-4 px-16 lowercase">
                            <div className="">
                                <a href={item.link} target="_blank" rel="noreferrer" className="text-sm hover:underline block">
                                    <span className="font-bold ">
                                        {item.title}
                                    </span>
                                </a>
                                <p className="text-xs text-gray-500 mb-2 mt-1">release date: {item.release_date}</p>
                                <p className="text-xs text-slate-400 lowercase">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}