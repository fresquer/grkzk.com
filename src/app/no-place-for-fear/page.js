import TopBanner from '../components/TopBanner'
import PlataformsLinks from '../components/PlataformsLinks'
import TextBlock from '../components/TextBlock'
import { createClient } from '@/prismicio'

async function getNoPlaceForFearPage() {
    const client = createClient()
    const page = await client.getSingle('no_place_for_fear_page')
    console.log("🚀 ~ getNoPlaceForFearPage ~ page:", page.data.links_to_music)
    return page
}

export default async function NoPlaceForFearPage() {
    const page = await getNoPlaceForFearPage()
    const links = page?.data?.links_to_music || []

    return (
        <>
            <TopBanner />
            <main className="container mx-auto pb-8">
                <PlataformsLinks links={links} />
                <TextBlock />
            </main>
        </>
    )
}
