import About from "@/components/Home/About";
import Banner from "@/components/Home/Banner";
import { Faq } from "@/components/Home/Faq";
import Marque from "@/components/Home/Marque";
import Contact from "@/components/Home/Contact";
import { Team } from "@/components/Home/Team";
import { Services } from "@/components/Home/Services";


export default function Home() {
  return (
    <main className="">
      <Banner></Banner>
      <Marque></Marque>
      <Services></Services>
      <About></About>
      <Team></Team>
      <Faq></Faq>
      <Contact></Contact>
    </main>
  )
}
