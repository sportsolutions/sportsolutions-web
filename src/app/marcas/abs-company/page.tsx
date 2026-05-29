"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check } from "lucide-react";
import { AnimateIn } from "@/components/ui/AnimateIn";
import ZohoForm from "@/components/ZohoForm";

const ease = [0.22, 1, 0.36, 1] as const;

// ─── Data ─────────────────────────────────────────────────────────────────────

const stats = [
  { value: "25+", label: "Años en la industria" },
  { value: "35,000+", label: "Instalaciones en el mundo" },
  { value: "77", label: "Países" },
  { value: "59", label: "Patentes registradas" },
];

const whyBullets = [
  "4.6 horas de uso diario por máquina",
  "56% de utilización del equipo",
  "46 minutos de uso promedio por hora",
  "8 horas de ventana de actividad diaria",
];

const zones = [
  {
    id: "ab",
    title: "AB ZONE",
    subtitle: "Flatten the Abs",
    description:
      "Máquinas patentadas de core con movimiento bottom-up, rotación y trabajo de oblicuos. La zona de abdomen más efectiva del mercado.",
    products:
      "Ab Coaster® CS3000, Ab Coaster® CTL, Ab Solo®, Vertical Crunch™, Abs Bench X3™, Standing Ab Twist™",
    image: "/images/tac/abs-bench-x3.jpg",
  },
  {
    id: "glute",
    title: "GLUTE ZONE",
    subtitle: "Build the Butt",
    description:
      "Sistema progresivo de glúteos con hip thrust selectorizado, kickback guiado, deadlift guiado y sentadilla sin carga espinal.",
    products:
      "Glute Coaster™ TL, Glute Lift™ Elite, Total Glute™, The Deadlift Machine™, Nordic Curl™, Belt Squat™",
    image: "/images/tac/dragons-lair-tg-2.jpg",
  },
  {
    id: "hiit",
    title: "HIIT ZONE",
    subtitle: "Shred the Fat",
    description:
      "Equipamiento funcional de alta intensidad para quemar grasa y trabajar el core de forma explosiva.",
    products: "SledMill™, TireFlip 180®, Battle Rope ST™, aTAC™ Air Bike",
    image: "/images/tac/SledMill.jpg",
  },
];

const products = [
  {
    name: "Ab Coaster® CS3000",
    zone: "AB ZONE",
    image: "/images/tac/ab-coaster-cs3000.jpg",
    description:
      "El original. Movimiento bottom-up que combina crunch con elevación de rodillas. Diseño trackless, compacto y de alto impacto visual.",
  },
  {
    name: "Ab Coaster® CTL",
    zone: "AB ZONE",
    image: "/images/tac/ab-coaster-ctl.jpg",
    description:
      "Versión trackless con diseño compacto. Ideal para espacios donde se necesita máximo rendimiento con mínima huella.",
  },
  {
    name: "Abs Bench X3™",
    zone: "AB ZONE",
    image: "/images/tac/abs-bench-x3.jpg",
    description:
      "Banco dual-pivot para trabajo simultáneo de abdomen superior e inferior. Versátil y de bajo mantenimiento.",
  },
  {
    name: "AbCoaster® PS500",
    zone: "AB ZONE",
    image: "/images/tac/PS500.png",
    description:
      "Versión semi-comercial del Ab Coaster. Ideal para condominios y espacios con menor tráfico.",
  },
  {
    name: "Total Glute™",
    zone: "GLUTE ZONE",
    image: "/images/tac/dragons-lair-tg-1.jpg",
    description:
      "Máquina multiuso para glúteos: abducción, sentadillas, estocadas y deadlifts. Todo en una sola unidad.",
  },
  {
    name: "Nordic Curl™",
    zone: "GLUTE ZONE",
    image: "/images/tac/nordic-curl.jpg",
    description:
      "Curl nórdico guiado con 4 niveles de dificultad. Trabaja isquiotibiales y glúteos con máxima seguridad.",
  },
  {
    name: "SledMill™",
    zone: "HIIT ZONE",
    image: "/images/tac/SledMill.jpg",
    description:
      "Sled push y drag en una sola unidad. Resistencia ajustable de 0 a 450 lbs para entrenamientos de alta intensidad.",
  },
];

const layouts = [
  { equipos: "4 equipos", area: "18–20 m²" },
  { equipos: "6 equipos", area: "27–30 m²" },
  { equipos: "8 equipos", area: "39–41 m²" },
  { equipos: "10 equipos", area: "50–55 m²" },
];

const certBullets = [
  "Mejores resultados para tus miembros",
  "Mayor retención",
  "Más ingresos de entrenamiento personal",
];

const gyms =
  "Anytime Fitness · Gold's Gym · Lifetime Fitness · Crunch · SmartFit · YMCA";

const GOLD = "#D4A017";

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AbsCompanyPage() {
  return (
    <>
      {/* ── 1. HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/tac/ab-coaster-cs3000.jpg"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src =
              "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80";
          }}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.15 }}
            className="text-white/65 text-xs font-semibold uppercase tracking-[0.22em] mb-6"
          >
            The Abs Company · Distribuidor Oficial en México
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.25 }}
            className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tight mb-8 max-w-4xl"
          >
            El sistema de entrenamiento más popular del mundo
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.4 }}
            className="text-white/70 text-lg lg:text-xl font-light max-w-xl mb-10 leading-relaxed"
          >
            Ab Zone · Glute Zone · HIIT Zone — convierte espacio subutilizado en
            el área más popular de tu gimnasio.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.55 }}
          >
            <Link
              href="#contacto"
              className="inline-flex items-center justify-center font-bold text-base px-10 py-5 transition-colors duration-200 tracking-wide"
              style={{ backgroundColor: GOLD, color: "#000" }}
            >
              Cotiza tu zona
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── 2. FORMULARIO ────────────────────────────────────────────────────── */}
      <section id="contacto" className="bg-[#0a0a0a] py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center mb-10">
          <AnimateIn>
            <h2 className="font-black text-4xl lg:text-5xl uppercase text-white tracking-tight">
              Cotiza tu TAC System
            </h2>
            <p className="text-white/60 text-base mt-3">
              Un asesor especializado se pondrá en contacto contigo.
            </p>
          </AnimateIn>
        </div>
        <div className="max-w-4xl mx-auto px-6">
          <ZohoForm
            src="https://forms.zohopublic.com/SportSolutions2025/form/FormularioGeneral/formperma/HUZg-O-8C31vPjux7xvDXNp4XjgVvP-bLTjq6Acu-O4"
            label="Formulario General"
            height="804px"
          />
        </div>
      </section>

      {/* ── 3. STATS ─────────────────────────────────────────────────────────── */}
      <section className="bg-black py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0.5 bg-white/5">
            {stats.map((s, i) => (
              <AnimateIn key={s.label} delay={i * 0.08} direction="none">
                <div className="bg-black px-10 py-12 flex flex-col gap-2">
                  <span
                    className="text-5xl lg:text-6xl font-black leading-none"
                    style={{ color: GOLD }}
                  >
                    {s.value}
                  </span>
                  <span className="text-white/55 text-sm uppercase tracking-widest font-medium">
                    {s.label}
                  </span>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. POR QUÉ TAC SYSTEM ───────────────────────────────────────────── */}
      <section className="bg-[#111] py-28 lg:py-36 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

            {/* Texto */}
            <AnimateIn>
              <p className="text-white/40 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
                Por qué TAC System
              </p>
              <h2 className="text-4xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-6">
                Lo que tus miembros realmente quieren
              </h2>
              <p className="text-white/60 text-base lg:text-lg font-light leading-relaxed mb-8 max-w-md">
                Con más de 33 mil millones de búsquedas sociales de
                entrenamientos de abdomen y glúteos, y el 69% de los miembros
                queriendo trabajar AMBAS zonas, el TAC System convierte esa
                demanda en retención, ingresos y diferenciación competitiva.
              </p>
              <ul className="flex flex-col gap-4">
                {whyBullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span
                      className="mt-0.5 flex-shrink-0 w-5 h-5 flex items-center justify-center"
                      style={{ backgroundColor: GOLD }}
                    >
                      <Check size={11} strokeWidth={3} className="text-black" />
                    </span>
                    <span className="text-white/70 text-sm lg:text-base leading-relaxed">
                      {b}
                    </span>
                  </li>
                ))}
              </ul>
            </AnimateIn>

            {/* Imagen */}
            <AnimateIn direction="left" delay={0.1}>
              <div className="relative overflow-hidden" style={{ aspectRatio: "4/5" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/tac/dragons-lair-tg-1.jpg"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src =
                      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80";
                  }}
                  alt="TAC System instalación"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── 5. LAS TRES ZONAS ────────────────────────────────────────────────── */}
      <section className="bg-black py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <AnimateIn className="mb-14">
            <p className="text-white/40 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              El sistema
            </p>
            <h2 className="text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
              Tres zonas. Un sistema completo.
            </h2>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {zones.map((z, i) => (
              <AnimateIn key={z.id} delay={i * 0.1} direction="none">
                <div
                  className="bg-[#111] flex flex-col h-full border-t-2"
                  style={{ borderColor: GOLD }}
                >
                  <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={z.image}
                      alt={z.title}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="p-8 flex flex-col flex-1 gap-3">
                    <span
                      className="text-xs font-black uppercase tracking-widest"
                      style={{ color: GOLD }}
                    >
                      {z.title}
                    </span>
                    <h3 className="text-xl font-black text-white tracking-tight">
                      {z.subtitle}
                    </h3>
                    <p className="text-white/55 text-sm leading-relaxed flex-1">
                      {z.description}
                    </p>
                    <p className="text-white/30 text-xs leading-relaxed mt-2">
                      {z.products}
                    </p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. CATÁLOGO DE PRODUCTOS ─────────────────────────────────────────── */}
      <section className="bg-white py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <AnimateIn className="mb-14">
            <p className="text-black/40 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              Catálogo
            </p>
            <h2 className="text-5xl lg:text-6xl font-black text-black leading-tight tracking-tight">
              Equipos disponibles
            </h2>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5 bg-gray-100">
            {products.map((p, i) => (
              <AnimateIn key={p.name} delay={i * 0.08} direction="none">
                <div className="bg-white group flex flex-col h-full">
                  <div
                    className="relative overflow-hidden"
                    style={{ aspectRatio: "16/9", backgroundColor: "#f5f5f5" }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-contain object-center transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-8 lg:p-10 flex flex-col gap-3">
                    <span
                      className="text-[10px] font-black uppercase tracking-widest px-3 py-1 self-start"
                      style={{ backgroundColor: GOLD, color: "#000" }}
                    >
                      {p.zone}
                    </span>
                    <h3 className="text-2xl lg:text-3xl font-black text-black tracking-tight">
                      {p.name}
                    </h3>
                    <p className="text-black/55 text-sm lg:text-base font-light leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. LAYOUTS DISPONIBLES ───────────────────────────────────────────── */}
      <section className="bg-[#0a0a0a] py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <AnimateIn className="mb-14">
            <p className="text-white/40 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              Configuraciones
            </p>
            <h2 className="text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
              Configuraciones disponibles
            </h2>
          </AnimateIn>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0.5 bg-white/5 mb-8">
            {layouts.map((l, i) => (
              <AnimateIn key={l.equipos} delay={i * 0.08} direction="none">
                <div
                  className="bg-[#0a0a0a] px-10 py-12 flex flex-col gap-3 border-t-2"
                  style={{ borderColor: GOLD }}
                >
                  <span
                    className="text-3xl lg:text-4xl font-black leading-none"
                    style={{ color: GOLD }}
                  >
                    {l.equipos}
                  </span>
                  <span className="text-white/50 text-sm uppercase tracking-widest">
                    {l.area}
                  </span>
                </div>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn delay={0.2}>
            <p className="text-white/35 text-sm border-l-2 pl-4" style={{ borderColor: GOLD }}>
              Diseñamos el layout ideal para tu espacio disponible
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ── 8. CERTIFICACIÓN ─────────────────────────────────────────────────── */}
      <section className="bg-black py-28 lg:py-36 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

            {/* Texto */}
            <AnimateIn>
              <p className="text-white/40 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
                Formación profesional
              </p>
              <h2 className="text-4xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-6">
                Ab &amp; Glute Certification™
              </h2>
              <p className="text-white/60 text-base lg:text-lg font-light leading-relaxed mb-8 max-w-md">
                No solo instalamos el equipo — capacitamos a tu staff para
                maximizar los resultados. La certificación Ab &amp; Glute
                Specialist enseña ciencia del entrenamiento y estrategias de
                coaching.
              </p>
              <ul className="flex flex-col gap-4">
                {certBullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span
                      className="mt-0.5 flex-shrink-0 w-5 h-5 flex items-center justify-center"
                      style={{ backgroundColor: GOLD }}
                    >
                      <Check size={11} strokeWidth={3} className="text-black" />
                    </span>
                    <span className="text-white/70 text-sm lg:text-base leading-relaxed">
                      {b}
                    </span>
                  </li>
                ))}
              </ul>
            </AnimateIn>

            {/* Imagen */}
            <AnimateIn direction="left" delay={0.1}>
              <div className="relative overflow-hidden" style={{ aspectRatio: "4/5" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/tac/dragons-lair-tg-2.jpg"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src =
                      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80";
                  }}
                  alt="Ab & Glute Certification"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── 9. PRESENCIA MUNDIAL ─────────────────────────────────────────────── */}
      <section className="bg-[#111] py-24 lg:py-32 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <AnimateIn>
            <p className="text-white/40 text-xs font-semibold uppercase tracking-[0.2em] mb-6">
              Presencia global
            </p>
            <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-8">
              Presente en los mejores gimnasios del mundo
            </h2>
            <p className="text-white font-bold text-base lg:text-lg leading-relaxed mb-6">
              {gyms}
            </p>
            <p className="text-white/40 text-sm">
              Y ahora disponible en México a través de Sport Solutions
            </p>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
