import React from 'react';
import { ExternalLink } from 'lucide-react';

const SocialNetworkCard = ({
  name,
  description,
  features,
  color,
  bgColor
}) => {
  return (
    <div className={`${bgColor} border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 transform hover:-translate-x-1 hover:-translate-y-1`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-2xl font-black text-black">
          {name}
        </h3>
        <ExternalLink className={`w-6 h-6 ${color}`} />
      </div>
      <p className="text-black mb-4 font-medium">
        {description}
      </p>
      <div className="space-y-2">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-2 text-black">
            <div className="w-2 h-2 bg-black rounded-full"></div>
            <span className="font-bold text-sm">{feature}</span>
          </div>
        ))}
      </div>
      <button className="mt-4 bg-black text-white px-4 py-2 font-bold hover:bg-gray-800 transition-colors duration-200 w-full transform hover:scale-105">
        EXPLORAR
      </button>
    </div>
  );
};

export default SocialNetworkCard;