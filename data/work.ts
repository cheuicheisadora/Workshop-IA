/**
 * Itens da seção "Como eu trabalho".
 * Texto transcrito literalmente do Figma (frame 0:53, nós 0:232–0:249).
 * Conteúdo separado da apresentação: o componente só itera este array.
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
      "Na SAP, um teste A/B rodava com duas opções que não atendiam o usuário. Descartei as duas, desenhei uma terceira e ela virou feature.",
    title_en: "I start from the right question",
    description_en:
      "At SAP, an A/B test was running with two options that didn't serve the user. I dropped both, designed a third one, and it shipped as a feature.",
  },
  {
    id: "criterio",
    title: "Decido com critério, não por gosto",
    description:
      "No site da Agromai, testei uma direção mais densa e descartei. A versão limpa venceu no benchmark e elevou a conversão em cerca de 15%.",
    title_en: "I decide on criteria, not on taste",
    description_en:
      "On the Agromai website I tried a denser direction and dropped it. The clean version won the benchmark and lifted conversion by around 15%.",
  },
  {
    id: "ia-ferramenta",
    title: "Uso IA como ferramenta, não como atalho",
    description:
      "Uso Figma agent para atualizar tipografia e cores da biblioteca, e Claude para criar componentes. Ganho velocidade sem terceirizar a decisão.",
    title_en: "I use AI as a tool, not as a shortcut",
    description_en:
      "I use the Figma agent to update the library's typography and colors, and Claude to build components. I gain speed without outsourcing the decision.",
  },
  {
    id: "handoff",
    title: "Entrego pronto para desenvolvimento",
    description:
      "Mantenho o Design System, padronizei a spec de animações no handoff e prototipo em código. Menos retrabalho e conversa mais técnica com devs.",
    title_en: "I hand off ready for development",
    description_en:
      "I maintain the Design System, standardized the animation spec in the handoff, and prototype in code. Less rework and a more technical conversation with devs.",
  },
  {
    id: "usuario-real",
    title: "Desenho para quem realmente vai usar",
    description:
      "Produtores rurais com pouca familiaridade digital definiram contraste, alvos e densidade. Uni mapa e clima numa visualização só, e funcionou.",
    title_en: "I design for whoever will actually use it",
    description_en:
      "Farmers with little digital familiarity set the contrast, target sizes, and density. I merged map and weather into a single visualization, and it worked.",
  },
  {
    id: "acessibilidade",
    title: "Acessibilidade entra no começo, não no fim",
    description:
      "Sou certificada em design acessível. Contraste, tamanho de alvo e hierarquia são critério desde o wireframe, não correção depois do handoff.",
    title_en: "Accessibility comes at the start, not at the end",
    description_en:
      "I'm certified in accessible design. Contrast, target size, and hierarchy are criteria from the wireframe on, not a fix after handoff.",
  },
]
