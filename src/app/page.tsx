import Image from 'next/image'
import Card from './components/shared/card'
import SkeletonCard from './components/shared/skeleton-card'
import dynamic from 'next/dynamic'

const NoSSR = dynamic(() => import('./components/shared/card'), { ssr: false })

export default function Home() {
  
  return (
    <main className="min-h-screen grid grid-cols-3 items-center	justify-items-center gap-4 p-24 bg-white overflow-hidden">
        <NoSSR title={'Bored Ape'} img={'https://i.seadn.io/gae/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB?auto=format&dpr=1&w=384'} />
        <div className='w-full h-full flex flex-col justify-center col-span-2'>
            <SkeletonCard />
        </div>
        {/* <SkeletonCard /> */}
    </main>
  )
}