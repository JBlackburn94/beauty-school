import Image from 'next/image'
import Logo from "/public/logo.webp"
import Artwork from "/public/artwork.webp"
import SDRLogo from "/public/SDR logo.webp"
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-center mt-8 font-semibold text-white uppercase md:flex-row md:justify-evenly'>
      <Image 
        src={Artwork}
        alt="Happiness Album Artwork"
        className="w-1/2 h-auto md:w-1/3 drop-shadow-2xl"
      />
      <div className='flex flex-col items-center justify-center'>
        <Image 
          src={Logo}
          alt='Beauty School Logo'
          className='w-1/2 h-auto my-2 md:w-4/5 drop-shadow-2xl'
        />
        <p className='my-2 text-2xl font-bold'>Happiness</p>
        <div className='flex flex-col my-2 md:flex-row'>
          <button className='p-2 mx-4 mb-2 uppercase duration-200 bg-black hover:scale-110 btn md:mb-0'>
            <a href="https://open.spotify.com/album/0DudmycdWDcNGWR6meoq3b" target='_blank' >Listen Here</a>
          </button>
          <button className='p-2 mx-4 uppercase duration-200 bg-black hover:scale-110 btn'>
            <a href="https://beautyschooluk.bandcamp.com/album/happiness" target='_blank'>Buy Here</a>
          </button>
        </div>
        <Image 
          src={SDRLogo}
          alt="Slam Dunk Records Logo"
          className='w-20 cursor-pointer md:w-40'
        />
      </div>
    </main>
  )
}
