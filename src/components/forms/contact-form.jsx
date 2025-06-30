import React from "react";
import Input from "../ui/input";
import Button from "../ui/button";
import Card from "../ui/card";
import useForm from "../../hooks/use-forms";

const ContactForm = () => {
  const { values, handleChange, handleSubmit, reset } = useForm({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const onSubmit = (formData) => {
    alert("Thank you for your message! We will get back to you soon.");
    reset();
  };

  return (
    <Card className="p-8">
      <h3 className="text-2xl font-semibold text-gray-900 mb-6">
        Send us a Message
      </h3>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            value={values.name}
            onChange={handleChange}
          />
          <Input
            type="email"
            name="email"
            placeholder="Your Email"
            value={values.email}
            onChange={handleChange}
          />
        </div>
        <Input
          type="tel"
          name="phone"
          placeholder="Your Phone Number"
          value={values.phone}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Tell us about your career goals and how we can help you..."
          rows="5"
          value={values.message}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
        />
        <Button type="submit" className="w-full">
          Send Message
        </Button>
        <p className="text-sm text-gray-500 text-center">
          By submitting this form, you agree to our privacy policy and terms of
          service.
        </p>
      </form>
    </Card>
  );
};

export default ContactForm;
