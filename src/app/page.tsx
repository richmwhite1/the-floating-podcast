import Hero from "@/components/Hero";
import Episodes from "@/components/Episodes";
import Thesis from "@/components/Thesis";
import MapOfConsciousness from "@/components/MapOfConsciousness";
import AskTeachers from "@/components/AskTeachers";
import Quote from "@/components/Quote";
import Hosts from "@/components/Hosts";
import Footer from "@/components/Footer";
import NewsletterCard from "@/components/NewsletterCard";
import FadeIn from "@/components/FadeIn";
import BackToTop from "@/components/BackToTop";
import { fetchEpisodes } from "@/lib/youtube";

export const revalidate = 3600;

export default async function Home() {
  const episodes = await fetchEpisodes();

  return (
    <>
      <Hero />
      <FadeIn>
        <Episodes episodes={episodes} />
      </FadeIn>
      <FadeIn>
        <Thesis />
      </FadeIn>
      <FadeIn>
        <MapOfConsciousness />
      </FadeIn>
      <FadeIn>
        <AskTeachers />
      </FadeIn>
      <FadeIn>
        <Quote />
      </FadeIn>
      <FadeIn>
        <Hosts />
      </FadeIn>
      <FadeIn>
        <NewsletterCard />
      </FadeIn>
      <Footer />
      <BackToTop />
    </>
  );
}
