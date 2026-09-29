export const siteConfig = {
  name: "Dev Mendes",
  url: "https://www.devmendes.com.br",
  description:
    "Landing pages e sites profissionais de alta performance para transformar visitas em oportunidades de negócio.",
  whatsapp: "5531987340462",
  email: "marcosmendes.dev@gmail.com",
  cnpj: "18.553.328/0001-09",
};

export function whatsappUrl(message: string) {
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
}
