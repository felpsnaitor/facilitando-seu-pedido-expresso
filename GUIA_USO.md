# Facilitando Seu Pedido Expresso - Guia de Uso

## 📱 Visão Geral

**Facilitando Seu Pedido Expresso** é um web app moderno para hamburgueria que permite aos clientes fazer pedidos diretamente pelo WhatsApp. O sistema é intuitivo, rápido e totalmente responsivo.

## 🚀 Como Usar

### Para Clientes

1. **Acessar o Site**: Abra o link do web app no navegador
2. **Navegar pelo Cardápio**: Use as abas para explorar categorias (Hambúrgueres, Acompanhamentos, Bebidas, Combos)
3. **Adicionar Itens**: Clique em "Adicionar" nos produtos desejados e ajuste a quantidade
4. **Visualizar Carrinho**: Clique no ícone do carrinho (canto superior direito) para ver o resumo
5. **Finalizar Pedido**: Clique em "Finalizar Pedido" para preencher seus dados
6. **Enviar para WhatsApp**: Complete o formulário e clique em "Enviar para WhatsApp"
7. **Confirmar no WhatsApp**: O WhatsApp abrirá com seu pedido pré-preenchido. Envie a mensagem!

### Para Administradores

#### Configurar Número de WhatsApp

1. **Acessar Configurações**: Clique em "Configurações" no rodapé da página inicial
2. **Inserir Número**: Digite seu número de WhatsApp no formato: **55 + DDD + número**
   - Exemplo: `5585987654321` (55 = Brasil, 85 = Ceará, 987654321 = seu número)
3. **Salvar**: Clique em "Salvar Número"

**Onde encontrar seu número:**
- Abra WhatsApp
- Vá para Configurações → Sobre
- Seu número está listado no topo
- Copie apenas os dígitos

#### Editar Cardápio

Para adicionar, remover ou editar produtos, você precisa acessar os arquivos do projeto:

**Arquivo**: `/client/src/data/menu.ts`

Exemplo de produto:
```typescript
{
  id: "burger-classico",
  name: "Hambúrguer Clássico",
  description: "Pão brioche, carne 180g, queijo cheddar, alface, tomate e molho especial",
  price: 28.90,
  category: "hamburgueres",
  image: "https://...",
  badge: "mais-vendido", // Opcional: "novo", "mais-vendido", "promocao"
}
```

**Categorias disponíveis:**
- `hamburgueres`
- `acompanhamentos`
- `bebidas`
- `combos`

**Badges (opcional):**
- `novo` - Marca como novo
- `mais-vendido` - Marca como mais vendido
- `promocao` - Marca como promoção

## 🎨 Design

O app segue o estilo **Modern Fast-Casual** com:
- **Cores**: Laranja vibrante (#FF6B35) para ação, branco puro para clareza
- **Tipografia**: Poppins para títulos, Inter para corpo
- **Animações**: Suaves e responsivas (300ms)
- **Responsividade**: Totalmente adaptado para mobile, tablet e desktop

## 📊 Fluxo de Pedido

```
Cliente acessa site
    ↓
Navega pelo cardápio
    ↓
Adiciona itens ao carrinho
    ↓
Clica em "Finalizar Pedido"
    ↓
Preenche dados (nome, telefone, endereço, observações)
    ↓
Clica em "Enviar para WhatsApp"
    ↓
WhatsApp abre com pedido pré-preenchido
    ↓
Cliente envia mensagem
    ↓
Você recebe o pedido no WhatsApp!
```

## 💾 Dados Armazenados

O app usa **localStorage** do navegador para:
- Carrinho de compras (temporário, limpo ao finalizar pedido)
- Número de WhatsApp da hamburgueria (persistente)

**Nenhum dado é enviado para servidores externos** - tudo funciona localmente no navegador do cliente.

## 🔧 Personalização

### Alterar Nome da Hamburgueria

Edite em `/client/src/pages/Home.tsx`:
```tsx
<h1 className="text-2xl font-bold text-gray-900">
  Facilitando Seu Pedido Expresso
</h1>
```

### Alterar Cores

Edite em `/client/src/index.css`:
```css
:root {
  --primary: #FF6B35; /* Cor laranja principal */
  --primary-foreground: #FFFFFF; /* Cor do texto */
}
```

### Alterar Imagens

Substitua as URLs das imagens em `/client/src/data/menu.ts` e `/client/src/pages/Home.tsx`

## 📱 Compatibilidade

- ✅ Chrome, Firefox, Safari, Edge
- ✅ iOS Safari
- ✅ Android Chrome
- ✅ Tablets e desktops

## 🆘 Troubleshooting

**P: O WhatsApp não abre ao clicar em "Enviar para WhatsApp"**
- R: Certifique-se de que o número foi configurado corretamente em Configurações
- R: Verifique se o WhatsApp Web está disponível em seu navegador

**P: Os produtos não aparecem**
- R: Verifique se o arquivo `/client/src/data/menu.ts` está correto
- R: Recarregue a página (Ctrl+F5 ou Cmd+Shift+R)

**P: As imagens não carregam**
- R: Verifique se as URLs das imagens estão corretas
- R: Certifique-se de que as imagens são acessíveis publicamente

## 📞 Suporte

Para mais informações ou suporte, entre em contato com o desenvolvedor do projeto.

---

**Desenvolvido com ❤️ para sua hamburgueria**
