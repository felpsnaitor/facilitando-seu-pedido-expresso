import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { ArrowLeft, Settings } from "lucide-react";

const STORAGE_KEY = "whatsapp_number";

export default function Admin() {
  const [, setLocation] = useLocation();
  const [number, setNumber] = useState(
    localStorage.getItem(STORAGE_KEY) || "5585987654321"
  );
  const [tempNumber, setTempNumber] = useState(number);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    if (!tempNumber.trim()) {
      toast.error("Por favor, insira um número de WhatsApp");
      return;
    }

    if (!/^\d+$/.test(tempNumber)) {
      toast.error("O número deve conter apenas dígitos (ex: 5585987654321)");
      return;
    }

    localStorage.setItem(STORAGE_KEY, tempNumber);
    setNumber(tempNumber);
    setSaved(true);
    toast.success("Número de WhatsApp salvo com sucesso!");

    setTimeout(() => setSaved(false), 3000);
  };

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
          <div className="flex items-center gap-2">
            <Settings size={24} className="text-orange-600" />
            <h1 className="text-2xl font-bold text-gray-900">Configurações</h1>
          </div>
        </div>
      </div>

      <div className="container max-w-2xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-md p-8 max-w-md mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Configurar WhatsApp
          </h2>

          <div className="space-y-6">
            <div>
              <Label htmlFor="whatsapp-number" className="text-gray-900 font-semibold">
                Número de WhatsApp da Hamburgueria
              </Label>
              <p className="text-sm text-gray-600 mt-1 mb-3">
                Formato: 55 + DDD + número
              </p>
              <p className="text-xs text-gray-500 mb-3">
                Exemplo: 5571987654321 (55 = Brasil, 71 = Salvador, 987654321 = número)
              </p>
              <Input
                id="whatsapp-number"
                value={tempNumber}
                onChange={(e) => setTempNumber(e.target.value)}
                placeholder="5571987654321"
                className="font-mono text-lg"
              />
            </div>

            {saved && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-sm text-green-800">
                  ✓ Número salvo com sucesso!
                </p>
              </div>
            )}

            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Número atual:</strong> {number}
              </p>
            </div>

            <Button
              onClick={handleSave}
              className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-6"
            >
              Salvar Número
            </Button>

            <div className="pt-4 border-t border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3">Como encontrar seu número:</h3>
              <ol className="text-sm text-gray-600 space-y-2 list-decimal list-inside">
                <li>Abra o WhatsApp</li>
                <li>Vá para Configurações → Sobre</li>
                <li>Seu número está listado no topo</li>
                <li>Copie apenas os dígitos (ex: 5571987654321)</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
