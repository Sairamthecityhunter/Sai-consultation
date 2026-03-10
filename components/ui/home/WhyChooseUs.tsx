import React from 'react';
import { motion } from 'framer-motion';
import { LayoutDashboard, FileCheck, Zap, Headphones } from 'lucide-react';

const features = [
  {
    icon: LayoutDashboard,
    title: "Personalized Dashboard",
    subtitle: "All your job search activity in one place",
    description: "View all jobs applied on your behalf, the tailored resume used for each role, verified application submission proofs, and any responses received.",
    color: "from-teal-500 to-cyan-500",
    bgColor: "bg-teal-50"
  },
  {
    icon: FileCheck,
    title: "Custom Resume & 45+ Daily Applications",
    subtitle: "Every application gets a custom resume",
    description: "We apply to 45+ real jobs daily— No Easy Apply. No bots. Every application is handled by a dedicated Application Incharge.",
    color: "from-amber-500 to-orange-500",
    bgColor: "bg-amber-50"
  },
  {
    icon: Zap,
    title: "On-Demand Job Applications",
    subtitle: "See a role you like? Consider it applied",
    description: "Found a role on LinkedIn? Share the link and your Application In-Charge will apply within 15 minutes. No extra cost, no limits.",
    color: "from-emerald-500 to-green-500",
    bgColor: "bg-emerald-50"
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    subtitle: "Ticketing + WhatsApp/Slack",
    description: "Get a dedicated communication channel for quick updates and a ticketing system for tracking requests throughout your journey.",
    color: "from-purple-500 to-indigo-500",
    bgColor: "bg-purple-50"
  }
];

export default function WhyChooseUs() {
  return (
    <section id="why" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Why Sairam?
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to land your dream job, handled by experts
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className={`${feature.bgColor} rounded-3xl p-8 h-full hover:shadow-xl transition-all duration-300 border border-gray-100`}>
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 shadow-lg`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-teal-600 font-semibold mb-4">
                  {feature.subtitle}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}