import Image from 'next/image'
import TopBanner from './components/TopBanner'
import Footer from './components/Footer'
import NameRoller from './components/NameRoller'
import PlataformsLinks from './components/PlataformsLinks'
import TextBlock from './components/TextBlock'

export default function Home() {
  return (
    <>
      <div className='flex items-center justify-center min-h-screen p-6 md:p-16'>
        <img src='/images/grkzkrelease.jpg' alt='grkzk | no place for fear' className='max-w-md w-full boxShadowComming' />
      </div>
      {/* <NameRoller></NameRoller>
      <TopBanner></TopBanner>
      <main className='container mx-auto'>
        <PlataformsLinks></PlataformsLinks>
        <TextBlock></TextBlock>
      </main>
      <Footer></Footer> */}
    </>
  )
}
