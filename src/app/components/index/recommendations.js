
export default function Recomendations() {
    const recomendations = [
        {
            name: 'Gorka Grkzk',
            avatar: '/images/grkzk-avatar.webp',
            socialName: '@grkzk',
            instagram: 'https://www.instagram.com/grkzk/',
            text: 'no place for fear is una puta locura de verdad, mola mucho suena bien.',
        },
        {
            name: 'Gorka Grkzk',
            avatar: '/images/grkzk-avatar.webp',
            socialName: '@grkzk',
            instagram: 'https://www.instagram.com/grkzk/',
            text: 'no place for fear is una puta locura de verdad, mola mucho suena bien.',
        },
        {
            name: 'Gorka Grkzk',
            avatar: '/images/grkzk-avatar.webp',
            socialName: '@grkzk',
            instagram: 'https://www.instagram.com/grkzk/',
            text: 'no place for fear is una puta locura de verdad, mola mucho suena bien.',
        },
        {
            name: 'Gorka Grkzk',
            avatar: '/images/grkzk-avatar.webp',
            socialName: '@grkzk',
            instagram: 'https://www.instagram.com/grkzk/',
            text: 'no place for fear is una puta locura de verdad, mola mucho suena bien.',
        },
        {
            name: 'Gorka Grkzk',
            avatar: '/images/grkzk-avatar.webp',
            socialName: '@grkzk',
            instagram: 'https://www.instagram.com/grkzk/',
            text: 'no place for fear is una puta locura de verdad, mola mucho suena bien. no place for fear is una puta locura de verdad, mola mucho suena bien.no place for fear is una puta locura de verdad, mola mucho suena bien.no place for fear is una puta locura de verdad, mola mucho suena bien.no place for fear is una puta locura de verdad, mola mucho suena bien.no place for fear is una puta locura de verdad, mola mucho suena bien.no place for fear is una puta locura de verdad, mola mucho suena bien.no place for fear is una puta locura de verdad, mola mucho suena bien.no place for fear is una puta locura de verdad, mola mucho suena bien.no place for fear is una puta locura de verdad, mola mucho suena bien.no place for fear is una puta locura de verdad, mola mucho suena bien.',
        },
    ]

    return (
        <section>
            <div>
                <h3 className="px-16 mb-4 text-2xl text-white">recommendations</h3>
                <div className="space-y-4 px-16">
                    {recomendations.map((item, index) => (
                        <div
                            key={index}
                            className="w-full border-dashed border-t border-[#2f2f2f] py-4 px-2 lowercase flex gap-4 items-start"
                        >
                            <img
                                src={item.avatar}
                                alt=""
                                className="w-14 h-14 mt-1  flex-shrink-0"
                            />
                            <div>
                                <p className="text-sm text-gray-400">{item.name}</p>
                                <a
                                    href={item.instagram}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="hover:underline block text-gray-600 text-xs"
                                >
                                    <span className="font-bold">{item.socialName}</span>
                                </a>
                                <p className="text-gray-200 text-xs mt-2">{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
