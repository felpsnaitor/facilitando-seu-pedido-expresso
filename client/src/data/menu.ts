export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: "hamburgueres" | "acompanhamentos" | "bebidas" | "combos";
  image: string;
  badge?: "novo" | "mais-vendido" | "promocao";
}

export const menuItems: MenuItem[] = [
  // Hambúrgueres
  {
    id: "burger-classico",
    name: "Hambúrguer Clássico",
    description: "Pão brioche, carne 180g, queijo cheddar, alface, tomate e molho especial",
    price: 28.90,
    category: "hamburgueres",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663713530247/ZVgcExbaumHwS6zLd5EA3S/combo-promo-kyWosCy6Q7v4JgrPi9EKkG.webp",
    badge: "mais-vendido",
  },
  {
    id: "burger-bacon",
    name: "Bacon Burguer",
    description: "Pão brioche, carne 180g, bacon crocante, queijo cheddar, alface, tomate",
    price: 32.90,
    category: "hamburgueres",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663713530247/ZVgcExbaumHwS6zLd5EA3S/combo-promo-kyWosCy6Q7v4JgrPi9EKkG.webp",
  },
  {
    id: "burger-duplo",
    name: "Duplo Cheddar",
    description: "Pão brioche, 2 carnes 180g, 2 queijos cheddar, alface, tomate, cebola",
    price: 38.90,
    category: "hamburgueres",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663713530247/ZVgcExbaumHwS6zLd5EA3S/combo-promo-kyWosCy6Q7v4JgrPi9EKkG.webp",
    badge: "novo",
  },
  {
    id: "burger-picanha",
    name: "Picanha Premium",
    description: "Pão brioche, picanha 200g, queijo provolone, cebola caramelizada, rúcula",
    price: 42.90,
    category: "hamburgueres",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663713530247/ZVgcExbaumHwS6zLd5EA3S/combo-promo-kyWosCy6Q7v4JgrPi9EKkG.webp",
  },
  {
    id: "burger-vegetariano",
    name: "Vegetariano",
    description: "Pão brioche, hambúrguer de grão de bico, queijo, alface, tomate, abacate",
    price: 26.90,
    category: "hamburgueres",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663713530247/ZVgcExbaumHwS6zLd5EA3S/combo-promo-kyWosCy6Q7v4JgrPi9EKkG.webp",
  },

  // Acompanhamentos
  {
    id: "acomp-batata",
    name: "Batata Frita",
    description: "Batata frita crocante com sal e tempero especial",
    price: 12.90,
    category: "acompanhamentos",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663713530247/ZVgcExbaumHwS6zLd5EA3S/sides-collection-PAQQBZcej3Lb75d2Lkuhpn.webp",
  },
  {
    id: "acomp-onion-rings",
    name: "Onion Rings",
    description: "Anéis de cebola empanados e fritos até ficar crocante",
    price: 14.90,
    category: "acompanhamentos",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663713530247/ZVgcExbaumHwS6zLd5EA3S/sides-collection-PAQQBZcej3Lb75d2Lkuhpn.webp",
  },
  {
    id: "acomp-coleslaw",
    name: "Coleslaw",
    description: "Salada de repolho fresco com molho cremoso",
    price: 10.90,
    category: "acompanhamentos",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663713530247/ZVgcExbaumHwS6zLd5EA3S/sides-collection-PAQQBZcej3Lb75d2Lkuhpn.webp",
  },
  {
    id: "acomp-nuggets",
    name: "Nuggets de Frango",
    description: "6 unidades de nuggets crocantes e suculentos",
    price: 16.90,
    category: "acompanhamentos",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663713530247/ZVgcExbaumHwS6zLd5EA3S/sides-collection-PAQQBZcej3Lb75d2Lkuhpn.webp",
    badge: "novo",
  },

  // Bebidas
  {
    id: "bebida-refrigerante",
    name: "Refrigerante 350ml",
    description: "Refrigerante gelado (Coca-Cola, Guaraná ou Fanta)",
    price: 5.90,
    category: "bebidas",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663713530247/ZVgcExbaumHwS6zLd5EA3S/drinks-showcase-UFHcRNvnGt3rTwzBxgN6QQ.webp",
  },
  {
    id: "bebida-suco",
    name: "Suco Natural 300ml",
    description: "Suco natural de laranja, maçã ou melancia",
    price: 7.90,
    category: "bebidas",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663713530247/ZVgcExbaumHwS6zLd5EA3S/drinks-showcase-UFHcRNvnGt3rTwzBxgN6QQ.webp",
  },
  {
    id: "bebida-agua",
    name: "Água 500ml",
    description: "Água filtrada gelada",
    price: 3.90,
    category: "bebidas",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663713530247/ZVgcExbaumHwS6zLd5EA3S/drinks-showcase-UFHcRNvnGt3rTwzBxgN6QQ.webp",
  },
  {
    id: "bebida-milkshake",
    name: "Milkshake 400ml",
    description: "Milkshake cremoso (Chocolate, Morango ou Baunilha)",
    price: 11.90,
    category: "bebidas",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663713530247/ZVgcExbaumHwS6zLd5EA3S/drinks-showcase-UFHcRNvnGt3rTwzBxgN6QQ.webp",
  },

  // Combos
  {
    id: "combo-classico",
    name: "Combo Clássico",
    description: "Hambúrguer Clássico + Batata Frita + Refrigerante 350ml",
    price: 42.90,
    category: "combos",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663713530247/ZVgcExbaumHwS6zLd5EA3S/combo-promo-kyWosCy6Q7v4JgrPi9EKkG.webp",
    badge: "promocao",
  },
  {
    id: "combo-bacon",
    name: "Combo Bacon Premium",
    description: "Bacon Burguer + Onion Rings + Refrigerante 350ml",
    price: 48.90,
    category: "combos",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663713530247/ZVgcExbaumHwS6zLd5EA3S/combo-promo-kyWosCy6Q7v4JgrPi9EKkG.webp",
  },
  {
    id: "combo-duplo",
    name: "Combo Duplo",
    description: "Duplo Cheddar + Batata Frita + Suco Natural + Milkshake",
    price: 62.90,
    category: "combos",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663713530247/ZVgcExbaumHwS6zLd5EA3S/combo-promo-kyWosCy6Q7v4JgrPi9EKkG.webp",
  },
];

export const categories = [
  { id: "hamburgueres", label: "Hambúrgueres" },
  { id: "acompanhamentos", label: "Acompanhamentos" },
  { id: "bebidas", label: "Bebidas" },
  { id: "combos", label: "Combos" },
];
