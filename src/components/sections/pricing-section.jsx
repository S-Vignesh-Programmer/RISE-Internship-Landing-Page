import React from "react";
import { Check } from "lucide-react";
import Button from "../ui/button";
import Badge from "../ui/badge";
import { pricingPlans } from "../../data/pricing";

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Learning Path
          </h2>
          <p className="text-xl text-gray-600">
            Flexible pricing plans designed to fit every budget and career goal
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl border-2 transition-all duration-300 ${
                plan.popular
                  ? "border-blue-500 shadow-lg bg-blue-50"
                  : "border-gray-200 hover:border-blue-300 bg-white"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge variant="popular">Most Popular</Badge>
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                <div className="text-4xl font-bold text-gray-900 mb-1">
                  {plan.price}
                </div>
                <div className="text-gray-500">for {plan.period}</div>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-start text-gray-700"
                  >
                    <Check
                      className="text-green-500 mr-3 flex-shrink-0 mt-0.5"
                      size={16}
                    />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant={plan.popular ? "primary" : "secondary"}
                className="w-full"
              >
                Choose {plan.name}
              </Button>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
      
          <div className="flex justify-center items-center space-x-8 text-sm text-gray-500">
            <span>💳 EMI Options Available</span>
            <span>🔒 Secure Payment</span>
            <span>📱 Instant Access</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
