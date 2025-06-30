import React from "react";
import Input from "../ui/input";
import Button from "../ui/button";
import useForm from "../../hooks/use-forms";
import { COURSE_OPTIONS } from "../../utils/constants";

const ConsultationForm = () => {
  const { values, handleChange, handleSubmit, reset } = useForm({
    name: "",
    email: "",
    phone: "",
    interest: "",
  });

  const onSubmit = (formData) => {
    alert("Thank you for your interest! We will contact you soon.");
    reset();
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Book Free Consultation
        </h3>
        <p className="text-gray-600">Speak with our career experts today</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Input
          type="text"
          name="name"
          placeholder="Your Full Name"
          value={values.name}
          onChange={handleChange}
        />
        <Input
          type="email"
          name="email"
          placeholder="Your Email Address"
          value={values.email}
          onChange={handleChange}
        />
        <Input
          type="tel"
          name="phone"
          placeholder="Your Phone Number"
          value={values.phone}
          onChange={handleChange}
        />
        <select
          name="interest"
          value={values.interest}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">Select Your Interest</option>
          {COURSE_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <Button type="submit" className="w-full">
          Book Free Consultation
        </Button>
      </form>
    </div>
  );
};

export default ConsultationForm;
