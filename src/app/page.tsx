"use client";

import { useState } from "react";
import Image from "next/image";

/* ─── Icons (inline SVG components) ─── */
function TennisIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" />
      <path d="M2.5 12c0-2.5 4.2-4.5 9.5-4.5s9.5 2 9.5 4.5-4.2 4.5-9.5 4.5S2.5 14.5 2.5 12z" />
      <path d="M12 2.5c2.5 0 4.5 4.2 4.5 9.5s-2 9.5-4.5 9.5" />
    </svg>
  );
}

function PhoneIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function WhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function MapPinIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function MailIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function CheckIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function ChevronDownIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function MenuIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function XIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function StarIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function UsersIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function UserIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function AwardIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  );
}

function TargetIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

function HeartIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

/* ─── FAQ Component ─── */
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-slate-200 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left text-lg font-medium text-slate-800 hover:text-emerald-700 transition-colors cursor-pointer"
      >
        <span>{question}</span>
        <ChevronDownIcon
          className={`w-5 h-5 text-slate-400 transition-transform duration-300 shrink-0 ml-4 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-slate-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

/* ─── Navigation ─── */
function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const links = [
    { href: "#ueber-mich", label: "Über mich" },
    { href: "#training", label: "Training" },
    { href: "#preise", label: "Preise" },
    { href: "#faq", label: "FAQ" },
    { href: "#kontakt", label: "Kontakt" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2 group">
            <TennisIcon className="w-7 h-7 text-emerald-600 group-hover:rotate-12 transition-transform" />
            <span className="font-serif text-xl font-bold text-slate-900">
              Martin Prenzel
            </span>
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-slate-600 hover:text-emerald-700 transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#kontakt"
              className="bg-emerald-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-emerald-700 transition-colors"
            >
              Training anfragen
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-slate-600 cursor-pointer"
          >
            {mobileOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-4 pb-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-slate-700 font-medium hover:text-emerald-700 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#kontakt"
            onClick={() => setMobileOpen(false)}
            className="block mt-2 text-center bg-emerald-600 text-white font-semibold px-5 py-3 rounded-full hover:bg-emerald-700 transition-colors"
          >
            Training anfragen
          </a>
        </div>
      )}
    </nav>
  );
}

/* ─── Main Page ─── */
export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const trainingsangebote = [
    {
      icon: <UserIcon className="w-7 h-7" />,
      title: "Einzeltraining",
      description:
        "Volle Aufmerksamkeit, individuelle Analyse und gezieltes Training deiner Schwächen. Ideal für schnelle Fortschritte – egal ob Anfänger oder Turnierspieler.",
      image: "/images/tennis-serve.jpg",
    },
    {
      icon: <UsersIcon className="w-7 h-7" />,
      title: "Gruppentraining",
      description:
        "In kleinen Gruppen (2–4 Spieler) trainierst du spielnah, motiviert und mit direktem Feedback. Spaß und Entwicklung gehen Hand in Hand.",
      image: "/images/tennis-doubles.jpg",
    },
    {
      icon: <HeartIcon className="w-7 h-7" />,
      title: "Kinder- & Jugendtraining",
      description:
        "Spielerischer Einstieg für die Kleinsten, systematischer Aufbau für Jugendliche. Technik, Koordination und Freude am Spiel stehen im Mittelpunkt.",
      image: "/images/tennis-kid.jpg",
    },
    {
      icon: <TargetIcon className="w-7 h-7" />,
      title: "Erwachsenentraining",
      description:
        "Ob Wiedereinstieg oder Verbesserung deines Spiels – du bekommst Training, das zu deinem Level und deinen Zielen passt.",
      image: "/images/tennis-backhand.jpg",
    },
    {
      icon: <AwardIcon className="w-7 h-7" />,
      title: "Mannschaftstraining",
      description:
        "Taktisches Training, Matchsituationen und Teamaufstellung – damit dein Team bestens vorbereitet in die Saison geht.",
      image: "/images/tennis-training.jpg",
    },
  ];

  const faqs = [
    {
      question: "Für wen ist das Training geeignet?",
      answer:
        "Für alle – vom absoluten Anfänger bis zum ambitionierten Turnierspieler. Ich passe das Training individuell an dein Können, dein Alter und deine Ziele an.",
    },
    {
      question: "Kann ich auch als kompletter Anfänger starten?",
      answer:
        "Natürlich! Viele meiner Spieler haben bei null angefangen. Du lernst die Grundlagen von Anfang an richtig – das ist sogar ein Vorteil, weil sich keine Fehler einschleichen.",
    },
    {
      question: "Gibt es freie Gruppenplätze?",
      answer:
        "Die Gruppen wechseln regelmäßig. Schreib mir einfach eine kurze Nachricht, dann schaue ich, wo aktuell ein Platz frei ist oder wann die nächste Gruppe startet.",
    },
    {
      question: "Kann ich mit Freunden eine eigene Gruppe bilden?",
      answer:
        "Ja, das geht sehr gut. Ihr bestimmt den Termin, ich bringe das passende Training mit. Das macht besonders viel Spaß und ist oft die motivierendste Trainingsform.",
    },
    {
      question: "Wo findet das Training statt?",
      answer:
        "Das Training findet auf den Tennisplätzen in Bad Brückenau und Umgebung statt. Den genauen Standort besprechen wir je nach Verfügbarkeit und Trainingsform.",
    },
    {
      question: "Wie läuft eine Probestunde ab?",
      answer:
        "Wir treffen uns auf dem Platz, ich schaue mir dein Spiel an und wir trainieren direkt zusammen. Danach besprechen wir, wie es weitergehen kann – ganz unverbindlich.",
    },
  ];

  return (
    <>
      <Navigation />

      {/* HERO */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-court.jpg"
            alt="Tennisplatz"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/40" />
        </div>
        <div className="absolute top-20 right-0 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-50/40 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
                <MapPinIcon className="w-4 h-4" />
                Bad Brückenau
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
                Dein Tennis.{" "}
                <span className="text-emerald-600">Dein Level.</span>{" "}
                Dein Trainer.
              </h1>

              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-8 max-w-lg">
                Individuelles Tennistraining für Kinder, Jugendliche und
                Erwachsene – von Anfänger bis Turnierspieler. Persönlich,
                professionell und direkt hier in Bad Brückenau.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <a
                  href="#kontakt"
                  className="inline-flex items-center justify-center gap-2 bg-emerald-600 text-white font-semibold text-lg px-8 py-4 rounded-full hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-200 transition-all"
                >
                  Training anfragen
                </a>
                <a
                  href="https://wa.me/491234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white text-slate-800 font-semibold text-lg px-8 py-4 rounded-full border-2 border-slate-200 hover:border-emerald-300 hover:text-emerald-700 transition-all"
                >
                  <WhatsAppIcon className="w-5 h-5 text-green-600" />
                  Probestunde sichern
                </a>
              </div>

              <div className="flex flex-wrap gap-6 text-sm text-slate-500">
                {["Einzeltraining", "Gruppentraining", "Kinder & Jugend", "Erwachsene"].map((t) => (
                  <span key={t} className="flex items-center gap-1.5">
                    <CheckIcon className="w-4 h-4 text-emerald-500" />
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl shadow-emerald-200/40">
                <Image
                  src="/images/training-action.jpg"
                  alt="Tennistraining in Aktion"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/30 to-transparent" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg px-5 py-3 border border-slate-100">
                <div className="flex items-center gap-1 text-amber-400 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-4 h-4" />
                  ))}
                </div>
                <p className="text-sm text-slate-600 font-medium">Lizenzierter Tennistrainer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ÜBER MARTIN */}
      <section id="ueber-mich" className="py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/images/trainer-portrait.jpg"
                  alt="Martin Prenzel – Tennistrainer"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -z-10 -top-4 -right-4 w-full h-full rounded-2xl bg-emerald-100/50" />
            </div>

            <div>
              <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
                Über mich
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mt-3 mb-6">
                Tennis ist mehr als Sport –{" "}
                <span className="text-emerald-600">es ist Haltung</span>
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Ich bin Martin Prenzel, Tennistrainer in Bad Brückenau. Seit
                  vielen Jahren bringe ich Spielern aller Altersklassen und
                  Spielstärken das Tennisspiel näher – vom ersten Aufschlag bis
                  zum taktischen Matchplay.
                </p>
                <p>
                  Mein Ansatz ist einfach: Ich hole dich genau da ab, wo du
                  stehst. Kein starres Programm, kein Schema F. Stattdessen
                  bekommst du Training, das auf dich zugeschnitten ist – mit
                  Struktur, Geduld und dem Ziel, dass du dich auf dem Platz
                  sicher und gut fühlst.
                </p>
                <p>
                  Was mich antreibt? Die Momente, in denen ein Spieler merkt,
                  dass etwas klickt. Wenn Technik und Spielfreude zusammenkommen
                  – das ist der Punkt, an dem Training wirklich wirkt.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  "Lizenzierter Trainer",
                  "Langjährige Erfahrung",
                  "Alle Altersklassen",
                  "Individuelle Betreuung",
                ].map((q) => (
                  <div key={q} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                    <CheckIcon className="w-4 h-4 text-emerald-500 shrink-0" />
                    {q}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRAININGSANGEBOTE */}
      <section id="training" className="py-20 md:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
              Trainingsangebote
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mt-3 mb-4">
              Für jedes Level das richtige Training
            </h2>
            <p className="text-slate-600 text-lg">
              Ob Einzel, Gruppe oder Mannschaft – ich biete dir Training, das zu
              deinen Zielen passt.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {trainingsangebote.map((t, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-50 transition-all duration-300"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={t.image}
                    alt={t.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <div className="absolute top-3 left-3 w-11 h-11 rounded-lg bg-white/90 backdrop-blur-sm text-emerald-600 flex items-center justify-center shadow-sm">
                    {t.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{t.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{t.description}</p>
                </div>
              </div>
            ))}

            <div className="group bg-emerald-600 rounded-2xl p-7 flex flex-col justify-between text-white">
              <div>
                <h3 className="text-xl font-bold mb-3">Nicht sicher, was passt?</h3>
                <p className="text-emerald-100 leading-relaxed">
                  Schreib mir einfach eine Nachricht – gemeinsam finden wir das
                  Training, das zu dir und deinen Zielen passt.
                </p>
              </div>
              <a
                href="#kontakt"
                className="mt-6 inline-flex items-center justify-center bg-white text-emerald-700 font-semibold px-6 py-3 rounded-full hover:bg-emerald-50 transition-colors"
              >
                Jetzt Kontakt aufnehmen
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PREISE */}
      <section id="preise" className="relative py-20 md:py-28 bg-white overflow-hidden">
        {/* Decorative tennis ball */}
        <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full opacity-5">
          <Image src="/images/tennis-ball.jpg" alt="" fill className="object-cover rounded-full" />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
              Preise
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mt-3 mb-4">
              Transparente Preise, faire Konditionen
            </h2>
            <p className="text-slate-600 text-lg">
              Die genauen Preise richten sich nach Trainingsform und
              Gruppengröße. Hier ein Überblick zur Orientierung.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Einzeltraining */}
            <div className="relative bg-white rounded-2xl border-2 border-slate-100 p-8 text-center hover:border-emerald-200 transition-colors">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Einzeltraining</h3>
              <p className="text-sm text-slate-500 mb-6">1:1 mit voller Aufmerksamkeit</p>
              <div className="mb-6">
                <span className="text-sm text-slate-500">ab</span>
                <span className="text-5xl font-bold text-slate-900 mx-1">35</span>
                <span className="text-slate-500">&euro;</span>
                <p className="text-sm text-slate-400 mt-1">pro Stunde</p>
              </div>
              <ul className="text-left space-y-3 mb-8">
                {[
                  "Individuelle Trainingsplanung",
                  "Technik- und Taktikanalyse",
                  "Flexible Terminwahl",
                  "Für alle Spielstärken",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckIcon className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#kontakt"
                className="block w-full text-center bg-slate-100 text-slate-700 font-semibold py-3 rounded-full hover:bg-emerald-600 hover:text-white transition-colors"
              >
                Anfragen
              </a>
            </div>

            {/* Gruppentraining – featured */}
            <div className="relative bg-emerald-600 rounded-2xl p-8 text-center text-white shadow-xl shadow-emerald-200/30 sm:scale-105">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-400 text-amber-900 text-xs font-bold px-4 py-1 rounded-full">
                Beliebt
              </div>
              <h3 className="text-lg font-bold mb-2">Gruppentraining</h3>
              <p className="text-emerald-200 text-sm mb-6">2–4 Spieler, ein Trainer</p>
              <div className="mb-6">
                <span className="text-sm text-emerald-200">ab</span>
                <span className="text-5xl font-bold mx-1">40</span>
                <span className="text-emerald-200">&euro;</span>
                <p className="text-sm text-emerald-300 mt-1">pro Stunde / Gruppe</p>
              </div>
              <ul className="text-left space-y-3 mb-8">
                {[
                  "Spielnahes Training",
                  "Spaß und Motivation",
                  "Kleine Gruppengrößen",
                  "Regelmäßige Termine",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-emerald-100">
                    <CheckIcon className="w-4 h-4 text-emerald-300 mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#kontakt"
                className="block w-full text-center bg-white text-emerald-700 font-semibold py-3 rounded-full hover:bg-emerald-50 transition-colors"
              >
                Anfragen
              </a>
            </div>

            {/* Eigene Kleingruppe */}
            <div className="relative bg-white rounded-2xl border-2 border-slate-100 p-8 text-center hover:border-emerald-200 transition-colors">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Eigene Kleingruppe</h3>
              <p className="text-sm text-slate-500 mb-6">Deine Freunde, euer Training</p>
              <div className="mb-6">
                <span className="text-sm text-slate-500">Preis auf</span>
                <p className="text-3xl font-bold text-slate-900 mt-1">Anfrage</p>
                <p className="text-sm text-slate-400 mt-1">individuell</p>
              </div>
              <ul className="text-left space-y-3 mb-8">
                {[
                  "Eigene Gruppenzusammenstellung",
                  "Wunschtermine möglich",
                  "Angepasstes Niveau",
                  "Ab 2 Spielern",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckIcon className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#kontakt"
                className="block w-full text-center bg-slate-100 text-slate-700 font-semibold py-3 rounded-full hover:bg-emerald-600 hover:text-white transition-colors"
              >
                Anfragen
              </a>
            </div>
          </div>

          <p className="text-center text-sm text-slate-400 mt-10">
            Alle Preise sind Richtwerte. Das genaue Modell stimmen wir individuell ab – schreib mir einfach.
          </p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
              Stimmen
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mt-3 mb-4">
              Das sagen meine Spieler
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                text: "Martin hat meiner Tochter in wenigen Wochen die Angst vorm Aufschlag genommen. Sie geht jetzt mit Freude zum Training.",
                name: "Sabine M.",
                role: "Mutter einer Spielerin (9 Jahre)",
              },
              {
                text: "Endlich ein Trainer, der zuhört und nicht einfach sein Standardprogramm abspult. Die Stunden sind abwechslungsreich und bringen mich wirklich weiter.",
                name: "Thomas K.",
                role: "Erwachsener Wiedereinsteiger",
              },
              {
                text: "Unser Mannschaftstraining mit Martin war der Grund, warum wir dieses Jahr aufgestiegen sind. Taktisch stark, menschlich top.",
                name: "Jürgen W.",
                role: "Mannschaftsführer TC Bad Brückenau",
              },
            ].map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-7 border border-slate-100 shadow-sm">
                <div className="flex gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <StarIcon key={j} className="w-4 h-4" />
                  ))}
                </div>
                <p className="text-slate-600 leading-relaxed mb-6 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-slate-900">{t.name}</p>
                  <p className="text-sm text-slate-400">{t.role}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-slate-400 mt-8">
            * Platzhalter – echte Testimonials werden ergänzt
          </p>
        </div>
      </section>

      {/* IMAGE BANNER */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <Image
          src="/images/court-green.jpg"
          alt="Tennisplatz Atmosphäre"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-emerald-900/60" />
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
              Bereit für dein nächstes Level?
            </h2>
            <p className="text-emerald-100 text-lg mb-6 max-w-lg mx-auto">
              Starte jetzt mit einer unverbindlichen Probestunde
            </p>
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 bg-white text-emerald-700 font-semibold px-8 py-3.5 rounded-full hover:bg-emerald-50 transition-colors"
            >
              Probestunde vereinbaren
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
              Häufige Fragen
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mt-3 mb-4">
              Noch Fragen? Hier findest du Antworten.
            </h2>
          </div>

          <div className="bg-slate-50 rounded-2xl p-6 sm:p-8">
            {faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* KONTAKT */}
      <section id="kontakt" className="py-20 md:py-28 bg-gradient-to-b from-slate-50 to-emerald-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">
              Kontakt
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mt-3 mb-4">
              Lass uns loslegen
            </h2>
            <p className="text-slate-600 text-lg">
              Schreib mir eine Nachricht oder ruf einfach an – ich melde mich
              schnellstmöglich bei dir.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-10">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <a
                href="https://wa.me/491234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-green-50 border border-green-200 rounded-xl p-5 hover:shadow-md transition-shadow group"
              >
                <div className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <WhatsAppIcon className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">WhatsApp schreiben</p>
                  <p className="text-sm text-slate-500">Schnellste Antwort</p>
                </div>
              </a>

              <a
                href="tel:+491234567890"
                className="flex items-center gap-4 bg-white border border-slate-200 rounded-xl p-5 hover:shadow-md transition-shadow group"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <PhoneIcon className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Anrufen</p>
                  <p className="text-sm text-slate-500">+49 123 456 7890</p>
                </div>
              </a>

              <a
                href="mailto:info@martin-prenzel-tennis.de"
                className="flex items-center gap-4 bg-white border border-slate-200 rounded-xl p-5 hover:shadow-md transition-shadow group"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <MailIcon className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">E-Mail</p>
                  <p className="text-sm text-slate-500">info@martin-prenzel-tennis.de</p>
                </div>
              </a>

              <div className="flex items-center gap-4 bg-white border border-slate-200 rounded-xl p-5">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                  <MapPinIcon className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Standort</p>
                  <p className="text-sm text-slate-500">Bad Brückenau, Bayern</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3 bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Nachricht schreiben</h3>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const subject = encodeURIComponent("Trainingsanfrage von " + formData.name);
                  const body = encodeURIComponent(
                    `Name: ${formData.name}\nTelefon: ${formData.phone}\n\n${formData.message}`
                  );
                  window.location.href = `mailto:info@martin-prenzel-tennis.de?subject=${subject}&body=${body}`;
                }}
                className="space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 outline-none transition-all text-slate-900"
                      placeholder="Dein Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 outline-none transition-all text-slate-900"
                      placeholder="Für Rückruf"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 outline-none transition-all text-slate-900"
                    placeholder="deine@email.de"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Nachricht *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 outline-none transition-all resize-none text-slate-900"
                    placeholder="Was möchtest du trainieren? Für wen suchst du Training? Gibt es Wunschtermine?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-emerald-600 text-white font-semibold py-4 rounded-full hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-200 transition-all cursor-pointer text-lg"
                >
                  Nachricht senden
                </button>
                <p className="text-xs text-slate-400 text-center">
                  Ich antworte in der Regel innerhalb von 24 Stunden.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <TennisIcon className="w-6 h-6 text-emerald-400" />
              <span className="font-serif text-lg font-bold text-white">Martin Prenzel</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
              {[
                { href: "#ueber-mich", label: "Über mich" },
                { href: "#training", label: "Training" },
                { href: "#preise", label: "Preise" },
                { href: "#faq", label: "FAQ" },
                { href: "#kontakt", label: "Kontakt" },
              ].map((l) => (
                <a key={l.href} href={l.href} className="hover:text-white transition-colors">
                  {l.label}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://wa.me/491234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 text-slate-400 flex items-center justify-center hover:bg-green-600 hover:text-white transition-colors"
              >
                <WhatsAppIcon className="w-5 h-5" />
              </a>
              <a
                href="tel:+491234567890"
                className="w-10 h-10 rounded-full bg-slate-800 text-slate-400 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-colors"
              >
                <PhoneIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
            <p>&copy; {new Date().getFullYear()} Martin Prenzel – Tennistraining Bad Brückenau</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">Impressum</a>
              <a href="#" className="hover:text-white transition-colors">Datenschutz</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/491234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-green-500 text-white rounded-full shadow-lg shadow-green-500/30 flex items-center justify-center hover:bg-green-600 hover:scale-110 transition-all"
        aria-label="WhatsApp"
      >
        <WhatsAppIcon className="w-7 h-7" />
      </a>
    </>
  );
}
