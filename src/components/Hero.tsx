import { Users, Heart, Shield } from "lucide-react";

const features = [
  {
    icon: Users,
    label: "Expert Network",
    color: "blue",
    bgColor: "bg-blue-100",
    textColor: "text-blue-600",
    fillColor: "#3b82f6",
    strokeColor: "#3b82f6",
  },
  {
    icon: Heart,
    label: "Personalized Care",
    color: "green",
    bgColor: "bg-green-100",
    textColor: "text-green-600",
    fillColor: "#10b981",
    strokeColor: "#10b981",
  },
  {
    icon: Shield,
    label: "Safe & Secure",
    color: "purple",
    bgColor: "bg-purple-100",
    textColor: "text-purple-600",
    fillColor: "#8b5cf6",
    strokeColor: "#8b5cf6",
  },
];

export default function Hero() {
  return (
    <section className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-6 py-12 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Find Your Perfect Mental Health Advocate
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Connect with qualified mental health professionals who understand
            your unique needs. Our advocates are here to support your journey to
            better mental wellness.
          </p>

          <div className="flex justify-center space-x-12">
            {features.map(
              ({
                icon: Icon,
                label,
                bgColor,
                textColor,
                fillColor,
                strokeColor,
              }) => (
                <div
                  key={label}
                  className="flex flex-col items-center space-y-2"
                >
                  <div className={`p-3 ${bgColor} rounded-full`}>
                    <Icon
                      fill={fillColor}
                      stroke={strokeColor}
                      className={`w-6 h-6 ${textColor}`}
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-700">
                    {label}
                  </span>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
