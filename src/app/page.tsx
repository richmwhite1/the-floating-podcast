import Hero from "@/components/Hero";
import Episodes from "@/components/Episodes";
import Thesis from "@/components/Thesis";
import MapOfConsciousness from "@/components/MapOfConsciousness";
import AskTeachers from "@/components/AskTeachers";
import Quote from "@/components/Quote";
import Hosts from "@/components/Hosts";
import Footer from "@/components/Footer";
import { fetchEpisodes } from "@/lib/youtube";

export const revalidate = 3600;

export default async function Home() {
  const episodes = await fetchEpisodes();

  return (
    <>
      <Hero />
      <Episodes episodes={episodes} />
      <Thesis />
      <MapOfConsciousness />
      <AskTeachers />
      <Quote />
      <Hosts />
      <Footer />
    </>
  );
}
