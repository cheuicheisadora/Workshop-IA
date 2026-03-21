# Workshop-IA — Isadora

Projeto construído no Workshop de IA com Claude Code.

## Ferramentas Conectadas

| Ferramenta | Status | Como está conectada |
|------------|--------|---------------------|
| GitHub | ✅ Conectado | Repositório `cheuicheisadora/Workshop-IA` |
| Vercel | ✅ Conectado | Via MCP — deploy direto pelo Claude Code |
| Google (Gmail + Calendar) | ✅ Conectado | Via MCP |
| Neon (banco de dados) | ⏳ Pendente | Adicionar `DATABASE_URL` no `.env.local` |
| Google Cloud Console | ⏳ Pendente | Adicionar credenciais OAuth no `.env.local` |
| Resend (email) | ⏳ Pendente | Adicionar `RESEND_API_KEY` no `.env.local` |
| Stripe (pagamentos) | ⏳ Pendente | Adicionar chaves Stripe no `.env.local` |

## Configuração Inicial

1. Copie o arquivo de variáveis de ambiente:
   ```bash
   cp .env.example .env.local
   ```

2. Preencha as variáveis no `.env.local` com suas chaves de API

3. Instale as dependências (quando o projeto for criado):
   ```bash
   npm install
   ```

4. Rode localmente:
   ```bash
   npm run dev
   ```

## Como fazer deploy

Com o Vercel conectado via MCP, basta pedir ao Claude Code:
> "Faça o deploy do projeto na Vercel"
