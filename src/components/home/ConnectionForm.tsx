
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import Icon from '@/components/ui/icon';
import ProviderFeatures from './ProviderFeatures';

type FormData = {
  name: string;
  phone: string;
  address: string;
  provider: 'mts' | 'rostelecom';
  includeTV: boolean;
};

const ConnectionForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    address: '',
    provider: 'mts',
    includeTV: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSwitchChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, includeTV: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate phone number
    if (!formData.phone || formData.phone.length < 10) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, введите корректный номер телефона",
        variant: "destructive"
      });
      return;
    }

    // Validate address
    if (!formData.address) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, укажите ваш адрес",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Заявка отправлена!",
      description: "Наш менеджер свяжется с вами в ближайшее время",
    });
    
    // Reset form
    setFormData({
      name: '',
      phone: '',
      address: '',
      provider: formData.provider,
      includeTV: false
    });
  };

  return (
    <div className="max-w-md mx-auto">
      <Card className="shadow-lg border-0">
        <CardHeader>
          <CardTitle>Оставьте заявку на подключение</CardTitle>
          <CardDescription>Выберите провайдера и заполните форму</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs 
            defaultValue="mts" 
            className="mb-6" 
            onValueChange={(value) => setFormData(prev => ({ ...prev, provider: value as 'mts' | 'rostelecom' }))}
          >
            <TabsList className="grid grid-cols-2 w-full">
              <TabsTrigger value="mts">
                <div className="flex items-center gap-2">
                  <Icon name="Wifi" size={18} />
                  <span>МТС</span>
                </div>
              </TabsTrigger>
              <TabsTrigger value="rostelecom">
                <div className="flex items-center gap-2">
                  <Icon name="Wifi" size={18} />
                  <span>Ростелеком</span>
                </div>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="mts" className="pt-4">
              <ProviderFeatures provider="mts" />
            </TabsContent>
            
            <TabsContent value="rostelecom" className="pt-4">
              <ProviderFeatures provider="rostelecom" />
            </TabsContent>
          </Tabs>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Ваше имя</Label>
              <Input 
                id="name" 
                name="name" 
                placeholder="Иван Иванов" 
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone">Номер телефона</Label>
              <Input 
                id="phone" 
                name="phone" 
                type="tel" 
                placeholder="+7 (999) 123-45-67" 
                required
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="address">Адрес подключения</Label>
              <Input 
                id="address" 
                name="address" 
                placeholder="г. Казань, ул. Баумана, д. 1, кв. 1" 
                required
                value={formData.address}
                onChange={handleChange}
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <Switch 
                id="tv-option" 
                checked={formData.includeTV}
                onCheckedChange={handleSwitchChange}
              />
              <Label htmlFor="tv-option">Подключить ТВ</Label>
            </div>
            
            <Button type="submit" className="w-full">Оставить заявку</Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm text-gray-500">
            Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ConnectionForm;
