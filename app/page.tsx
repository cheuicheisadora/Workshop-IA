import { Backdrop } from "@/components/decor/backdrop"
import { SiteHeader } from "@/components/sections/site-header"
import { Hero } from "@/components/sections/hero"
import { Projects } from "@/components/sections/projects"
import { HowIWork } from "@/components/sections/how-i-work"
import { Contact } from "@/components/sections/contact"
import { SiteFooter } from "@/components/sections/site-footer"

export default function HomePage() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Backdrop />
      <SiteHeader />
      <main id="conteudo" className="flex-1">
        <Hero />
        <Projects />
        <HowIWork />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  )
}
