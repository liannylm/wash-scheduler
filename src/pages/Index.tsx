
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import MobileLayout from '@/components/layout/MobileLayout';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import CarWashCard, { CarWashService } from '@/components/car-wash/CarWashCard';

const MOCK_SERVICES: CarWashService[] = [
  {
    id: '1',
    name: 'Premium Car Wash',
    image: 'https://images.unsplash.com/photo-1545327521-8b4b5d6bc605?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
    rating: 4.8,
    price: 25,
    distance: '1.2 mi',
    address: '123 Main Street',
    openTime: '8:00',
    closeTime: '20:00',
  },
  {
    id: '2',
    name: 'Quick & Clean',
    image: 'https://images.unsplash.com/photo-1552149826-c1e99c724cd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
    rating: 4.5,
    price: 18,
    distance: '0.8 mi',
    address: '456 Park Avenue',
    openTime: '7:00',
    closeTime: '22:00',
  },
  {
    id: '3',
    name: 'Eco Friendly Wash',
    image: 'https://images.unsplash.com/photo-1596257520714-f184ee2a0aa5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
    rating: 4.7,
    price: 30,
    distance: '2.5 mi',
    address: '789 Green Street',
    openTime: '9:00',
    closeTime: '19:00',
  },
];

export default function Index() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  useEffect(() => {
    // Check if user is authenticated
    const auth = localStorage.getItem('isAuthenticated') === 'true';
    setIsAuthenticated(auth);
  }, []);
  
  const handleServiceClick = (id: string) => {
    navigate(`/schedule?serviceId=${id}`);
  };
  
  return (
    <MobileLayout hideHeader>
      <div className="relative">
        <div className="absolute inset-0 bg-primary h-48" />
        
        <div className="relative pt-10 px-4">
          <div className="flex justify-between items-center mb-5">
            <div className="text-white">
              <h1 className="text-2xl font-bold">
                {isAuthenticated ? 'Hello, User' : 'Car Wash'}
              </h1>
              <div className="flex items-center mt-1">
                <MapPin className="h-4 w-4 mr-1" />
                <p className="text-sm">San Francisco, CA</p>
              </div>
            </div>
            {!isAuthenticated && (
              <Button
                variant="ghost"
                className="text-white hover:bg-white/10"
                onClick={() => navigate('/login')}
              >
                Login
              </Button>
            )}
          </div>
          
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search for car wash services"
              className="pl-10 bg-white/95 backdrop-blur-sm border-transparent"
              onClick={() => navigate('/browse')}
            />
          </div>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl shadow-sm p-5 mt-5"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-bold text-lg">Nearby Services</h2>
              <Button
                variant="ghost"
                size="sm"
                className="text-primary flex items-center text-sm"
                onClick={() => navigate('/browse')}
              >
                View all
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
            
            <div className="space-y-3">
              {MOCK_SERVICES.slice(0, 2).map((service) => (
                <CarWashCard
                  key={service.id}
                  service={service}
                  onClick={handleServiceClick}
                />
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-xl shadow-sm p-5 mt-5 mb-5"
          >
            <h2 className="font-bold text-lg mb-4">Popular Services</h2>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-secondary rounded-lg p-3 text-center">
                <div className="font-medium">Basic Wash</div>
                <div className="text-sm text-muted-foreground">From $15</div>
              </div>
              <div className="bg-secondary rounded-lg p-3 text-center">
                <div className="font-medium">Premium Wash</div>
                <div className="text-sm text-muted-foreground">From $25</div>
              </div>
              <div className="bg-secondary rounded-lg p-3 text-center">
                <div className="font-medium">Interior Cleaning</div>
                <div className="text-sm text-muted-foreground">From $30</div>
              </div>
              <div className="bg-secondary rounded-lg p-3 text-center">
                <div className="font-medium">Full Detail</div>
                <div className="text-sm text-muted-foreground">From $60</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </MobileLayout>
  );
}
