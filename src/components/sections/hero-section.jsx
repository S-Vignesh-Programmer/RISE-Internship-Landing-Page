// components/sections/HeroSection.jsx
import React from "react";
import { Play, ArrowRight, Users, Star, Award } from "lucide-react";
import ConsultationForm from "../forms/consultation-form";

const HeroSection = () => {
  const stats = [
    { icon: Users, label: "50,000+ Students", color: "text-blue-600" },
    { icon: Award, label: "100% Job Placement", color: "text-green-600" },
  ];

  return (
    <section
      id="home"
      className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-100"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
              <span>India's Leading Professional Training Platform</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Transform Your Career with
              <span className="text-blue-600 block">Industry-Ready Skills</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Join over 50,000+ professionals who have accelerated their careers
              with our comprehensive training programs. Learn from industry
              experts and secure your dream job in India's top companies.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg group">
                Start Free Trial
                <ArrowRight
                  className="inline ml-2 group-hover:translate-x-1 transition-transform"
                  size={20}
                />
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap items-center gap-8 text-gray-600 text-sm">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center">
                  <stat.icon className={`mr-2 ${stat.color}`} size={16} />
                  {stat.label}
                </div>
              ))}
            </div>
          </div>

          {/* Consultation Form */}
          <div className="relative">
            <ConsultationForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
