export default function PlataformsLinks() {

    const plataforms = [
        {
            label: 'spotify',
            url: 'https://open.spotify.com/intl-es/album/4eqNUsGbkzWfDDZjNIaoJK'
        },
        {
            label: 'bandcamp',
            url: 'https://grkzk.bandcamp.com/'
        },
        {
            label: 'soundcloud',
            url: 'https://soundcloud.com/grkzk/sets/no-place-for-fear'
        },
        {
            label: 'deezer',
            url: 'https://www.deezer.com/es/album/490708385'
        },
        {
            label: 'amazon music',
            url: 'https://music.amazon.es/albums/B0CJCNVV15'
        },
        // {
        //     label: 'tidal',
        //     url: '#'
        // },
        {
            label: 'youtube',
            url: 'https://youtu.be/lg6VcRJ18nI'
        },
        {
            label: 'apple music',
            url: 'https://music.apple.com/es/album/no-place-for-fear/1708071872#'
        },
    ]


    return (
        <div className="space-y-8 text-center text-brand-blue my-16">
            {plataforms.map((plataform, index) => (
                <a href={plataform.url} target="_blank" key={index} className="block underline text-xl">
                    {plataform.label}
                </a>
            ))}
        </div>
    )
}


