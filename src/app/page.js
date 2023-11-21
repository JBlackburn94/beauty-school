import Image from 'next/image'
import Logo from "/public/logo.webp"
import Artwork from "/public/artwork.webp"

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-center mt-4 font-semibold text-white uppercase md:flex-row md:justify-evenly'>
      <Image 
        src={Artwork}
        alt="Happiness Album Artwork"
        className="w-1/2 h-auto md:w-1/3"
      />
      <div className='flex flex-col items-center justify-center'>
        <Image 
          src={Logo}
          alt='Beauty School Logo'
          className='w-1/3 h-auto mb-4 md:w-4/5'
        />
        <p className='text-2xl'>Happiness</p>
        <p>Out Now</p>
        <div className='flex flex-col md:flex-row'>
          <button className='p-2 m-2 uppercase duration-200 bg-black hover:scale-110 btn'>Listen Here</button>
          <button className='p-2 m-2 uppercase duration-200 bg-black hover:scale-110 btn'>Buy Here</button>
        </div>
      </div>
    </main>
  )
}
