/**
 * Números da gestão de redes sociais da Chalé Atelier.
 *
 * Todos os valores vieram do relatório da Isadora e estão aqui exatamente
 * como foram passados — nada é calculado em tempo de render. Foi de
 * propósito: número de relatório não se deriva, se transcreve. Se um dia
 * algum valor for atualizado, ele muda aqui e em nenhum outro lugar.
 *
 * As duas grafias existem porque a pontuação numérica muda de idioma:
 * 92.900 e R$ 226,18 em português viram 92,900 e R$ 226.18 em inglês.
 */

export type Metrica = {
  /** Valor já formatado, em português. */
  valor: string
  /** Valor já formatado, em inglês. */
  valorEn: string
  rotulo: string
  rotuloEn: string
}

export type Fatia = {
  rotulo: string
  rotuloEn: string
  /** Percentual da barra, de 0 a 100. */
  pct: number
  /** Rótulo do valor ao lado da fatia. */
  valor: string
  valorEn?: string
}

/** Contexto da conta, antes de qualquer número de campanha. */
export const conta = {
  seguidores: "900",
  seguidoresEn: "900",
  rotulo: "seguidores no Instagram",
  rotuloEn: "Instagram followers",
}

/** Campanha principal de Meta Ads: os quatro números de resultado. */
export const campanhaResultado: Metrica[] = [
  { valor: "525", valorEn: "525", rotulo: "novos seguidores", rotuloEn: "new followers" },
  { valor: "2.484", valorEn: "2,484", rotulo: "visitas ao perfil", rotuloEn: "profile visits" },
  { valor: "65.679", valorEn: "65,679", rotulo: "visualizações", rotuloEn: "views" },
  { valor: "748", valorEn: "748", rotulo: "toques em links externos", rotuloEn: "external link taps" },
]

/** Campanha principal: o que custou e o alcance que teve. */
export const campanhaCusto: Metrica[] = [
  { valor: "R$ 226,18", valorEn: "R$ 226.18", rotulo: "investidos", rotuloEn: "invested" },
  { valor: "R$ 0,11", valorEn: "R$ 0.11", rotulo: "por visita ao perfil", rotuloEn: "per profile visit" },
  { valor: "18,9 mil", valorEn: "18.9k", rotulo: "contas alcançadas", rotuloEn: "accounts reached" },
]

/** Segunda campanha, de verba menor. */
export const campanhaSecundaria: Metrica[] = [
  { valor: "118", valorEn: "118", rotulo: "visitas ao perfil", rotuloEn: "profile visits" },
  { valor: "22", valorEn: "22", rotulo: "seguidores", rotuloEn: "followers" },
  { valor: "R$ 34,04", valorEn: "R$ 34.04", rotulo: "investidos", rotuloEn: "invested" },
  { valor: "R$ 0,29", valorEn: "R$ 0.29", rotulo: "por visita ao perfil", rotuloEn: "per profile visit" },
]

/** Desempenho orgânico do período. */
export const organico: Metrica[] = [
  { valor: "92.900", valorEn: "92,900", rotulo: "visualizações", rotuloEn: "views" },
  { valor: "18.954", valorEn: "18,954", rotulo: "contas alcançadas", rotuloEn: "accounts reached" },
  { valor: "3.757", valorEn: "3,757", rotulo: "de atividade no perfil", rotuloEn: "profile activity" },
]

/** Total de interações orgânicas e sua composição. */
export const interacoes = {
  total: "864",
  totalEn: "864",
  rotulo: "interações",
  rotuloEn: "interactions",
  /* As barras são proporcionais ao maior item (551 curtidas), não à soma:
     com 15 comentários contra 551 curtidas, uma escala sobre o total deixaria
     as três últimas fatias invisíveis. */
  fatias: [
    { rotulo: "Curtidas", rotuloEn: "Likes", pct: 100, valor: "551" },
    { rotulo: "Compartilhamentos", rotuloEn: "Shares", pct: 39.9, valor: "220" },
    { rotulo: "Salvamentos", rotuloEn: "Saves", pct: 13.6, valor: "75" },
    { rotulo: "Comentários", rotuloEn: "Comments", pct: 2.7, valor: "15" },
  ] as Fatia[],
}

/** Post orgânico de melhor desempenho. */
export const postDestaque: Metrica[] = [
  { valor: "1.633", valorEn: "1,633", rotulo: "visualizações", rotuloEn: "views" },
  { valor: "707", valorEn: "707", rotulo: "contas alcançadas", rotuloEn: "accounts reached" },
  { valor: "37", valorEn: "37", rotulo: "curtidas", rotuloEn: "likes" },
  { valor: "6", valorEn: "6", rotulo: "comentários", rotuloEn: "comments" },
  { valor: "3", valorEn: "3", rotulo: "salvamentos", rotuloEn: "saves" },
]

/**
 * De onde veio o tráfego do post de destaque.
 *
 * Somam 98,9%; o resto do relatório não foi discriminado, então a barra fica
 * com esse vão em aberto em vez de arredondar para 100.
 */
export const origemTrafego: Fatia[] = [
  { rotulo: "Perfil", rotuloEn: "Profile", pct: 60.9, valor: "60,9%", valorEn: "60.9%" },
  { rotulo: "Feed", rotuloEn: "Feed", pct: 22.2, valor: "22,2%", valorEn: "22.2%" },
  { rotulo: "Stories", rotuloEn: "Stories", pct: 15.8, valor: "15,8%", valorEn: "15.8%" },
]
