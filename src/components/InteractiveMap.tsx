import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapContainer, TileLayer, LayersControl, CircleMarker, Popup, Tooltip, ZoomControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { MapPin, ExternalLink, X, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { heritageSites, HeritageSite } from '@/data/heritageData';

interface InteractiveMapProps {
  onSiteSelect?: (site: HeritageSite) => void;
}

const InteractiveMap = ({ onSiteSelect }: InteractiveMapProps) => {
  const [selectedSite, setSelectedSite] = useState<HeritageSite | null>(null);
  const [filterType, setFilterType] = useState<string>('All');

  const filteredSites = filterType === 'All'
    ? heritageSites
    : heritageSites.filter(s => s.type === filterType);

  const typeColorHex: Record<string, string> = {
    Cultural: '#f97316', // saffron
    Natural: '#22c55e',  // emerald
    Mixed: '#a855f7',    // violet
  };

  const typeBadgeClass: Record<string, string> = {
    Cultural: 'bg-orange-500',
    Natural: 'bg-green-600',
    Mixed: 'bg-violet-600',
  };

  const gmapsUrl = (s: HeritageSite) =>
    `https://www.google.com/maps/search/?api=1&query=${s.lat},${s.lng}(${encodeURIComponent(s.name)})`;

  const gmapsDirections = (s: HeritageSite) =>
    `https://www.google.com/maps/dir/?api=1&destination=${s.lat},${s.lng}`;

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
            Explore Heritage Sites Across India
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Real satellite imagery powered by Esri. Click any marker to view details or open the location directly in Google Maps.
          </p>

          <div className="flex justify-center gap-3 flex-wrap">
            {(['All', 'Cultural', 'Natural', 'Mixed'] as const).map(type => {
              const count = type === 'All'
                ? heritageSites.length
                : heritageSites.filter(s => s.type === type).length;
              return (
                <button
                  key={type}
                  onClick={() => setFilterType(type)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    filterType === type
                      ? 'bg-secondary text-secondary-foreground shadow-md'
                      : 'bg-card text-muted-foreground hover:bg-muted'
                  }`}
                >
                  {type} ({count})
                </button>
              );
            })}
          </div>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-[4/3] md:aspect-[16/10] bg-card rounded-3xl shadow-heritage-lg overflow-hidden ring-1 ring-border"
          >
            <MapContainer
              center={[22.5, 80]}
              zoom={5}
              minZoom={4}
              maxZoom={18}
              scrollWheelZoom={true}
              zoomControl={false}
              className="absolute inset-0 z-0"
              style={{ height: '100%', width: '100%' }}
            >
              <ZoomControl position="topleft" />

              <LayersControl position="topright">
                <LayersControl.BaseLayer checked name="Satellite (Esri)">
                  <TileLayer
                    attribution='Tiles &copy; Esri &mdash; Source: Esri, Maxar, Earthstar Geographics'
                    url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                    maxZoom={19}
                  />
                </LayersControl.BaseLayer>
                <LayersControl.BaseLayer name="Terrain">
                  <TileLayer
                    attribution='Map data: &copy; <a href="https://www.opentopomap.org">OpenTopoMap</a> (CC-BY-SA)'
                    url="https://a.tile.opentopomap.org/{z}/{x}/{y}.png"
                    maxZoom={17}
                  />
                </LayersControl.BaseLayer>
                <LayersControl.BaseLayer name="Street">
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                </LayersControl.BaseLayer>

                {/* Labels overlay on top of satellite so cities/states stay readable */}
                <LayersControl.Overlay checked name="Labels & Boundaries">
                  <TileLayer
                    attribution='Labels &copy; Esri'
                    url="https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}"
                    maxZoom={19}
                  />
                </LayersControl.Overlay>
              </LayersControl>

              {filteredSites.map(site => {
                const isActive = selectedSite?.id === site.id;
                return (
                  <CircleMarker
                    key={site.id}
                    center={[site.lat, site.lng]}
                    radius={isActive ? 12 : 8}
                    pathOptions={{
                      color: '#ffffff',
                      weight: 2.5,
                      fillColor: isActive ? '#fbbf24' : typeColorHex[site.type],
                      fillOpacity: 0.95,
                    }}
                    eventHandlers={{
                      click: () => setSelectedSite(site),
                    }}
                  >
                    <Tooltip direction="top" offset={[0, -8]} opacity={1}>
                      <div className="text-xs font-medium">
                        <div>{site.name}</div>
                        <div className="text-[10px] opacity-70">{site.location}</div>
                      </div>
                    </Tooltip>
                    <Popup>
                      <div className="text-xs space-y-1 min-w-[160px]">
                        <div className="font-semibold text-sm">{site.name}</div>
                        <div className="opacity-70">{site.location}</div>
                        <a
                          href={gmapsUrl(site)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary underline block pt-1"
                        >
                          Open in Google Maps ↗
                        </a>
                      </div>
                    </Popup>
                  </CircleMarker>
                );
              })}
            </MapContainer>

            {/* Legend */}
            <div className="absolute bottom-4 left-4 flex gap-3 bg-card/95 backdrop-blur-sm rounded-full px-4 py-2 text-xs font-medium z-[500] shadow-md">
              <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-orange-500" /> Cultural</span>
              <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-green-600" /> Natural</span>
              <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-violet-600" /> Mixed</span>
            </div>

            {/* Open India in Google Maps */}
            <a
              href="https://www.google.com/maps/place/India/@22.5,80,5z"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 right-4 flex items-center gap-2 px-4 py-2 bg-card/95 backdrop-blur-sm rounded-full text-sm font-medium hover:bg-secondary hover:text-secondary-foreground transition-colors z-[500] shadow-md"
            >
              <ExternalLink className="h-4 w-4" />
              Open in Google Maps
            </a>

            {/* Site Info Panel */}
            {selectedSite && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="absolute top-4 right-4 w-72 bg-card rounded-2xl shadow-heritage-lg overflow-hidden z-[600]"
              >
                <div className="relative">
                  <img src={selectedSite.image} alt={selectedSite.name} className="w-full h-32 object-cover" />
                  <span className={`absolute top-2 left-2 px-2 py-0.5 rounded-full text-xs font-medium text-white ${typeBadgeClass[selectedSite.type]}`}>
                    {selectedSite.type}
                  </span>
                  <button
                    onClick={() => setSelectedSite(null)}
                    className="absolute top-2 right-2 p-1.5 rounded-full bg-card/90 hover:bg-card transition-colors"
                    aria-label="Close"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>

                <div className="p-4">
                  <h3 className="font-display text-lg font-semibold mb-1">{selectedSite.name}</h3>
                  <div className="flex items-center gap-1 text-muted-foreground text-xs mb-2">
                    <MapPin className="h-3 w-3" />
                    {selectedSite.location}
                  </div>
                  <p className="text-[11px] text-muted-foreground mb-2">
                    Best time: {selectedSite.bestTime} • Crowd: {selectedSite.crowdLevel}
                  </p>
                  <p className="text-xs text-muted-foreground mb-3 line-clamp-3">{selectedSite.description}</p>

                  <div className="grid grid-cols-2 gap-2 mb-2">
                    <a
                      href={gmapsUrl(selectedSite)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1 px-2 py-1.5 text-xs font-medium rounded-md bg-muted hover:bg-muted/70 transition-colors"
                    >
                      <ExternalLink className="h-3 w-3" /> Google Maps
                    </a>
                    <a
                      href={gmapsDirections(selectedSite)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1 px-2 py-1.5 text-xs font-medium rounded-md bg-muted hover:bg-muted/70 transition-colors"
                    >
                      <Navigation className="h-3 w-3" /> Directions
                    </a>
                  </div>

                  <Button
                    onClick={() => onSiteSelect?.(selectedSite)}
                    size="sm"
                    className="w-full btn-saffron"
                  >
                    View 360° Tour
                  </Button>
                </div>
              </motion.div>
            )}
          </motion.div>

          <p className="text-center text-xs text-muted-foreground mt-3">
            Showing {filteredSites.length} of {heritageSites.length} heritage sites • Scroll to zoom • Switch layers from the top-right control
          </p>
        </div>
      </div>
    </section>
  );
};

export default InteractiveMap;
