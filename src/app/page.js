import TopBannerIndex from './components/index/TopBannerIndex'
import PlataformsLinks from './components/PlataformsLinks'
import TextBlock from './components/TextBlock'
import SectionInfo from './components/index/sectionInfo'
import { createClient } from '@/prismicio'
import { formatDataFromPrismic } from '@/util/util'
export default async function Home() {

  const client = createClient();

  const homePage = await client.getSingle("home", { 'fetchLinks': ['content_type.type_name', 'music_item.title', 'music_item.link', 'music_item.description', 'music_item.release_date'] });
  const musicItems = formatDataFromPrismic(homePage.data.slices);


  return (
    <>
      <TopBannerIndex></TopBannerIndex>
      <hr className="border-[#2f2f2f]  w-full mb-8" />
      <main className='container mx-auto space-y-16 py-8'>
        {musicItems.map((item, index) => (
          <SectionInfo key={index} title={item.block_name} data={item.items}></SectionInfo>
        ))}
      </main>
    </>
  )
}
