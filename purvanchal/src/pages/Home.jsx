import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import WhyChooseUs from '../components/WhyChooseUs';
import TeaBlends from "../components/TeaBlends";
import Testimonials from "../components/Testimonials";
import FranchiseShowcase from "../components/FranchiseShowcase";
import OurTeam from "../components/OurTeam";
import FranchiseOpportunity from "../components/FranchiseOpportunity";
export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <TeaBlends />
      <WhyChooseUs />
      <OurTeam />
      <Testimonials />
      <FranchiseShowcase />
      <FranchiseOpportunity />
    </>
  );
}