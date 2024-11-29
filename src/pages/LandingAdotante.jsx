import NavBarLandingPage from '../components/NavbarLandingAdotante/NavbarLandingAdotante'
import HeroSection from "../components/HeroSection/HeroSection";
import PetListSection from "../components/PetListSection/PetListSection";
import TipsSection from "../components/SectionDicas/TipsSection";
import FooterLandingPage from "../components/FooterLandingPage/FooterLandingPage";

function LandingPage() {
  return (
    <>
      <NavBarLandingPage />
      <HeroSection />
      <PetListSection />
      <TipsSection />
      <FooterLandingPage/>
    </>
  );
}

export default LandingPage;