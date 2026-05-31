import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MenuItem } from "@/data/menu";
import { useCart } from "@/contexts/CartContext";
import { Plus, Minus } from "lucide-react";
import { toast } from "sonner";

interface ProductCardProps {
  product: MenuItem;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addItem(product, quantity);
    toast.success(`${product.name} adicionado ao carrinho!`, {
      description: `Quantidade: ${quantity}`,
    });
    setQuantity(1);
  };

  const badgeConfig = {
    "novo": { label: "Novo", className: "bg-blue-500" },
    "mais-vendido": { label: "Mais Vendido", className: "bg-orange-500" },
    "promocao": { label: "Promoção", className: "bg-red-500" },
  };

  const badge = product.badge ? badgeConfig[product.badge] : null;

  return (
    <div className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Badge */}
      {badge && (
        <div className="absolute top-3 right-3 z-10">
          <Badge className={`${badge.className} text-white text-xs font-semibold`}>
            {badge.label}
          </Badge>
        </div>
      )}

      {/* Imagem */}
      <div className="relative h-48 overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Conteúdo */}
      <div className="p-4 flex flex-col h-full">
        <h3 className="font-bold text-lg text-gray-900 line-clamp-2 mb-1">
          {product.name}
        </h3>
        <p className="text-sm text-gray-600 line-clamp-2 mb-3">
          {product.description}
        </p>

        {/* Preço */}
        <div className="mb-4 py-2">
          <span className="text-xl font-bold text-orange-600 whitespace-nowrap">
            R$ {product.price.toFixed(2)}
          </span>
        </div>

        {/* Controle de Quantidade e Botão */}
        <div className="flex items-center gap-2">
          <div className="flex items-center border border-gray-300 rounded-lg bg-gray-50">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="p-2 hover:bg-gray-200 transition-colors"
              aria-label="Diminuir quantidade"
            >
              <Minus size={16} className="text-gray-600" />
            </button>
            <span className="px-3 py-2 font-semibold text-gray-900 min-w-12 text-center">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="p-2 hover:bg-gray-200 transition-colors"
              aria-label="Aumentar quantidade"
            >
              <Plus size={16} className="text-gray-600" />
            </button>
          </div>
          <Button
            onClick={handleAddToCart}
            className="flex-1 bg-orange-600 hover:bg-orange-700 text-white font-semibold transition-all duration-200 active:scale-95"
          >
            Adicionar
          </Button>
        </div>
      </div>
    </div>
  );
}
