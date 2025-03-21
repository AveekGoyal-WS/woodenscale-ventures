import { Navbar } from "@/components/LandingPage/Navbar";
import { Hero } from "@/components/LandingPage/Hero";
import { OurMission } from "@/components/LandingPage/OurMission";
import { MentorsInvestors } from "@/components/LandingPage/MentorsInvestors";
import { GrowthPrograms } from "@/components/LandingPage/GrowthPrograms";
import { Webinars } from "@/components/LandingPage/Webinars";
import { Blog } from "@/components/LandingPage/Blog";
import { Newsletter } from "@/components/LandingPage/Newsletter";
import { Footer } from "@/components/LandingPage/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-primary-900 text-white">
      <Navbar />
      <Hero />
      <OurMission />
      <MentorsInvestors />
      <GrowthPrograms />
      <Webinars />
      <Blog />
      <Newsletter />
      <Footer />
    </main>
  );
}
