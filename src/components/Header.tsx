import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Search, Menu, X, ShoppingCart, User, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useApp } from '@/contexts/AppContext';
import logo from '@/assets/logo.png';
import { heritageSites, souvenirs, events } from '@/data/heritageData';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchResults, setShowSearchResults] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const { cart, isAuthenticated, user } = useApp();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setShowSearchResults(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Explore', path: '/explore' },
    { name: 'Tours', path: '/tours' },
    { name: 'Events', path: '/events' },
    { name: 'Shop', path: '/shop' },
    { name: 'Blog', path: '/blog' },
    { name: 'Community', path: '/community' },
    { name: 'Donate', path: '/donate' },
  ];

  // Search functionality
  const getSearchResults = () => {
    if (!searchQuery.trim()) return { sites: [], products: [], eventResults: [] };
    
    const query = searchQuery.toLowerCase();
    const sites = heritageSites.filter(s => 
      s.name.toLowerCase().includes(query) || s.location.toLowerCase().includes(query)
    );
    const products = souvenirs.filter(p => 
      p.name.toLowerCase().includes(query) || p.category.toLowerCase().includes(query)
    );
    const eventResults = events.filter(e => 
      e.name.toLowerCase().includes(query) || e.location.toLowerCase().includes(query)
    );
    return { sites, products, eventResults };
  };

  const searchResults = getSearchResults();
  const hasResults = searchResults.sites.length > 0 || searchResults.products.length > 0 || searchResults.eventResults.length > 0;

  const scrollToVirtualTours = () => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: 'virtual-tours' } });
    } else {
      const element = document.getElementById('virtual-tours');
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-effect shadow-heritage py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Bharat Heritage" className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`animated-underline font-medium transition-colors ${
                  location.pathname === link.path 
                    ? 'text-secondary' 
                    : isScrolled ? 'text-foreground hover:text-secondary' : 'text-foreground hover:text-secondary'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Search Bar */}
          <div ref={searchRef} className="hidden md:block relative">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search heritage, souvenirs, events..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowSearchResults(true);
                }}
                onFocus={() => setShowSearchResults(true)}
                className="pl-10 pr-4 py-2 w-64 rounded-full border border-border bg-card/50 focus:outline-none focus:ring-2 focus:ring-secondary/50 text-sm"
              />
            </div>
            
            {/* Search Results Dropdown */}
            {showSearchResults && searchQuery && (
              <div className="absolute top-full mt-2 w-80 bg-card rounded-xl shadow-heritage-lg border border-border overflow-hidden">
                {hasResults ? (
                  <div className="max-h-96 overflow-y-auto">
                    {searchResults.sites.length > 0 && (
                      <div className="p-3">
                        <h4 className="text-xs font-semibold text-muted-foreground uppercase mb-2">Heritage Sites</h4>
                        {searchResults.sites.map(site => (
                          <Link
                            key={site.id}
                            to={`/explore`}
                            onClick={() => setShowSearchResults(false)}
                            className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted transition-colors"
                          >
                            <img src={site.image} alt={site.name} className="w-10 h-10 rounded-lg object-cover" />
                            <div>
                              <p className="font-medium text-sm">{site.name}</p>
                              <p className="text-xs text-muted-foreground">{site.location}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                    {searchResults.products.length > 0 && (
                      <div className="p-3 border-t border-border">
                        <h4 className="text-xs font-semibold text-muted-foreground uppercase mb-2">Souvenirs</h4>
                        {searchResults.products.map(product => (
                          <Link
                            key={product.id}
                            to={`/shop`}
                            onClick={() => setShowSearchResults(false)}
                            className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted transition-colors"
                          >
                            <img src={product.image} alt={product.name} className="w-10 h-10 rounded-lg object-cover" />
                            <div>
                              <p className="font-medium text-sm">{product.name}</p>
                              <p className="text-xs text-muted-foreground">₹{product.price}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                    {searchResults.eventResults.length > 0 && (
                      <div className="p-3 border-t border-border">
                        <h4 className="text-xs font-semibold text-muted-foreground uppercase mb-2">Events</h4>
                        {searchResults.eventResults.map(event => (
                          <Link
                            key={event.id}
                            to={`/events`}
                            onClick={() => setShowSearchResults(false)}
                            className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted transition-colors"
                          >
                            <img src={event.image} alt={event.name} className="w-10 h-10 rounded-lg object-cover" />
                            <div>
                              <p className="font-medium text-sm">{event.name}</p>
                              <p className="text-xs text-muted-foreground">{event.date}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="p-6 text-center text-muted-foreground">
                    No results found for "{searchQuery}"
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={scrollToVirtualTours}
              className="hidden sm:flex btn-saffron"
            >
              Get Started
            </Button>
            
            <Link to="/shop" className="relative">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {cart.length > 0 && (
                  <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-secondary text-secondary-foreground text-xs flex items-center justify-center">
                    {cart.reduce((sum, item) => sum + item.quantity, 0)}
                  </span>
                )}
              </Button>
            </Link>

            {isAuthenticated ? (
              <Link to="/profile">
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
              </Link>
            ) : (
              <Link to="/auth">
                <Button variant="outline" size="sm" className="hidden sm:flex">
                  Sign In
                </Button>
              </Link>
            )}

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 animate-slide-up">
            <div className="flex flex-col gap-2">
              {navLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                    location.pathname === link.path 
                      ? 'bg-secondary text-secondary-foreground' 
                      : 'hover:bg-muted'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              {!isAuthenticated && (
                <Link to="/auth" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full mt-2 btn-heritage">Sign In</Button>
                </Link>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
