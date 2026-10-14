import { useEffect, useRef } from "react";
import { Check } from "lucide-react";
import { CHECKOUT_URLS, type KitId } from "@/config/checkout";
import { track } from "@/lib/tracking";
import { cn } from "@/lib/utils";

type Kit = {
  id: KitId;
  name: string;
  badge?: string;
  highlight?: string;
  description?: string;
  from: string;
  price: string;
  condition: string;
  ideal: string;
  includes: string[];
  cta: string;
  image: string;
  featured?: boolean;
};

const kits: Kit[] = [
  { id: "individual", name: "💡 1x Protetor UV Premium", from: "De R$ 159,90", price: "R$ 119,90", condition: "no Pix ou cartão", ideal: "Quarto do Bebê", includes: ["1x Protetor UV Premium", "1x Cabo USB de Brinde"], cta: "👇 COMPRAR 1 UNIDADE DO PROTETOR", image: "/images/image_4.jpg" },
  { id: "duplo", name: "💡💡 2x Protetores UV Premium", badge: "🔥 MAIS VENDIDO", highlight: "QUARTO BEBÊ + QUARTO PAIS", description: "Leve a 2ª unidade com super desconto!", from: "De R$ 319,80", price: "R$ 199,90", condition: "12x de R$ 19,90", ideal: "Proteger os dois quartos principais da casa", includes: ["2x Protetores UV Premium", "2x Cabos USB de Brinde"], cta: "🎯 LEVAR KIT MAIS VENDIDO COM DESCONTO", image: "/images/image_4.jpg", featured: true },
  { id: "triplo", name: "💡💡💡 3x Protetores UV Premium", from: "De R$ 479,70", price: "R$ 279,90", condition: "12x de R$ 27,90", ideal: "Quarto do Bebê + Quarto dos Pais + Sala de Estar", includes: ["3x Protetores UV Premium", "3x Cabos USB de Brinde"], cta: "👇 LEVAR KIT CASA COMPLETA (MAIOR DESCONTO)", image: "/images/image_5.jpg" },
];

function buy(kit: Kit) {
  track("kit_click", { kit: kit.id });
  const url = CHECKOUT_URLS[kit.id];
  if (!url) {
    console.warn(`Checkout do kit "${kit.id}" ainda não configurado em src/config/checkout.ts`);
    alert("Checkout em configuração. Em breve você poderá finalizar sua compra por aqui.");
    return;
  }
  track("InitiateCheckout", { kit: kit.id });
  window.location.href = url;
}

function OfferCard({ kit }: { kit: Kit }) {
  return (
    <article className={cn("relative flex flex-col rounded-3xl bg-card p-6", kit.featured ? "border-2 border-primary shadow-offer lg:-my-4 lg:py-10" : "border border-border shadow-soft")}>
      {kit.badge && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-primary px-4 py-1.5 text-xs font-extrabold text-primary-foreground">{kit.badge}</span>
      )}
      {kit.highlight && <p className="text-center text-xs font-extrabold tracking-widest text-primary">{kit.highlight}</p>}
      <img src={kit.image} alt={kit.name.replace(/💡/g, "").trim()} loading="lazy" width={1024} height={1024} className="mx-auto mt-3 aspect-square w-40 rounded-2xl object-cover" />
      <h3 className="mt-4 text-center text-lg font-extrabold">{kit.name}</h3>
      {kit.description && <p className="text-center text-sm font-semibold text-primary">{kit.description}</p>}
      <div className="mt-4 text-center">
        <p className="text-sm text-muted-foreground line-through">{kit.from}</p>
        <p className="text-4xl font-extrabold tracking-tight">{kit.price}</p>
        <p className="text-sm text-muted-foreground">{kit.condition}</p>
      </div>
      <p className="mt-4 rounded-xl bg-muted px-3 py-2 text-center text-sm"><span className="font-bold">Ideal para:</span> {kit.ideal}</p>
      <ul className="mt-4 flex-1 space-y-2 text-sm">
        {kit.includes.map((i) => (
          <li key={i} className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" aria-hidden /> {i}</li>
        ))}
      </ul>
      <button type="button" onClick={() => buy(kit)} className={cn("mt-6 min-h-14 rounded-xl px-4 py-3 text-sm font-extrabold transition-all focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-gold/60 active:scale-[0.98]", kit.featured ? "bg-primary text-primary-foreground hover:brightness-110" : "bg-secondary text-secondary-foreground hover:brightness-125")}>
        {kit.cta}
      </button>
    </article>
  );
}

export function PricingSection() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e?.isIntersecting) {
        track("ofertas_view");
        io.disconnect();
      }
    }, { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="kits" ref={ref} className="scroll-mt-4 px-5 py-16 lg:py-24">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="text-center text-2xl font-extrabold sm:text-4xl">Escolha a Proteção Ideal para o Seu Lar</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">Escolha seu kit e aproveite as condições especiais para equipar os ambientes da sua casa.</p>
        <div className="mt-14 grid gap-10 lg:grid-cols-3 lg:items-center lg:gap-6">
          {kits.map((k) => <OfferCard key={k.id} kit={k} />)}
        </div>
      </div>
    </section>
  );
}
