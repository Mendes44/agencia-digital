import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de privacidade",
  description: "Saiba como a Dev Mendes utiliza os dados enviados pelos canais de contato.",
  alternates: { canonical: "/privacidade" },
};

const sections = [
  ["Quais dados são solicitados", "Os canais de contato podem solicitar nome, telefone ou e-mail, tipo de negócio, serviço de interesse e uma descrição do objetivo do projeto."],
  ["Como os dados são utilizados", "As informações são usadas exclusivamente para responder à solicitação, preparar uma proposta e dar continuidade ao atendimento solicitado por você."],
  ["Envio pelo WhatsApp", "Ao iniciar uma conversa, seus dados passam a ser tratados também pelo WhatsApp, conforme os termos e a política de privacidade da própria plataforma."],
  ["Armazenamento e compartilhamento", "O site não vende seus dados. As informações podem permanecer no histórico do canal escolhido para o atendimento e não são compartilhadas, salvo quando necessário para executar um serviço solicitado ou cumprir obrigação legal."],
  ["Medição de campanhas", "Ferramentas de análise e publicidade podem ser utilizadas para medir desempenho. Quando houver cookies não essenciais, o tratamento e os controles aplicáveis serão informados ao visitante."],
];

export default function PrivacyPage() {
  return (
    <main id="conteudo" className="min-h-screen bg-slate-50 px-5 py-20 dark:bg-[#050914] sm:px-8 sm:py-24">
      <article className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-7 shadow-xl dark:border-white/10 dark:bg-[#0b1424] dark:shadow-2xl sm:p-12">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-600 dark:text-cyan-300">Transparência e segurança</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight text-slate-950 dark:text-white sm:text-5xl">Política de privacidade</h1>
        <p className="mt-5 text-sm leading-7 text-slate-600 dark:text-slate-400">Última atualização: 24 de setembro de 2026.</p>

        <div className="mt-12 space-y-10">
          {sections.map(([title, content]) => (
            <section key={title}>
              <h2 className="text-xl font-black text-slate-950 dark:text-white">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">{content}</p>
            </section>
          ))}
          <section>
            <h2 className="text-xl font-black text-slate-950 dark:text-white">Contato e solicitações</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
              Para solicitar informações, correção ou exclusão de dados enviados durante o atendimento,
              escreva para{" "}
              <a className="font-semibold text-blue-600 hover:text-blue-500 dark:text-cyan-300 dark:hover:text-cyan-200" href="mailto:marcosmendes.dev@gmail.com">
                marcosmendes.dev@gmail.com
              </a>
              .
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
