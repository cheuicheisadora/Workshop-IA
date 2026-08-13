/**
 * Itens da seção "Como eu trabalho".
 * Texto transcrito literalmente do Figma (frame 0:53, nós 0:232–0:249).
 * Conteúdo separado da apresentação: o componente só itera este array.
 */

export type WorkPrinciple = {
  id: string
  title: string
  description: string
}

export const workPrinciples: WorkPrinciple[] = [
  {
    id: "pergunta-certa",
    title: "Começo pela pergunta certa",
    description:
      "Na SAP, um teste A/B rodava com duas opções que não atendiam o usuário. Descartei as duas, desenhei uma terceira e ela virou feature.",
  },
  {
    id: "criterio",
    title: "Decido com critério, não por gosto",
    description:
      "No site da Agromai, testei uma direção mais densa e descartei. A versão limpa venceu no benchmark e trouxe cerca de 10% mais tráfego.",
  },
  {
    id: "ia-ferramenta",
    title: "Uso IA como ferramenta, não como atalho",
    description:
      "Uso Figma agent para atualizar tipografia e cores da biblioteca, e Claude para criar componentes. Ganho velocidade sem terceirizar a decisão.",
  },
  {
    id: "handoff",
    title: "Entrego pronto para desenvolvimento",
    description:
      "Mantenho o Design System, padronizei a spec de animações no handoff e prototipo em código. Menos retrabalho e conversa mais técnica com devs.",
  },
  {
    id: "usuario-real",
    title: "Desenho para quem realmente vai usar",
    description:
      "Produtores rurais com pouca familiaridade digital definiram contraste, alvos e densidade. Uni mapa e clima numa visualização só, e funcionou.",
  },
  {
    id: "acessibilidade",
    title: "Acessibilidade entra no começo, não no fim",
    description:
      "Sou certificada em design acessível. Contraste, tamanho de alvo e hierarquia são critério desde o wireframe, não correção depois do handoff.",
  },
]
