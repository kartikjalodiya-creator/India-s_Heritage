import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import InteractiveMap from '@/components/InteractiveMap';
import VirtualTours from '@/components/VirtualTours';
import HeritageCard from '@/components/HeritageCard';
import { Button } from '@/components/ui/button';
import { heritageSites, tourPlans, events, souvenirs, HeritageSite } from '@/data/heritageData';
import { ArrowRight, Calendar, ShoppingBag, Users, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const [highlightedSite, setHighlightedSite] = useState<HeritageSite | undefined>();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Handle scroll to virtual tours from navigation
    if (location.state?.scrollTo === 'virtual-tours') {
      setTimeout(() => {
        const element = document.getElementById('virtual-tours');
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [location]);

  const scrollToVirtualTours = () => {
    const element = document.getElementById('virtual-tours');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSiteSelect = (site: HeritageSite) => {
    setHighlightedSite(site);
    setTimeout(() => {
      const element = document.getElementById('virtual-tours');
      element?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <HeroSection 
        onExplore={() => navigate('/explore')}
        onGetStarted={scrollToVirtualTours}
      />

      {/* Featured Heritage Sites */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-12"
          >
            <div>
              <span className="text-secondary font-medium text-sm uppercase tracking-wider">Discover</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">
                Featured Heritage
              </h2>
            </div>
            <Link to="/explore" className="mt-4 md:mt-0">
              <Button variant="ghost" className="text-secondary hover:text-secondary group">
                View All Sites
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {heritageSites.map((site, index) => (
              <motion.div
                key={site.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <HeritageCard
                  id={site.id}
                  image={site.image}
                  name={site.name}
                  location={site.location}
                  description={site.description}
                  bestTime={site.bestTime}
                  crowdLevel={site.crowdLevel}
                  onExplore={() => navigate('/explore')}
                  variant="compact"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Map */}
      <InteractiveMap onSiteSelect={handleSiteSelect} />

      {/* Virtual Tours */}
      <VirtualTours highlightedSite={highlightedSite} />

      {/* Tour Plans Preview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-secondary font-medium text-sm uppercase tracking-wider">Curated Journeys</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-2 mb-4">
              Popular Tour Plans
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Expertly crafted itineraries with personalized recommendations based on weather and crowd conditions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tourPlans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="heritage-card group"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={plan.image} 
                    alt={plan.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full">
                      {plan.duration}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{plan.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs text-muted-foreground">Starting from</span>
                      <p className="text-xl font-bold text-secondary">₹{plan.price.toLocaleString()}</p>
                    </div>
                    <Link to="/tours">
                      <Button className="btn-saffron">
                        View Plan
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-12"
          >
            <div>
              <span className="text-secondary font-medium text-sm uppercase tracking-wider">Cultural Calendar</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">
                Upcoming Events
              </h2>
            </div>
            <Link to="/events" className="mt-4 md:mt-0">
              <Button variant="ghost" className="text-secondary hover:text-secondary group">
                View All Events
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {events.slice(0, 3).map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="heritage-card flex gap-4 p-4"
              >
                <img 
                  src={event.image} 
                  alt={event.name}
                  className="w-24 h-24 rounded-xl object-cover shrink-0"
                />
                <div className="flex flex-col justify-between">
                  <div>
                    <span className="text-xs text-secondary font-medium">{event.category}</span>
                    <h4 className="font-display font-semibold line-clamp-1">{event.name}</h4>
                    <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(event.date).toLocaleDateString('en-IN', { month: 'short', day: 'numeric' })}
                    </p>
                  </div>
                  <Link to="/events">
                    <Button size="sm" variant="outline" className="text-secondary border-secondary hover:bg-secondary hover:text-secondary-foreground">
                      Book Now
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Souvenir Shop Preview */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-secondary font-medium text-sm uppercase tracking-wider">Artisan Treasures</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-2 mb-4">
              Heritage Souvenirs
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Support traditional artisans and take home a piece of India's rich cultural heritage
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {souvenirs.slice(0, 4).map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="heritage-card group overflow-hidden"
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-4">
                  <span className="text-xs text-muted-foreground">{item.origin}</span>
                  <h4 className="font-medium line-clamp-1">{item.name}</h4>
                  <p className="text-secondary font-bold mt-1">₹{item.price.toLocaleString()}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <Link to="/shop">
              <Button className="btn-saffron px-8">
                <ShoppingBag className="mr-2 h-5 w-5" />
                Visit Shop
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Why Choose Bharat Heritage?
            </h2>
            <p className="text-primary-foreground/70 max-w-2xl mx-auto">
              Your complete platform for exploring, planning, and connecting with India's cultural legacy
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Sparkles, title: '360° Virtual Tours', desc: 'Immersive experiences from anywhere in the world' },
              { icon: Calendar, title: 'Smart Planning', desc: 'Weather and crowd-based recommendations' },
              { icon: Users, title: 'Community', desc: 'Share stories, photos, and connect with travelers' },
              { icon: ShoppingBag, title: 'Authentic Souvenirs', desc: 'Handcrafted treasures from local artisans' }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-secondary mb-6">
                  <feature.icon className="h-8 w-8 text-secondary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-primary-foreground/70 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden"
          >
            <img 
              src={heritageSites[1].image} 
              alt="Heritage" 
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-heritage opacity-90" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Start Your Heritage Journey Today
              </h2>
              <p className="text-primary-foreground/80 max-w-lg mb-8">
                Join millions of travelers discovering India's cultural treasures
              </p>
              <div className="flex gap-4">
                <Link to="/auth">
                  <Button className="btn-saffron px-8">
                    Get Started Free
                  </Button>
                </Link>
                <Link to="/explore">
                  <Button variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                    Explore More
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
