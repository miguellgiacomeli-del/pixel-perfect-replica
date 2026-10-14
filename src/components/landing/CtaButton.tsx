import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function scrollToKits() {
  document.getElementById("kits")?.scrollIntoView({ behavior: "smooth" });
}

export function CtaButton({
  children,
  onClick,
  className,
  variant = "primary",
}: {
  children: ReactNode;
  onClick: () => void;
  className?: string;
  variant?: "primary" | "outline";
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "inline-flex min-h-14 w-full items-center justify-center rounded-xl px-6 py-4 text-center text-sm font-extrabold tracking-wide transition-all focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-gold/60 active:scale-[0.98] sm:text-base",
        variant === "primary"
          ? "bg-primary text-primary-foreground shadow-offer hover:-translate-y-0.5 hover:brightness-110"
          : "border-2 border-secondary bg-card text-secondary hover:bg-secondary hover:text-secondary-foreground",
        className,
      )}
    >
      {children}
    </button>
  );
}

export const TRUST_TEXT = "🔒 Compra 100% Segura | 🚚 Envio Imediato com Rastreio | 🛡️ 7 Dias de Garantia";
