import { Button } from "@/components/ui/button";
import { Sparkles, Leaf, Heart } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Professionnel de nettoyage VERTuCLEAN"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/60" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="flex items-center space-x-2 mb-6">
            <Leaf className="h-6 w-6 text-primary" />
            <span className="text-primary font-semibold uppercase tracking-wide">
              Nettoyage écologique professionnel
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance leading-tight">
            Harmonie d'espaces, harmonie d'esprit.
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-balance">
            VERTuCLEAN vous accompagne avec sérieux et convivialité pour un nettoyage professionnel 
            respectant les plus hauts standards de propreté, en utilisant des produits non nocifs 
            pour votre santé et notre environnement.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button asChild size="lg" className="text-lg">
              <a href="#contact">Demander un devis gratuit</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg">
              <a href="#services">Découvrir nos services</a>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start space-x-3">
              <Sparkles className="h-6 w-6 text-secondary shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">100% Écologique</h3>
                <p className="text-sm text-muted-foreground">
                  Produits certifiés sans substances nocives
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Heart className="h-6 w-6 text-secondary shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Équipe valorisée</h3>
                <p className="text-sm text-muted-foreground">
                  Des harmoniseurs d'espaces justement rémunérés
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Leaf className="h-6 w-6 text-secondary shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Bilan d'hygiène</h3>
                <p className="text-sm text-muted-foreground">
                  Analyse environnementale incluse
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
