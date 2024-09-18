import Link from "next/link";
import { Button } from "./ui/moving-border";
import { TypewriterEffect } from "./ui/typewriter-effect";
export default function Herosection(){
    const words = [
        {
            text : 'Master' ,
        },
        {
            text : 'the' ,
        },
        {
            text : 'Art' ,
        },
        {
            text : 'of' ,
        },
        {
            text : 'Music' ,
        },
        {
            text : 'with',
        },
        {
            text : 'Harmony' ,
        }
        ,{
            text : 'Music' ,
        },{
            text : 'School' ,
        }
    ]
    return (
        <>
        
        <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col item-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
            <div className="p-4 relative z-10 w-full text-center">
                <h1
                className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transport bg-gradient-to-b from-neutral-50 to-neutral-400
                text-white"><TypewriterEffect words={words} /></h1>
                <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto text-white">
                    Dive into our comprehensive music courses and transform your musical journey today. Whether you're a beginner or lokking to refine your skills ,join us to unlock your true potential. 
                </p>
                <div className="mt-4 text-white">
                    <Link href={"/courses"}><Button
                    >Explore Courses</Button></Link>
                </div>
            </div>
        </div>
        </>
    )

}