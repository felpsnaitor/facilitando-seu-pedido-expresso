# Brainstorm de Design - Facilitando Seu Pedido Expresso

## Análise do Site de Referência
O site de referência (pedir.delivery) apresenta:
- **Layout**: Cardápio em abas (Combos, Pizzas, Bebidas) com scroll vertical
- **Componentes**: Cards de produtos com imagem, nome, descrição e preço
- **Navegação**: Bottom navigation com Menu, Pedidos, Avaliações, Perfil
- **CTA**: Botões de adicionar ao carrinho integrados nos cards
- **Fluxo**: Seleção de produtos → Carrinho → Checkout → Envio via WhatsApp

---

## Resposta 1: Modern Fast-Casual (Probabilidade: 0.08)

### Design Movement
**Modern Fast-Casual** - Inspirado em aplicativos de food delivery premium como Uber Eats e iFood, com foco em velocidade, clareza e confiança.

### Core Principles
1. **Hierarquia Clara**: Produtos em destaque com imagens grandes, preço bem visível
2. **Fluxo Intuitivo**: Mínimos cliques do cardápio ao WhatsApp
3. **Feedback Imediato**: Animações suaves confirmam ações do usuário
4. **Confiança Visual**: Cores quentes (laranja/vermelho) que remetem a apetite

### Color Philosophy
- **Primária**: Laranja vibrante (#FF6B35) - energia, apetite, ação
- **Secundária**: Branco puro (#FFFFFF) - limpeza, confiança
- **Acentos**: Verde suave (#2ECC71) - confirmação, sucesso
- **Neutro**: Cinza escuro (#2C3E50) - texto, hierarquia

**Reasoning**: Cores quentes estimulam apetite e urgência; branco transmite limpeza; verde confirma ações positivas.

### Layout Paradigm
- **Hero Section**: Imagem grande da hamburgueria com CTA destacado
- **Cardápio em Abas**: Categorias (Hambúrgueres, Acompanhamentos, Bebidas, Combos)
- **Grid de Produtos**: 2 colunas em mobile, 3 em desktop
- **Carrinho Flutuante**: Badge com contador fixo no topo/rodapé

### Signature Elements
1. **Cards com Sombra Suave**: Profundidade sem exagero
2. **Badges de Promoção**: "Novo", "Mais Vendido", "Promoção"
3. **Ícones Minimalistas**: Lucide-react para adicionar/remover itens

### Interaction Philosophy
- **Hover**: Cards elevam ligeiramente (transform: translateY(-4px))
- **Click**: Botão "Adicionar" muda cor com feedback tátil
- **Carrinho**: Animação de entrada suave quando aberto
- **Confirmação**: Toast verde aparece quando item é adicionado

### Animation
- **Entrada de Produtos**: Fade-in + slide-up (300ms ease-out)
- **Hover de Card**: Scale(1.02) com sombra aumentada (150ms)
- **Adicionar ao Carrinho**: Pulse suave + toast (200ms)
- **Abrir Carrinho**: Drawer desliza de baixo (250ms cubic-bezier)

### Typography System
- **Display**: Poppins Bold (títulos, nome da hamburgueria)
- **Heading**: Poppins SemiBold (categorias, nomes de produtos)
- **Body**: Inter Regular (descrições, preços)
- **Caption**: Inter Medium (badges, quantidades)

---

## Resposta 2: Artisanal Craft (Probabilidade: 0.07)

### Design Movement
**Artisanal Craft** - Inspirado em branding de hamburguerias independentes, com foco em autenticidade, handmade e comunidade local.

### Core Principles
1. **Autenticidade**: Tipografia com personalidade, cores terrosas
2. **Handmade Feel**: Elementos com imperfeições controladas, texturas
3. **Storytelling**: Cada produto tem uma história, não apenas um preço
4. **Comunidade**: Destaque para avaliações, fotos de clientes

### Color Philosophy
- **Primária**: Marrom Quente (#8B4513) - terra, confiança, artesanato
- **Secundária**: Creme (#F5E6D3) - acolhimento, nostalgia
- **Acentos**: Vermelho Tijolo (#C1440E) - paixão, qualidade
- **Neutro**: Cinza Carvão (#3E3E3E) - sobriedade

**Reasoning**: Cores terrosas remetem a ingredientes naturais; creme transmite acolhimento; vermelho tijolo evoca fogo de churrasco.

### Layout Paradigm
- **Assimétrico**: Imagem grande à esquerda, descrição à direita
- **Seções Modulares**: Cada categoria com sua própria "zona"
- **Destaques Artesanais**: Imagens de processo, ingredientes, chef
- **Rodapé Comunitário**: Avaliações, histórias de clientes

### Signature Elements
1. **Texturas Sutis**: Padrão de madeira ou papel kraft no fundo
2. **Tipografia Customizada**: Fonte com serifa para títulos
3. **Ícones Desenhados à Mão**: Estilo ilustrativo, não minimalista

### Interaction Philosophy
- **Exploração**: Usuário descobre produtos ao scrollar
- **Engajamento**: Cliques revelam histórias, não apenas adicionam ao carrinho
- **Confiança**: Avaliações visíveis antes de decidir

### Animation
- **Scroll Reveal**: Elementos aparecem com efeito parallax
- **Hover**: Imagem muda ligeiramente, descrição se expande
- **Adicionar**: Confete suave cai (celebração artesanal)
- **Transição**: Fade longo (400ms) para sensação contemplativa

### Typography System
- **Display**: Playfair Display Bold (títulos, nome da hamburgueria)
- **Heading**: Crimson Text SemiBold (categorias)
- **Body**: Lora Regular (descrições, histórias)
- **Caption**: Lora Italic (notas, ingredientes)

---

## Resposta 3: Minimalist Speed (Probabilidade: 0.06)

### Design Movement
**Minimalist Speed** - Inspirado em apps de pedido ultrarrápidos como DoorDash, com foco absoluto em eficiência, clareza e velocidade.

### Core Principles
1. **Máxima Clareza**: Apenas o essencial, sem distrações
2. **Velocidade**: Cada ação leva ao próximo passo naturalmente
3. **Consistência**: Padrões repetidos, previsibilidade
4. **Acessibilidade**: Alto contraste, tipografia grande

### Color Philosophy
- **Primária**: Azul Profundo (#1E3A8A) - confiança, profissionalismo
- **Secundária**: Branco (#FFFFFF) - espaço, clareza
- **Acentos**: Verde Limpo (#10B981) - ação, confirmação
- **Neutro**: Cinza Leve (#F3F4F6) - separação, hierarquia

**Reasoning**: Azul transmite confiança; branco maximiza clareza; verde é ação universal; cinza organiza sem distrair.

### Layout Paradigm
- **Vertical Linear**: Cardápio como lista, não grid
- **Cards Minimalistas**: Apenas imagem, nome, preço, botão
- **Carrinho Integrado**: Resumo sempre visível no topo
- **Checkout em Uma Tela**: Sem múltiplas etapas

### Signature Elements
1. **Linhas Divisórias Sutis**: Separação clara sem exagero
2. **Tipografia Monoespacial para Preços**: Alinhamento perfeito
3. **Ícones Stroke**: Apenas contornos, sem preenchimento

### Interaction Philosophy
- **Direto**: Clique = ação, sem confirmações desnecessárias
- **Feedback Silencioso**: Mudanças visuais sutis, sem animações chamativas
- **Fluxo**: Cada tela leva naturalmente à próxima

### Animation
- **Mínimas**: Apenas transições de opacidade (150ms)
- **Hover**: Mudança de cor, sem movimento
- **Adicionar**: Número no carrinho incrementa com fade
- **Transição**: Instant ou fade muito rápido (100ms)

### Typography System
- **Display**: IBM Plex Sans Bold (títulos)
- **Heading**: IBM Plex Sans SemiBold (categorias, nomes)
- **Body**: IBM Plex Sans Regular (descrições, preços)
- **Caption**: IBM Plex Mono Regular (quantidades, totais)

---

## Decisão Final
Será escolhida uma abordagem após análise com o usuário. Cada uma oferece vantagens distintas:
- **Modern Fast-Casual**: Melhor para crescimento, confiança do cliente
- **Artisanal Craft**: Melhor para diferenciação, comunidade
- **Minimalist Speed**: Melhor para conversão, eficiência
