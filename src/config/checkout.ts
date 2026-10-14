// Links reais de checkout — substitua os placeholders quando disponíveis.
// Enquanto vazio (""), o botão leva à seção de kits em vez de abrir checkout.
export const CHECKOUT_URLS = {
  individual: "", // TODO: link do checkout do Kit Individual
  duplo: "", // TODO: link do checkout do Kit Duplo
  triplo: "", // TODO: link do checkout do Kit Casa Completa
} as const;

export type KitId = keyof typeof CHECKOUT_URLS;
