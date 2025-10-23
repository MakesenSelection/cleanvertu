import { Leaf } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Leaf className="h-5 w-5" />
            <span className="font-semibold">VERTuCLEAN</span>
          </div>
          <p className="text-sm text-center md:text-right">
            © {new Date().getFullYear()} VERTuCLEAN - Nettoyage écologique professionnel
            <br />
            Cajarc 46160 - Occitanie & Nouvelle-Aquitaine
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
