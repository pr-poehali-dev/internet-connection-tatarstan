
import Icon from '@/components/ui/icon';

const Hero = () => (
  <div className="max-w-3xl mx-auto text-center mb-12">
    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Быстрый интернет для вашего дома</h1>
    <p className="text-xl text-gray-600 mb-8">Подключите домашний интернет от ведущих провайдеров Республики Татарстан</p>
    
    <div className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full font-semibold mb-8">
      <Icon name="Gift" className="inline-block mr-2" size={20} />
      Акция мая: бонус 1000 рублей после подключения!
    </div>
  </div>
);

export default Hero;
