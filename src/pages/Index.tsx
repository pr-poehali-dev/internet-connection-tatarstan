
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import Icon from '@/components/ui/icon';

const HomePage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
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
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="container mx-auto py-6 px-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">ТатНет</h1>
          <a href="tel:88005553535" className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors">
            <Icon name="Phone" size={20} />
            <span className="hidden md:inline">8 800 555-35-35</span>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto py-12 px-4 md:py-20">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Быстрый интернет для вашего дома</h1>
          <p className="text-xl text-gray-600 mb-8">Подключите домашний интернет от ведущих провайдеров Республики Татарстан</p>
          
          <div className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full font-semibold mb-8">
            <Icon name="Gift" className="inline-block mr-2" size={20} />
            Акция мая: бонус 1000 рублей после подключения!
          </div>
        </div>

        {/* Providers Tabs with Form */}
        <div className="max-w-md mx-auto">
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle>Оставьте заявку на подключение</CardTitle>
              <CardDescription>Выберите провайдера и заполните форму</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="mts" className="mb-6" onValueChange={(value) => setFormData(prev => ({ ...prev, provider: value }))}>
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
                  <div className="text-sm text-gray-500 mb-4">
                    <p className="flex items-center gap-2 mb-2"><Icon name="Check" size={16} className="text-primary"/> Скорость до 500 Мбит/с</p>
                    <p className="flex items-center gap-2 mb-2"><Icon name="Check" size={16} className="text-primary"/> Безлимитный трафик</p>
                    <p className="flex items-center gap-2"><Icon name="Check" size={16} className="text-primary"/> Настройка Wi-Fi роутера</p>
                  </div>
                </TabsContent>
                
                <TabsContent value="rostelecom" className="pt-4">
                  <div className="text-sm text-gray-500 mb-4">
                    <p className="flex items-center gap-2 mb-2"><Icon name="Check" size={16} className="text-primary"/> Скорость до 600 Мбит/с</p>
                    <p className="flex items-center gap-2 mb-2"><Icon name="Check" size={16} className="text-primary"/> Цифровое ТВ</p>
                    <p className="flex items-center gap-2"><Icon name="Check" size={16} className="text-primary"/> Техническая поддержка 24/7</p>
                  </div>
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
      </section>

      {/* Features Section */}
      <section className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                <Icon name="Zap" className="text-primary" size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2">Высокая скорость</h3>
              <p className="text-gray-600">Скорость до 600 Мбит/с для комфортного использования интернета</p>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                <Icon name="Shield" className="text-primary" size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2">Стабильное соединение</h3>
              <p className="text-gray-600">Надежное подключение без обрывов даже в часы пиковой нагрузки</p>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                <Icon name="Headphones" className="text-primary" size={24} />
              </div>
              <h3 className="font-bold text-lg mb-2">Поддержка 24/7</h3>
              <p className="text-gray-600">Техническая поддержка ответит на ваши вопросы в любое время суток</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-bold text-primary">ТатНет</h2>
              <p className="text-sm text-gray-500">Домашний интернет в Республике Татарстан</p>
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                <Icon name="Mail" size={20} />
                <span className="sr-only">Email</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                <Icon name="Phone" size={20} />
                <span className="sr-only">Телефон</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                <Icon name="Instagram" size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors">
                <Icon name="MessageSquare" size={20} />
                <span className="sr-only">Telegram</span>
              </a>
            </div>
          </div>
          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500">&copy; 2025 ТатНет. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
