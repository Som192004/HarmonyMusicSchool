'use client'
import courseData from '../../data/music_courses.json'
import { BentoGrid, BentoGridItem } from "../../components/ui/bento-grid"; 
export default function coursePage(){
    return <>
            <h1 className='text-center text-3xl font-bold text-black mt-40 mb-4'>All Courses :  {courseData.courses.length}</h1>
        <BentoGrid>
            {courseData.courses.map((item) => (
        <BentoGridItem
          key={item.id} 
          id = {item.id} 
          title={item.title}
          slug={item.slug}
          price={item.price}
          instructor={item.instructor}
          description={item.description}
          image={item.image}
          className={""}

        />
        ))}
        </BentoGrid>
    </>
}