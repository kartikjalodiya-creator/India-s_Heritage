import { motion } from 'framer-motion';
import { Heart, Award, Crown } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

const Donate = () => {
  const handleDonate = (amount: number, type: string) => {
    toast({ title: 'Thank You! 🙏', description: `Your ${type} of ₹${amount.toLocaleString()} helps preserve India's heritage.` });
  };

  const tiers = [
    { name: 'Supporter', price: 500, icon: Heart, benefits: ['Monthly newsletter', 'Badge on profile', 'Early event access'] },
    { name: 'Patron', price: 2000, icon: Award, benefits: ['All Supporter benefits', 'Exclusive virtual tours', '10% shop discount', 'Priority booking'] },
    { name: 'Guardian', price: 5000, icon: Crown, benefits: ['All Patron benefits', 'VIP event invites', 'Meet artisans', 'Annual heritage kit'] },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-32 pb-16 bg-gradient-heritage">
        <div className="container mx-auto px-4 text-center text-primary-foreground">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-display text-4xl md:text-6xl font-bold mb-4">
            Support Heritage Preservation
          </motion.h1>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">Your contribution helps restore monuments, support artisans, and preserve cultural traditions</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl font-bold text-center mb-12">Membership Tiers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {tiers.map((tier, index) => (
              <motion.div key={tier.name} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className={`heritage-card p-8 text-center ${index === 1 ? 'ring-2 ring-secondary scale-105' : ''}`}>
                <tier.icon className={`h-12 w-12 mx-auto mb-4 ${index === 1 ? 'text-secondary' : 'text-muted-foreground'}`} />
                <h3 className="font-display text-2xl font-semibold mb-2">{tier.name}</h3>
                <p className="text-3xl font-bold text-secondary mb-6">₹{tier.price}<span className="text-sm text-muted-foreground">/month</span></p>
                <ul className="space-y-2 mb-8 text-sm">
                  {tier.benefits.map(b => <li key={b} className="text-muted-foreground">✓ {b}</li>)}
                </ul>
                <Button onClick={() => handleDonate(tier.price, tier.name)} className={index === 1 ? 'btn-saffron w-full' : 'w-full'} variant={index === 1 ? 'default' : 'outline'}>
                  Join as {tier.name}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Donate;
