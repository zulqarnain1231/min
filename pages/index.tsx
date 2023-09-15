import Image from "next/image";
import { Zen_Maru_Gothic } from "next/font/google";
import Navbar from "@/components/Shared/Navigation/Navbar";
import Hero from "@/components/Home/Hero";
import Recomendation from "@/components/Home/Recomendations/Recomendation";
import Description from "@/components/Home/Description";
import Services from "@/components/Home/Services/Services";
import Samples from "@/components/Home/Samples/Samples";

const zen = Zen_Maru_Gothic({
  subsets: ["latin"],
  weight: "300",
});

export default function Home() {
  return (
    <main className={`w-full h-full ${zen.className}`}>
      <div className="w-full bg-[url('/Assets/Hero/Hero.jpg')] bg-no-repeat bg-cover lg:h-screen">
        <Navbar />
        <Hero />
      </div>
      <Recomendation />
      <Description />
      <Services />
      <Samples />
    </main>
  );
}
