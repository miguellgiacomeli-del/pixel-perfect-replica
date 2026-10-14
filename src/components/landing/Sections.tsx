import { Check, ShieldCheck, X, Zap, BatteryCharging, Moon } from "lucide-react";
import { CtaButton, scrollToKits, TRUST_TEXT } from "./CtaButton";
import { track } from "@/lib/tracking";

const ctaMain = () => {
  track("cta_principal_click");
  scrollToKits();
};

export function AnnouncementBar() {
  return (
    <div className="border-b border-gold/30 bg-secondary px-4 py-2 text-center text-xs font-bold tracking-wider text-secondary-foreground sm:text-sm">
      <span className="text-gold">✦</span> 🚚 FRETE GRÁTIS PARA TODO O BRASIL APENAS HOJE <span className="text-gold">✦</span>
    </div>
  );
}

const heroBenefits = [
  ["🔋 Bateria Recarregável (Sem Fio)", "Leve para qualquer cômodo ou passeios."],
  ["👶 100% Seguro e Atóxico", "Sem venenos, fumaça ou cheiros no quarto."],
  ["🌙 Abajur Suave de Amamentação", "Luz quente que não desperta o bebê."],
];

export function HeroSection() {
  return (
    <section className="bg-night-gradient text-night-foreground">
      <div className="mx-auto grid max-w-[1200px] gap-8 px-5 py-10 md:py-16 lg:grid-cols-2 lg:items-center lg:gap-14 lg:py-24">
        <div className="animate-fade-up">
          <p className="text-xs font-bold tracking-[0.2em] text-gold">PROTEÇÃO UV 2 EM 1 PARA SUAS NOITES</p>
          <h1 className="mt-4 text-[1.7rem] font-extrabold leading-tight sm:text-4xl lg:text-[2.6rem]">
            Proteja o Sono do Seu Filho Contra Picadas e Dengue: 100% Sem Química, Sem Cheiro e Totalmente Silencioso.
          </h1>
          <div className="mt-6 lg:hidden">
            <HeroImage />
          </div>
          <p className="mt-6 text-base text-night-muted sm:text-lg">
            O fim dos repelentes tóxicos. O único protetor UV 2 em 1 com bateria recarregável e abajur de amamentação suave para o quarto do seu bebê.
          </p>
          <ul className="mt-6 space-y-3">
            {heroBenefits.map(([t, d]) => (
              <li key={t} className="rounded-xl border border-night-foreground/10 bg-night-foreground/5 px-4 py-3">
                <p className="font-bold">{t}</p>
                <p className="text-sm text-night-muted">{d}</p>
              </li>
            ))}
          </ul>
          <CtaButton onClick={ctaMain} className="mt-8 lg:w-auto">
            👉 QUERO PROTEGER MEU BEBÊ AGORA (FRETE GRÁTIS)
          </CtaButton>
          <p className="mt-4 text-xs text-night-muted sm:text-sm">{TRUST_TEXT}</p>
        </div>
        <div className="hidden lg:block">
          <HeroImage />
        </div>
      </div>
    </section>
  );
}

function HeroImage() {
  return (
    <div className="overflow-hidden rounded-3xl border border-gold/20 shadow-2xl">
      <img src="/images/image_1.jpg" alt="Protetor UV Premium com luz quente no quarto do bebê" width={1024} height={1024} className="aspect-square w-full object-cover" fetchPriority="high" />
    </div>
  );
}

const benefits = [
  { img: "/images/image_2.jpg", Icon: Zap, title: "⚡ Choque Físico 720° Contra Mosquito da Dengue", text: "A luz UVA especial atrai os insetos simulando o calor do corpo humano, e a grelha elétrica silenciosa elimina os mosquitos instantaneamente, sem usar um único miligrama de química." },
  { img: "/images/image_3.jpg", Icon: BatteryCharging, title: "🔋 100% Portátil e Recarregável (Sem Fio)", text: "Livre-se das tomadas distantes. Com bateria interna de longa duração, você pode pendurá-la no berço, colocar na mesa de cabeceira, na sala ou até mesmo levar para passeios ao ar livre." },
  { img: "/images/image_1.jpg", Icon: Moon, title: "🌙 Luz Noturna Suave (Apoio de Amamentação)", text: "Muito mais que um mata-mosquito. O modo abajur com luz quente de 3000K ilumina o quarto de madrugada na medida exata para você amamentar ou trocar fraldas sem precisar acender a luz forte e despertar o seu filho." },
];

export function BenefitsSection() {
  return (
    <section id="beneficios" className="px-5 py-16 lg:py-24">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="mx-auto max-w-3xl text-center text-2xl font-extrabold sm:text-4xl">
          Por que ele é o protetor definitivo para o quarto do seu filho?
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {benefits.map(({ img, Icon, title, text }) => (
            <article key={title} className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
              <img src={img} alt="" loading="lazy" width={1024} height={1024} className="aspect-[4/3] w-full object-cover" />
              <div className="p-6">
                <Icon className="h-6 w-6 text-primary" aria-hidden />
                <h3 className="mt-3 text-lg font-extrabold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const options = [
  { title: "Repelentes de tomada e sprays", text: "Soltam fumaça e produtos químicos tóxicos de madrugada, exigem refis caros todo mês e podem irritar o sistema respiratório de bebês e crianças com rinite.", good: false },
  { title: "Armadilhas baratas de tomada", text: "Estruturas frágeis, precisam ficar presas em tomadas longe de onde você realmente precisa e emitem estalos altos que acordam a criança de madrugada.", good: false },
  { title: "Protetor UV Premium Recarregável", text: "Combate físico natural por luz e choque 720° sem venenos, bateria recarregável para posicionar em qualquer lugar, luz noturna integrada e funcionamento de alta qualidade e resistência.", good: true },
];

export function ComparisonSection() {
  return (
    <section className="bg-card px-5 py-16 lg:py-24">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="mx-auto max-w-3xl text-center text-2xl font-extrabold sm:text-4xl">
          Não arrisque a saúde de quem você ama com soluções ultrapassadas
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-3 md:items-stretch">
          {options.map((o) => (
            <div key={o.title} className={o.good ? "rounded-2xl border-2 border-primary bg-card p-6 shadow-offer md:-my-3" : "rounded-2xl border border-border bg-muted p-6"}>
              {o.good && (
                <div className="mb-5 grid grid-cols-2 gap-3">
                  <img src="/images/image_4.jpg" alt="Protetor UV Premium branco" loading="lazy" width={1024} height={1024} className="aspect-square w-full rounded-xl object-cover" />
                  <img src="/images/image_5.jpg" alt="Protetor UV Premium preto" loading="lazy" width={1024} height={1024} className="aspect-square w-full rounded-xl object-cover" />
                </div>
              )}
              <div className="flex items-center gap-2">
                <span className={o.good ? "rounded-full bg-primary p-1 text-primary-foreground" : "rounded-full bg-destructive p-1 text-destructive-foreground"}>
                  {o.good ? <Check className="h-4 w-4" /> : <X className="h-4 w-4" />}
                </span>
                <h3 className="text-sm font-extrabold uppercase tracking-wide">{o.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{o.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function GuaranteeSection() {
  return (
    <section className="px-5 py-16">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 rounded-3xl border border-border bg-card p-8 text-center shadow-soft sm:flex-row sm:text-left">
        <ShieldCheck className="h-20 w-20 shrink-0 text-primary" aria-hidden />
        <div>
          <h2 className="text-2xl font-extrabold sm:text-3xl">Sua Compra com Risco ZERO</h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            <strong className="text-foreground">Selo de Garantia de 7 Dias.</strong> Nós confiamos tanto na eficiência e na qualidade desse protetor que desafiamos você a usá-lo por 7 noites. Se você não notar o quarto do seu filho totalmente livre de pernilongos e mosquitos, basta nos enviar um e-mail para devolvemos 100% do seu dinheiro, sem perguntas.
          </p>
        </div>
      </div>
    </section>
  );
}

export function FinalCTASection() {
  return (
    <section className="bg-night-gradient px-5 py-16 text-night-foreground lg:py-24">
      <div className="mx-auto grid max-w-[1200px] items-center gap-10 md:grid-cols-2">
        <img src="/images/image_5.jpg" alt="Protetor UV Premium preto" loading="lazy" width={1024} height={1024} className="mx-auto aspect-square w-full max-w-md rounded-3xl border border-gold/20 object-cover" />
        <div>
          <h2 className="text-2xl font-extrabold sm:text-4xl">
            Mais tranquilidade para suas noites <span className="text-gold">começa aqui</span>
          </h2>
          <p className="mt-4 text-night-muted">Escolha o kit ideal para sua casa e aproveite a combinação de tecnologia UV, praticidade e iluminação ambiente.</p>
          <CtaButton onClick={ctaMain} className="mt-8">QUERO PROTEGER MEU BEBÊ AGORA</CtaButton>
          <p className="mt-4 text-xs text-night-muted sm:text-sm">{TRUST_TEXT}</p>
        </div>
      </div>
    </section>
  );
}

// Placeholders: substitua "#" pelos links reais das páginas da loja.
const footerLinks = [
  "Atendimento ao cliente",
  "Política de privacidade",
  "Termos de uso",
  "Política de envio",
  "Trocas e devoluções",
];

export function Footer() {
  return (
    <footer className="bg-night px-5 pb-28 pt-12 text-night-muted md:pb-12">
      <div className="mx-auto max-w-[1200px]">
        <p className="text-lg font-extrabold text-night-foreground">
          Protetor UV <span className="text-gold">Premium</span>
        </p>
        <nav className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm" aria-label="Rodapé">
          {footerLinks.map((l) => (
            <a key={l} href="#" title="Página em breve" className="hover:text-gold focus-visible:text-gold">{l}</a>
          ))}
        </nav>
        <p className="mt-6 text-xs">© {new Date().getFullYear()} Protetor UV Premium. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export function MobileStickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-card/95 p-3 backdrop-blur md:hidden">
      <CtaButton onClick={ctaMain} className="min-h-12 py-3">👉 ESCOLHER MEU KIT (FRETE GRÁTIS)</CtaButton>
    </div>
  );
}
