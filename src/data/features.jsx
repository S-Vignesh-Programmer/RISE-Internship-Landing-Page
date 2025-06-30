// data/features.js
import {
  BookOpen,
  Users,
  Award,
  MessageCircle,
  Play,
  Star,
} from "lucide-react";

export const featuresData = [
  {
    icon: <BookOpen className="text-blue-600" size={40} />,
    title: "Industry-Relevant Curriculum",
    description:
      "Learn skills that top Indian companies are actively hiring for. Our curriculum is updated quarterly based on real job market data and industry trends.",
  },
  {
    icon: <Users className="text-green-600" size={40} />,
    title: "Expert Mentorship",
    description:
      "Get guidance from senior professionals working in companies like TCS, Infosys, Wipro, Flipkart, and leading startups across India.",
  },
  {
    icon: <Award className="text-purple-600" size={40} />,
    title: "Guaranteed Job Placement",
    description:
      "100% job placement rate with partnerships across 500+ companies in Chennai, Bangalore, Hyderabad, Pune, Mumbai, and Delhi.",
  },
  {
    icon: <MessageCircle className="text-orange-600" size={40} />,
    title: "Multilingual Support",
    description:
      "Learn comfortably in your preferred language with instructors fluent in English, Hindi and regional languages.",
  },
  {
    icon: <Play className="text-red-600" size={40} />,
    title: "Flexible Learning Options",
    description:
      "Evening and weekend batches designed for working professionals. Self-paced online courses with lifetime access to content.",
  },
  {
    icon: <Star className="text-yellow-600" size={40} />,
    title: "Live Industry Projects",
    description:
      "Work on real projects with partner companies and build a portfolio that showcases your skills to prospective employers.",
  },
];
