
import Header from '@/components/home/Header';
import Hero from '@/components/home/Hero';
import ConnectionForm from '@/components/home/ConnectionForm';
import Features from '@/components/home/Features';
import Footer from '@/components/home/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="container mx-auto py-12 px-4 md:py-20">
        <Hero />
        <ConnectionForm />
      </section>

      {/* Features Section */}
      <Features />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
