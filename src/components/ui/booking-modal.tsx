'use client';

import { useState } from 'react';

import { X } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

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
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    // Booking request submitted
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
      <div className="bg-background border-border relative mx-4 w-full max-w-md rounded-2xl border p-8 shadow-2xl">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-foreground text-2xl font-bold">
            Book Your Detail
          </h2>
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
            <Label
              htmlFor="fullName"
              className="text-foreground text-sm font-medium"
            >
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
            <Label
              htmlFor="phoneNumber"
              className="text-foreground text-sm font-medium"
            >
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
            <Label
              htmlFor="email"
              className="text-foreground text-sm font-medium"
            >
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
            <Label
              htmlFor="vehicleDetails"
              className="text-foreground text-sm font-medium"
            >
              Vehicle Details
            </Label>
            <Input
              id="vehicleDetails"
              type="text"
              placeholder="Year, Make, Model"
              value={formData.vehicleDetails}
              onChange={(e) =>
                handleInputChange('vehicleDetails', e.target.value)
              }
              className="mt-1"
            />
          </div>

          <div>
            <Label
              htmlFor="serviceLocation"
              className="text-foreground text-sm font-medium"
            >
              Service Location
            </Label>
            <Input
              id="serviceLocation"
              type="text"
              placeholder="Your address or preferred location"
              value={formData.serviceLocation}
              onChange={(e) =>
                handleInputChange('serviceLocation', e.target.value)
              }
              className="mt-1"
            />
          </div>

          <div>
            <Label
              htmlFor="additionalNotes"
              className="text-foreground text-sm font-medium"
            >
              Additional Notes
            </Label>
            <Textarea
              id="additionalNotes"
              placeholder="Any specific requests or details..."
              value={formData.additionalNotes}
              onChange={(e) =>
                handleInputChange('additionalNotes', e.target.value)
              }
              className="mt-1 min-h-[80px]"
            />
          </div>

          <Button
            type="submit"
            className="w-full rounded-lg bg-[#76BBF7] py-3 font-medium text-white transition-all duration-200 hover:bg-[#5BA3F0]"
          >
            Submit Booking Request
          </Button>
        </form>
      </div>
    </div>
  );
}
