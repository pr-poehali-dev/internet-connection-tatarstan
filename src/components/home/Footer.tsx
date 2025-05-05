
import Icon from '@/components/ui/icon';

const Footer = () => {
  const socialLinks = [
    { name: "Mail", label: "Email" },
    { name: "Phone", label: "Телефон" },
    { name: "Instagram", label: "Instagram" },
    { name: "MessageSquare", label: "Telegram" }
  ];

  return (
    <footer className="bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold text-primary">ТатНет</h2>
            <p className="text-sm text-gray-500">Домашний интернет в Республике Татарстан</p>
          </div>
          <div className="flex gap-4">
            {socialLinks.map((link, index) => (
              <a 
                key={index}
                href="#" 
                className="text-gray-500 hover:text-primary transition-colors"
              >
                <Icon name={link.name} size={20} />
                <span className="sr-only">{link.label}</span>
              </a>
            ))}
          </div>
        </div>
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500">&copy; 2025 ТатНет. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
