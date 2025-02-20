import React, { useState } from 'react';
import { ServiceCategory } from './ServiceCategory';
import { WhyChooseUs } from './WhyChooseUs';
import { ServiceCalculator } from './ServiceCalculator';
import { 
  FileText, 
  Building2, 
  FileCheck, 
  Globe, 
  Calculator,
  MessageSquare,
  ArrowLeft 
} from 'lucide-react';
import { Button } from '../ui/Button';
import { useNavigate } from 'react-router-dom';

export default function ServiceCatalog() {
  const navigate = useNavigate();
  const [showCalculator, setShowCalculator] = useState(false);

  // ... rest of the existing categories code ...

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-8">
          <Button
            variant="ghost"
            icon={ArrowLeft}
            onClick={() => navigate('/')}
            className="mb-6"
          >
            Back to Home
          </Button>
          
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900">Our Services</h1>
            <p className="mt-4 text-xl text-gray-600">
              Comprehensive financial and business solutions tailored to your needs
            </p>
            <Button
              variant="primary"
              icon={Calculator}
              onClick={() => setShowCalculator(true)}
              className="mt-6"
            >
              Calculate Service Cost
            </Button>
          </div>
        </div>

        {showCalculator ? (
          <div className="mb-16">
            <ServiceCalculator />
            <div className="text-center mt-8">
              <Button
                variant="outline"
                onClick={() => setShowCalculator(false)}
              >
                Back to Services
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-16">
            {categories.map((category, index) => (
              <ServiceCategory
                key={index}
                title={category.title}
                icon={category.icon}
                services={category.services}
              />
            ))}
          </div>
        )}

        <WhyChooseUs />
      </div>
    </div>
  );
}