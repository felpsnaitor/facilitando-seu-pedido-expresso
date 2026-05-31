import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

interface WhatsAppConfigProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const STORAGE_KEY = "whatsapp_number";

export function WhatsAppConfig({ open, onOpenChange }: WhatsAppConfigProps) {
  const [number, setNumber] = useState("");
  const [tempNumber, setTempNumber] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      setNumber(saved);
      setTempNumber(saved);
    }
  }, [open]);

  const handleSave = () => {
    if (!tempNumber.trim()) {
      toast.error("Por favor, insira um número de WhatsApp");
      return;
    }

    // Validar formato: deve conter apenas números
    if (!/^\d+$/.test(tempNumber)) {
      toast.error("O número deve conter apenas dígitos (ex: 5585987654321)");
      return;
    }

    localStorage.setItem(STORAGE_KEY, tempNumber);
    setNumber(tempNumber);
    toast.success("Número de WhatsApp salvo com sucesso!");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Configurar Número WhatsApp</DialogTitle>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <div>
            <Label htmlFor="whatsapp-number" className="text-gray-900 font-semibold">
              Número de WhatsApp da Hamburgueria
            </Label>
            <p className="text-sm text-gray-600 mt-1 mb-3">
              Formato: 55 + DDD + número (ex: 5585987654321)
            </p>
            <Input
              id="whatsapp-number"
              value={tempNumber}
              onChange={(e) => setTempNumber(e.target.value)}
              placeholder="5585987654321"
              className="font-mono"
            />
          </div>

          {number && (
            <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-sm text-green-800">
                <strong>Número atual:</strong> {number}
              </p>
            </div>
          )}
        </div>

        <DialogFooter>
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
          >
            Cancelar
          </Button>
          <Button
            onClick={handleSave}
            className="bg-green-600 hover:bg-green-700 text-white"
          >
            Salvar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export function getWhatsAppNumber(): string {
  return localStorage.getItem(STORAGE_KEY) || "5585987654321"; // Padrão
}
