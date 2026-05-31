# Manual Completo - Facilitando Seu Pedido Expresso

## 📚 Índice
1. [Configuração Inicial](#configuração-inicial)
2. [Editar Cardápio](#editar-cardápio)
3. [Configurar WhatsApp](#configurar-whatsapp)
4. [Personalizar Aparência](#personalizar-aparência)
5. [FAQ - Perguntas Frequentes](#faq)

---

## 🔧 Configuração Inicial

### Primeiro Acesso

1. **Abra o site** no navegador
2. **Clique em "Configurações"** no rodapé da página
3. **Insira seu número de WhatsApp** no formato: `55 + DDD + número`
4. **Clique em "Salvar Número"**

Pronto! Agora você está pronto para receber pedidos.

---

## 📝 Editar Cardápio

### Localizar o Arquivo

O cardápio está no arquivo: **`client/src/data/menu.ts`**

### Estrutura de um Produto

Cada produto segue este formato:

```typescript
{
  id: "burger-classico",                    // Identificador único (sem espaços)
  name: "Hambúrguer Clássico",             // Nome do produto
  description: "Pão brioche, carne 180g...", // Descrição
  price: 28.90,                             // Preço em reais
  category: "hamburgueres",                 // Categoria
  image: "https://...",                     // URL da imagem
  badge: "mais-vendido",                    // Opcional: novo, mais-vendido, promocao
}
```

### Categorias Disponíveis

| Categoria | ID |
|-----------|-----|
| Hambúrgueres | `hamburgueres` |
| Acompanhamentos | `acompanhamentos` |
| Bebidas | `bebidas` |
| Combos | `combos` |

### Badges (Etiquetas)

| Badge | ID | Cor |
|-------|-----|-----|
| Novo | `novo` | Azul |
| Mais Vendido | `mais-vendido` | Laranja |
| Promoção | `promocao` | Vermelho |

### Exemplo: Adicionar um Novo Produto

**Passo 1**: Abra o arquivo `client/src/data/menu.ts`

**Passo 2**: Localize a seção de hambúrgueres:
```typescript
// Hambúrgueres
{
  id: "burger-classico",
  name: "Hambúrguer Clássico",
  // ... resto do produto
},
```

**Passo 3**: Adicione seu novo produto após o último:
```typescript
{
  id: "burger-especial",
  name: "Hambúrguer Especial",
  description: "Pão brioche, carne 200g, queijo provolone, bacon, cebola caramelizada",
  price: 35.90,
  category: "hamburgueres",
  image: "https://sua-url-da-imagem.com/burger.jpg",
  badge: "novo",
},
```

**Passo 4**: Salve o arquivo (Ctrl+S ou Cmd+S)

**Passo 5**: Recarregue o site no navegador (F5 ou Cmd+R)

### Exemplo: Editar um Produto Existente

Para mudar o preço do "Hambúrguer Clássico":

```typescript
// ANTES
{
  id: "burger-classico",
  name: "Hambúrguer Clássico",
  description: "Pão brioche, carne 180g, queijo cheddar, alface, tomate e molho especial",
  price: 28.90,  // ← Preço antigo
  // ...
}

// DEPOIS
{
  id: "burger-classico",
  name: "Hambúrguer Clássico",
  description: "Pão brioche, carne 180g, queijo cheddar, alface, tomate e molho especial",
  price: 32.90,  // ← Preço novo
  // ...
}
```

### Exemplo: Remover um Produto

Simplesmente delete o bloco inteiro do produto. Por exemplo, para remover o "Vegetariano":

```typescript
// REMOVA ESTE BLOCO INTEIRO:
{
  id: "burger-vegetariano",
  name: "Vegetariano",
  description: "Pão brioche, hambúrguer de grão de bico, queijo, alface, tomate, abacate",
  price: 26.90,
  category: "hamburgueres",
  image: "https://...",
},
```

### Dicas Importantes

**✅ Faça:**
- Use `id` único e sem espaços (ex: `burger-bacon-especial`)
- Use preços em formato decimal (ex: `28.90`)
- Use URLs de imagens válidas e acessíveis
- Mantenha descrições concisas (máx. 80 caracteres)

**❌ Não Faça:**
- Não deixe campos vazios
- Não use caracteres especiais no `id` (apenas letras, números e hífen)
- Não coloque vírgula após o último produto da lista
- Não altere o nome das categorias

---

## 📱 Configurar WhatsApp

### Método 1: Via Interface (Recomendado)

1. **Acesse o site** da hamburgueria
2. **Clique em "Configurações"** no rodapé
3. **Insira seu número** no formato: `55 + DDD + número`
   - Exemplo: `5585987654321`
   - 55 = Brasil
   - 85 = DDD (Ceará)
   - 987654321 = seu número
4. **Clique em "Salvar Número"**
5. **Pronto!** Os pedidos agora virão para este número

### Método 2: Como Encontrar Seu Número de WhatsApp

1. **Abra o WhatsApp** no seu celular
2. **Vá para Configurações** (ícone de engrenagem)
3. **Clique em "Sobre"**
4. **Seu número está no topo** da tela
5. **Copie apenas os dígitos** (sem parênteses ou hífens)

### Método 3: Editar Diretamente no Código

Se preferir, você pode editar o número padrão no arquivo `client/src/components/WhatsAppConfig.tsx`:

```typescript
// Encontre esta linha:
const whatsappNumber = "5585987654321"; // Padrão

// Mude para seu número:
const whatsappNumber = "55SEUDDD9XXXXXXXX";
```

### Testando a Configuração

1. **Adicione um produto** ao carrinho
2. **Clique em "Finalizar Pedido"**
3. **Preencha os dados** (nome, telefone, endereço)
4. **Clique em "Enviar para WhatsApp"**
5. **O WhatsApp Web deve abrir** com seu pedido pré-preenchido
6. **Envie a mensagem** para confirmar

Se o WhatsApp não abrir, verifique se:
- O número foi configurado corretamente
- Você tem acesso ao WhatsApp Web
- Seu navegador permite abrir novas abas

---

## 🎨 Personalizar Aparência

### Mudar Cores

**Arquivo**: `client/src/index.css`

Encontre a seção `:root {` e altere:

```css
:root {
  --primary: #FF6B35;              /* Cor laranja principal */
  --primary-foreground: #FFFFFF;   /* Cor do texto */
  --chart-1: #FF8C42;              /* Cor secundária */
  --chart-2: #FF6B35;              /* Cor terciária */
  /* ... outras cores */
}
```

**Cores Recomendadas:**
- Laranja: `#FF6B35` (atual)
- Vermelho: `#E63946`
- Verde: `#2ECC71`
- Azul: `#3498DB`
- Roxo: `#9B59B6`

### Mudar Nome da Hamburgueria

**Arquivo**: `client/src/pages/Home.tsx`

Encontre:
```tsx
<h1 className="text-2xl font-bold text-gray-900">
  Facilitando Seu Pedido Expresso
</h1>
```

E mude para:
```tsx
<h1 className="text-2xl font-bold text-gray-900">
  Nome da Sua Hamburgueria
</h1>
```

### Mudar Descrição

**Arquivo**: `client/src/pages/Home.tsx`

Encontre:
```tsx
<p className="text-gray-600">Hambúrgueres Artesanais</p>
```

E mude para:
```tsx
<p className="text-gray-600">Sua descrição aqui</p>
```

### Mudar Imagem do Hero (Topo)

**Arquivo**: `client/src/pages/Home.tsx`

Encontre:
```tsx
<img
  src="https://d2xsxph8kpxj0f.cloudfront.net/.../hero-hamburgueria-4ynxXPuMp4tffXCTDgXrje.webp"
  alt="Hambúrguer Premium"
/>
```

E mude a URL para sua imagem:
```tsx
<img
  src="https://sua-url-da-imagem.com/seu-banner.jpg"
  alt="Hambúrguer Premium"
/>
```

---

## ❓ FAQ - Perguntas Frequentes

### P: Como adicionar uma nova categoria de produtos?

**R**: Edite o arquivo `client/src/data/menu.ts` e adicione uma nova categoria no array `categories`:

```typescript
export const categories = [
  { id: "hamburgueres", label: "Hambúrgueres" },
  { id: "acompanhamentos", label: "Acompanhamentos" },
  { id: "bebidas", label: "Bebidas" },
  { id: "combos", label: "Combos" },
  { id: "sobremesas", label: "Sobremesas" },  // ← Nova categoria
];
```

Depois, adicione produtos com `category: "sobremesas"`.

### P: O WhatsApp não abre quando clico em "Enviar para WhatsApp"

**R**: Verifique:
1. Se o número foi configurado corretamente (sem espaços ou caracteres especiais)
2. Se você está usando um navegador moderno (Chrome, Firefox, Safari, Edge)
3. Se o WhatsApp Web está disponível no seu país
4. Se você tem permissão para abrir novas abas no navegador

### P: Como mudar as imagens dos produtos?

**R**: Cada produto tem um campo `image` com uma URL. Você pode:
1. Usar uma URL de imagem existente na internet
2. Fazer upload em um serviço de hospedagem de imagens (Imgur, Cloudinary, etc.)
3. Copiar a URL e colar no campo `image`

### P: Posso adicionar mais de 4 categorias?

**R**: Sim! Edite `client/src/data/menu.ts` e adicione quantas categorias quiser no array `categories`.

### P: Como faço backup do meu cardápio?

**R**: Faça uma cópia do arquivo `client/src/data/menu.ts` e guarde em um local seguro (seu computador, Google Drive, etc.).

### P: Posso mudar a taxa de entrega?

**R**: Sim! Edite o arquivo `client/src/pages/Checkout.tsx` e procure por:
```tsx
<span className="font-semibold text-green-600">Grátis</span>
```

Mude para:
```tsx
<span className="font-semibold text-green-600">R$ 5.00</span>
```

### P: Como adicionar um cupom de desconto?

**R**: Isso requer edição mais avançada. Você precisaria:
1. Adicionar um campo de cupom no checkout
2. Criar uma lista de cupons válidos
3. Calcular o desconto no total

Recomendo solicitar ajuda de um desenvolvedor para isso.

### P: Posso usar o app em múltiplos números de WhatsApp?

**R**: Atualmente, o app suporta apenas um número. Para múltiplos números, você precisaria de uma modificação no código.

### P: Os dados dos clientes são salvos?

**R**: Não. O app funciona 100% localmente no navegador do cliente. Nenhum dado é enviado para servidores. Os dados são apagados após o pedido ser enviado para o WhatsApp.

---

## 📞 Suporte

Se tiver dúvidas ou problemas:
1. Verifique este manual
2. Consulte a seção FAQ
3. Solicite ajuda ao desenvolvedor do projeto

**Desenvolvido com ❤️ para sua hamburgueria**
