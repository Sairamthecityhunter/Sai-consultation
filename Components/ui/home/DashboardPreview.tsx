import React from 'react';
import { motion } from 'framer-motion';
import { FileText, CheckCircle, Eye, Download, ExternalLink } from 'lucide-react';

export default function DashboardPreview() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Applied Jobs Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-3xl shadow-2xl p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">Applied Jobs</h3>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-medium">Date View</span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">Company View</span>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  { company: 'Google', role: 'Program Manager', date: 'Dec 17, 2025', status: 'Active' },
                  { company: 'Microsoft', role: 'Software Engineer, Azure', date: 'Dec 16, 2025', status: 'Active' },
                  { company: 'Amazon', role: 'Product Manager', date: 'Dec 15, 2025', status: 'Active' },
                ].map((job, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl flex items-center justify-center text-white font-bold">
                        {job.company[0]}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">{job.role}</h4>
                        <p className="text-sm text-gray-500">{job.date} • <span className="text-green-600">{job.status}</span></p>
                      </div>
                      <button className="text-teal-600 hover:text-teal-700 font-medium text-sm">
                        More...
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Access applied jobs
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              View every job applied on your behalf in real time. Search by company or application date, access the full job description even after it expires, and receive a clear end-of-day summary of all submissions.
            </p>
            <a href="#" className="text-teal-600 font-semibold hover:text-teal-700 flex items-center gap-2">
              View more <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </div>

        {/* Resume Access Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Access tailored resumes
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              All resumes crafted for your applications using the Sairam Resume Engine are stored in one place—organized, searchable, and available anytime.
            </p>
            <a href="#" className="text-teal-600 font-semibold hover:text-teal-700 flex items-center gap-2">
              View more <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="bg-white rounded-3xl shadow-2xl p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">Resume Access</h3>
                <span className="text-gray-500 text-sm">All Resumes</span>
              </div>
              <div className="space-y-4">
                {[
                  { name: 'Resume_SoftwareDev_Google.pdf', date: 'Oct 16, 2025' },
                  { name: 'CV_ProductManager_Amazon.pdf', date: 'Oct 16, 2025' },
                  { name: 'Resume_DataAnalyst_Meta.pdf', date: 'Oct 14, 2025' },
                ].map((file, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
                        <FileText className="w-5 h-5 text-red-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 text-sm">{file.name}</p>
                        <p className="text-xs text-gray-500">{file.date}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors">
                        <Eye className="w-4 h-4 text-gray-600" />
                      </button>
                      <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors">
                        <Download className="w-4 h-4 text-gray-600" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Submission Proofs Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-3xl shadow-2xl p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">View Submissions</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-gray-500 text-sm border-b border-gray-100">
                      <th className="pb-3 font-medium">File Name</th>
                      <th className="pb-3 font-medium">Date</th>
                      <th className="pb-3 font-medium">View</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {[
                      { name: 'Google_SWE_Proof.pdf', date: 'Nov 27' },
                      { name: 'Amazon_PM_Proof.docx', date: 'Nov 24' },
                      { name: 'Microsoft_DA_Confirm.png', date: 'Nov 20' },
                      { name: 'Meta_UX_Submit.pdf', date: 'Nov 18' },
                    ].map((item, i) => (
                      <tr key={i} className="text-gray-700">
                        <td className="py-3 text-sm">{item.name}</td>
                        <td className="py-3 text-sm text-gray-500">{item.date}</td>
                        <td className="py-3">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Submission proofs
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Every application comes with verified submission proof, giving you complete transparency and confidence in what was applied and when.
            </p>
            <a href="#" className="text-teal-600 font-semibold hover:text-teal-700 flex items-center gap-2">
              View more <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}