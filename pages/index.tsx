import Image from "next/image";
import { Zen_Maru_Gothic } from "next/font/google";

const zen = Zen_Maru_Gothic({
  subsets: ["latin"],
  weight: "300",
});

export default function Home() {
  return <main className={`w-full h-full ${zen.className}`}>Home</main>;
}
