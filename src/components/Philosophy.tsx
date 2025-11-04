import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Sparkles, TrendingUp } from "lucide-react";
import harmonyImg from "@/assets/harmony-philosophy.jpg";

const Philosophy = () => {
  return (
    <section id="philosophie" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 relative">
            <img
              src={harmonyImg}
              alt="Philosophie de l'harmonie par le nettoyage"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -top-6 -left-6 bg-secondary text-secondary-foreground p-6 rounded-xl shadow-xl max-w-xs">
              <p className="font-semibold text-lg">
                Des harmoniseurs d'espaces, pas de simples agents de propreté
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="flex items-center space-x-2 mb-6">
              <Heart className="h-6 w-6 text-primary" />
              <span className="text-primary font-semibold uppercase tracking-wide">
                Notre philosophie
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Réhabiliter le métier du ménage
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              Le ménage n'est pas qu'une tâche : c'est un art qui crée l'harmonie. 
              Un espace propre apaise l'esprit, libère la créativité et améliore le bien-être. 
              Cette transformation profite autant à ceux qui nettoient qu'à ceux qui en bénéficient.
            </p>

            <div className="space-y-4 mb-8">
              <Card className="border-l-4 border-l-secondary">
                <CardContent className="flex items-start space-x-4 p-6">
                  <Users className="h-8 w-8 text-secondary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Valorisation humaine</h3>
                    <p className="text-muted-foreground">
                      Nos "harmoniseurs d'espaces" sont justement rémunérés, reconnus pour 
                      leur expertise et leur contribution essentielle au bien-être collectif.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-secondary">
                <CardContent className="flex items-start space-x-4 p-6">
                  <TrendingUp className="h-8 w-8 text-secondary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Épanouissement professionnel</h3>
                    <p className="text-muted-foreground">
                      Nous investissons dans la formation et le développement personnel 
                      de notre équipe, car leur bien-être garantit la qualité de nos prestations.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-secondary">
                <CardContent className="flex items-start space-x-4 p-6">
                  <Sparkles className="h-8 w-8 text-secondary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Harmonie corps et conscience</h3>
                    <p className="text-muted-foreground">
                      Nettoyer un espace, c'est créer un sanctuaire de paix. Cette philosophie 
                      transforme une simple prestation en expérience de bien-être durable.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-lg border-2 border-primary/20">
              <p className="text-lg font-medium">
                "Un espace harmonieux favorise un esprit harmonieux. Chez VERTuCLEAN, 
                nous ne nettoyons pas seulement : nous créons des environnements où il fait 
                bon vivre, travailler et grandir."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
