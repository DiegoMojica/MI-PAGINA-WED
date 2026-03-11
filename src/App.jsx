import { useEffect, useRef, useState } from "react";
import {
  Bot,
  ChartNoAxesColumn,
  Cog,
  Database,
  Github,
  Globe,
  Handshake,
  LayoutPanelTop,
  Linkedin,
  Mail,
  Menu,
  MessageCircle,
  MonitorSmartphone,
  Send,
  Server,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Sobre Escalvia", href: "#sobre-mi" },
  { label: "Contacto", href: "#contacto" },
];

const services = [
  {
    title: "Páginas Web",
    description: "Presencia profesional para captar clientes y mejorar la credibilidad digital.",
    icon: Globe,
    image: "/images/services/web-corporativa.webp",
    imageHint: "web corporativa moderna, dashboard y laptop",
    benefits: ["Diseño responsive", "Carga rápida", "SEO técnico base", "Enfoque comercial"],
  },
  {
    title: "Automatización",
    description: "Procesos más ágiles, menos tareas manuales y menos errores operativos.",
    icon: Cog,
    image: "/images/services/automatizacion-procesos.webp",
    imageHint: "flujo automatizado de negocio, integraciones y datos",
    benefits: ["Flujos automáticos", "Integraciones", "Alertas y reportes", "Estandarización"],
  },
  {
    title: "IA para Negocios",
    description: "Atención y clasificación inteligente para responder más rápido y mejor.",
    icon: Bot,
    image: "/images/services/ia-negocios.webp",
    imageHint: "asistente IA para atención al cliente empresarial",
    benefits: ["Asistentes virtuales", "Filtro de leads", "Respuestas rápidas", "Mejor experiencia"],
  },
  {
    title: "Sistemas a Medida",
    description: "Herramientas internas para controlar operación y escalar con orden.",
    icon: LayoutPanelTop,
    image: "/images/services/sistema-medida.webp",
    imageHint: "sistema interno empresarial, panel administrativo",
    benefits: ["Paneles internos", "Control de procesos", "Roles y permisos", "Escalabilidad"],
  },
  {
    title: "Aplicaciones Móviles",
    description: "Desarrollo de apps móviles para Android y soluciones multiplataforma.",
    icon: MonitorSmartphone,
    image: "/images/services/aplicaciones-moviles.webp",
    imageHint: "aplicaciones móviles, smartphone con interfaz moderna",
    benefits: ["Apps Android", "Flutter y Dart", "Integración con APIs", "Publicación y soporte"],
  },
];

const benefits = [
  { title: "Imagen profesional", text: "Tu negocio transmite seriedad desde el primer contacto." },
  { title: "Atención más rápida", text: "Flujos digitales que acortan tiempos de respuesta." },
  { title: "Menos trabajo manual", text: "Automatizaciones para eliminar tareas repetitivas." },
  { title: "Mejor control interno", text: "Datos y procesos centralizados para decidir mejor." },
];

const process = [
  { step: "1", title: "Entiendo el problema", text: "Alineo objetivos, contexto y prioridad de negocio." },
  { step: "2", title: "Diseño la solución", text: "Defino alcance, arquitectura y flujo funcional." },
  { step: "3", title: "Desarrollo e implemento", text: "Construyo de forma iterativa con validaciones técnicas." },
  { step: "4", title: "Entrego y doy soporte", text: "Realizo ajustes post-entrega y mejora continua." },
];

const techGroups = [
  {
    title: "Frontend",
    icon: Globe,
    items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Vue", "Tailwind", "Bootstrap"],
  },
  {
    title: "Backend",
    icon: Server,
    items: ["Node.js", "Express", "C#", ".NET", "Python", "Django", "PHP", "REST API"],
  },
  {
    title: "Bases de datos",
    icon: Database,
    items: ["MySQL", "PostgreSQL", "SQL Server", "MongoDB", "Firebase"],
  },
  {
    title: "Movil",
    icon: MonitorSmartphone,
    items: ["Java", "Android", "Dart", "Flutter"],
  },
  {
    title: "Automatización",
    icon: Sparkles,
    items: ["Webhooks", "Bots", "Integraciones", "WhatsApp API", "Email workflows"],
  },
  {
    title: "Herramientas",
    icon: Cog,
    items: ["Git", "GitHub", "Postman", "Figma", "Docker"],
  },
];

const trustPills = [
  "Escalar + vía tecnológica",
  "Software a medida para negocios",
  "Web y apps móviles",
  "Automatización y soporte continuo",
];

const heroCapabilities = [
  {
    title: "Web comercial",
    text: "Captación y confianza.",
    icon: Globe,
  },
  {
    title: "App móvil",
    text: "Android y Flutter.",
    icon: MonitorSmartphone,
  },
  {
    title: "IA aplicada",
    text: "Respuestas más rápidas.",
    icon: Bot,
  },
  {
    title: "Sistemas internos",
    text: "Control y trazabilidad.",
    icon: LayoutPanelTop,
  },
];

const testimonials = [
  {
    quote:
      "Escalvia entendió exactamente lo que necesitábamos y entregó una web clara, profesional y fácil de usar. Lo recomendamos totalmente para proyectos digitales serios.",
    author: "Ecografías del Llano",
    role: "Cliente Escalvia - Sitio en producción",
    featured: true,
  },
];

const contactItems = [
  {
    label: "Email",
    value: "diegomojica261@gmail.com",
    href: "mailto:diegomojica261@gmail.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "github.com/DiegoMojica",
    href: "https://github.com/DiegoMojica",
    icon: Github,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/IngDiegoMojica",
    href: "https://www.linkedin.com/in/IngDiegoMojica",
    icon: Linkedin,
  },
  {
    label: "WhatsApp",
    value: "322 844 1820",
    href: "https://wa.me/573228441820?text=Hola%20Escalvia%2C%20quiero%20informaci%C3%B3n%20sobre%20un%20proyecto.",
    icon: MessageCircle,
  },
];

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_SECONDS_ON_PAGE = 4;
const MIN_SECONDS_BETWEEN_SUBMITS = 20;
const MAX_MESSAGE_LENGTH = 1200;

function sanitizeInput(value) {
  return value.replace(/[<>]/g, "").replace(/\s+/g, " ").trim();
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [heroCodeError, setHeroCodeError] = useState(false);
  const [projectImageError, setProjectImageError] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    mensaje: "",
    website: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formNotice, setFormNotice] = useState({
    type: "",
    text: "",
  });
  const formOpenedAtRef = useRef(Date.now());
  const lastSubmitAtRef = useRef(0);
  const year = new Date().getFullYear();

  useEffect(() => {
    const items = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (event, href) => {
    if (href === "#inicio") {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setFormNotice({ type: "", text: "" });
    const now = Date.now();

    if (formData.website.trim() !== "") {
      setFormNotice({
        type: "success",
        text: "Mensaje enviado correctamente. Te responderé pronto.",
      });
      return;
    }

    if (now - formOpenedAtRef.current < MIN_SECONDS_ON_PAGE * 1000) {
      setFormNotice({
        type: "error",
        text: "Por seguridad, espera unos segundos y vuelve a enviar el formulario.",
      });
      return;
    }

    if (now - lastSubmitAtRef.current < MIN_SECONDS_BETWEEN_SUBMITS * 1000) {
      setFormNotice({
        type: "error",
        text: "Espera un momento antes de enviar otro mensaje.",
      });
      return;
    }

    const cleanNombre = sanitizeInput(formData.nombre);
    const cleanCorreo = sanitizeInput(formData.correo).toLowerCase();
    const cleanMensaje = sanitizeInput(formData.mensaje);

    if (cleanNombre.length < 3 || cleanNombre.length > 80) {
      setFormNotice({
        type: "error",
        text: "Ingresa un nombre válido (entre 3 y 80 caracteres).",
      });
      return;
    }

    if (!EMAIL_PATTERN.test(cleanCorreo)) {
      setFormNotice({
        type: "error",
        text: "Ingresa un correo válido.",
      });
      return;
    }

    if (cleanMensaje.length < 10 || cleanMensaje.length > MAX_MESSAGE_LENGTH) {
      setFormNotice({
        type: "error",
        text: "El mensaje debe tener entre 10 y 1200 caracteres.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = new FormData();
      payload.append("nombre", cleanNombre);
      payload.append("correo", cleanCorreo);
      payload.append("mensaje", cleanMensaje);
      payload.append("website", formData.website);
      payload.append("_honey", "website");
      payload.append("_subject", "Nuevo mensaje desde Escalvia");
      payload.append("_template", "table");
      payload.append("_captcha", "true");

      const response = await fetch("https://formsubmit.co/ajax/diegomojica261@gmail.com", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: payload,
      });

      if (!response.ok) {
        throw new Error("No se pudo enviar el mensaje");
      }
      lastSubmitAtRef.current = now;

      setFormData({
        nombre: "",
        correo: "",
        mensaje: "",
        website: "",
      });
      setFormNotice({
        type: "success",
        text: "Mensaje enviado correctamente. Te responderé pronto.",
      });
    } catch {
      setFormNotice({
        type: "error",
        text: "No fue posible enviar el mensaje. Intenta de nuevo en un momento.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#ffffff_0%,#f7faff_100%)] text-[var(--foreground)]">
      <div className="pointer-events-none fixed -top-30 -right-16 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(29,78,216,0.26),rgba(29,78,216,0))]" />
      <div className="pointer-events-none fixed -bottom-30 -left-16 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(106,164,255,0.22),rgba(106,164,255,0))]" />

      <header className="sticky top-0 z-50 border-b border-[rgba(216,227,245,0.8)] bg-[rgba(255,255,255,0.9)] backdrop-blur">
        <div className="mx-auto flex min-h-[76px] w-[min(1120px,92%)] items-center justify-between gap-4">
          <a
            href="#inicio"
            className="inline-flex items-center"
            onClick={(event) => handleNavClick(event, "#inicio")}
            aria-label="Ir al inicio de Escalvia"
          >
            <span className="inline-flex h-[60px] w-[60px] items-center justify-center rounded-[20px] bg-[linear-gradient(160deg,#2f62e8,#2b57cc)] shadow-[0_6px_14px_rgba(20,61,170,0.2)] ring-1 ring-[#87a7ff] sm:h-[64px] sm:w-[64px]">
              <span className="inline-flex h-[50px] w-[50px] items-center justify-center rounded-2xl bg-white sm:h-[54px] sm:w-[54px]">
                <img
                  src="/logo-escalvia.webp"
                  alt="Escalvia"
                  width="256"
                  height="256"
                  loading="eager"
                  decoding="async"
                  className="h-11 w-11 rounded-md object-contain"
                />
              </span>
            </span>
            <span className="ml-3 hidden leading-tight sm:block">
              <span className="block text-[30px] font-extrabold leading-none text-[#1b3560]">Escalvia</span>
              <span className="mt-1 block text-[11px] font-bold tracking-[0.08em] text-[#4b6187]">ESCALAR + VIA TECNOLOGICA</span>
            </span>
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="grid h-11 w-11 place-items-center rounded-xl border border-[var(--border)] md:hidden"
            aria-label="Abrir menu"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>

          <nav
            className={`absolute left-[4%] top-20 w-[92%] rounded-2xl border border-[var(--border)] bg-white p-4 shadow-[0_14px_28px_rgba(12,34,74,0.12)] md:static md:flex md:w-auto md:items-center md:gap-4 md:border-0 md:bg-transparent md:p-0 md:shadow-none ${menuOpen ? "block" : "hidden md:flex"}`}
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block rounded-lg px-3 py-2 font-semibold text-[#2a3d61] transition hover:text-[var(--primary)]"
                onClick={(event) => handleNavClick(event, item.href)}
              >
                {item.label}
              </a>
            ))}
            <Button size="sm" asChild>
              <a href="#contacto" onClick={() => setMenuOpen(false)}>
                Hablemos
              </a>
            </Button>
          </nav>
        </div>
      </header>

      <main>
        <section id="inicio" className="relative z-10 pt-10 pb-14 md:pt-14 md:pb-16">
          <div className="mx-auto grid w-[min(1180px,92%)] gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div className="reveal">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#bcd0ff] bg-[#eef4ff] px-3 py-1.5">
                <ShieldCheck size={14} className="text-[var(--primary)]" />
                <p className="text-xs font-extrabold uppercase tracking-[0.06em] text-[var(--primary)]">Escalvia | Software para escalar negocios</p>
              </div>
              <h1 className="max-w-3xl text-[2.35rem] leading-[1.08] font-extrabold md:text-[4rem]">
                Creamos la vía tecnológica para escalar negocios con software, web y automatización.
              </h1>
              <p className="mt-4 max-w-2xl text-[1.05rem] text-[var(--muted-foreground)]">
                <span className="font-extrabold text-[#173a89]">Escalvia significa escalar + vía.</span>{" "}
                Soy Diego Mojica, fundador de la marca, y ayudo a negocios a crecer con tecnología práctica:
                páginas web, aplicaciones, automatización e IA aplicada.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild>
                  <a href="#proyectos">Ver proyecto real</a>
                </Button>
                <Button variant="secondary" asChild>
                  <a href="#contacto">Agendar llamada</a>
                </Button>
              </div>
              <ul className="mt-6 flex flex-wrap gap-5 text-sm font-semibold text-[#354b73]">
                <li className="relative pl-4 before:absolute before:left-0 before:top-[8px] before:h-2 before:w-2 before:rounded-full before:bg-[var(--primary)]">
                  Respuesta rápida
                </li>
                <li className="relative pl-4 before:absolute before:left-0 before:top-[8px] before:h-2 before:w-2 before:rounded-full before:bg-[var(--primary)]">
                  Soluciones a medida
                </li>
                <li className="relative pl-4 before:absolute before:left-0 before:top-[8px] before:h-2 before:w-2 before:rounded-full before:bg-[var(--primary)]">
                  Soporte continuo
                </li>
              </ul>
            </div>

            <div className="reveal relative lg:pl-2">
              <div className="glow-pulse absolute -inset-2 rounded-[30px] bg-[linear-gradient(135deg,rgba(40,93,255,0.35),rgba(8,38,118,0.2))] blur-xl" />
              <div className="relative overflow-hidden rounded-[24px] bg-[radial-gradient(circle_at_15%_10%,#2e65f0_0%,#1644bf_60%,#143790_100%)] p-4 md:p-5 shadow-[0_20px_42px_rgba(14,35,84,0.24)]">
                <div className="grid gap-3">
                  <Card className="overflow-hidden border-white/25 bg-white/95">
                    <CardContent className="p-3">
                      <div className="relative overflow-hidden rounded-xl">
                        {!heroCodeError && (
                          <img
                            src="/images/profile/codigo.webp"
                            alt="Código y entorno de trabajo"
                            width="1280"
                            height="720"
                            loading="eager"
                            fetchPriority="high"
                            decoding="async"
                            className="h-[220px] w-full object-cover md:h-[240px]"
                            onError={() => setHeroCodeError(true)}
                          />
                        )}
                        {heroCodeError && (
                          <div className="grid h-[220px] w-full place-items-center bg-[linear-gradient(145deg,#dbe7ff,#b8cdfb)] text-center md:h-[240px]">
                            <div>
                              <div className="mx-auto mb-2 grid h-14 w-14 place-items-center rounded-2xl bg-[linear-gradient(145deg,#2457df,#0b2f83)] text-lg font-extrabold text-white shadow-[0_10px_20px_rgba(12,44,128,0.3)]">
                                EV
                              </div>
                              <p className="text-xs font-extrabold text-[#1f438d]">Vía tecnológica para negocios</p>
                            </div>
                          </div>
                        )}
                        <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,rgba(8,30,90,0.08),rgba(8,30,90,0.76))] p-3 text-white">
                          <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#d8e5ff]">Enfoque actual</p>
                          <p className="mt-1 text-sm font-extrabold">Web, app móvil, IA y sistemas</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {heroCapabilities.map((item) => (
                      <Card key={item.title} className="border-white/25 bg-white/95">
                        <CardContent className="p-3.5">
                          <div className="flex items-start gap-2.5">
                            <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-[#edf3ff] text-[var(--primary)]">
                              <item.icon size={15} />
                            </span>
                            <div className="min-w-0">
                              <p className="text-sm font-extrabold text-[#1e355e]">{item.title}</p>
                              <p className="mt-0.5 text-sm text-[#4f6285]">{item.text}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative z-10 border-y border-[var(--border)] bg-white/70">
          <div className="mx-auto grid min-h-[76px] w-[min(1120px,92%)] gap-3 py-3 text-center sm:grid-cols-2 lg:grid-cols-4">
            {trustPills.map((item) => (
              <p key={item} className="reveal my-auto text-sm font-bold text-[#344f7d]">
                {item}
              </p>
            ))}
          </div>
        </section>

        <section id="servicios" className="relative z-10 py-20 md:py-24">
          <div className="mx-auto w-[min(1280px,94%)]">
            <div className="reveal mb-8 max-w-3xl">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.04em] text-[var(--primary)]">Servicios</p>
              <h2 className="text-3xl font-extrabold md:text-4xl">Oferta clara, enfocada en resultado de negocio</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
              {services.map((service) => (
                <Card
                  key={service.title}
                  className="reveal flex h-full flex-col overflow-hidden transition hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(12,34,74,0.12)]"
                >
                  <div className="relative h-36 w-full overflow-hidden bg-[linear-gradient(145deg,#dfe9ff,#c2d7ff)]">
                    <img
                      src={service.image}
                      alt={`Imagen de ${service.title}`}
                      width="640"
                      height="360"
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition duration-500 hover:scale-105"
                    />
                  </div>

                  <CardHeader className="pb-3">
                    <div className="mb-1 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#edf3ff] text-[var(--primary)]">
                      <service.icon size={18} />
                    </div>
                    <CardTitle className="leading-snug">{service.title}</CardTitle>
                    <CardDescription className="leading-7">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto pt-0">
                    <ul className="ml-4 list-disc space-y-1 text-sm text-[#344f7d]">
                      {service.benefits.map((benefit) => (
                        <li key={benefit}>{benefit}</li>
                      ))}
                    </ul>
                    <a href="#contacto" className="mt-3 inline-block text-sm font-bold text-[var(--primary)]">
                      Más información
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="proyectos" className="relative z-10 bg-[var(--muted)] py-20 md:py-24">
          <div className="mx-auto w-[min(1120px,92%)]">
            <div className="reveal mb-8 max-w-3xl">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.04em] text-[var(--primary)]">Proyectos</p>
              <h2 className="text-3xl font-extrabold md:text-4xl">Proyecto comercial publicado</h2>
              <p className="mt-2 text-[var(--muted-foreground)]">
                Actualmente este es mi proyecto vendido y publicado. Estoy abierto a nuevos proyectos para ampliar el
                portafolio con más casos de negocio.
              </p>
            </div>

            <Card className="reveal overflow-hidden">
              <div className="grid gap-0 lg:grid-cols-[0.45fr_0.55fr]">
                <div className="relative min-h-[250px] overflow-hidden bg-[linear-gradient(135deg,#2457df,#0b2f83)]">
                  {!projectImageError && (
                    <img
                      src="/images/projects/ecografias-home.webp"
                      alt="Captura del sitio Ecografías del Llano"
                      width="1280"
                      height="720"
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover opacity-90"
                      onError={() => setProjectImageError(true)}
                    />
                  )}
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,26,73,0.22),rgba(9,26,73,0.64))]" />
                  <div className="absolute left-5 top-5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-sm font-extrabold text-[#1b45a2]">
                    EDL
                  </div>
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#dbe7ff]">Sitio web corporativo</p>
                    <h3 className="mt-2 text-2xl font-extrabold">Ecografías del Llano</h3>
                    {projectImageError && (
                      <p className="mt-2 text-sm text-[#d7e3ff]">
                        Coloca una captura en /public/images/projects/ecografias-home.webp
                      </p>
                    )}
                  </div>
                </div>
                <div className="p-6 md:p-8">
                  <p className="text-sm font-bold text-[var(--primary)]">Problema</p>
                  <p className="mt-1 text-[var(--muted-foreground)]">
                    La página que tenían estaba desactualizada; querían una mejor presentación y que fuera adaptable a
                    todo tipo de tamaños de pantalla.
                  </p>
                  <p className="mt-4 text-sm font-bold text-[var(--primary)]">Solución</p>
                  <p className="mt-1 text-[var(--muted-foreground)]">
                    Diseño y desarrollo de un sitio web moderno, con presentación profesional, claridad de servicios
                    médicos y diseño responsive para cualquier dispositivo.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge>HTML</Badge>
                    <Badge>CSS</Badge>
                    <Badge>JavaScript</Badge>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <Button asChild>
                      <a href="https://www.ecografiasdelllano.com/" target="_blank" rel="noreferrer">
                        Ver sitio en vivo
                      </a>
                    </Button>
                    <Button variant="secondary" asChild>
                      <a href="#contacto">Quiero un proyecto similar</a>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section className="relative z-10 bg-[linear-gradient(145deg,#0f2f84,#09215f)] py-20 md:py-24">
          <div className="mx-auto w-[min(1120px,92%)]">
            <div className="reveal mb-8 max-w-3xl">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.04em] text-[#9cb8ff]">Beneficios</p>
              <h2 className="text-3xl font-extrabold text-white md:text-4xl">Lo que gana tu negocio al trabajar conmigo</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {benefits.map((benefit, index) => {
                const icons = [ShieldCheck, Handshake, Cog, ChartNoAxesColumn];
                const Icon = icons[index];
                return (
                  <Card key={benefit.title} className="reveal bg-white">
                    <CardHeader>
                      <div className="mb-1 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#edf3ff] text-[var(--primary)]">
                        <Icon size={18} />
                      </div>
                      <CardTitle>{benefit.title}</CardTitle>
                      <CardDescription>{benefit.text}</CardDescription>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section id="sobre-mi" className="relative z-10 py-20 md:py-24">
          <div className="mx-auto grid w-[min(1120px,92%)] gap-5 md:grid-cols-[0.84fr_1.16fr] md:items-center">
            <div className="reveal rounded-[24px] bg-[linear-gradient(170deg,#0d388f,#1751ce)] p-7 text-white shadow-[0_18px_46px_rgba(10,28,58,0.16)]">
              <div className="inline-flex h-32 w-32 items-center justify-center rounded-3xl bg-[linear-gradient(160deg,rgba(255,255,255,0.2),rgba(255,255,255,0.08))] shadow-[0_14px_30px_rgba(4,15,46,0.34)] ring-1 ring-white/35">
                <img
                  src="/logo-escalvia.webp"
                  alt="Logo Escalvia"
                  width="520"
                  height="128"
                  loading="lazy"
                  decoding="async"
                  className="h-24 w-24 rounded-2xl object-cover"
                />
              </div>
              <h3 className="mt-5 text-2xl font-extrabold">Escalvia</h3>
              <p className="mt-1 max-w-sm text-white/90">Fundada por Diego Mojica - Ingeniero de software</p>
            </div>

            <div className="reveal">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.04em] text-[var(--primary)]">Sobre Escalvia</p>
              <h2 className="text-3xl font-extrabold md:text-4xl">
                Tecnolog&iacute;a con enfoque t&eacute;cnico y visi&oacute;n de negocio
              </h2>
              <p className="mt-4 text-[var(--muted-foreground)]">
                Escalvia nace para resolver problemas reales de negocio con una ruta clara: analizar, construir y
                escalar. Cada proyecto prioriza impacto comercial y facilidad de uso.
              </p>
              <p className="mt-2 text-[var(--muted-foreground)]">
                Soy Diego Mojica y tengo m&aacute;s de 3 a&ntilde;os de experiencia profesional construyendo y mejorando sistemas
                para salud, hoteles, servicios y sitios web corporativos.
              </p>

              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                <Card className="bg-[#f3f8ff]">
                  <CardContent className="p-4">
                    <p className="text-sm font-extrabold text-[var(--secondary-foreground)]">3+ a&ntilde;os</p>
                    <p className="text-xs text-[#47608b]">Experiencia profesional</p>
                  </CardContent>
                </Card>
                <Card className="bg-[#f3f8ff]">
                  <CardContent className="p-4">
                    <p className="text-sm font-extrabold text-[var(--secondary-foreground)]">Sectores reales</p>
                    <p className="text-xs text-[#47608b]">Salud, hoteles, servicios p&uacute;blicos y m&aacute;s</p>
                  </CardContent>
                </Card>
                <Card className="bg-[#f3f8ff]">
                  <CardContent className="p-4">
                    <p className="text-sm font-extrabold text-[var(--secondary-foreground)]">Mantenimiento</p>
                    <p className="text-xs text-[#47608b]">Mejora continua de sistemas productivos</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="relative z-10 bg-[var(--muted)] py-20 md:py-24">
          <div className="mx-auto w-[min(1120px,92%)]">
            <div className="reveal mb-8 max-w-3xl">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.04em] text-[var(--primary)]">Tecnologías</p>
              <h2 className="text-3xl font-extrabold md:text-4xl">Stack organizado para soluciones robustas</h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {techGroups.map((group) => (
                <Card key={group.title} className="reveal">
                  <CardHeader>
                    <div className="mb-1 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#edf3ff] text-[var(--primary)]">
                      <group.icon size={18} />
                    </div>
                    <CardTitle>{group.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <Badge key={item}>{item}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="relative z-10 py-20 md:py-24">
          <div className="mx-auto w-[min(1120px,92%)]">
            <div className="reveal mb-8 max-w-3xl">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.04em] text-[var(--primary)]">Proceso de trabajo</p>
              <h2 className="text-3xl font-extrabold md:text-4xl">Metodología simple y clara para avanzar sin fricción</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {process.map((item) => (
                <Card key={item.step} className="reveal">
                  <CardHeader>
                    <div className="mb-1 grid h-9 w-9 place-items-center rounded-xl bg-[#eaf1ff] font-extrabold text-[var(--secondary-foreground)]">
                      {item.step}
                    </div>
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription>{item.text}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="relative z-10 bg-[var(--muted)] py-20 md:py-24">
          <div className="mx-auto w-[min(1120px,92%)]">
            <div className="reveal mx-auto mb-8 max-w-3xl text-center">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.04em] text-[var(--primary)]">Experiencia y confianza</p>
              <h2 className="text-3xl font-extrabold md:text-4xl">Reseña de cliente real</h2>
              {/* <p className="mt-2 text-[var(--muted-foreground)]">
                Caso publicado y activo para Ecografías del Llano.
              </p> */}
            </div>
            <div className="mx-auto max-w-3xl">
              {testimonials.map((item) => (
                <Card
                  key={item.quote}
                  className={`reveal text-center ${item.featured ? "border-[var(--primary)] shadow-[0_16px_38px_rgba(29,78,216,0.12)]" : ""}`}
                >
                  <CardContent className="p-7 md:p-9">
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#bcd0ff] bg-[#edf3ff] px-3 py-1 text-xs font-extrabold uppercase tracking-[0.05em] text-[var(--primary)]">
                      <ShieldCheck size={14} />
                      Cliente verificado
                    </div>
                    <p className="text-lg font-semibold leading-8 text-[#26406d]">"{item.quote}"</p>
                    <p className="mt-5 text-base font-extrabold text-[var(--primary)]">{item.author}</p>
                    <p className="text-xs font-semibold uppercase tracking-[0.05em] text-[var(--muted-foreground)]">{item.role}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="relative z-10 bg-[linear-gradient(145deg,#f7fbff,#eaf2ff)] py-20 md:py-24">
          <div className="mx-auto w-[min(1120px,92%)]">
            <Card className="reveal rounded-[22px] p-7">
              <h2 className="text-3xl font-extrabold">
                En Escalvia creamos la vía tecnológica para escalar tu negocio con software a medida, web, apps y
                automatización.
              </h2>
              <div className="mt-5 flex flex-wrap gap-3">
                <Button asChild>
                  <a href="https://wa.me/573228441820?text=Hola%20Escalvia%2C%20quiero%20informaci%C3%B3n%20sobre%20un%20proyecto." target="_blank" rel="noreferrer">
                    Hablar con Escalvia por WhatsApp
                  </a>
                </Button>
                <Button variant="secondary" asChild>
                  <a href="#servicios">Ver servicios</a>
                </Button>
              </div>
            </Card>
          </div>
        </section>

        <section id="contacto" className="relative z-10 py-20 md:py-24">
          <div className="mx-auto grid w-[min(1120px,92%)] gap-5 lg:grid-cols-2">
            <div className="reveal">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.04em] text-[var(--primary)]">Contacto</p>
              <h2 className="text-3xl font-extrabold md:text-4xl">Conversemos sobre tu proyecto en Escalvia</h2>
              <p className="mt-3 text-[var(--muted-foreground)]">
                Cuéntame qué necesitas y te respondo con una propuesta clara: solución, alcance, tiempos y siguientes
                pasos.
              </p>

              <ul className="mt-4 space-y-3">
                {contactItems.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                      className="group flex items-center gap-3 rounded-xl border border-[var(--border)] bg-white px-3 py-2 transition hover:border-[var(--primary)] hover:bg-[#f4f8ff]"
                    >
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#edf3ff] text-[var(--primary)]">
                        <item.icon size={17} />
                      </span>
                      <span>
                        <span className="block text-sm font-semibold text-[#2f446a]">{item.label}</span>
                        <span className="text-sm font-bold text-[var(--primary)]">{item.value}</span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <Card className="reveal">
              <CardContent className="space-y-3 p-5">
                <form onSubmit={handleFormSubmit} className="space-y-3">
                  <label className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
                    Website
                    <input
                      name="website"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      value={formData.website}
                      onChange={handleFormChange}
                    />
                  </label>
                  <label className="block text-sm font-semibold text-[#27416a]">
                    Nombre
                    <input
                      required
                      name="nombre"
                      type="text"
                      value={formData.nombre}
                      onChange={handleFormChange}
                      maxLength={80}
                      placeholder="Tu nombre"
                      className="mt-1 w-full rounded-xl border border-[#c9d7ef] px-3 py-3 outline-none focus:border-[#79a2ff] focus:ring-2 focus:ring-[rgba(29,78,216,0.2)]"
                    />
                  </label>
                  <label className="block text-sm font-semibold text-[#27416a]">
                    Correo
                    <input
                      required
                      name="correo"
                      type="email"
                      value={formData.correo}
                      onChange={handleFormChange}
                      maxLength={120}
                      placeholder="tu@email.com"
                      className="mt-1 w-full rounded-xl border border-[#c9d7ef] px-3 py-3 outline-none focus:border-[#79a2ff] focus:ring-2 focus:ring-[rgba(29,78,216,0.2)]"
                    />
                  </label>
                  <label className="block text-sm font-semibold text-[#27416a]">
                    Mensaje
                    <textarea
                      required
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleFormChange}
                      maxLength={MAX_MESSAGE_LENGTH}
                      rows="5"
                      placeholder="Cuéntame sobre tu proyecto"
                      className="mt-1 w-full rounded-xl border border-[#c9d7ef] px-3 py-3 outline-none focus:border-[#79a2ff] focus:ring-2 focus:ring-[rgba(29,78,216,0.2)]"
                    />
                  </label>
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    <Send size={16} />
                    {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                  </Button>
                </form>
                {formNotice.text && (
                  <div
                    className={`rounded-xl border px-3 py-2 text-sm font-semibold ${
                      formNotice.type === "success"
                        ? "border-emerald-300 bg-emerald-50 text-emerald-700"
                        : "border-rose-300 bg-rose-50 text-rose-700"
                    }`}
                  >
                    {formNotice.text}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-[var(--border)] bg-white">
        <div className="mx-auto grid min-h-[112px] w-[min(1120px,92%)] gap-4 py-6 md:grid-cols-[1.2fr_1fr_auto] md:items-center">
          <div>
            <p className="font-extrabold">Escalvia</p>
            <p className="text-sm text-[var(--muted-foreground)]">
              Creamos la vía tecnológica para escalar negocios.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-sm font-semibold text-[#3b5682]">
                {item.label}
              </a>
            ))}
          </div>
          <p className="text-sm text-[var(--muted-foreground)]">© {year} Escalvia</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
