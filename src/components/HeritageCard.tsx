import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Heart, MapPin, Clock, Users, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeritageCardProps {
  id: string;
  image: string;
  name: string;
  location: string;
  description: string;
  bestTime?: string;
  crowdLevel?: 'Low' | 'Medium' | 'High';
  onExplore?: () => void;
  onPlay?: () => void;
  variant?: 'default' | 'tour' | 'compact';
  isSaved?: boolean;
  onToggleSave?: () => void;
}

const HeritageCard = ({
  id,
  image,
  name,
  location,
  description,
  bestTime,
  crowdLevel,
  onExplore,
  onPlay,
  variant = 'default',
  isSaved = false,
  onToggleSave
}: HeritageCardProps) => {
  const crowdColors = {
    Low: 'text-green-600 bg-green-100',
    Medium: 'text-yellow-600 bg-yellow-100',
    High: 'text-red-600 bg-red-100'
  };

  if (variant === 'compact') {
    return (
      <motion.div 
        whileHover={{ y: -5 }}
        className="heritage-card group cursor-pointer"
        onClick={onExplore}
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="font-display text-lg font-semibold text-primary-foreground">{name}</h3>
            <div className="flex items-center gap-1 text-primary-foreground/80 text-sm">
              <MapPin className="h-3 w-3" />
              {location}
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  if (variant === 'tour') {
    return (
      <motion.div 
        whileHover={{ y: -8 }}
        className="heritage-card group"
      >
        <div className="relative aspect-video overflow-hidden">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
          
          {/* Play Button Overlay */}
          <button 
            onClick={onPlay}
            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <div className="h-20 w-20 rounded-full bg-secondary/90 flex items-center justify-center shadow-glow-saffron transform group-hover:scale-110 transition-transform">
              <Play className="h-8 w-8 text-secondary-foreground ml-1" fill="currentColor" />
            </div>
          </button>

          {/* Save Button */}
          {onToggleSave && (
            <button 
              onClick={(e) => { e.stopPropagation(); onToggleSave(); }}
              className="absolute top-4 right-4 p-2 rounded-full bg-card/80 backdrop-blur-sm hover:bg-card transition-colors"
            >
              <Heart className={`h-5 w-5 ${isSaved ? 'fill-secondary text-secondary' : 'text-foreground'}`} />
            </button>
          )}

          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="font-display text-xl font-semibold text-primary-foreground mb-1">{name}</h3>
            <div className="flex items-center gap-1 text-primary-foreground/80 text-sm">
              <MapPin className="h-4 w-4" />
              {location}
            </div>
          </div>
        </div>
        
        <div className="p-5">
          <p className="text-muted-foreground text-sm line-clamp-2 mb-4">{description}</p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {bestTime && (
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  {bestTime}
                </div>
              )}
              {crowdLevel && (
                <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${crowdColors[crowdLevel]}`}>
                  <Users className="h-3 w-3 inline mr-1" />
                  {crowdLevel}
                </span>
              )}
            </div>
            
            <Button 
              size="sm" 
              variant="ghost"
              onClick={onExplore}
              className="text-secondary hover:text-secondary hover:bg-secondary/10"
            >
              Explore →
            </Button>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="heritage-card group"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        
        {onToggleSave && (
          <button 
            onClick={(e) => { e.stopPropagation(); onToggleSave(); }}
            className="absolute top-4 right-4 p-2 rounded-full bg-card/80 backdrop-blur-sm hover:bg-card transition-colors opacity-0 group-hover:opacity-100"
          >
            <Heart className={`h-5 w-5 ${isSaved ? 'fill-secondary text-secondary' : 'text-foreground'}`} />
          </button>
        )}
      </div>
      
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-display text-xl font-semibold">{name}</h3>
          {crowdLevel && (
            <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${crowdColors[crowdLevel]}`}>
              {crowdLevel}
            </span>
          )}
        </div>
        
        <div className="flex items-center gap-1 text-muted-foreground text-sm mb-3">
          <MapPin className="h-4 w-4" />
          {location}
        </div>
        
        <p className="text-muted-foreground text-sm line-clamp-2 mb-4">{description}</p>
        
        {bestTime && (
          <div className="flex items-center gap-1 text-xs text-muted-foreground mb-4">
            <Clock className="h-3 w-3" />
            Best Time: {bestTime}
          </div>
        )}
        
        <Button 
          onClick={onExplore}
          className="w-full btn-saffron"
        >
          Explore Now
        </Button>
      </div>
    </motion.div>
  );
};

export default HeritageCard;
