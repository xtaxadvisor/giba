import React, { useState } from 'react';
import { ServiceCategory } from './ServiceCategory.js';
import { WhyChooseUs } from './WhyChooseUs.js';
import { ServiceCalculator } from './ServiceCalculator.js';
import { 
  FileText, 
  FileCheck, 
  Globe, 
  Calculator,
  MessageSquare,
} from 'lucide-react';
import { Button } from '../ui/Button.js';

export default function ServiceCatalog() {
  // Removed unused navigate variable
  const [showCalculator, setShowCalculator] = useState(false);

  const categories = [
    {
      title: 'Tax Advisory',
      icon: FileText,
      services: [
        { name: 'Tax Planning', description: 'Description for Tax Planning', price: '100', features: ['Feature 1', 'Feature 2'] },
        { name: 'Tax Compliance', description: 'Description for Tax Compliance', price: '200', features: ['Feature 1', 'Feature 2'] },
        { name: 'Tax Consulting', description: 'Description for Tax Consulting', price: '300', features: ['Feature 1', 'Feature 2'] }
      ]
    },
    {
      title: 'Audit & Assurance',
      icon: FileCheck,
      services: [
        { name: 'Financial Audit', description: 'Description for Financial Audit', price: '400', features: ['Feature 1', 'Feature 2'] },
        { name: 'Internal Audit', description: 'Description for Internal Audit', price: '500', features: ['Feature 1', 'Feature 2'] },
        { name: 'Compliance Audit', description: 'Description for Compliance Audit', price: '600', features: ['Feature 1', 'Feature 2'] }
        ]
      },
      {
        title: 'Financial Planning',
        icon: Calculator,
        services: [
          { name: 'Retirement Planning', description: 'Description for Retirement Planning', price: '1000', features: ['Feature 1', 'Feature 2'] },
          { name: 'Investment Advisory', description: 'Description for Investment Advisory', price: '1100', features: ['Feature 1', 'Feature 2'] },
          { name: 'Wealth Management', description: 'Description for Wealth Management', price: '1200', features: ['Feature 1', 'Feature 2'] }
        ]
      },
      {
        title: 'Global Services',
        icon: Globe,
        services: [
          { name: 'International Tax', description: 'Description for International Tax', price: '700', features: ['Feature 1', 'Feature 2'] },
          { name: 'Global Mobility', description: 'Description for Global Mobility', price: '800', features: ['Feature 1', 'Feature 2'] },
          { name: 'Transfer Pricing', description: 'Description for Transfer Pricing', price: '900', features: ['Feature 1', 'Feature 2'] }
        ]
      },
      {
        title: 'Customer Support',
        icon: MessageSquare,
        services: [
          { name: 'Help Desk', description: 'Description for Help Desk', price: '1300', features: ['Feature 1', 'Feature 2'] },
          { name: 'Technical Support', description: 'Description for Technical Support', price: '1400', features: ['Feature 1', 'Feature 2'] },
          { name: 'Customer Service', description: 'Description for Customer Service', price: '1500', features: ['Feature 1', 'Feature 2'] }
        ]
      }
    ];

      return (
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
          );
    }