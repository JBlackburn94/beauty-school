import Image from "next/image"
import Logo from "/public/logo.webp"
import Link from "next/link"
import { FaFacebook, FaInstagram, FaTwitter, FaSpotify, FaYoutube } from "react-icons/fa"

export default function Footer() {
    return (
        <footer class="footer p-10 bg-black text-white mt-16 flex justify-around items-start md:mt-32">
        <aside>
            <Image 
                src={Logo}
                alt="Beauty School Logo"
                className="hidden w-1/2 md:block"
            />
        </aside> 
        <nav>
            <div class="grid grid-flow-col gap-4">
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
            
            </div>
        </nav>
        </footer>
    )
}