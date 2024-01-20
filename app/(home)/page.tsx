import About from "@/components/Home/About";
import Banner from "@/components/Home/Banner";
import { Faq } from "@/components/Home/Faq";
import Marque from "@/components/Home/Marque";
import Contact from "@/components/Home/Contact";
import { Team } from "@/components/Home/Team";
import { Services } from "@/components/Home/Services";
import TopClient from "@/components/Home/TopClient";


export default function Home() {
  return (
    <main className="">
      <Banner></Banner>
      <Marque></Marque>
      <Services></Services>
      <About></About>
      <Team></Team>
      <Marque></Marque>
      <TopClient></TopClient>
      <Faq></Faq>
      <Contact></Contact>
    </main>
  )
}
