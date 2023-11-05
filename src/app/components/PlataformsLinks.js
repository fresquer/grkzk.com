export default function PlataformsLinks() {

    const plataforms = [
        {
            label: 'spotify',
            url: '#'
        },
        {
            label: 'bandcamp',
            url: '#'
        },
        {
            label: 'soundcloud',
            url: '#'
        },
        {
            label: 'deeazer',
            url: '#'
        },
        {
            label: 'amazon music',
            url: '#'
        },
        {
            label: 'tidal',
            url: '#'
        },
        {
            label: 'youtube',
            url: '#'
        },
        {
            label: 'apple music ',
            url: '#'
        },
    ]


    return (
        <div className="space-y-8 text-center text-brand-blue my-16">
            {plataforms.map((plataform, index) => (
                <a href={plataform.url} key={index} className="block underline text-xl">
                    {plataform.label}
                </a>
            ))}
        </div>
    )
}


