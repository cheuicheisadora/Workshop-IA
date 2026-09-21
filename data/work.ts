/**
 * Itens da seção "Como eu trabalho".
 * Texto transcrito literalmente do que a Isadora escreveu.
 * Conteúdo separado da apresentação: o componente só itera este array.
 *
 * Os `id` são chave de lista e âncora, não aparecem na tela. Ficaram os
 * originais mesmo depois da virada de posicionamento para estratégia de
 * conteúdo: renomear não mudaria nada visível e só quebraria a identidade
 * dos itens entre renders.
 */

export type WorkPrinciple = {
  id: string
  title: string
  description: string
  /** Versão em inglês, servida quando o idioma corrente é "en". */
  title_en: string
  description_en: string
}

export const workPrinciples: WorkPrinciple[] = [
  {
    id: "pergunta-certa",
    title: "Começo pela pergunta certa",
    description:
      "Na SAP, minha função era pegar entregas técnicas complexas do Joule e transformar em narrativas que fizessem sentido pro mercado, não só documentar o que foi construído.",
    title_en: "I start with the right question",
    description_en:
      "At SAP, my role was to take complex technical deliverables from Joule and turn them into narratives that made sense to the market, not just document what was built.",
  },
  {
    id: "criterio",
    title: "Decido com critério, não por gosto",
    description:
      "No blog institucional da Agromai, testei diferentes direções de CTA e estrutura de SEO. A versão mais direta, sem jargão técnico, foi a que gerou mais engajamento de clientes.",
    title_en: "I decide with criteria, not preference",
    description_en:
      "On Agromai's institutional blog, I tested different CTA directions and SEO structures. The more direct version, free of technical jargon, generated the most client engagement.",
  },
  {
    id: "ia-ferramenta",
    title: "Uso IA como ferramenta, não como atalho",
    description:
      "Uso o Claude pra estruturar estratégia e calendário editorial, mantendo cadência e consistência entre canais. Ganho velocidade sem terceirizar a decisão de narrativa.",
    title_en: "I use AI as a tool, not a shortcut",
    description_en:
      "I use Claude to structure content strategy and editorial calendars, keeping cadence and consistency across channels. I gain speed without outsourcing the narrative decision.",
  },
  {
    id: "handoff",
    title: "Entrego pronto pra publicar",
    description:
      "Cuidei de tom de voz e diretrizes de marca num evento internacional em 4 países, incluindo alinhamento direto com agência externa. Menos retrabalho, mais consistência de marca em todos os pontos de contato.",
    title_en: "I deliver ready to publish",
    description_en:
      "I managed tone of voice and brand guidelines for an international event across 4 countries, including direct alignment with an external agency. Less rework, more brand consistency across every touchpoint.",
  },
  {
    id: "usuario-real",
    title: "Escrevo para quem realmente vai usar",
    description:
      "Produtores rurais com pouca familiaridade digital foram o público do blog institucional que criei na Agromai. Simplificar sem perder profundidade técnica foi o critério o tempo todo.",
    title_en: "I write for who will actually read it",
    description_en:
      "Rural producers with little digital familiarity were the audience for the institutional blog I created at Agromai. Simplifying without losing technical depth was the standard throughout.",
  },
  {
    id: "acessibilidade",
    title: "Consistência de marca entra no começo, não no fim",
    description:
      "Criei o brand guide do zero pro Torneo de Innovación e protegi tom de voz em todos os países envolvidos. Marca não se corrige depois, se define antes.",
    title_en: "Brand consistency comes first, not last",
    description_en:
      "I created the brand guide from scratch for Torneo de Innovación and protected tone of voice across every country involved. Brand isn't fixed after the fact, it's defined upfront.",
  },
]
