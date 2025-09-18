'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '(555) 123-4567',
    email: 'your.email@example.com',
    vehicleDetails: '',
    serviceLocation: '',
    additionalNotes: '',
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Booking request:', formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-background border border-border rounded-2xl p-8 w-full max-w-md mx-4 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-foreground">Book Your Detail</h2>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="fullName" className="text-sm font-medium text-foreground">
              Full Name
            </Label>
            <Input
              id="fullName"
              type="text"
              placeholder="Your full name"
              value={formData.fullName}
              onChange={(e) => handleInputChange('fullName', e.target.value)}
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="phoneNumber" className="text-sm font-medium text-foreground">
              Phone Number
            </Label>
            <Input
              id="phoneNumber"
              type="tel"
              placeholder="(555) 123-4567"
              value={formData.phoneNumber}
              onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="email" className="text-sm font-medium text-foreground">
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="vehicleDetails" className="text-sm font-medium text-foreground">
              Vehicle Details
            </Label>
            <Input
              id="vehicleDetails"
              type="text"
              placeholder="Year, Make, Model"
              value={formData.vehicleDetails}
              onChange={(e) => handleInputChange('vehicleDetails', e.target.value)}
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="serviceLocation" className="text-sm font-medium text-foreground">
              Service Location
            </Label>
            <Input
              id="serviceLocation"
              type="text"
              placeholder="Your address or preferred location"
              value={formData.serviceLocation}
              onChange={(e) => handleInputChange('serviceLocation', e.target.value)}
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="additionalNotes" className="text-sm font-medium text-foreground">
              Additional Notes
            </Label>
            <Textarea
              id="additionalNotes"
              placeholder="Any specific requests or details..."
              value={formData.additionalNotes}
              onChange={(e) => handleInputChange('additionalNotes', e.target.value)}
              className="mt-1 min-h-[80px]"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-[#76BBF7] hover:bg-[#5BA3F0] text-white font-medium py-3 rounded-lg transition-all duration-200"
          >
            Submit Booking Request
          </Button>
        </form>
      </div>
    </div>
  );
}
