import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Contactez-nous</h2>
          <p className="text-xl text-muted-foreground">
            Prêt à transformer votre espace ? Demandez votre devis gratuit et sans engagement
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-lg">Téléphone</CardTitle>
            </CardHeader>
            <CardContent>
              <a
                href="tel:0755614567"
                className="text-xl font-semibold text-primary hover:underline"
              >
                07 55 61 45 67
              </a>
              <p className="text-sm text-muted-foreground mt-2">
                Réponse rapide assurée
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-lg">Email</CardTitle>
            </CardHeader>
            <CardContent>
              <a
                href="mailto:contact@vertuclean.fr"
                className="text-lg font-semibold text-primary hover:underline break-all"
              >
                contact@vertuclean.fr
              </a>
              <p className="text-sm text-muted-foreground mt-2">
                Devis sous 24h
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-lg">Localisation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-semibold">Cajarc 46160</p>
              <p className="text-sm text-muted-foreground mt-2">
                Grand Figeac & Occitanie
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-lg">Disponibilité</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-semibold">Lun - Ven</p>
              <p className="text-sm text-muted-foreground mt-2">
                8h - 19h
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="max-w-2xl mx-auto bg-gradient-to-br from-primary to-secondary text-primary-foreground">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Demandez votre devis gratuit
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Particulier ou professionnel, bénéficiez d'une estimation personnalisée 
              et découvrez nos tarifs compétitifs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="text-lg"
              >
                <a href="tel:0755614567">
                  <Phone className="mr-2 h-5 w-5" />
                  Appeler maintenant
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 border-primary-foreground/30"
              >
                <a href="mailto:contact@vertuclean.fr">
                  <Mail className="mr-2 h-5 w-5" />
                  Envoyer un email
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
