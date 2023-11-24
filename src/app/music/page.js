import Image from "next/image"
import Artwork from "/public/artwork.webp"

export default function Music() {
    return (
        <div className="flex flex-col items-center justify-center mt-8 md:flex-row md:justify-evenly md:items-center">
            <Image 
                src={Artwork}
                alt="Happiness Album Artwork"
                className="w-1/2 h-auto md:w-1/3 md:drop-shadow-2xl animate-fade-up animate-duration-1000 animate-delay-500"
            />
            <div className="my-4 md:my-0 animate-fade animate-duration-1000 animate-delay-1000">
                <div className="flex flex-col items-center justify-center w-1/2 text-white bg-black">
                    <h2 className="font-bold">Happiness</h2>
                </div>
                <ol className="p-4">
                    <li className="px-2 m-2 text-white bg-black">1. Take It Slow</li>
                    <li className="px-2 m-2 text-white bg-black">2. Silver</li>
                    <li className="px-2 m-2 text-white bg-black">3. Oak</li>
                    <li className="px-2 m-2 text-white bg-black">4. Pawn Shop Jewels</li>
                    <li className="px-2 m-2 text-white bg-black">5. Only Nature</li>
                    <li className="px-2 m-2 text-white bg-black">6. Keep Close</li>
                    <li className="px-2 m-2 text-white bg-black">7. Ekimae</li>
                    <li className="px-2 m-2 text-white bg-black">8. Monster</li>
                    <li className="px-2 m-2 text-white bg-black">9. Drysocket</li>
                    <li className="px-2 m-2 text-white bg-black">10. Evergreen</li>
                    <li className="px-2 m-2 text-white bg-black">11. Happiness</li>
                    <li className="px-2 m-2 text-white bg-black">12. Nightwalker</li>
                    <li className="px-2 m-2 text-white bg-black">13. Junior</li>
                </ol>
            </div>
        </div>
    )
}