import React from 'react';

const CategorySection = ({
  title,
  icon: Icon,
  color,
  bgColor,
  children
}) => {
  return (
    <section className="mb-12">
      <div className={`${bgColor} border-4 border-black p-4 mb-6 transform -rotate-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}>
        <h2 className="text-3xl font-black flex items-center gap-3 transform rotate-1">
          <Icon className={`w-8 h-8 ${color}`} />
          <span className="text-black">{title}</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {children}
      </div>
    </section>
  );
};

export default CategorySection;