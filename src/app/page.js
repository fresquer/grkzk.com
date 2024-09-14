import TopBannerIndex from './components/index/TopBannerIndex'
import PlataformsLinks from './components/PlataformsLinks'
import TextBlock from './components/TextBlock'
import SectionInfo from './components/index/sectionInfo'

export default function Home() {
  const sections = [
    {
      key: 'productions',
      title: 'PRODUCTIONS',
    },
    {
      key: 'mixes',
      title: 'MIXES',
    },
    {
      key: 'live',
      title: 'LIVE',
    },
  ]

  return (
    <>
      <TopBannerIndex></TopBannerIndex>
      <hr className="border-[#2f2f2f]  w-full mb-8" />
      <main className='container mx-auto space-y-16 py-8'>
        {/* <PlataformsLinks></PlataformsLinks>
        <TextBlock></TextBlock> */}
        {sections.map((item, index) => (
          <SectionInfo key={index} title={item.title}></SectionInfo>
        ))}
      </main>
    </>
  )
}
