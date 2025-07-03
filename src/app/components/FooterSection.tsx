// components/ContactSection.tsx
import { Instagram } from "lucide-react"; // Usa iconos de Lucide

export default function FooterSection() {
  return (
    <footer className="bg-white py-12 px-4 text-center space-y-6 flex flex-col md:flex-row justify-between w-11/12 m-auto">
      <div>
        <p className="text-lg max-w-xl mx-auto md:text-left">
          ¿Tienes preguntas o quieres colaborar? No dudes en ponerte en contacto
          conmigo. Estoy abierto a nuevos proyectos o a una charla informal.
        </p>

        <div className="flex justify-center gap-6 text-[#744C28]">
          <Instagram className="w-8 h-8 cursor-pointer hover:scale-110 transition-transform" />
          <Instagram className="w-8 h-8 cursor-pointer hover:scale-110 transition-transform" />
          <Instagram className="w-8 h-8 cursor-pointer hover:scale-110 transition-transform" />
        </div>
      </div>

      <div className="flex flex-col gap-0 md:text-right" >
        <p className="text-lg font-medium">
          {" "}
          Correo electronico: @maestropereira.com
        </p>
        <p className="text-lg font-medium">
          {" "}
          Numero de contacto: +57 300 000 000
        </p>
      </div>
    </footer>
  );
}
