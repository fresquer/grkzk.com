export default function PlataformsLinks({ links = [] }) {
    if (!links.length) {
        return (
            <p className="text-center my-16 opacity-70">
                No links available
            </p>
        )
    }

    return (
        <div className="space-y-8 text-center text-brand-blue my-16">
            {links.map((item, index) => {
                const label = item?.link_title || 'link'
                const url =
                    item?.link_item?.url ||
                    (item?.link_item?.link_type === 'Media' ? item?.link_item?.name : null)

                if (!url) return null

                return (
                    <a
                        key={index}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block underline text-xl"
                    >
                        {label}
                    </a>
                )
            })}
        </div>
    )
}
