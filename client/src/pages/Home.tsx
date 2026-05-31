import { useState } from "react";
import { useLocation } from "wouter";
import { useCart } from "@/contexts/CartContext";
import { Cart } from "@/components/Cart";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { menuItems, categories } from "@/data/menu";
import { ShoppingCart, Menu } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  const [, setLocation] = useLocation();
  const { itemCount } = useCart();
  const [cartOpen, setCartOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("hamburgueres");

  const handleCheckout = () => {
    setCartOpen(false);
    setLocation("/checkout");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-20 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-3xl">🍔</div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Facilitando Seu Pedido Expresso
              </h1>
              <p className="text-sm text-gray-600">Hambúrgueres Artesanais</p>
            </div>
          </div>

          {/* Botão Carrinho */}
          <button
            onClick={() => setCartOpen(true)}
            className="relative p-3 bg-orange-600 hover:bg-orange-700 text-white rounded-full transition-all duration-200 active:scale-95 shadow-lg hover:shadow-xl"
            aria-label="Abrir carrinho"
          >
            <ShoppingCart size={24} />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663713530247/ZVgcExbaumHwS6zLd5EA3S/hero-hamburgueria-4ynxXPuMp4tffXCTDgXrje.webp"
          alt="Hambúrguer Premium"
          className="w-full h-64 md:h-80 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
              Hambúrgueres Deliciosos
            </h2>
            <p className="text-lg text-gray-100 max-w-md">
              Feitos com ingredientes frescos e muito amor. Peça agora pelo WhatsApp!
            </p>
          </div>
        </div>
      </section>

      {/* Cardápio */}
      <section className="container mx-auto px-4 py-12">
        <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-white border border-gray-200 rounded-lg p-1 mb-8">
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="data-[state=active]:bg-orange-600 data-[state=active]:text-white text-gray-700 font-semibold rounded transition-all"
              >
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {menuItems.filter((item) => item.category === category.id).map((item) => (
                  <ProductCard key={item.id} product={item} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </section>

      {/* Informações */}
      <section className="bg-white border-t border-gray-200 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Rápido</h3>
              <p className="text-gray-600">
                Pedido direto para o WhatsApp em segundos
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🍽️</div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Fresco</h3>
              <p className="text-gray-600">
                Ingredientes de qualidade, sempre frescos
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">😋</div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Delicioso</h3>
              <p className="text-gray-600">
                Receitas exclusivas e muito saborosas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">
            © 2026 Facilitando Seu Pedido Expresso - Todos os direitos reservados
          </p>
          <p className="text-gray-400 text-sm mb-4">
            Desenvolvido com ❤️ para sua hamburgueria
          </p>
        </div>
      </footer>

      {/* Carrinho Drawer */}
      <Cart open={cartOpen} onOpenChange={setCartOpen} onCheckout={handleCheckout} />
    </div>
  );
}
