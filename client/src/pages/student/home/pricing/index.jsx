import React from "react";
import { CheckCircle, Star, ShieldCheck, Users, Clock, HelpCircle, CreditCard } from "lucide-react";
import Header from "@/components/student-view/header";
import Footer from "@/components/student-view/footer";

const plans = [
  {
    name: "Basic",
    price: "Free",
    priceINR: "₹0/mo",
    features: [
      "Access to free courses",
      "Community support",
      "Limited resources",
    ],
    highlight: false,
  },
  {
    name: "Pro",
    price: "$19/mo",
    priceINR: "₹499/mo",
    features: [
      "All Basic features",
      "Unlimited course access",
      "Certificates of completion",
      "Priority support",
      "GST invoice available",
    ],
    highlight: true,
  },
  {
    name: "Team",
    price: "$49/mo",
    priceINR: "₹1999/mo",
    features: [
      "All Pro features",
      "Team analytics",
      "Bulk enrollments",
      "Dedicated manager",
      "GST invoice available",
    ],
    highlight: false,
  },
];

const faqs = [
  {
    q: "Can I cancel anytime?",
    a: "Yes, you can cancel your subscription at any time from your account settings.",
  },
  {
    q: "Do you offer discounts for students?",
    a: "We offer special discounts for students and educators. Contact support for more info.",
  },
  {
    q: "Is there a free trial?",
    a: "Yes, the Pro plan comes with a 7-day free trial.",
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f7f9fa]">
      {/* Top Banner */}
      <div className="w-full bg-gradient-to-r from-purple-600 to-purple-400 text-white text-center py-3 font-semibold tracking-wide">
        🎉 Special Offer: Save 20% on annual plans! Limited time only.
      </div>
      <main className="flex-1 w-full px-2 sm:px-6 md:px-10 lg:px-0">
        {/* Hero */}
        <section className="max-w-4xl mx-auto text-center py-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">Flexible pricing for every learner</h1>
          <p className="text-lg text-gray-600 mb-8">Choose a plan that fits your goals. Upgrade, downgrade, or cancel anytime.</p>
        </section>

        {/* Why Choose Us */}
        <section className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="flex flex-col items-center bg-white rounded-xl shadow p-6 border border-gray-100">
            <ShieldCheck className="w-8 h-8 text-purple-600 mb-2" />
            <div className="font-bold text-gray-900 mb-1">100% Secure Payments</div>
            <div className="text-gray-500 text-sm text-center">Your transactions are protected with industry-leading security.</div>
          </div>
          <div className="flex flex-col items-center bg-white rounded-xl shadow p-6 border border-gray-100">
            <Users className="w-8 h-8 text-purple-600 mb-2" />
            <div className="font-bold text-gray-900 mb-1">Expert Instructors</div>
            <div className="text-gray-500 text-sm text-center">Learn from top educators and industry professionals.</div>
          </div>
          <div className="flex flex-col items-center bg-white rounded-xl shadow p-6 border border-gray-100">
            <Clock className="w-8 h-8 text-purple-600 mb-2" />
            <div className="font-bold text-gray-900 mb-1">Lifetime Access</div>
            <div className="text-gray-500 text-sm text-center">Access your courses anytime, forever—even after completion.</div>
          </div>
          <div className="flex flex-col items-center bg-white rounded-xl shadow p-6 border border-gray-100">
            <HelpCircle className="w-8 h-8 text-purple-600 mb-2" />
            <div className="font-bold text-gray-900 mb-1">24/7 Support</div>
            <div className="text-gray-500 text-sm text-center">Our team is here to help you, day or night.</div>
          </div>
        </section>

        {/* How it Works */}
        <section className="max-w-4xl mx-auto mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">How it works</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <CreditCard className="w-10 h-10 text-purple-600 mb-2" />
              <div className="font-semibold text-gray-900 mb-1">1. Choose a Plan</div>
              <div className="text-gray-500 text-sm text-center">Select the plan that fits your learning needs and budget.</div>
            </div>
            <div className="flex flex-col items-center">
              <Users className="w-10 h-10 text-purple-600 mb-2" />
              <div className="font-semibold text-gray-900 mb-1">2. Enroll Instantly</div>
              <div className="text-gray-500 text-sm text-center">Sign up and get immediate access to all included courses.</div>
            </div>
            <div className="flex flex-col items-center">
              <Star className="w-10 h-10 text-purple-600 mb-2" />
              <div className="font-semibold text-gray-900 mb-1">3. Start Learning</div>
              <div className="text-gray-500 text-sm text-center">Begin your journey and track your progress at your own pace.</div>
            </div>
          </div>
        </section>

        {/* Trusted By */}
        <section className="max-w-5xl mx-auto mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Trusted by learners & companies</h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft" className="h-8 grayscale opacity-70" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Google_Logo.svg" alt="Google" className="h-8 grayscale opacity-70" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" alt="IBM" className="h-8 grayscale opacity-70" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2e/Accenture.svg" alt="Accenture" className="h-8 grayscale opacity-70" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6e/TCS_Logo.svg" alt="TCS" className="h-8 grayscale opacity-70" />
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, idx) => (
            <div
              key={plan.name}
              className={`rounded-2xl shadow-xl border border-gray-200 bg-white flex flex-col items-center px-8 py-10 relative transition-all duration-300 ${
                plan.highlight ? "ring-2 ring-purple-500 scale-105 z-10" : ""
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-600 text-white text-xs font-bold px-4 py-1 rounded-full shadow">Most Popular</span>
              )}
              <h2 className="text-2xl font-bold mb-2 text-gray-900 flex items-center gap-2">
                {plan.name} {plan.highlight && <Star className="w-5 h-5 text-yellow-400" />}
              </h2>
              <div className="text-3xl font-extrabold text-purple-700 mb-1">{plan.priceINR}</div>
              <div className="text-base text-gray-500 mb-6">{plan.price === "Free" ? "Forever free" : plan.price + " (USD)"}</div>
              <ul className="mb-8 space-y-3 text-gray-700 text-left w-full">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-500" /> {f}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-full font-semibold text-lg transition-all duration-200 ${plan.highlight ? "bg-purple-600 text-white hover:bg-purple-700" : "bg-purple-50 text-purple-700 hover:bg-purple-100"}`}>
                {plan.price === "Free" ? "Get Started" : "Choose Plan"}
              </button>
            </div>
          ))}
        </section>

        {/* Comparison Table */}
        <section className="max-w-5xl mx-auto mb-20">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Compare plans</h3>
          <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow">
            <table className="min-w-full text-sm text-gray-700">
              <thead>
                <tr className="bg-purple-50">
                  <th className="py-3 px-4 text-left font-semibold">Features</th>
                  {plans.map((plan) => (
                    <th key={plan.name} className="py-3 px-4 text-center font-semibold">{plan.name}<br /><span className="text-xs text-gray-500">{plan.priceINR}</span></th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4">Unlimited course access</td>
                  <td className="text-center">-</td>
                  <td className="text-center text-purple-600 font-bold">✔</td>
                  <td className="text-center text-purple-600 font-bold">✔</td>
                </tr>
                <tr className="bg-purple-50/50">
                  <td className="py-2 px-4">Certificates of completion</td>
                  <td className="text-center">-</td>
                  <td className="text-center text-purple-600 font-bold">✔</td>
                  <td className="text-center text-purple-600 font-bold">✔</td>
                </tr>
                <tr>
                  <td className="py-2 px-4">Team analytics</td>
                  <td className="text-center">-</td>
                  <td className="text-center">-</td>
                  <td className="text-center text-purple-600 font-bold">✔</td>
                </tr>
                <tr className="bg-purple-50/50">
                  <td className="py-2 px-4">Priority support</td>
                  <td className="text-center">-</td>
                  <td className="text-center text-purple-600 font-bold">✔</td>
                  <td className="text-center text-purple-600 font-bold">✔</td>
                </tr>
                <tr>
                  <td className="py-2 px-4">GST invoice</td>
                  <td className="text-center">-</td>
                  <td className="text-center text-purple-600 font-bold">✔</td>
                  <td className="text-center text-purple-600 font-bold">✔</td>
                </tr>
              </tbody>
            </table>
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

        {/* Still have questions CTA */}
        <section className="max-w-2xl mx-auto mb-24">
          <div className="bg-gradient-to-r from-purple-600 to-purple-400 rounded-2xl shadow-xl p-8 flex flex-col items-center text-white text-center">
            <h3 className="text-2xl font-bold mb-2">Still have questions?</h3>
            <p className="mb-4 text-lg">Our support team is here to help you choose the right plan or answer any queries.</p>
            <a href="/contact" className="bg-white text-purple-700 font-semibold px-6 py-3 rounded-full shadow hover:bg-purple-50 transition">Contact Support</a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
