import React from 'react';
import { Shield, Clock, CreditCard, PieChart } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Secure Payments',
    description: 'Bank-level encryption and security protocols protect every transaction.'
  },
  {
    icon: Clock,
    title: 'Automated Rent Collection',
    description: 'Set up recurring payments and never worry about late rent again.'
  },
  {
    icon: CreditCard,
    title: 'Multiple Payment Methods',
    description: 'Accept credit cards, ACH transfers, and digital wallets.'
  },
  {
    icon: PieChart,
    title: 'Financial Analytics',
    description: 'Track payments, generate reports, and manage your portfolio efficiently.'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Streamline Your Rental Payments
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Everything you need to manage rental payments in one place
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <div className="absolute -top-4 left-6">
                <div className="rounded-full bg-blue-600 p-3">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
              </div>
              <h3 className="mt-8 text-xl font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="mt-4 text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}