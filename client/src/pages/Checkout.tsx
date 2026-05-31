import { useState } from "react";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useLocation } from "wouter";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { getWhatsAppNumber } from "@/components/WhatsAppConfig";

export default function Checkout() {
  const { items, total, clearCart } = useCart();
  const [, setLocation] = useLocation();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    notes: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const generateOrderMessage = () => {
    const itemsList = items
      .map(
        (item) =>
          `• ${item.name} (x${item.quantity}) - R$ ${(item.price * item.quantity).toFixed(2)}`
      )
      .join("\n");

    const message = `
*PEDIDO - Facilitando Seu Pedido Expresso*

*Cliente:* ${formData.name}
*Telefone:* ${formData.phone}
*Endereço:* ${formData.address}

*Itens do Pedido:*
${itemsList}

*Total:* R$ ${total.toFixed(2)}

${formData.notes ? `*Observações:* ${formData.notes}` : ""}

Obrigado pelo pedido! ✨
    `.trim();

    return message;
  };

  const handleSendToWhatsApp = async () => {
    if (!formData.name.trim()) {
      toast.error("Por favor, insira seu nome");
      return;
    }
    if (!formData.phone.trim()) {
      toast.error("Por favor, insira seu telefone");
      return;
    }
    if (!formData.address.trim()) {
      toast.error("Por favor, insira seu endereço");
      return;
    }

    setLoading(true);

    try {
      const message = generateOrderMessage();
      const encodedMessage = encodeURIComponent(message);

      const whatsappNumber = getWhatsAppNumber();

      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
      window.open(whatsappUrl, "_blank");

      clearCart();
      toast.success("Pedido enviado para WhatsApp!");

      setTimeout(() => {
        setLocation("/");
      }, 2000);
    } catch (error) {
      toast.error("Erro ao enviar pedido. Tente novamente.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white flex items-center justify-center px-4">
        <div className="text-center">
          <div className="text-6xl mb-4">🛒</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Carrinho Vazio
          </h1>
          <p className="text-gray-600 mb-6">
            Adicione itens ao carrinho antes de finalizar o pedido
          </p>
          <Button
            onClick={() => setLocation("/")}
            className="bg-orange-600 hover:bg-orange-700 text-white"
          >
            Voltar ao Cardápio
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white">
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="container max-w-2xl mx-auto px-4 py-4 flex items-center gap-3">
          <button
            onClick={() => setLocation("/")}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Voltar"
          >
            <ArrowLeft size={24} className="text-gray-600" />
          </button>
          <h1 className="text-2xl font-bold text-gray-900">Finalizar Pedido</h1>
        </div>
      </div>

      <div className="container max-w-2xl mx-auto px-4 py-8">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
              <div>
                <Label htmlFor="name" className="text-gray-900 font-semibold">
                  Nome Completo *
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Seu nome"
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-gray-900 font-semibold">
                  Telefone/WhatsApp *
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="(85) 98765-4321"
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="address" className="text-gray-900 font-semibold">
                  Endereço de Entrega *
                </Label>
                <Input
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="Rua, número, complemento"
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="notes" className="text-gray-900 font-semibold">
                  Observações (Opcional)
                </Label>
                <Textarea
                  id="notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  placeholder="Ex: Sem cebola, sem picante..."
                  className="mt-2 resize-none"
                  rows={3}
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24 space-y-4">
              <h2 className="text-xl font-bold text-gray-900 border-b border-gray-200 pb-3">
                Resumo do Pedido
              </h2>

              <div className="space-y-2 max-h-64 overflow-y-auto">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span className="text-gray-600">
                      {item.name} <span className="font-semibold">x{item.quantity}</span>
                    </span>
                    <span className="font-semibold text-gray-900">
                      R$ {(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 pt-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal:</span>
                  <span className="font-semibold text-gray-900">
                    R$ {total.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Entrega:</span>
                  <span className="font-semibold text-green-600">Grátis</span>
                </div>
                <div className="flex justify-between text-lg border-t border-gray-200 pt-2">
                  <span className="font-bold text-gray-900">Total:</span>
                  <span className="font-bold text-orange-600">
                    R$ {total.toFixed(2)}
                  </span>
                </div>
              </div>

              <Button
                onClick={handleSendToWhatsApp}
                disabled={loading}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-6 rounded-lg transition-all duration-200 active:scale-95 flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} />
                {loading ? "Enviando..." : "Enviar para WhatsApp"}
              </Button>

              <p className="text-xs text-gray-500 text-center">
                Você será redirecionado para o WhatsApp para confirmar seu pedido
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
