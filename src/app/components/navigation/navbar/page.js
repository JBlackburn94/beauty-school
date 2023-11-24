"use client";
import Image from "next/image"
import Link from "next/link";
import { useState } from "react"
import { FaBars, FaTimes, FaFacebook, FaInstagram, FaTwitter, FaSpotify, FaYoutube } from "react-icons/fa"

export default function Navbar() {

    const [nav, setNav] = useState(false);

    const links = [
        {
            id: '1',
            title: 'about',
            link: '/about'
        },
        {
            id: '2',
            title: 'shows',
            link: 'https://www.songkick.com/artists/1084890-beauty-school',
            att: '_blank',
        },
        {
            id: '3',
            title: 'merch',
            link: 'https://beautyschooluk.bandcamp.com/merch',
            att: '_blank',
        },
        {
            id: '4',
            title: 'music',
            link: '/music'
        },
    ]

    return (
        <nav className="flex items-center justify-between w-full h-20 bg-black">
            <div>
                <a href="/">
                    <Image 
                        src="/logo.webp"
                        width={150}
                        height={150}
                        alt="Beauty School Logo"
                        className="mx-4"
                    />
                </a>
            </div>
            <ul className="hidden text-white md:flex">
                {links.map(({ id, title, link, att }) => (
                    <li key={id} className="p-2 mx-4 capitalize duration-200 hover:text-yellow-400">
                        <Link target={att} href={link}>{title}</Link>
                    </li>
                ))}
            </ul>

            <div onClick={() => setNav(!nav)}
                className="z-40 pr-4 text-white cursor-pointer md:hidden"
            >
                {nav ? <FaTimes size={30}/> : <FaBars size={30}/>}
            </div>

            {nav && (
                <ul className="absolute top-0 left-0 z-10 flex flex-col items-center justify-center w-full h-screen text-white bg-black">
                    {links.map(({ id, title }) => (
                        <li key={id} className="my-4 text-3xl font-semibold capitalize">
                            <Link onClick={() => setNav(!nav)} href={title}>{title}</Link>
                        </li>
                    ))}
                    <li className="flex mt-8">
                        <Link href="https://www.facebook.com/beautyschooluk" target="_blank">
                            <FaFacebook className="mx-2 hover:scale-110" size={30}/>
                        </Link>
                        <Link href="https://open.spotify.com/artist/46yPZXaKNR5nkEqMzhifG6" target="_blank">
                            <FaSpotify className="mx-2 hover:scale-110" size={30} />
                        </Link>
                        <Link href="https://www.instagram.com/beautyschooluk" target="_blank">
                            <FaInstagram className="mx-2 hover:scale-110" size={30} />
                        </Link>
                        <Link href="https://www.twitter.com/btyschl?lang=en-GB" target="_blank">
                            <FaTwitter className="mx-2 hover:scale-110" size={30} />
                        </Link>
                        <Link href="https://www.youtube.com/channel/UCwkFeK8zVScddmxWbjwcfAg" target="_blank">
                            <FaYoutube className="mx-2 hover:scale-110" size={30} />
                        </Link>
                    </li>
                </ul>
            )}
        </nav>
    )
}