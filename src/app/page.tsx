import FeaturedCourses from "@/components/FeaturedCourses";
import Herosection from "@/components/Herosection";
import Instructor from "@/components/Instructors";
import TestimonialCards from "@/components/TestimonialCards";
import UpcomingWeb from "@/components/UpcomingWeb";
import WhyChoose from "@/components/WhyChoose";
import { AuroraBackground } from "@/components/ui/aurora-background";
import Instructors from "@/components/Instructors";
import Footer from "@/components/Footer";

export default function Home(){
  return <>
      <AuroraBackground>
      <Herosection />
      </AuroraBackground>
      <FeaturedCourses />
      <WhyChoose />
      <TestimonialCards />
      <UpcomingWeb />
      <Instructors />
      <Footer></Footer>
  </>
}