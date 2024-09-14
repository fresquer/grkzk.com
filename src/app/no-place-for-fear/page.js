import TopBanner from '../components/TopBanner'
import PlataformsLinks from '../components/PlataformsLinks'
import TextBlock from '../components/TextBlock'

export default function NoPlaceForFearPage() {
    return (
        <>
            <TopBanner></TopBanner>
            <main className='container mx-auto'>
                <PlataformsLinks></PlataformsLinks>
                <TextBlock></TextBlock>
            </main>
        </>
    )
}