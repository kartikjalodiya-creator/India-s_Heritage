import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, ExternalLink, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { heritageSites, HeritageSite } from '@/data/heritageData';

interface InteractiveMapProps {
  onSiteSelect?: (site: HeritageSite) => void;
}

// Convert lat/lng to percentage positions on India map viewport
// India bounds approx: lat 6-37, lng 68-98
const getPosition = (lat: number, lng: number) => ({
  top: `${((37 - lat) / (37 - 6)) * 100}%`,
  left: `${((lng - 68) / (98 - 68)) * 100}%`,
});

const InteractiveMap = ({ onSiteSelect }: InteractiveMapProps) => {
  const [selectedSite, setSelectedSite] = useState<HeritageSite | null>(null);
  const [hoveredSite, setHoveredSite] = useState<string | null>(null);
  const [filterType, setFilterType] = useState<string>('All');

  const filteredSites = filterType === 'All'
    ? heritageSites
    : heritageSites.filter(s => s.type === filterType);

  const handleSiteClick = (site: HeritageSite) => {
    setSelectedSite(site);
    onSiteSelect?.(site);
  };

  const typeColors: Record<string, string> = {
    Cultural: 'bg-primary',
    Natural: 'bg-green-600',
    Mixed: 'bg-violet-600',
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <span className="text-secondary font-medium text-sm uppercase tracking-wider">Interactive Map</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-2 mb-4">
            Explore Heritage Sites
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Click on the markers to discover India's magnificent monuments and plan your cultural journey
          </p>

          {/* Filter buttons */}
          <div className="flex justify-center gap-3 flex-wrap">
            {['All', 'Cultural', 'Natural', 'Mixed'].map(type => (
              <button
                key={type}
                onClick={() => setFilterType(type)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filterType === type
                    ? 'bg-secondary text-secondary-foreground shadow-md'
                    : 'bg-card text-muted-foreground hover:bg-muted'
                }`}
              >
                {type} {type !== 'All' && `(${heritageSites.filter(s => type === 'All' || s.type === type).length})`}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-[4/3] bg-card rounded-3xl shadow-heritage-lg overflow-hidden"
          >
            {/* Embedded Google Map */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7769898.31123456!2d77.1024902!3d20.5937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            />

            {/* Custom Pin Overlay */}
            <div className="absolute inset-0 pointer-events-none">
              {filteredSites.map((site, i) => {
                const pos = getPosition(site.lat, site.lng);
                return (
                  <motion.button
                    key={site.id}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3 + i * 0.03, type: 'spring' }}
                    style={{ position: 'absolute', top: pos.top, left: pos.left }}
                    className={`pointer-events-auto p-1.5 rounded-full transition-all duration-300 -translate-x-1/2 -translate-y-1/2 ${
                      selectedSite?.id === site.id
                        ? 'bg-secondary scale-150 shadow-glow-saffron z-20'
                        : `${typeColors[site.type] || 'bg-primary'} hover:bg-secondary hover:scale-125 z-10`
                    }`}
                    onClick={() => handleSiteClick(site)}
                    onMouseEnter={() => setHoveredSite(site.id)}
                    onMouseLeave={() => setHoveredSite(null)}
                  >
                    <MapPin className="h-4 w-4 text-white" />

                    {hoveredSite === site.id && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-card text-foreground rounded-lg shadow-lg whitespace-nowrap text-xs font-medium z-30"
                      >
                        {site.name}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-card" />
                      </motion.div>
                    )}
                  </motion.button>
                );
              })}
            </div>

            {/* Legend */}
            <div className="absolute bottom-4 left-4 flex gap-3 bg-card/90 backdrop-blur-sm rounded-full px-4 py-2 text-xs font-medium z-10">
              <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-primary" /> Cultural</span>
              <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-green-600" /> Natural</span>
              <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-violet-600" /> Mixed</span>
            </div>

            {/* Open in Google Maps */}
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 right-4 flex items-center gap-2 px-4 py-2 bg-card/90 backdrop-blur-sm rounded-full text-sm font-medium hover:bg-secondary hover:text-secondary-foreground transition-colors z-10"
            >
              <ExternalLink className="h-4 w-4" />
              Open in Google Maps
            </a>
          </motion.div>

          {/* Site Info Panel */}
          {selectedSite && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="absolute top-4 right-4 w-80 bg-card rounded-2xl shadow-heritage-lg overflow-hidden z-20"
            >
              <div className="relative">
                <img src={selectedSite.image} alt={selectedSite.name} className="w-full h-40 object-cover" />
                <span className={`absolute top-2 left-2 px-2 py-0.5 rounded-full text-xs font-medium text-white ${typeColors[selectedSite.type]}`}>
                  {selectedSite.type}
                </span>
                <button
                  onClick={() => setSelectedSite(null)}
                  className="absolute top-2 right-2 p-1.5 rounded-full bg-card/80 hover:bg-card transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="p-4">
                <h3 className="font-display text-xl font-semibold mb-1">{selectedSite.name}</h3>
                <div className="flex items-center gap-1 text-muted-foreground text-sm mb-2">
                  <MapPin className="h-4 w-4" />
                  {selectedSite.location}
                </div>
                <p className="text-xs text-muted-foreground mb-1">Best time: {selectedSite.bestTime} • Crowd: {selectedSite.crowdLevel}</p>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{selectedSite.description}</p>
                <Button onClick={() => onSiteSelect?.(selectedSite)} className="w-full btn-saffron">
                  View 360° Tour
                </Button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default InteractiveMap;
