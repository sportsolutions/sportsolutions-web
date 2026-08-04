const WHATSAPP_NUMBER = "5215578777449";
const WHATSAPP_MESSAGE = "Hola, me interesa información sobre su equipamiento.";

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition-transform duration-200 hover:scale-110"
    >
      <svg
        viewBox="0 0 32 32"
        width="32"
        height="32"
        fill="white"
        aria-hidden="true"
      >
        <path d="M16.004 3C9.376 3 4 8.373 4 15c0 2.394.706 4.622 1.92 6.49L4 29l7.68-1.884A11.94 11.94 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Zm0 21.75a9.7 9.7 0 0 1-4.947-1.354l-.355-.21-4.556 1.118 1.216-4.44-.231-.364A9.71 9.71 0 0 1 5.75 15c0-5.66 4.594-10.25 10.254-10.25S26.26 9.34 26.26 15 21.664 24.75 16.004 24.75Z" />
        <path d="M21.61 17.68c-.304-.152-1.797-.887-2.076-.988-.279-.101-.482-.152-.685.152-.203.304-.786.988-.964 1.19-.178.203-.355.228-.66.076-.304-.152-1.283-.473-2.444-1.512-.903-.806-1.513-1.802-1.69-2.106-.178-.304-.019-.469.133-.62.137-.136.304-.355.457-.532.152-.178.203-.304.304-.507.101-.203.05-.38-.025-.532-.076-.152-.685-1.652-.939-2.263-.247-.594-.499-.514-.685-.523l-.583-.01c-.203 0-.532.076-.811.38-.279.304-1.064 1.04-1.064 2.539s1.09 2.945 1.242 3.148c.152.203 2.147 3.278 5.202 4.596.727.314 1.294.501 1.737.641.729.232 1.393.199 1.918.121.585-.087 1.797-.735 2.05-1.445.254-.71.254-1.318.178-1.445-.076-.127-.279-.203-.583-.355Z" />
      </svg>
    </a>
  );
}
