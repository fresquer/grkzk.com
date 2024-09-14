export default function SectionInfo() {


    const dataSongList = [
        {
            name: 'no place for fear',
            artist: 'grkzk',
            url: 'https://orcd.co/noplaceforfear',
            cover: 'https://grkzk-com.vercel.app/images/og-desc-grkzk.png',
            date: '2023-05-01',
            genre: 'electronic',
            duration: '3:00',
        },
        {
            name: 'no place for fear',
            artist: 'grkzk',
            url: 'https://orcd.co/noplaceforfear',
            cover: 'https://grkzk-com.vercel.app/images/og-desc-grkzk.png',
            date: '2023-05-01',
            genre: 'electronic',
            duration: '3:00',
        },
        {
            name: 'no place for fear',
            artist: 'grkzk',
            url: 'https://orcd.co/noplaceforfear',
            cover: 'https://grkzk-com.vercel.app/images/og-desc-grkzk.png',
            date: '2023-05-01',
            genre: 'electronic',
            duration: '3:00',
        },
    ]


    return (
        <section className="container mx-auto text-white">
            <h3 className="px-16 mb-4 text-2xl">productions</h3>
            <div>
                <div className="flex flex-wrap gap-0 justify-center">
                    {dataSongList.map((item, index) => (
                        <div key={index} className="flex flex-col gap-4 w-full border-dashed border-t border-b border-[#2f2f2f] py-4 px-16">
                            <div className="flex flex-col gap-2">
                                <a href={item.url} target="_blank" rel="noreferrer" className="text-sm hover:underline">
                                    <span className="font-bold">
                                        {item.name}
                                    </span> - {item.artist}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}