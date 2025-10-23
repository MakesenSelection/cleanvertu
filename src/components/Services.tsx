import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Home, Building2, Sparkles, Sofa, HardHat, AlertTriangle, MapPin } from "lucide-react";
import windowCleaningImg from "@/assets/window-cleaning.jpg";
import textileCleaningImg from "@/assets/textile-cleaning.jpg";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Nettoyage Résidentiel",
      description: "Ménage complet pour particuliers avec crédit d'impôts de -50% sur la facture finale.",
      details: "Emménagement, déménagement, gîtes, locations saisonnières",
      badge: "Crédit d'impôts",
    },
    {
      icon: Building2,
      title: "Nettoyage Entreprises",
      description: "Services professionnels pour bureaux, commerces et espaces professionnels.",
      details: "Entretien régulier ou ponctuel adapté à vos besoins",
    },
    {
      icon: Sparkles,
      title: "Nettoyage de Vitres",
      description: "Vitres éclatantes pour résidences et commerces, en hauteur ou au sol.",
      details: "Techniques professionnelles avec produits écologiques",
      image: windowCleaningImg,
    },
    {
      icon: Sofa,
      title: "Nettoyage de Textiles",
      description: "Canapés, tapis, moquettes et tissus d'ameublement retrouvent leur éclat.",
      details: "Traitement en profondeur avec matériel vapeur professionnel",
      image: textileCleaningImg,
    },
    {
      icon: HardHat,
      title: "Fin de Chantier",
      description: "Nettoyage post-construction pour un espace immédiatement habitable.",
      details: "Élimination des poussières et résidus de travaux",
    },
    {
      icon: AlertTriangle,
      title: "Nettoyage de l'Extrême",
      description: "En développement : syndrome de Diogène, post-décès, situations exceptionnelles.",
      details: "Interventions délicates avec discrétion et professionnalisme",
      badge: "Bientôt disponible",
    },
  ];

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Nos Services</h2>
          <p className="text-xl text-muted-foreground">
            Des solutions de nettoyage professionnelles adaptées à tous vos besoins, 
            particuliers comme professionnels
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              {service.image && (
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <service.icon className="h-10 w-10 text-primary" />
                  {service.badge && (
                    <Badge variant={service.badge === "Crédit d'impôts" ? "default" : "secondary"}>
                      {service.badge}
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{service.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-card border-2 border-primary/20">
          <CardHeader>
            <div className="flex items-center space-x-3 mb-2">
              <MapPin className="h-6 w-6 text-primary" />
              <CardTitle className="text-2xl">Zone d'intervention</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-lg mb-4">
              <strong className="text-primary">Secteur principal :</strong> Grand Figeac 
              (entreprise basée à Cajarc 46160)
            </p>
            <p className="text-lg">
              <strong className="text-primary">Grandes prestations :</strong> Toute l'Occitanie 
              et la Nouvelle-Aquitaine pour les interventions d'envergure
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Services;
