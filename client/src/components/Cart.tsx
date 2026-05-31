import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerFooter } from "@/components/ui/drawer";
import { Trash2, Plus, Minus } from "lucide-react";
import { useState } from "react";

interface CartProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onCheckout: () => void;
}

export function Cart({ open, onOpenChange, onCheckout }: CartProps) {
  const { items, removeItem, updateQuantity, total } = useCart();

  if (items.length === 0 && !open) {
    return null;
  }

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="max-h-[80vh]">
        <DrawerHeader>
          <DrawerTitle className="text-2xl font-bold text-gray-900">
            Seu Carrinho
          </DrawerTitle>
        </DrawerHeader>

        <div className="flex-1 overflow-y-auto px-4 pb-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12">
              <div className="text-6xl mb-4">🛒</div>
              <p className="text-gray-600 text-center">
                Seu carrinho está vazio. Adicione itens do cardápio!
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200"
                >
                  {/* Imagem */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-md"
                  />

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-gray-900 truncate">
                      {item.name}
                    </h4>
                    <p className="text-sm text-gray-600">
                      R$ {item.price.toFixed(2)} cada
                    </p>
                  </div>

                  {/* Quantidade */}
                  <div className="flex items-center gap-1 bg-white border border-gray-300 rounded-lg">
                    <button
                      onClick={() =>
                        updateQuantity(item.id, Math.max(1, item.quantity - 1))
                      }
                      className="p-1 hover:bg-gray-100 transition-colors"
                      aria-label="Diminuir quantidade"
                    >
                      <Minus size={14} className="text-gray-600" />
                    </button>
                    <span className="px-2 py-1 font-semibold text-gray-900 min-w-8 text-center text-sm">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-1 hover:bg-gray-100 transition-colors"
                      aria-label="Aumentar quantidade"
                    >
                      <Plus size={14} className="text-gray-600" />
                    </button>
                  </div>

                  {/* Preço Total */}
                  <div className="text-right">
                    <p className="font-bold text-orange-600">
                      R$ {(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>

                  {/* Remover */}
                  <button
                    onClick={() => removeItem(item.id)}
                    className="p-2 hover:bg-red-50 text-red-600 rounded-lg transition-colors"
                    aria-label="Remover item"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <DrawerFooter className="border-t border-gray-200 pt-4">
            <div className="mb-4">
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Subtotal:</span>
                <span className="font-semibold text-gray-900">
                  R$ {total.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between mb-4">
                <span className="text-gray-600">Taxa de entrega:</span>
                <span className="font-semibold text-gray-900">Grátis</span>
              </div>
              <div className="flex justify-between text-lg border-t border-gray-200 pt-2">
                <span className="font-bold text-gray-900">Total:</span>
                <span className="font-bold text-orange-600 text-2xl">
                  R$ {total.toFixed(2)}
                </span>
              </div>
            </div>
            <Button
              onClick={onCheckout}
              className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold text-lg py-6 rounded-lg transition-all duration-200 active:scale-95"
            >
              Finalizar Pedido
            </Button>
          </DrawerFooter>
        )}
      </DrawerContent>
    </Drawer>
  );
}
