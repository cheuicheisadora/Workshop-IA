import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * O idioma vive na URL (/pt e /en), então a raiz precisa escolher um.
   *
   * 307, e não 308: é redirecionamento que pode mudar de ideia — se um dia o
   * site passar a olhar o Accept-Language do visitante, um 308 já estaria
   * gravado em cache no navegador de quem visitou antes.
   *
   * O segundo par preserva os endereços antigos dos cases, que circulam em
   * links já enviados. Esse é permanente: /projetos/x não volta a existir.
   */
  async redirects() {
    return [
      { source: "/", destination: "/pt", permanent: false },
      {
        source: "/projetos/:slug",
        destination: "/pt/projetos/:slug",
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
