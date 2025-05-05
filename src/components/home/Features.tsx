
import FeatureCard from './FeatureCard';

const Features = () => {
  const features = [
    {
      icon: "Zap",
      title: "Высокая скорость",
      description: "Скорость до 600 Мбит/с для комфортного использования интернета"
    },
    {
      icon: "Shield",
      title: "Стабильное соединение",
      description: "Надежное подключение без обрывов даже в часы пиковой нагрузки"
    },
    {
      icon: "Headphones",
      title: "Поддержка 24/7",
      description: "Техническая поддержка ответит на ваши вопросы в любое время суток"
    }
  ];

  return (
    <section className="container mx-auto py-12 px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <FeatureCard 
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;
