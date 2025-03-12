
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LogOut, ChevronRight, Calendar, Car, MapPin, Settings, Shield, CreditCard } from 'lucide-react';
import MobileLayout from '@/components/layout/MobileLayout';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

interface Appointment {
  id: string;
  serviceName: string;
  date: string;
  time: string;
  washType: string;
  price: number;
}

export default function Profile() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  // Mock appointments
  const appointments: Appointment[] = [
    {
      id: '1',
      serviceName: 'Premium Car Wash',
      date: 'May 28, 2023',
      time: '10:00',
      washType: 'Deluxe Wash',
      price: 25
    }
  ];
  
  useEffect(() => {
    // Check if user is authenticated
    const auth = localStorage.getItem('isAuthenticated') === 'true';
    setIsAuthenticated(auth);
    
    if (!auth) {
      navigate('/login');
    }
  }, [navigate]);
  
  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    toast.success('Logged out successfully');
    navigate('/');
  };
  
  if (!isAuthenticated) {
    return null;
  }

  return (
    <MobileLayout title="Profile">
      <div className="p-4 space-y-6">
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <div className="flex items-center">
            <Avatar className="h-16 w-16">
              <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="ml-4">
              <h2 className="text-xl font-bold">John Doe</h2>
              <p className="text-muted-foreground text-sm">john.doe@example.com</p>
            </div>
          </div>
          
          <div className="mt-4 border-t pt-4">
            <Button
              variant="outline"
              className="w-full justify-start text-left"
              onClick={handleLogout}
            >
              <LogOut className="mr-2 h-4 w-4" />
              Log out
            </Button>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <h3 className="font-medium p-4 border-b">Upcoming Appointments</h3>
          
          {appointments.length > 0 ? (
            <div className="divide-y">
              {appointments.map((appointment) => (
                <motion.div
                  key={appointment.id}
                  whileTap={{ scale: 0.98 }}
                  className="p-4"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium">{appointment.serviceName}</h4>
                      <div className="flex items-center text-sm text-muted-foreground mt-1">
                        <Calendar className="h-3.5 w-3.5 mr-1" />
                        <span>
                          {appointment.date} at {appointment.time}
                        </span>
                      </div>
                      <div className="text-sm mt-1">{appointment.washType}</div>
                    </div>
                    <div className="font-bold">${appointment.price}</div>
                  </div>
                  <div className="flex justify-end mt-3">
                    <Button size="sm" variant="outline">
                      Reschedule
                    </Button>
                    <Button size="sm" variant="ghost" className="text-destructive">
                      Cancel
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="p-6 text-center">
              <p className="text-muted-foreground">No upcoming appointments</p>
              <Button
                className="mt-3"
                size="sm"
                onClick={() => navigate('/browse')}
              >
                Book Now
              </Button>
            </div>
          )}
        </div>
        
        <div className="space-y-2">
          <motion.div
            whileTap={{ scale: 0.98 }}
            className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex justify-between items-center"
            onClick={() => toast.info('Not implemented yet')}
          >
            <div className="flex items-center">
              <div className="bg-secondary rounded-full p-2 mr-3">
                <Car className="h-5 w-5" />
              </div>
              <span className="font-medium">My Cars</span>
            </div>
            <ChevronRight className="h-5 w-5 text-muted-foreground" />
          </motion.div>
          
          <motion.div
            whileTap={{ scale: 0.98 }}
            className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex justify-between items-center"
            onClick={() => toast.info('Not implemented yet')}
          >
            <div className="flex items-center">
              <div className="bg-secondary rounded-full p-2 mr-3">
                <MapPin className="h-5 w-5" />
              </div>
              <span className="font-medium">Saved Locations</span>
            </div>
            <ChevronRight className="h-5 w-5 text-muted-foreground" />
          </motion.div>
          
          <motion.div
            whileTap={{ scale: 0.98 }}
            className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex justify-between items-center"
            onClick={() => toast.info('Not implemented yet')}
          >
            <div className="flex items-center">
              <div className="bg-secondary rounded-full p-2 mr-3">
                <CreditCard className="h-5 w-5" />
              </div>
              <span className="font-medium">Payment Methods</span>
            </div>
            <ChevronRight className="h-5 w-5 text-muted-foreground" />
          </motion.div>
          
          <motion.div
            whileTap={{ scale: 0.98 }}
            className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex justify-between items-center"
            onClick={() => toast.info('Not implemented yet')}
          >
            <div className="flex items-center">
              <div className="bg-secondary rounded-full p-2 mr-3">
                <Shield className="h-5 w-5" />
              </div>
              <span className="font-medium">Privacy Settings</span>
            </div>
            <ChevronRight className="h-5 w-5 text-muted-foreground" />
          </motion.div>
          
          <motion.div
            whileTap={{ scale: 0.98 }}
            className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex justify-between items-center"
            onClick={() => toast.info('Not implemented yet')}
          >
            <div className="flex items-center">
              <div className="bg-secondary rounded-full p-2 mr-3">
                <Settings className="h-5 w-5" />
              </div>
              <span className="font-medium">App Settings</span>
            </div>
            <ChevronRight className="h-5 w-5 text-muted-foreground" />
          </motion.div>
        </div>
      </div>
    </MobileLayout>
  );
}
