import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Home, Building2, Sparkles, Sofa, Car, HardHat, AlertTriangle, MapPin, ClipboardCheck, Compass } from "lucide-react";
import windowCleaningImg from "@/assets/window-cleaning.jpg";
import textileCleaningImg from "@/assets/textile-cleaning.jpg";
import vehicleCleaningImg from "@/assets/vehicle-cleaning.jpg";
import residentialCleaningImg from "@/assets/residential-cleaning.jpg";
import businessCleaningImg from "@/assets/business-cleaning.jpg";
import postConstructionImg from "@/assets/post-construction.jpg";
import extremeCleaningImg from "@/assets/extreme-cleaning.jpg";
import hygieneAssessmentImg from "@/assets/hygiene-assessment.jpg";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Nettoyage Résidentiel",
      description: "Ménage complet pour particuliers avec crédit d'impôts de -50% sur la facture finale.",
      details: "Emménagement, déménagement, gîtes, locations saisonnières",
      badge: "Crédit d'impôts",
      image: residentialCleaningImg,
    },
    {
      icon: Building2,
      title: "Nettoyage Entreprises",
      description: "Services professionnels pour bureaux, commerces et espaces professionnels.",
      details: "Entretien régulier ou ponctuel adapté à vos besoins",
      image: businessCleaningImg,
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
      icon: Car,
      title: "Nettoyage de Véhicules",
      description: "Lavage intérieur et/ou extérieur à domicile pour professionnels et particuliers.",
      details: "Service sur place avec équipement professionnel",
      image: vehicleCleaningImg,
    },
    {
      icon: HardHat,
      title: "Fin de Chantier",
      description: "Nettoyage post-construction pour un espace immédiatement habitable.",
      details: "Élimination des poussières et résidus de travaux",
      image: postConstructionImg,
    },
    {
      icon: AlertTriangle,
      title: "Nettoyage de l'Extrême",
      description: "En développement : syndrome de Diogène, post-décès, situations exceptionnelles.",
      details: "Interventions délicates avec discrétion et professionnalisme",
      badge: "Bientôt disponible",
      image: extremeCleaningImg,
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
          {services.slice(0, 6).map((service, index) => (
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

        {/* Nettoyage de l'Extrême - Centré */}
        <div className="max-w-2xl mx-auto mb-12">
          <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
            {services[6].image && (
              <div className="h-48 overflow-hidden">
                <img
                  src={services[6].image}
                  alt={services[6].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            )}
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <AlertTriangle className="h-10 w-10 text-primary" />
                {services[6].badge && (
                  <Badge variant="secondary">
                    {services[6].badge}
                  </Badge>
                )}
              </div>
              <CardTitle className="text-xl">{services[6].title}</CardTitle>
              <CardDescription className="text-base">{services[6].description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{services[6].details}</p>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-2xl mx-auto mb-12">
          <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img
                src={hygieneAssessmentImg}
                alt="Bilan d'hygiène environnemental"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <ClipboardCheck className="h-10 w-10 text-primary" />
              </div>
              <CardTitle className="text-xl">Bilan d'hygiène environnemental</CardTitle>
              <CardDescription className="text-base">
                Recensement chez les clients de produits, objets et ustensiles nocifs.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Analyse complète de votre environnement pour identifier et éliminer les sources potentielles de pollution intérieure
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-card border-2 border-primary/20 max-w-4xl mx-auto">
          <CardHeader className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-2">
              <MapPin className="h-6 w-6 text-primary" />
              <CardTitle className="text-2xl">Zone d'intervention</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center mb-6">
              <Compass className="h-32 w-32 text-primary" />
            </div>
            <div className="text-center space-y-3">
              <p className="text-lg">
                <strong className="text-primary">Secteur principal :</strong> Grand Figeac 
                (entreprise basée à Cajarc 46160)
              </p>
              <p className="text-lg">
                <strong className="text-primary">Grandes prestations :</strong> Toute l'Occitanie 
                et la Nouvelle-Aquitaine pour les interventions d'envergure
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Services;
