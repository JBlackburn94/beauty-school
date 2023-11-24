import Promo from "/public/promo.webp"
import Image from "next/image"

export default function About() {
    return (
        <div className="flex flex-col items-center justify-center p-4 my-8 md:flex-row md:justify-between">
            <Image 
                src={Promo}
                alt="Promo image of Beauty School as tour support for The Wonder Years in Leeds University"
                className="w-full p-4 md:w-1/2 md:p-0 animate-fade-up animate-duration-1000 animate-delay-500"
            />
            <div className="flex flex-col items-center justify-center animate-fade-down animate-duration-1000 animate-delay-500">
                <h1 className="p-2 text-3xl font-bold text-white uppercase bg-black">Bio</h1>
                <p className="p-4 mx-2 mt-2 text-white bg-black">Beauty School are a 6-piece band from the UK that fuse a diverse pool of influences to make eloquent emo-infused alternative-rock. Formed out of a number of members of Leeds bands with unfinished business, the band’s debut album ‘Happiness’ is an example of a group drawing from multiple areas of inspiration and experiences to make an album bursting with pent-up energy, interlaced with the deft lyrical touch of lead singer Joe Cabrera. Produced by James Kenosha (Dinosaur Pile-Up / Pulled Apart by Horses) Beauty School have interpreted sounds from pop-punk, alt-rock, and indie-rock and forged a record that finds a home in each genre without feeling out of place or over-indulgent. Having sold out their debut Leeds headline show in August 2021 the band will release ‘Happiness’ to the world via Slam Dunk Records in September 2022.</p>
            </div>
        </div>
    )
}