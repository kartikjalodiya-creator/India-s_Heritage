import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, Sun, Cloud, MapPin, Check, Heart } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { tourPlans, heritageSites } from '@/data/heritageData';
import { useApp } from '@/contexts/AppContext';
import ContactExpertSection from '@/components/ContactExpertSection';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';

const Tours = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const { isAuthenticated, savedTours, toggleSavedTour } = useApp();
  const navigate = useNavigate();

  const handleBookTour = (planId: string) => {
    if (!isAuthenticated) {
      navigate('/auth', { state: { returnTo: '/tours' } });
      return;
    }

    if (!selectedDate) {
      toast({
        title: 'Select a Date',
        description: 'Please select a travel date to proceed with booking.',
        variant: 'destructive'
      });
      return;
    }

    toast({
      title: 'Booking Confirmed! 🎉',
      description: `Your tour has been booked for ${new Date(selectedDate).toLocaleDateString('en-IN', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      })}. Check your profile for details.`,
    });
    
    setSelectedPlan(null);
    setSelectedDate('');
  };

  // Weather recommendations
  const getWeatherRecommendation = (bestSeason: string) => {
    const currentMonth = new Date().getMonth();
    const winterMonths = [9, 10, 11, 0, 1, 2]; // Oct - Mar
    const isGoodTime = winterMonths.includes(currentMonth);
    
    return {
      isRecommended: isGoodTime,
      message: isGoodTime 
        ? 'Perfect weather conditions! Ideal time to visit.' 
        : 'Consider visiting during October - March for better weather.',
      icon: isGoodTime ? Sun : Cloud
    };
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Banner */}
      <section className="pt-32 pb-16 bg-gradient-heritage">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-primary-foreground"
          >
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-4">
              Curated Tour Plans
            </h1>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
              Experience the best of India with our expertly crafted itineraries, 
              complete with weather and crowd-based recommendations
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tour Plans */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {tourPlans.map((plan, index) => {
              const weather = getWeatherRecommendation(plan.bestSeason);
              const WeatherIcon = weather.icon;
              
              return (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="heritage-card overflow-hidden"
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img 
                      src={plan.image} 
                      alt={plan.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                    
                    {/* Save Button */}
                    <button
                      onClick={() => toggleSavedTour(plan.id)}
                      className="absolute top-4 right-4 p-2 rounded-full bg-card/80 backdrop-blur-sm hover:bg-card transition-colors"
                    >
                      <Heart className={`h-5 w-5 ${savedTours.includes(plan.id) ? 'fill-secondary text-secondary' : ''}`} />
                    </button>
                    
                    {/* Duration Badge */}
                    <div className="absolute bottom-4 left-4 flex items-center gap-2">
                      <span className="px-3 py-1 bg-secondary text-secondary-foreground text-sm font-medium rounded-full">
                        {plan.duration}
                      </span>
                      {weather.isRecommended && (
                        <span className="px-3 py-1 bg-green-500 text-white text-xs font-medium rounded-full flex items-center gap-1">
                          <Check className="h-3 w-3" />
                          Recommended
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-display text-2xl font-semibold mb-2">{plan.name}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>

                    {/* Sites Included */}
                    <div className="mb-4">
                      <h4 className="text-sm font-medium mb-2">Sites Included:</h4>
                      <div className="flex flex-wrap gap-2">
                        {plan.sites.map(site => (
                          <span key={site} className="px-2 py-1 bg-muted text-xs rounded-full">
                            {site}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Weather & Crowd Info */}
                    <div className="p-4 bg-muted/50 rounded-xl mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <WeatherIcon className={`h-5 w-5 ${weather.isRecommended ? 'text-green-500' : 'text-yellow-500'}`} />
                        <span className="text-sm font-medium">Weather Advisory</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{weather.message}</p>
                      <div className="mt-2 flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          Best: {plan.bestSeason}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="h-3 w-3" />
                          Moderate Crowds
                        </span>
                      </div>
                    </div>

                    {/* Date Picker & Price */}
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium mb-1 block">Select Travel Date</label>
                        <input
                          type="date"
                          value={selectedPlan === plan.id ? selectedDate : ''}
                          onChange={(e) => {
                            setSelectedPlan(plan.id);
                            setSelectedDate(e.target.value);
                          }}
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-secondary/50"
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-xs text-muted-foreground">Starting from</span>
                          <p className="text-2xl font-bold text-secondary">₹{plan.price.toLocaleString()}</p>
                        </div>
                        <Button 
                          onClick={() => handleBookTour(plan.id)}
                          className="btn-saffron"
                        >
                          Book Now
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <ContactExpertSection />

      <Footer />
    </div>
  );
};

export default Tours;
