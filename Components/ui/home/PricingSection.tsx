import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Check, Star, Zap } from 'lucide-react';

const plans = [
  {
    name: "Starter",
    price: 299,
    duration: "30 days",
    description: "Perfect for getting started with your job search",
    features: [
      "15+ Applications per day",
      "Custom resume for each role",
      "Personalized dashboard",
      "Submission proofs",
      "Email support"
    ],
    popular: false,
    color: "teal"
  },
  {
    name: "Professional",
    price: 499,
    duration: "60 days",
    description: "Most popular choice for serious job seekers",
    features: [
      "30+ Applications per day",
      "Custom resume for each role",
      "Personalized dashboard",
      "Submission proofs",
      "On-demand applications",
      "WhatsApp/Slack support",
      "Interview prep access"
    ],
    popular: true,
    color: "amber"
  },
  {
    name: "Premium",
    price: 799,
    duration: "100 days",
    description: "Complete package with all premium features",
    features: [
      "45+ Applications per day",
      "Custom resume for each role",
      "Personalized dashboard",
      "Submission proofs",
      "Unlimited on-demand apps",
      "Dedicated support team",
      "Portfolio website",
      "Full learning center",
      "Mock interview sessions"
    ],
    popular: false,
    color: "purple"
  }
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            No Percentage Games
          </h2>
          <p className="text-xl text-gray-600">
            Simple pricing. Zero surprises. No salary cuts after placement.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-3xl p-8 ${
                plan.popular 
                  ? 'bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-300 shadow-2xl scale-105' 
                  : 'bg-white border border-gray-200 shadow-lg'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    <Star className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                <div className="flex items-end justify-center gap-1">
                  <span className="text-5xl font-bold text-gray-900">${plan.price}</span>
                  <span className="text-gray-500 mb-2">/{plan.duration}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      plan.popular ? 'bg-amber-500' : 'bg-teal-500'
                    }`}>
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full py-6 rounded-full font-semibold text-lg ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white shadow-lg shadow-amber-500/30' 
                    : 'bg-gray-900 hover:bg-gray-800 text-white'
                }`}
              >
                Get Started
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500">
            All plans include a 7-day money-back guarantee. No questions asked.
          </p>
        </motion.div>
      </div>
    </section>
  );
}