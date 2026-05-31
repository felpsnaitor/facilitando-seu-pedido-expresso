# Quick Start - Começar em 5 Minutos

## 🚀 Passo 1: Acessar o Site

Abra no navegador:
```
https://pedidoexpresso-zvgcexba.manus.space
```

## ⚙️ Passo 2: Configurar WhatsApp (2 minutos)

1. Clique em **"Configurações"** no rodapé
2. Insira seu número: `55 + DDD + número`
   - Exemplo: `5585987654321`
3. Clique em **"Salvar Número"**

**Pronto! Agora você receberá pedidos no WhatsApp.**

## 📝 Passo 3: Editar Cardápio (Opcional)

Se quiser adicionar/editar produtos:

1. Abra o arquivo: `client/src/data/menu.ts`
2. Adicione um novo produto:
```typescript
{
  id: "seu-produto",
  name: "Nome do Produto",
  description: "Descrição",
  price: 29.90,
  category: "hamburgueres",
  image: "https://url-da-imagem.jpg",
},
```
3. Salve o arquivo
4. Recarregue o site (F5)

## 🧪 Passo 4: Testar

1. Adicione um produto ao carrinho
2. Clique no ícone do carrinho
3. Clique em "Finalizar Pedido"
4. Preencha os dados
5. Clique em "Enviar para WhatsApp"
6. Confirme o pedido no WhatsApp

## 📚 Documentação Completa

- **MANUAL_COMPLETO.md** - Guia detalhado para editar cardápio e configurar
- **DOCUMENTACAO_TECNICA.md** - Documentação técnica do sistema
- **GUIA_USO.md** - Guia de uso para clientes

---

**Desenvolvido com ❤️ para sua hamburgueria**
