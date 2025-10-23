import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import EcoProducts from "@/components/EcoProducts";
import Philosophy from "@/components/Philosophy";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <EcoProducts />
      <Philosophy />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
