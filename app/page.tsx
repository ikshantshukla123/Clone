import Hero from "@/components/home/Hero";
import FulfillingLife from "@/components/home/FulfillingLife";
import Specialties from "@/components/home/Specialties";
import Alone from "@/components/home/Alone";
import AboutLilac from "@/components/home/AboutLilac";
// import FAQ from "@/components/home/FAQ";
// import ProfessionalBackground from "@/components/home/ProfessionalBackground";
// import GetStarted from "@/components/home/GetStarted";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="bg-paper min-h-screen text-ink">
      <Hero />
      <FulfillingLife />
      <Specialties />
      <Alone />
      <AboutLilac />
      {/* <FAQ />
      <ProfessionalBackground />
      <GetStarted /> */}
      <Footer />
    </main>
  );
}