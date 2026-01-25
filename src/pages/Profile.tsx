import { motion } from 'framer-motion';
import { User, Mail, Phone, MapPin, Heart, Calendar, Image, Settings, LogOut } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useApp } from '@/contexts/AppContext';
import { useNavigate } from 'react-router-dom';
import { heritageSites, tourPlans, events } from '@/data/heritageData';

const Profile = () => {
  const { user, setUser, savedTours, bookedEvents, cart } = useApp();
  const navigate = useNavigate();

  if (!user) {
    navigate('/auth');
    return null;
  }

  const handleLogout = () => {
    setUser(null);
    navigate('/');
  };

  const savedSites = heritageSites.filter(s => savedTours.includes(s.id));
  const bookedEventsList = events.filter(e => bookedEvents.includes(e.id));

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-32 pb-16 bg-gradient-heritage">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-6 text-primary-foreground">
            <div className="w-24 h-24 rounded-full bg-secondary flex items-center justify-center text-4xl font-bold">
              {user.name.charAt(0).toUpperCase()}
            </div>
            <div>
              <h1 className="font-display text-3xl font-bold">{user.name}</h1>
              <p className="text-primary-foreground/80">{user.email}</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Profile Info */}
            <div className="heritage-card p-6">
              <h3 className="font-display text-xl font-semibold mb-4 flex items-center gap-2"><User className="h-5 w-5 text-secondary" />Profile Info</h3>
              <div className="space-y-3 text-sm">
                <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-muted-foreground" />{user.email}</p>
                <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-muted-foreground" />{user.phone || 'Not provided'}</p>
                <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-muted-foreground" />{user.hometown || 'Not provided'}</p>
              </div>
              <Button onClick={handleLogout} variant="outline" className="w-full mt-6 text-destructive border-destructive hover:bg-destructive hover:text-white">
                <LogOut className="h-4 w-4 mr-2" />Sign Out
              </Button>
            </div>

            {/* Saved Tours */}
            <div className="heritage-card p-6">
              <h3 className="font-display text-xl font-semibold mb-4 flex items-center gap-2"><Heart className="h-5 w-5 text-secondary" />Saved Tours ({savedSites.length})</h3>
              {savedSites.length === 0 ? (
                <p className="text-muted-foreground text-sm">No saved tours yet</p>
              ) : (
                <div className="space-y-3">
                  {savedSites.map(site => (
                    <div key={site.id} className="flex items-center gap-3 p-2 bg-muted rounded-lg">
                      <img src={site.image} alt={site.name} className="w-12 h-12 rounded-lg object-cover" />
                      <div><p className="font-medium text-sm">{site.name}</p><p className="text-xs text-muted-foreground">{site.location}</p></div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Booked Events */}
            <div className="heritage-card p-6">
              <h3 className="font-display text-xl font-semibold mb-4 flex items-center gap-2"><Calendar className="h-5 w-5 text-secondary" />Booked Events ({bookedEventsList.length})</h3>
              {bookedEventsList.length === 0 ? (
                <p className="text-muted-foreground text-sm">No booked events yet</p>
              ) : (
                <div className="space-y-3">
                  {bookedEventsList.map(event => (
                    <div key={event.id} className="flex items-center gap-3 p-2 bg-muted rounded-lg">
                      <img src={event.image} alt={event.name} className="w-12 h-12 rounded-lg object-cover" />
                      <div><p className="font-medium text-sm">{event.name}</p><p className="text-xs text-muted-foreground">{new Date(event.date).toLocaleDateString()}</p></div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Profile;
