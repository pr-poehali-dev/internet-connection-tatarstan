
import Icon from '@/components/ui/icon';

const Header = () => (
  <header className="container mx-auto py-6 px-4">
    <div className="flex justify-between items-center">
      <h1 className="text-2xl font-bold text-primary">ТатНет</h1>
      <a href="tel:88005553535" className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors">
        <Icon name="Phone" size={20} />
        <span className="hidden md:inline">8 800 555-35-35</span>
      </a>
    </div>
  </header>
);

export default Header;
