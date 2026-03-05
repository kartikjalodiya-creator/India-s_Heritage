import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Search, Filter, MapPin, Star } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { souvenirs } from '@/data/heritageData';
import { useApp } from '@/contexts/AppContext';
import { toast } from '@/hooks/use-toast';

const Shop = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { addToCart, cart } = useApp();

  const categories = ['All', 'Decor', 'Textiles', 'Sculpture', 'Pottery', 'Art', 'Accessories', 'Specialty'];

  const regions = useMemo(() => {
    const uniqueOrigins = [...new Set(souvenirs.map(s => s.origin))].sort();
    return ['All', ...uniqueOrigins];
  }, []);

  const filteredProducts = souvenirs.filter(item => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesRegion = selectedRegion === 'All' || item.origin === selectedRegion;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.origin.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.artisan.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesRegion && matchesSearch;
  });

  const handleAddToCart = (item: typeof souvenirs[0]) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image
    });
    
    toast({
      title: 'Added to Cart! 🛒',
      description: `${item.name} has been added to your cart.`,
    });
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
              Heritage Souvenirs
            </h1>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
              Authentic handcrafted treasures from India's finest artisans
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 bg-card border-b border-border sticky top-20 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search souvenirs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-secondary/50"
              />
            </div>

            <div className="flex items-center gap-4 flex-wrap">
              {/* Region Filter */}
              <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                <SelectTrigger className="w-52">
                  <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                  <SelectValue placeholder="All Regions" />
                </SelectTrigger>
                <SelectContent className="max-h-64">
                  {regions.map(region => (
                    <SelectItem key={region} value={region}>
                      {region}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Category Filters */}
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={selectedCategory === category ? 'btn-saffron' : ''}
                  >
                    {category}
                  </Button>
                ))}
              </div>

              {/* Cart Button */}
              <Button 
                onClick={() => setIsCartOpen(true)}
                className="btn-heritage relative"
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Cart
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-secondary text-secondary-foreground text-xs flex items-center justify-center">
                    {cart.reduce((sum, item) => sum + item.quantity, 0)}
                  </span>
                )}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">No products found matching your criteria</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="heritage-card group overflow-hidden"
                >
                  {/* Image */}
                  <div className="relative aspect-square overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    {/* Quick Add Button */}
                    <motion.button
                      initial={{ opacity: 0, y: 20 }}
                      whileHover={{ scale: 1.05 }}
                      className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all btn-saffron px-6 py-2 rounded-full flex items-center gap-2"
                      onClick={() => handleAddToCart(item)}
                    >
                      <ShoppingCart className="h-4 w-4" />
                      Add to Cart
                    </motion.button>

                    {/* Category Badge */}
                    <span className="absolute top-4 left-4 px-3 py-1 bg-card/90 backdrop-blur-sm text-xs font-medium rounded-full">
                      {item.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <div className="flex items-center gap-1 text-xs text-muted-foreground mb-1">
                      <MapPin className="h-3 w-3" />
                      {item.origin}
                    </div>
                    
                    <h3 className="font-semibold text-lg mb-1 line-clamp-1">{item.name}</h3>
                    
                    <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                      {item.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold text-secondary">₹{item.price.toLocaleString()}</span>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        By {item.artisan}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Support Artisans CTA */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-display text-3xl font-bold mb-4">
              Support Traditional Artisans
            </h2>
            <p className="text-muted-foreground mb-8">
              Every purchase directly supports India's traditional craftsmen and helps preserve 
              centuries-old art forms for future generations.
            </p>
            <Button className="btn-heritage px-8">
              Learn About Our Artisans
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />

      {/* Cart Drawer */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
};

export default Shop;
