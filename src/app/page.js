import TopBanner from './components/TopBanner'
import Footer from './components/Footer'
import NameRoller from './components/NameRoller'
import PlataformsLinks from './components/PlataformsLinks'
import TextBlock from './components/TextBlock'

export default function Home() {
  return (
    <>
      <NameRoller></NameRoller>
      <TopBanner></TopBanner>
      <main className='container mx-auto'>
        <PlataformsLinks></PlataformsLinks>
        <TextBlock></TextBlock>
      </main>
      <Footer></Footer>
    </>
  )
}
