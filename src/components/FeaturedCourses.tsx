'use client'
import courseData from '../data/music_courses.json'
import Link from 'next/link'
import { HoverBorderGradient } from './ui/hover-border-gradient'
import { InfiniteMovingCards } from './ui/infinite-moving-cards';

//declaring my own data type . . . 
interface Course{
    id : number ,
    title : string ,
    slug : string ,
    description : string ,
    price : number ,
    instructor : string ,
    isFeatured : boolean , 
}
export default function FeaturedCourses(){
    const featuredCourses = courseData.courses.filter((course:Course) => course.isFeatured) ;

    return <div className='py-12 bg-gray-900'>
        <div>
            <div className="text-center">
                <h2 className='text-base text-teal-600 font-bold tracking-wide'>FEATURED COURSES</h2>
                <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>Learn From the Best</p>    
            </div>
        </div>
        <div className='mt-10'>
                <InfiniteMovingCards items={featuredCourses}></InfiniteMovingCards>
        </div>
        <center><div className='mt-20 text-center items-center justify-center flex'>
            <Link href={'/courses'}>
                <HoverBorderGradient>
                    View All Courses
                </HoverBorderGradient>
            </Link>
        </div>
        </center>
        
        

    </div>
}