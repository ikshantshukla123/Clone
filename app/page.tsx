import Hero from "@/components/home/Hero";
import FulfillingLife from "@/components/home/Description";
import Specialties from "@/components/home/Specialties";
import Alone from "@/components/home/Alone";
import AboutLilac from "@/components/home/AboutMaya";
import OurOffice from "@/components/home/OurOffice";
import Faq from "@/components/home/Faq";
import Professinal from "@/components/home/MyApproach";

import GetStarted from "@/components/home/GetStarted";
import Footer from "@/components/layout/Footer";


export default function Home() {
  return (
    <main className="bg-background min-h-screen text-text">
      <Hero />
      <FulfillingLife />
      <Specialties />
      <Alone />
      <AboutLilac />
      <OurOffice />
      <Faq />
    <Professinal />
    <GetStarted />
      <Footer />
     
    </main>
  );
}