import React from 'react';
import { motion } from 'framer-motion';
import { Globe, BookOpen, GraduationCap, MessageSquare, Clock, Brain, Infinity } from 'lucide-react';

export default function FeaturesSection() {
  return (
    <section id="how" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Portfolio Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Be More Than Just a PDF.
            </h3>
            <p className="text-xl text-amber-600 font-semibold mb-4">
              Your Resume Tells. Your Personal Portfolio Shows.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Recruiters spend 6 seconds on a resume. Host your case studies and projects on a custom domain. Candidates with personal sites see 5x higher engagement.
            </p>
            <button className="px-6 py-3 bg-gradient-to-r from-teal-600 to-cyan-600 text-white rounded-full font-semibold hover:shadow-lg transition-all">
              View Templates (Starts at $49)
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-3xl p-8">
              <div className="bg-white rounded-2xl shadow-xl p-6 transform rotate-2">
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="w-6 h-6 text-teal-600" />
                  <span className="font-semibold text-gray-900">yourname.com</span>
                </div>
                <div className="space-y-3">
                  <div className="h-3 bg-gray-200 rounded-full w-3/4"></div>
                  <div className="h-3 bg-gray-200 rounded-full w-1/2"></div>
                  <div className="h-20 bg-gradient-to-r from-teal-100 to-cyan-100 rounded-xl"></div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl p-4 transform -rotate-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">5x</span>
                  </div>
                  <span className="font-medium text-gray-700">Higher Engagement</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Learning Center Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl shadow-lg p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-red-500 rounded-xl flex items-center justify-center text-white font-bold text-sm">R</div>
                    <div className="w-10 h-10 bg-yellow-400 rounded-xl flex items-center justify-center text-black font-bold text-sm">JS</div>
                    <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center text-white font-bold text-sm">N</div>
                  </div>
                  <p className="text-sm font-medium text-gray-700">Learning Path: Full Stack</p>
                </div>
                <div className="bg-white rounded-2xl shadow-lg p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Brain className="w-6 h-6 text-purple-600" />
                    <span className="font-semibold text-gray-900">AI Mock</span>
                  </div>
                  <p className="text-sm text-gray-600">Live Interview Practice</p>
                </div>
              </div>
              <div className="mt-4 bg-white rounded-2xl shadow-lg p-5">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-700">Progress</span>
                  <span className="text-teal-600 font-bold">78%</span>
                </div>
                <div className="mt-2 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full w-[78%] bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Portfolio, Interview & Learning Center
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Get job-ready, end to end. Get a personal portfolio website, structured interview prep, and an industry-focused learning center.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Access real interview experiences shared by peers, company-specific preparation modules and guided learning paths tailored to your target roles.
            </p>
          </motion.div>
        </div>

        {/* On-Demand Applications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                On-Demand Job Applications
              </h3>
              <p className="text-xl text-teal-400 font-semibold mb-4">
                See a role you like? Consider it applied.
              </p>
              <p className="text-gray-300 leading-relaxed mb-8">
                Found a role on LinkedIn or elsewhere? Share the link and your Application In-Charge will apply within minutes. Included with every plan—no extra cost, no limits.
              </p>
              
              <div className="grid grid-cols-3 gap-4">
                {[
                  { icon: Clock, label: 'Fast Processing', desc: '15 minutes' },
                  { icon: GraduationCap, label: 'Expert Review', desc: 'Human checked' },
                  { icon: Infinity, label: 'Unlimited', desc: 'No caps' },
                ].map((item, i) => (
                  <div key={i} className="text-center">
                    <div className="w-12 h-12 mx-auto bg-teal-500/20 rounded-xl flex items-center justify-center mb-2">
                      <item.icon className="w-6 h-6 text-teal-400" />
                    </div>
                    <p className="text-white font-medium text-sm">{item.label}</p>
                    <p className="text-gray-400 text-xs">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex items-center gap-3 mb-4">
                  <MessageSquare className="w-6 h-6 text-green-400" />
                  <span className="text-white font-medium">WhatsApp / Slack Support</span>
                </div>
                <div className="space-y-3">
                  <div className="bg-white/10 rounded-xl p-3">
                    <p className="text-sm text-gray-300">Hey! Found this role at Netflix 👀</p>
                    <p className="text-xs text-teal-400 mt-1">linkedin.com/jobs/...</p>
                  </div>
                  <div className="bg-teal-500/30 rounded-xl p-3 ml-8">
                    <p className="text-sm text-white">Got it! Applied with your tailored resume ✓</p>
                    <p className="text-xs text-gray-300 mt-1">12 min ago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}