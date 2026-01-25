import { useState, useEffect, createContext, useContext, ReactNode } from 'react';

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  age?: number;
  hometown?: string;
  phone?: string;
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface AppContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  isAuthenticated: boolean;
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
  removeFromCart: (id: string) => void;
  updateCartQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  cartTotal: number;
  savedTours: string[];
  toggleSavedTour: (tourId: string) => void;
  bookedEvents: string[];
  bookEvent: (eventId: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [savedTours, setSavedTours] = useState<string[]>([]);
  const [bookedEvents, setBookedEvents] = useState<string[]>([]);

  // Load from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('bharatUser');
    const savedCart = localStorage.getItem('bharatCart');
    const savedToursList = localStorage.getItem('bharatSavedTours');
    const savedEvents = localStorage.getItem('bharatBookedEvents');

    if (savedUser) setUser(JSON.parse(savedUser));
    if (savedCart) setCart(JSON.parse(savedCart));
    if (savedToursList) setSavedTours(JSON.parse(savedToursList));
    if (savedEvents) setBookedEvents(JSON.parse(savedEvents));
  }, []);

  // Save to localStorage when state changes
  useEffect(() => {
    if (user) {
      localStorage.setItem('bharatUser', JSON.stringify(user));
    } else {
      localStorage.removeItem('bharatUser');
    }
  }, [user]);

  useEffect(() => {
    localStorage.setItem('bharatCart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('bharatSavedTours', JSON.stringify(savedTours));
  }, [savedTours]);

  useEffect(() => {
    localStorage.setItem('bharatBookedEvents', JSON.stringify(bookedEvents));
  }, [bookedEvents]);

  const addToCart = (item: Omit<CartItem, 'quantity'>) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => 
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(i => i.id !== id));
  };

  const updateCartQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    setCart(prev => prev.map(i => 
      i.id === id ? { ...i, quantity } : i
    ));
  };

  const clearCart = () => setCart([]);

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const toggleSavedTour = (tourId: string) => {
    setSavedTours(prev => 
      prev.includes(tourId) 
        ? prev.filter(id => id !== tourId)
        : [...prev, tourId]
    );
  };

  const bookEvent = (eventId: string) => {
    if (!bookedEvents.includes(eventId)) {
      setBookedEvents(prev => [...prev, eventId]);
    }
  };

  return (
    <AppContext.Provider value={{
      user,
      setUser,
      isAuthenticated: !!user,
      cart,
      addToCart,
      removeFromCart,
      updateCartQuantity,
      clearCart,
      cartTotal,
      savedTours,
      toggleSavedTour,
      bookedEvents,
      bookEvent
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
