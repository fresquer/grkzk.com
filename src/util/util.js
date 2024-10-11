
export const formatDataFromPrismic = (data) => {
    return data.map((item) => {
        return {
            block_name: item.primary.type.data.type_name,
            items: item.primary.music_items.map((item) => {
                if (!item.music_item.data) return null
                return {
                    title: item.music_item.data.title,
                    link: item.music_item.data.link.url,
                    description: item.music_item.data.description
                }
            }).filter(item => item)
        }
    })
}