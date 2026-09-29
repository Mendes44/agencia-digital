export type Project = {
  title: string;
  category: string;
  description: string;
  image: string;
  url: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Barbearia Simão",
    category: "Barbearia",
    description: "Presença digital marcante, serviços organizados e agendamento mais acessível.",
    image: "/img/projeto-barbearia-simao.webp",
    url: "https://barbearia-simao.vercel.app/index.html",
    featured: true,
  },
  {
    title: "Agência de Viagem",
    category: "Turismo",
    description: "Destinos em destaque e uma experiência voltada à captação de pedidos de cotação.",
    image: "/img/projeto-viagem.webp",
    url: "https://agencia-de-viagem-one.vercel.app/",
    featured: true,
  },
  {
    title: "Pet Boutique",
    category: "Pet shop",
    description: "Visual acolhedor, serviços claros e contato rápido para novos agendamentos.",
    image: "/img/projeto-petshop.webp",
    url: "https://petshop-boutique.vercel.app/",
    featured: true,
  },
  {
    title: "Verdinho",
    category: "Restaurante",
    description: "Cardápio, unidades e reservas em uma experiência acolhedora.",
    image: "/img/projeto-verdinho.webp",
    url: "https://verdinho-restaurante.vercel.app/",
  },
  {
    title: "Chico do Peixe",
    category: "Bar e restaurante",
    description: "Tradição, cardápio e reserva de mesas em destaque.",
    image: "/img/projeto-chico-do-peixe.webp",
    url: "https://chico-do-peixe.vercel.app/",
  },
  {
    title: "Pousada Secreta",
    category: "Hospedagem",
    description: "Acomodações, experiências e pedidos de reserva apresentados com clareza.",
    image: "/img/projeto-pousada.webp",
    url: "https://site-pousada-umber.vercel.app/",
  },
  {
    title: "Clínica Médica",
    category: "Saúde",
    description: "Estrutura confiável para especialidades, profissionais e agendamentos.",
    image: "/img/projeto-clinica.webp",
    url: "https://clinica-medica-psi.vercel.app/",
  },
  {
    title: "Manhattan Coffee House",
    category: "Alimentação",
    description: "Uma experiência visual para apresentar ambiente, endereço e horários.",
    image: "/img/projeto-cafeteria.webp",
    url: "https://cafeteria-site-rho.vercel.app/",
  },
  {
    title: "Space Live Abroad",
    category: "Intercâmbio",
    description: "Experiências internacionais, destinos e oportunidades no exterior.",
    image: "/img/projeto-space.webp",
    url: "https://projeto-space-live-abroad-six.vercel.app/",
  },
  {
    title: "Barbearia Imperial",
    category: "Barbearia",
    description: "Serviços, estilo e informações essenciais em uma apresentação sofisticada.",
    image: "/img/projeto-barbearia.webp",
    url: "https://barbearia-final-ten.vercel.app/",
  },
  {
    title: "Imobiliária Santos",
    category: "Imobiliária",
    description: "Imóveis e serviços apresentados com uma linguagem visual de alto padrão.",
    image: "/img/projeto-imobiliaria.webp",
    url: "https://imobiliaria-santos-alpha.vercel.app/",
  },
  {
    title: "Tecsystem",
    category: "Assistência técnica",
    description: "Soluções técnicas organizadas para transformar visitas em orçamentos.",
    image: "/img/projeto-tecsystem.webp",
    url: "https://site-tecsystem.vercel.app/",
  },
  {
    title: "PetLegal",
    category: "Pet shop",
    description: "Serviços, localização e informações importantes para tutores de animais.",
    image: "/img/projeto-petlegal.webp",
    url: "https://petlegal.vercel.app/",
  },
];
