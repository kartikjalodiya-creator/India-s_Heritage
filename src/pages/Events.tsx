import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, Ticket, Bell, BellOff, Sun, Cloud, Users } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { events } from '@/data/heritageData';
import { useApp } from '@/contexts/AppContext';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);
  const [reminders, setReminders] = useState<string[]>([]);
  const { isAuthenticated, bookedEvents, bookEvent } = useApp();
  const navigate = useNavigate();

  const handleBookTicket = (eventId: string) => {
    if (!isAuthenticated) {
      navigate('/auth', { state: { returnTo: '/events' } });
      return;
    }

    const event = events.find(e => e.id === eventId);
    if (event) {
      bookEvent(eventId);
      toast({
        title: 'Ticket Booked! 🎉',
        description: `Your ticket for ${event.name} has been booked. We recommend arriving early for the best experience.`,
      });
    }
  };

  const toggleReminder = (eventId: string) => {
    setReminders(prev => 
      prev.includes(eventId) 
        ? prev.filter(id => id !== eventId)
        : [...prev, eventId]
    );
    
    const event = events.find(e => e.id === eventId);
    toast({
      title: reminders.includes(eventId) ? 'Reminder Removed' : 'Reminder Set! 🔔',
      description: reminders.includes(eventId) 
        ? `Reminder for ${event?.name} has been removed.`
        : `We'll remind you before ${event?.name} starts.`,
    });
  };

  // Mock weather/crowd data for events
  const getEventConditions = (eventId: string) => {
    const conditions: Record<string, { weather: string; crowd: string; recommended: string }> = {
      'pongal-2026': { weather: 'Pleasant, 26°C', crowd: 'High', recommended: 'Sunrise for traditional rituals' },
      'republic-day-2026': { weather: 'Cool, 14°C', crowd: 'Very High', recommended: 'Arrive by 7 AM for best views' },
      'vasant-panchami-2026': { weather: 'Cool, 18°C', crowd: 'Moderate', recommended: 'Morning for temple visits' },
      'holi-2026': { weather: 'Warm, 28°C', crowd: 'Very High', recommended: 'Morning best for Lathmar Holi' },
      'baisakhi-2026': { weather: 'Warm, 32°C', crowd: 'High', recommended: 'Early morning for Golden Temple' },
      'rath-yatra-2026': { weather: 'Hot & humid, 34°C', crowd: 'Very High', recommended: 'Morning for chariot pulling' },
      'hemis-festival-2026': { weather: 'Cool, 18°C', crowd: 'Moderate', recommended: 'Morning for Cham dances' },
      'independence-day-2026': { weather: 'Humid, 33°C', crowd: 'Very High', recommended: 'Early morning for flag hoisting' },
      'onam-2026': { weather: 'Tropical, 28°C', crowd: 'High', recommended: 'Morning for boat races' },
      'ganesh-chaturthi-2026': { weather: 'Humid, 30°C', crowd: 'Very High', recommended: 'Evening for Visarjan processions' },
      'navratri-2026': { weather: 'Pleasant, 28°C', crowd: 'Very High', recommended: 'Evening 8 PM onwards for Garba' },
      'durga-puja-2026': { weather: 'Pleasant, 27°C', crowd: 'Very High', recommended: 'Evening for pandal hopping' },
      'dussehra-2026': { weather: 'Pleasant, 26°C', crowd: 'Very High', recommended: 'Evening for Jamboo Savari' },
      'diwali-2026': { weather: 'Clear, 22°C', crowd: 'Very High', recommended: 'Arrive by 4 PM for Ganga Aarti' },
      'pushkar-fair-2026': { weather: 'Warm, 28°C', crowd: 'High', recommended: 'Early morning for camel trading' },
      'rann-utsav-2026': { weather: 'Cool, 20°C', crowd: 'High', recommended: 'Full moon night for white desert' },
      'hornbill-2026': { weather: 'Cool, 15°C', crowd: 'Moderate', recommended: 'All day — different tribes perform' },
      'konark-dance-2026': { weather: 'Pleasant, 24°C', crowd: 'Moderate', recommended: 'Evening shows 6-9 PM recommended' },
      'jaipur-lit-fest-2026': { weather: 'Cool, 18°C', crowd: 'High', recommended: 'Morning sessions less crowded' },
      'wildlife-week-2026': { weather: 'Pleasant, 25°C', crowd: 'Moderate', recommended: 'Dawn safari for best sightings' }
    };
    return conditions[eventId] || { weather: 'Pleasant', crowd: 'Moderate', recommended: 'Anytime' };
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
              Cultural Events & Festivals
            </h1>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
              Experience India's vibrant traditions, from colorful festivals to classical performances
            </p>
          </motion.div>
        </div>
      </section>

      {/* Events List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            {events.map((event, index) => {
              const conditions = getEventConditions(event.id);
              const isBooked = bookedEvents.includes(event.id);
              const hasReminder = reminders.includes(event.id);

              return (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="heritage-card overflow-hidden"
                >
                  <div className="flex flex-col lg:flex-row">
                    {/* Image */}
                    <div className="lg:w-1/3 relative">
                      <img 
                        src={event.image} 
                        alt={event.name}
                        className="w-full h-64 lg:h-full object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-secondary text-secondary-foreground text-sm font-medium rounded-full">
                          {event.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="lg:w-2/3 p-6 lg:p-8">
                      <div className="flex flex-col h-full">
                        <div className="flex-1">
                          <h3 className="font-display text-2xl lg:text-3xl font-semibold mb-3">
                            {event.name}
                          </h3>
                          
                          <div className="flex flex-wrap gap-4 text-muted-foreground text-sm mb-4">
                            <span className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {new Date(event.date).toLocaleDateString('en-IN', { 
                                weekday: 'long',
                                year: 'numeric',
                                month: 'long', 
                                day: 'numeric' 
                              })}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              {event.location}
                            </span>
                          </div>

                          <p className="text-muted-foreground mb-6">{event.description}</p>

                          {/* Weather & Crowd Conditions */}
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-muted/50 rounded-xl mb-6">
                            <div className="flex items-center gap-3">
                              <div className="p-2 bg-card rounded-lg">
                                <Sun className="h-5 w-5 text-secondary" />
                              </div>
                              <div>
                                <span className="text-xs text-muted-foreground">Weather</span>
                                <p className="text-sm font-medium">{conditions.weather}</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="p-2 bg-card rounded-lg">
                                <Users className="h-5 w-5 text-secondary" />
                              </div>
                              <div>
                                <span className="text-xs text-muted-foreground">Expected Crowd</span>
                                <p className="text-sm font-medium">{conditions.crowd}</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="p-2 bg-card rounded-lg">
                                <Clock className="h-5 w-5 text-secondary" />
                              </div>
                              <div>
                                <span className="text-xs text-muted-foreground">Best Time</span>
                                <p className="text-sm font-medium">{conditions.recommended}</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-border">
                          <div>
                            <span className="text-xs text-muted-foreground">Ticket Price</span>
                            <p className="text-2xl font-bold text-secondary">₹{event.ticketPrice.toLocaleString()}</p>
                          </div>
                          
                          <div className="flex gap-3">
                            <Button
                              variant="outline"
                              onClick={() => toggleReminder(event.id)}
                              className={hasReminder ? 'border-secondary text-secondary' : ''}
                            >
                              {hasReminder ? (
                                <>
                                  <BellOff className="h-4 w-4 mr-2" />
                                  Remove Reminder
                                </>
                              ) : (
                                <>
                                  <Bell className="h-4 w-4 mr-2" />
                                  Set Reminder
                                </>
                              )}
                            </Button>
                            
                            <Button 
                              onClick={() => handleBookTicket(event.id)}
                              disabled={isBooked}
                              className={isBooked ? 'bg-green-600 hover:bg-green-600' : 'btn-saffron'}
                            >
                              {isBooked ? (
                                <>
                                  <Ticket className="h-4 w-4 mr-2" />
                                  Booked
                                </>
                              ) : (
                                <>
                                  <Ticket className="h-4 w-4 mr-2" />
                                  Book Ticket
                                </>
                              )}
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;
