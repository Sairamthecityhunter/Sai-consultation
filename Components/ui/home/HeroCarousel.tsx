import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Briefcase, FileText, Users, Award } from 'lucide-react';

const slides = [
  {
    id: 1,
    title: "One Login",
    subtitle: "One Dashboard",
    description: "Everything about your job search, in one place",
    detail: "Track job applications, resumes, interviews, status updates and learning center in one centralized dashboard. Stay organized and monitor progress in real time.",
    cta: "Explore Dashboard",
    accent: "teal"
  },
  {
    id: 2,
    title: "Your Personal Team",
    subtitle: "for Landing the Job",
    description: "Real people. Role-specific resumes. Error-free applications",
    detail: "A dedicated team customizes your resume for each role and submits every application manually. This human-led process ensures accurate information and zero auto-fill errors.",
    cta: "View Plans",
    accent: "amber"
  },
  {
    id: 3,
    title: "Stop Applying",
    subtitle: "Start Preparing",
    description: "Time Saved means Time to Upskill",
    detail: "With 3–5 hours reclaimed from your day, focus on what actually gets you hired. Access curated learning paths and AI-driven mock interviews.",
    cta: "Interview Prep",
    accent: "emerald"
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="pt-24 md:pt-28 pb-16 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-8 md:gap-12 items-center min-h-[500px] md:min-h-[550px]"
            >
              {/* Text Content */}
              <div className="order-2 md:order-1">
                <div className="w-12 h-1 bg-teal-500 mb-6 rounded-full" />
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  {slides[currentSlide].title}
                  <br />
                  <span className="text-teal-600">{slides[currentSlide].subtitle}</span>
                </h1>
                <h2 className="mt-4 text-xl md:text-2xl text-amber-600 font-semibold">
                  {slides[currentSlide].description}
                </h2>
                <p className="mt-4 text-gray-600 text-lg leading-relaxed max-w-lg">
                  {slides[currentSlide].detail}
                </p>
                <Button className="mt-8 bg-teal-600 hover:bg-teal-700 text-white rounded-full px-8 py-6 text-lg shadow-xl shadow-teal-500/20">
                  {slides[currentSlide].cta}
                </Button>
              </div>

              {/* Visual Content */}
              <div className="order-1 md:order-2 relative">
                <DashboardMockup slideIndex={currentSlide} />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide 
                  ? 'w-8 h-2 bg-teal-600' 
                  : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function DashboardMockup({ slideIndex }: { slideIndex: number }) {
  const mockups = [
    // Dashboard View
    <div key="dashboard" className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-gray-900">Access Responses</h3>
      </div>
      <div className="space-y-3">
        {[
          { company: 'Google', response: 'Phone', date: 'Nov 27', color: 'bg-blue-100 text-blue-700' },
          { company: 'Amazon', response: 'Interview', date: 'Nov 27', color: 'bg-green-100 text-green-700' },
          { company: 'Microsoft', response: 'Assess', date: 'Nov 27', color: 'bg-purple-100 text-purple-700' },
          { company: 'Meta', response: 'Phone', date: 'Nov 19', color: 'bg-blue-100 text-blue-700' },
        ].map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center justify-between p-3 bg-gray-50 rounded-xl"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center text-xs font-bold">
                {item.company[0]}
              </div>
              <span className="font-medium text-gray-900">{item.company}</span>
            </div>
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${item.color}`}>
              {item.response}
            </span>
            <span className="text-gray-500 text-sm">{item.date}</span>
          </motion.div>
        ))}
      </div>
    </div>,
    
    // Team View
    <div key="team" className="space-y-4">
      <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-100">
        <h3 className="font-semibold text-gray-900 mb-4">Your Dedicated Team</h3>
        <div className="grid grid-cols-2 gap-3">
          {['Job Collector', 'Ops Manager', 'CS Manager', 'Resume Expert'].map((role, i) => (
            <motion.div 
              key={i}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className="p-4 bg-gradient-to-br from-teal-50 to-emerald-50 rounded-xl text-center"
            >
              <div className="w-12 h-12 mx-auto bg-teal-500 rounded-full flex items-center justify-center text-white font-bold mb-2">
                {role[0]}
              </div>
              <p className="text-sm font-medium text-gray-700">{role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>,
    
    // Learning View
    <div key="learning" className="space-y-4">
      <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-100">
        <div className="flex items-center gap-3 mb-4">
          <Award className="w-6 h-6 text-amber-500" />
          <h3 className="font-semibold text-gray-900">Interview Prep</h3>
        </div>
        <div className="space-y-3">
          {['Mock Interview Practice', 'Company Research', 'Technical Skills'].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.15 }}
              className="flex items-center gap-3 p-3 bg-amber-50 rounded-xl"
            >
              <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              <span className="font-medium text-gray-700">{item}</span>
            </motion.div>
          ))}
        </div>
        <div className="mt-4 p-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl text-white">
          <p className="text-sm font-medium">Status: <span className="font-bold">Hired</span></p>
        </div>
      </div>
    </div>,
  ];

  return mockups[slideIndex] || mockups[0];
}