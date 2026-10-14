import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  ["O aparelho faz barulho ao matar o mosquito?", "Não. A atração é pela luz e o choque na grelha interna ocorre de forma ultra-silenciosa, sem estalos altos que possam atrapalhar ou assustar a criança de madrugada."],
  ["Ele é seguro caso a criança encoste?", "Sim! A grelha elétrica de 720° fica totalmente isolada por uma grade externa protetora com vãos milimétricos, impedindo o acesso de dedinhos infantis ou curiosidade de pets de estimação."],
  ["Quanto tempo dura a bateria e como recarrega?", "O aparelho possui bateria de lítio de alta autonomia que dura a noite inteira. Ele recarrega rapidamente através do cabo USB (incluso) e também pode ser utilizado ligado diretamente a uma tomada comum ou carregador de celular."],
  ["Posso escolher as cores dos aparelhos nos Kits?", "Sim! Os nossos kits são enviados com as cores neutras de maior sucesso (branco e preto), discretas e perfeitas para qualquer decoração de quarto ou sala."],
];

function FAQItem({ q, a, id }: { q: string; a: string; id: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl border border-border bg-card">
      <button type="button" aria-expanded={open} aria-controls={id} onClick={() => setOpen(!open)} className="flex w-full items-center justify-between gap-4 rounded-2xl p-5 text-left font-bold focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/40">
        {q}
        <ChevronDown className={cn("h-5 w-5 shrink-0 transition-transform", open && "rotate-180")} aria-hidden />
      </button>
      <div id={id} role="region" className={cn("grid transition-all duration-300", open ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
        <p className="overflow-hidden px-5 text-sm leading-relaxed text-muted-foreground">
          <span className="block pb-5">{a}</span>
        </p>
      </div>
    </div>
  );
}

export function FAQSection() {
  return (
    <section id="faq" className="bg-card px-5 py-16 lg:py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center text-2xl font-extrabold sm:text-4xl">Dúvidas Frequentes</h2>
        <div className="mt-6 flex justify-center gap-4">
          <img src="/images/image_3.jpg" alt="Versão branca" loading="lazy" width={1024} height={1024} className="h-20 w-20 rounded-xl object-cover" />
          <img src="/images/image_5.jpg" alt="Versão preta" loading="lazy" width={1024} height={1024} className="h-20 w-20 rounded-xl object-cover" />
        </div>
        <div className="mt-8 space-y-3">
          {faqs.map(([q, a], i) => <FAQItem key={q} q={q} a={a} id={`faq-${i}`} />)}
        </div>
      </div>
    </section>
  );
}
