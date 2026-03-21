import { signIn } from "@/lib/auth"
import { Button } from "@/components/ui/button"

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="w-full max-w-sm rounded-2xl border border-border bg-card p-8 shadow-sm text-center">
        <div
          className="mx-auto mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full text-xl"
          style={{ background: "var(--primary)" }}
        >
          IC
        </div>
        <h1 className="mb-1 text-xl font-semibold text-foreground">
          Área administrativa
        </h1>
        <p className="mb-8 text-sm text-muted-foreground">
          Acesso exclusivo para gerenciar o portfólio.
        </p>
        <form
          action={async () => {
            "use server"
            await signIn("google", { redirectTo: "/admin" })
          }}
        >
          <Button type="submit" className="w-full" size="lg">
            Entrar com Google
          </Button>
        </form>
      </div>
    </div>
  )
}
