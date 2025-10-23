import { Card, CardContent } from "@/components/ui/card";
import { Shield, Leaf, Baby, Heart, CheckCircle } from "lucide-react";
import ecoProductsImg from "@/assets/eco-products.jpg";

const EcoProducts = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Sans substances nocives",
      description: "Produits certifiés sans composants chimiques agressifs",
    },
    {
      icon: Baby,
      title: "Sans perturbateurs endocriniens",
      description: "Formulations sûres pour toute la famille, enfants et animaux inclus",
    },
    {
      icon: Leaf,
      title: "Biodégradables",
      description: "Impact minimal sur l'environnement et les écosystèmes aquatiques",
    },
    {
      icon: Heart,
      title: "Hypoallergéniques",
      description: "Respectueux des peaux sensibles et des voies respiratoires",
    },
  ];

  return (
    <section id="eco-produits" className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Leaf className="h-6 w-6 text-primary" />
              <span className="text-primary font-semibold uppercase tracking-wide">
                Notre engagement écologique
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Des produits qui respectent votre santé
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              Chez VERTuCLEAN, nous sélectionnons rigoureusement nos produits de nettoyage. 
              Dans la mesure du possible et selon le degré de salissure, nous privilégions 
              exclusivement des solutions écologiques certifiées.
            </p>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border-l-4 border-l-primary">
                  <CardContent className="flex items-start space-x-4 p-6">
                    <benefit.icon className="h-8 w-8 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-card p-6 rounded-lg border">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-2 text-lg">Pourquoi c'est important ?</h4>
                  <p className="text-muted-foreground">
                    Les produits ménagers conventionnels contiennent souvent des substances 
                    toxiques qui s'accumulent dans nos organismes et polluent nos intérieurs. 
                    Selon l'ADEME et l'ANSES, l'air intérieur peut être jusqu'à 8 fois plus 
                    pollué que l'air extérieur. Notre approche écologique protège votre santé 
                    tout en préservant la planète.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src={ecoProductsImg}
              alt="Produits de nettoyage écologiques"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-xl max-w-xs">
              <p className="font-semibold text-lg">
                Produits éco-certifiés et labellisés pour votre tranquillité d'esprit
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcoProducts;
