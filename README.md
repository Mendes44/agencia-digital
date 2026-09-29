# Dev Mendes

Site institucional da Dev Mendes, desenvolvido com foco em conversão, acessibilidade, SEO e desempenho.

## Stack

- Next.js 16 com App Router e renderização estática
- React 19 e TypeScript
- Tailwind CSS 4
- Motion carregado sob demanda
- Lucide React
- Geist auto-hospedada

## Requisitos

- Node.js 24.21.0
- npm 11 ou superior

## Comandos

```bash
npm install
npm run dev
npm run lint
npm run build
```

## Estrutura ativa

- `app/`: rotas, metadados, sitemap, robots e estilos globais
- `components/`: componentes das páginas
- `lib/`: configurações e dados compartilhados
- `public/`: imagens e outros arquivos públicos
- `Backup_old/`: versão estática anterior, mantida apenas como arquivo

O site local fica disponível em `http://localhost:3000`. O domínio canônico de produção é `https://www.devmendes.com.br`.

## Rotas

- `/`: página principal
- `/projetos`: portfólio completo
- `/privacidade`: política de privacidade
- `/robots.txt`: diretivas para rastreadores
- `/sitemap.xml`: mapa XML gerado pelo Next.js

As antigas URLs `.html` continuam redirecionando para as rotas atuais para preservar links e sinais de SEO.
