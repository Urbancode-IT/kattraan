import React from "react";
import { Users, Briefcase, ShieldCheck, Star, HelpCircle, Building2 } from "lucide-react";
import Header from "@/components/student-view/header";
import Footer from "@/components/student-view/footer";

const businessBenefits = [
  {
    icon: <Users className="w-8 h-8 text-purple-600 mb-2" />,
    title: "Upskill Your Team",
    desc: "Empower employees with top-rated courses and certifications."
  },
  {
    icon: <Briefcase className="w-8 h-8 text-purple-600 mb-2" />,
    title: "Admin & Analytics",
    desc: "Track progress, manage users, and measure ROI easily."
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-purple-600 mb-2" />,
    title: "Secure & Compliant",
    desc: "Enterprise-grade security, privacy, and GST invoicing."
  },
  {
    icon: <Star className="w-8 h-8 text-purple-600 mb-2" />,
    title: "Expert Content",
    desc: "Access curated content from industry leaders and experts."
  },
];

const faqs = [
  {
    q: "How does Kattraan Business pricing work?",
    a: "We offer flexible per-user pricing for teams of all sizes. Contact us for a custom quote."
  },
  {
    q: "Can we integrate with our LMS?",
    a: "Yes, we support integrations and SSO for enterprise clients."
  },
  {
    q: "Is there a free trial for businesses?",
    a: "Yes, we offer a free trial and demo for business accounts."
  },
];

export default function BusinessPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f7f9fa]">
      <Header />
      <main className="flex-1 w-full px-2 sm:px-6 md:px-10 lg:px-0">
        {/* Hero */}
        <section className="max-w-5xl mx-auto text-center py-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">Kattraan Business</h1>
          <p className="text-lg text-gray-600 mb-8">Upskill your workforce with India’s most flexible learning platform. Drive results with curated content, analytics, and support for teams of any size.</p>
          <a href="/contact" className="inline-block bg-purple-600 text-white font-semibold px-8 py-3 rounded-full shadow hover:bg-purple-700 transition">Request a Demo</a>
        </section>

        {/* Benefits */}
        <section className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {businessBenefits.map((b, i) => (
            <div key={i} className="flex flex-col items-center bg-white rounded-xl shadow p-6 border border-gray-100">
              {b.icon}
              <div className="font-bold text-gray-900 mb-1">{b.title}</div>
              <div className="text-gray-500 text-sm text-center">{b.desc}</div>
            </div>
          ))}
        </section>

        {/* How it Works */}
        <section className="max-w-4xl mx-auto mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">How Kattraan Business Works</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <Building2 className="w-10 h-10 text-purple-600 mb-2" />
              <div className="font-semibold text-gray-900 mb-1">1. Get a Custom Quote</div>
              <div className="text-gray-500 text-sm text-center">Tell us your team size and needs for a tailored plan.</div>
            </div>
            <div className="flex flex-col items-center">
              <Users className="w-10 h-10 text-purple-600 mb-2" />
              <div className="font-semibold text-gray-900 mb-1">2. Onboard Instantly</div>
              <div className="text-gray-500 text-sm text-center">Add users, assign courses, and launch your learning program.</div>
            </div>
            <div className="flex flex-col items-center">
              <Star className="w-10 h-10 text-purple-600 mb-2" />
              <div className="font-semibold text-gray-900 mb-1">3. Track Team Progress</div>
              <div className="text-gray-500 text-sm text-center">Monitor analytics and celebrate your team’s achievements.</div>
            </div>
          </div>
        </section>

        {/* Pricing/Plans */}
        <section className="max-w-3xl mx-auto mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Business Pricing</h3>
          <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center border border-gray-100">
            <div className="text-3xl font-extrabold text-purple-700 mb-2">Starts at ₹1,499/user/year</div>
            <div className="text-gray-600 mb-4 text-center">Volume discounts available for large teams. All plans include admin dashboard, analytics, and priority support.</div>
            <a href="/contact" className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-purple-700 transition">Contact Sales</a>
          </div>
        </section>

        {/* Trusted By */}
        <section className="max-w-5xl mx-auto mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Trusted by leading companies</h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft" className="h-8 grayscale opacity-70" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Google_Logo.svg" alt="Google" className="h-8 grayscale opacity-70" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" alt="IBM" className="h-8 grayscale opacity-70" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2e/Accenture.svg" alt="Accenture" className="h-8 grayscale opacity-70" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6e/TCS_Logo.svg" alt="TCS" className="h-8 grayscale opacity-70" />
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-3xl mx-auto mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Frequently Asked Questions</h3>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl shadow p-6 border border-gray-100">
                <div className="font-semibold text-gray-900 mb-2">{faq.q}</div>
                <div className="text-gray-600">{faq.a}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="max-w-2xl mx-auto mb-24">
          <div className="bg-gradient-to-r from-purple-600 to-purple-400 rounded-2xl shadow-xl p-8 flex flex-col items-center text-white text-center">
            <h3 className="text-2xl font-bold mb-2">Ready to transform your team?</h3>
            <p className="mb-4 text-lg">Contact our business team for a custom demo and pricing.</p>
            <a href="/contact" className="bg-white text-purple-700 font-semibold px-6 py-3 rounded-full shadow hover:bg-purple-50 transition">Get in Touch</a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
