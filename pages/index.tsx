import Image from "next/image";
import { Zen_Maru_Gothic } from "next/font/google";
import Navbar from "@/components/Shared/Navigation/Navbar";

const zen = Zen_Maru_Gothic({
  subsets: ["latin"],
  weight: "300",
});

export default function Home() {
  return (
    <main className={`w-full h-full ${zen.className}`}>
      <div className="w-full bg-[url('/Assets/Hero.jpg')] bg-no-repeat bg-cover h-screen">
        <Navbar />
      </div>
    </main>
  );
}
