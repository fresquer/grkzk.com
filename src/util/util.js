
export const formatDataFromPrismic = (data) => {
    return data.map((item) => {
        return {
            block_name: item.primary.type.data.type_name,
            items: item.primary.music_items.map((item) => {
                if (!item.music_item.data) return null
                return {
                    title: item.music_item.data.title,
                    link: item.music_item.data.link.url,
                    description: item.music_item.data.description,
                    release_date: item.music_item.data.release_date ? formatDateToDDMMYYYY(item.music_item.data.release_date) : '-'
                }
            }).filter(item => item)
        }
    })
}

function formatDateToDDMMYYYY(dateStr) {
    const date = new Date(dateStr);

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
}
