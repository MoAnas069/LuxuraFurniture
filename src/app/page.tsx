import HeroScroll from "@/components/HeroScroll";
import ImmersiveStatement from "@/components/home/ImmersiveStatement";
import ParallaxGallery from "@/components/home/ParallaxGallery";
import GlobalSourcing from "@/components/home/GlobalSourcing";
import SignatureCollections from "@/components/home/SignatureCollections";
import PrivateCatalogue from "@/components/home/PrivateCatalogue";
import Transformation from "@/components/home/Transformation";
import ServicesTimeline from "@/components/home/ServicesTimeline";
import TestimonialCinema from "@/components/home/TestimonialCinema";
import ContactExperience from "@/components/home/ContactExperience";

export default function Home() {
  return (
    <div className="w-full bg-lux-bg">
      <HeroScroll />
      <ImmersiveStatement />
      <ParallaxGallery />
      <GlobalSourcing />
      <SignatureCollections />
      <PrivateCatalogue />
      <Transformation />
      <ServicesTimeline />
      <TestimonialCinema />
      <ContactExperience />
    </div>
  );
}
