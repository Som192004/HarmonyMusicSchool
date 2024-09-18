'use client'
import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";
const musicSchoolTestimonials = [
    {
      id : 1 , 
      quote:
        'Joining the music school transformed my understanding of music and helped me to truly discover my own sound. The instructors are world-class!',
      name: 'Alex Johnson',
      title: 'Guitar Student',
    },
    {
        id : 2 , 
      quote:
        "The community and support at this school are unmatched. I've grown not just as a pianist, but also as a performer, thanks to their comprehensive approach.",
      name: 'Samantha Lee',
      title: 'Piano Student',
    },
    {
        id : 3 , 
      quote:
        "This school offered me the tools and confidence to take my singing to the next level. I'm endlessly grateful for the personalized coaching.",
      name: 'Michael Chen',
      title: 'Vocal Student',
    },
    {
        id : 4 , 
      quote:
        'As a violinist, finding the right mentor can be challenging, but this school matched me with a teacher who truly understands my goals and challenges.',
      name: 'Emily Taylor',
      title: 'Violin Student',
    },
    {
        id : 5 , 
      quote:
        'The production courses here opened my eyes to the intricacies of music production. Highly recommend for any aspiring producers!',
      name: 'Chris Morales',
      title: 'Music Production Student',
    },
  ];

export default function TestimonialCards(){
    return <>
         <div className="mt-10 mx-8 ">
            <h1 className="text-center text-3xl">Hear Our Harmony : Voices of Success </h1>
            <br />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                {musicSchoolTestimonials.map((testimonial)=> (
                    <div key={testimonial.id} className="flex justify-center">
                        <BackgroundGradient
                        className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                            <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                                <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{testimonial.title}</p>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{testimonial.quote}</p>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">
                                    {testimonial.name}
                                </p>
                            </div>
                        </BackgroundGradient>
                    </div>
                ))}
            </div>
        </div>

    </>
}