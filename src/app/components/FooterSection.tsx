// components/ContactSection.tsx
import { Instagram } from "lucide-react"; // Usa iconos de Lucide

export default function FooterSection() {
  return (
    <footer className="bg-white py-12 px-4 text-center space-y-6">
      <p className="text-lg max-w-xl mx-auto">
        ¿Tienes preguntas o quieres colaborar? No dudes en ponerte en contacto
        conmigo. Estoy abierto a nuevos proyectos o a una charla informal.
      </p>

      <div className="flex justify-center gap-6 text-[#744C28]">
        <Instagram className="w-8 h-8 cursor-pointer hover:scale-110 transition-transform" />
        <Instagram className="w-8 h-8 cursor-pointer hover:scale-110 transition-transform" />
        <Instagram className="w-8 h-8 cursor-pointer hover:scale-110 transition-transform" />
      </div>

      <p className="text-lg font-medium">@maestropereira.com</p>
    </footer>
  );
}
