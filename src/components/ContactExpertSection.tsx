import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, MapPin, MessageCircle, X, Send, Globe, Award, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { travelGuides, TravelGuide } from '@/data/guidesData';
import { useApp } from '@/contexts/AppContext';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';

const ContactExpertSection = () => {
  const [selectedGuide, setSelectedGuide] = useState<TravelGuide | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [searchQuery, setSearchQuery] = useState('');
  const [regionFilter, setRegionFilter] = useState('all');
  const [specializationFilter, setSpecializationFilter] = useState('all');
  const { isAuthenticated, user } = useApp();
  const navigate = useNavigate();

  // Extract unique regions and specializations
  const regions = useMemo(() => [...new Set(travelGuides.map(g => g.region))], []);
  const specializations = useMemo(() => [...new Set(travelGuides.map(g => g.specialization))], []);

  // Filter guides based on search and filters
  const filteredGuides = useMemo(() => {
    return travelGuides.filter(guide => {
      const matchesSearch = searchQuery === '' || 
        guide.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        guide.specialization.toLowerCase().includes(searchQuery.toLowerCase()) ||
        guide.region.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesRegion = regionFilter === 'all' || guide.region === regionFilter;
      const matchesSpecialization = specializationFilter === 'all' || guide.specialization === specializationFilter;
      return matchesSearch && matchesRegion && matchesSpecialization;
    });
  }, [searchQuery, regionFilter, specializationFilter]);

  const handleContactGuide = (guide: TravelGuide) => {
    if (!isAuthenticated) {
      navigate('/auth', { state: { returnTo: '/tours' } });
      return;
    }
    setSelectedGuide(guide);
    setFormData(prev => ({
      ...prev,
      name: user?.name || '',
      email: user?.email || '',
      phone: user?.phone || ''
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({ title: 'Missing Fields', description: 'Please fill in all required fields.', variant: 'destructive' });
      return;
    }
    toast({
      title: 'Message Sent! 📩',
      description: `Your message has been sent to ${selectedGuide?.name}. They will contact you within 24 hours.`,
    });
    setSelectedGuide(null);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const clearFilters = () => {
    setSearchQuery('');
    setRegionFilter('all');
    setSpecializationFilter('all');
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Meet Our Travel Experts
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Connect with certified heritage guides who bring India's history to life. 
            Each expert offers personalized itineraries tailored to your interests.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 space-y-4"
        >
          <div className="flex flex-col sm:flex-row gap-4 max-w-4xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by name, region, or specialization..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={regionFilter} onValueChange={setRegionFilter}>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="All Regions" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Regions</SelectItem>
                {regions.map(region => (
                  <SelectItem key={region} value={region}>{region}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={specializationFilter} onValueChange={setSpecializationFilter}>
              <SelectTrigger className="w-full sm:w-56">
                <SelectValue placeholder="All Specializations" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Specializations</SelectItem>
                {specializations.map(spec => (
                  <SelectItem key={spec} value={spec}>{spec}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          {(searchQuery || regionFilter !== 'all' || specializationFilter !== 'all') && (
            <div className="flex items-center justify-center gap-2">
              <span className="text-sm text-muted-foreground">
                {filteredGuides.length} guide{filteredGuides.length !== 1 ? 's' : ''} found
              </span>
              <Button variant="ghost" size="sm" onClick={clearFilters} className="text-xs">
                Clear filters
              </Button>
            </div>
          )}
        </motion.div>

        {/* Guides Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {travelGuides.map((guide, index) => (
            <motion.div
              key={guide.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="heritage-card overflow-hidden group"
            >
              {/* Photo */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={guide.photo}
                  alt={guide.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="flex items-center gap-1 text-primary-foreground">
                    <Star className="h-3.5 w-3.5 fill-secondary text-secondary" />
                    <span className="text-sm font-semibold">{guide.rating}</span>
                    <span className="text-xs opacity-80">({guide.reviews})</span>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-4">
                <h3 className="font-display text-lg font-semibold mb-1">{guide.name}</h3>
                <p className="text-xs text-secondary font-medium mb-2">{guide.specialization}</p>
                
                <div className="space-y-1.5 mb-3">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    {guide.region}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Award className="h-3 w-3" />
                    {guide.experience} yrs experience
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Globe className="h-3 w-3" />
                    {guide.languages.join(', ')}
                  </div>
                </div>

                <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{guide.bio}</p>

                <Button
                  onClick={() => handleContactGuide(guide)}
                  size="sm"
                  className="w-full btn-saffron text-xs"
                >
                  <MessageCircle className="h-3.5 w-3.5 mr-1" />
                  Contact
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contact Modal */}
      <AnimatePresence>
        {selectedGuide && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            onClick={() => setSelectedGuide(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Modal Header */}
              <div className="relative p-6 border-b border-border">
                <button
                  onClick={() => setSelectedGuide(null)}
                  className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-muted transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
                <div className="flex items-center gap-4">
                  <img
                    src={selectedGuide.photo}
                    alt={selectedGuide.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-secondary"
                  />
                  <div>
                    <h3 className="font-display text-xl font-semibold">{selectedGuide.name}</h3>
                    <p className="text-sm text-secondary">{selectedGuide.specialization}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <Star className="h-3.5 w-3.5 fill-secondary text-secondary" />
                      <span className="text-sm font-medium">{selectedGuide.rating}</span>
                      <span className="text-xs text-muted-foreground">• {selectedGuide.region}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <div>
                  <label className="text-sm font-medium mb-1 block">Name *</label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Email *</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Phone</label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Message *</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    placeholder={`Hi ${selectedGuide.name}, I'd like to discuss a custom tour itinerary for...`}
                    rows={4}
                  />
                </div>
                <Button type="submit" className="w-full btn-saffron">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ContactExpertSection;
