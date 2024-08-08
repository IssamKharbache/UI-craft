import React from "react";
import { MdDynamicFeed } from "react-icons/md";
import { LuComponent } from "react-icons/lu";
import { FaUsers } from "react-icons/fa6";
const features = [
  {
    id: 1,
    name: "Dynamic Component Library",
    icon: MdDynamicFeed,
    description:
      "Our extensive library offers a wide range of ready-to-use React components designed for various applications. Whether you need simple UI elements or complex interactive features, you'll find components that are customizable and optimized for performance. Browse by category, filter by functionality, and find the perfect match for your project",
  },
  {
    id: 2,
    name: "Resusable Component",
    icon: LuComponent,
    description:
      "Create and edit your REACT components directly within our editor.Write JSX code with syntax highlighting and instant previews",
  },

  {
    id: 3,
    name: "Community Collaboration Hub",
    icon: FaUsers,
    description:
      "Engage with a vibrant community of developers through our Collaboration Hub. Share your own components, explore others' creations, and participate in discussions to get feedback and ideas",
  },
];
const Features = () => {
  return (
    <section className="features-section py-12 px-12 bg-red-100/60 mt-12 ">
      <div className="mx-auto">
        <h2 className="text-2xl font-bold text-center">UI craft features</h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                className="p-6 bg-white rounded-lg shadow-sm flex flex-col items-center"
                key={index}
              >
                <div className="w-20 h-20 rounded-full items-center justify-center flex bg-red-100">
                  <Icon size={25} />
                </div>
                <h3 className="text-lg font-semibold text-primary mt-6 text-center">{feature.name}</h3>
                <p className="text-slate-500 text-[13px] mt-2 text-center w-[80%]">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
