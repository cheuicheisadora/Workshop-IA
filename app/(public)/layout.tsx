/**
 * Isola as páginas de case no tema claro anterior.
 *
 * A home já está no design escuro novo; as páginas de /projetos/* ainda não
 * foram migradas. Sem este isolamento elas herdariam a paleta escura e
 * ficariam com texto escuro sobre fundo escuro.
 *
 * Remover este layout (e o bloco .legacy-theme em globals.css) quando as
 * páginas de case forem redesenhadas.
 */
export default function PublicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="legacy-theme">{children}</div>
}
