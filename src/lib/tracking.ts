// Camada central de eventos. Integre o Meta Pixel aqui (window.fbq) quando o ID for configurado.
// Nunca coloque o Access Token da Conversions API no frontend.
// Purchase NÃO é disparado aqui — só após confirmação real de compra no servidor/checkout.
type EventName = "cta_principal_click" | "ofertas_view" | "kit_click" | "InitiateCheckout";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export function track(event: EventName, data: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  if (import.meta.env.DEV) console.info("[track]", event, data);
  if (window.fbq) {
    if (event === "InitiateCheckout") window.fbq("track", "InitiateCheckout", data);
    else window.fbq("trackCustom", event, data);
  }
}
