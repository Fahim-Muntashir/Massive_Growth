import React from 'react';

const Marque = () => {
    return (
        <div>
            <div className="relative flex bg-[#284b7c] overflow-x-hidden text-white">
                <div className="py-2 animate-marquee whitespace-nowrap">
                    <span className="text-2xl mx-4 font-bold border-e pe-5 border-blue-500">Web Development Service</span>
                    <span className="text-2xl mx-4 font-bold border-e pe-5 border-blue-500">SEO</span>
                    <span className="text-2xl mx-4 font-bold border-e pe-5 border-blue-500">Video Editing</span>
                    <span className="text-2xl mx-4 font-bold border-e pe-5 border-blue-500">Google & FB Ads</span>
                    <span className="text-2xl mx-4 font-bold border-e pe-5 border-blue-500">Content Marketing</span>
                </div>

                <div className="absolute top-0 py-2 animate-marquee2 whitespace-nowrap">
                    <span className="text-2xl mx-4 font-bold border-e pe-5 border-blue-500">Web Development Service</span>
                    <span className="text-2xl mx-4 font-bold border-e pe-5 border-blue-500">SEO</span>
                    <span className="text-2xl mx-4 font-bold border-e pe-5 border-blue-500">Video Editing</span>
                    <span className="text-2xl mx-4 font-bold border-e pe-5 border-blue-500">Google & FB Ads</span>
                    <span className="text-2xl mx-4 font-bold border-e pe-5 border-blue-500">Content Marketing</span>
                </div>
            </div>

        </div>
    );
};

export default Marque;