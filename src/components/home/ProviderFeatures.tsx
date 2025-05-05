
import Icon from '@/components/ui/icon';

type ProviderFeaturesProps = {
  provider: 'mts' | 'rostelecom';
};

const ProviderFeatures = ({ provider }: ProviderFeaturesProps) => {
  const features = {
    mts: [
      'Скорость до 500 Мбит/с',
      'Безлимитный трафик',
      'Настройка Wi-Fi роутера'
    ],
    rostelecom: [
      'Скорость до 600 Мбит/с',
      'Цифровое ТВ',
      'Техническая поддержка 24/7'
    ]
  };

  return (
    <div className="text-sm text-gray-500 mb-4">
      {features[provider].map((feature, index) => (
        <p key={index} className="flex items-center gap-2 mb-2 last:mb-0">
          <Icon name="Check" size={16} className="text-primary"/> 
          {feature}
        </p>
      ))}
    </div>
  );
};

export default ProviderFeatures;
