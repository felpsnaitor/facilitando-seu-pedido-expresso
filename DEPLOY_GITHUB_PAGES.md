# Deploy no GitHub Pages

## 🚀 Configuração Rápida

Este guia ajuda a deployar o projeto no GitHub Pages após remover a dependência do Manus.

---

## 📋 Checklist de Migração

- [x] Removido `vite-plugin-manus-runtime` de devDependencies
- [x] Removido plugins Manus do `vite.config.ts`
- [x] Adicionado `base: "/facilitando-seu-pedido-expresso/"` no vite.config.ts
- [ ] Instalar dependências limpas
- [ ] Fazer push para GitHub
- [ ] Ativar GitHub Pages nas configurações do repositório
- [ ] Atualizar links de assets (se necessário)

---

## 🔧 Passo 1: Instalar Dependências

```bash
pnpm install
# ou
npm install
```

---

## 🏗️ Passo 2: Build Local (teste antes de fazer push)

```bash
pnpm build
# ou
npm run build
```

Isso gera os arquivos prontos em `dist/public/`

---

## 📤 Passo 3: Enviar para GitHub

### Se ainda não tem repositório:
```bash
git init
git add .
git commit -m "Initial commit: Remove Manus, prepare for GitHub Pages"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/facilitando-seu-pedido-expresso.git
git push -u origin main
```

### Se já tem repositório:
```bash
git add .
git commit -m "Remove Manus, prepare for GitHub Pages"
git push origin main
```

---

## ⚙️ Passo 4: Ativar GitHub Pages

1. Vá para **Settings** do repositório
2. Procure por **Pages** (lado esquerdo)
3. Em **Source**, selecione:
   - **Branch:** `main` (ou `gh-pages` se estiver usando ações)
   - **Folder:** `/ (root)` 
4. GitHub Pages irá procurar por `dist/public/index.html`

### Alternativa: Usar GitHub Actions (automático)

Crie `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup pnpm
        uses: pnpm/action-setup@v2
        with:
          version: 10

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 20
          cache: 'pnpm'

      - name: Install dependencies
        run: pnpm install

      - name: Build
        run: pnpm build

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist/public
          cname: seu-dominio.com  # Remova se não tiver domínio personalizado
```

---

## 🖼️ Passo 5: Assets/Imagens

### Antes (Manus):
```javascript
<img src="/manus-storage/image_a1b2c3d4.png" />
```

### Depois (GitHub Pages):
Você tem opções:

#### Opção A: Usar URLs de terceiros
```javascript
<img src="https://cdn.exemplo.com/image.png" />
```

#### Opção B: Colocar em `client/public/`
```javascript
<img src="/facilitando-seu-pedido-expresso/images/logo.png" />
```

#### Opção C: Importar como módulo
```javascript
import logo from '../assets/logo.png';
<img src={logo} />
```

---

## 📍 Verificar Configuração Base

**Importante:** O `base` deve corresponder ao caminho do repositório:

```typescript
// Se o repositório é: github.com/usuario/facilitando-seu-pedido-expresso
base: "/facilitando-seu-pedido-expresso/",

// Se o repositório é: github.com/usuario/usuario.github.io
base: "/",
```

---

## 🌐 Acessar o Site

Após ativar GitHub Pages:

- **Repo padrão:** `https://seu-usuario.github.io/facilitando-seu-pedido-expresso/`
- **Com domínio personalizado:** `https://seu-dominio.com/`

O site demora ~1 minuto para ativar na primeira vez.

---

## 🐛 Troubleshooting

| Problema | Solução |
|----------|---------|
| Página em branco | Verificar console (F12) para erros; verificar `base` no vite.config.ts |
| Assets faltando | Garantir que `base` está correto em todos os imports |
| GitHub Pages não ativa | Verificar se branch está correta (main/master); aguardar 1-2 min |
| Erro de CORS | Usar proxy ou enviar assets diretamente para o repositório |

---

## ✅ Testes Finais

1. **Build local:**
   ```bash
   pnpm build
   pnpm preview  # Simula produção localmente
   ```

2. **Teste as rotas:**
   - Home: `/facilitando-seu-pedido-expresso/`
   - Admin: `/facilitando-seu-pedido-expresso/admin`
   - Checkout: `/facilitando-seu-pedido-expresso/checkout`

3. **Teste no navegador:**
   - Abra DevTools (F12)
   - Procure por erros de 404 em assets
   - Teste WhatsApp integration

---

## 📚 Referências

- [GitHub Pages Docs](https://docs.github.com/pt/pages)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html#github-pages)
- [GitHub Actions for Deployment](https://github.com/peaceiris/actions-gh-pages)

---

## ❓ Dúvidas?

Se tiver problemas com:
- **Roteamento:** Wouter suporta hash routing em `App.tsx`
- **Variáveis de ambiente:** Adicione `.env.production` para dados de produção
- **Performance:** Ative gzip e minificação no Vite (já ativado por padrão)
