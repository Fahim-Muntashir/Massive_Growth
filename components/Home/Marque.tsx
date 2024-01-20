import React from 'react';

const Marque = () => {
    return (
        <div>
            <div className="relative flex bg-pink-600 overflow-x-hidden">
                <div className="py-2 animate-marquee whitespace-nowrap">
                    <span className="text-4xl mx-4">Marquee Item 1</span>
                    <span className="text-4xl mx-4">Marquee Item 2</span>
                    <span className="text-4xl mx-4">Marquee Item 3</span>
                    <span className="text-4xl mx-4">Marquee Item 4</span>
                    <span className="text-4xl mx-4">Marquee Item 5</span>
                </div>

                <div className="absolute top-0 py-2 animate-marquee2 whitespace-nowrap">
                    <span className="text-4xl mx-4">Marquee Item 1</span>
                    <span className="text-4xl mx-4">Marquee Item 2</span>
                    <span className="text-4xl mx-4">Marquee Item 3</span>
                    <span className="text-4xl mx-4">Marquee Item 4</span>
                    <span className="text-4xl mx-4">Marquee Item 5</span>
                </div>
            </div>

        </div>
    );
};

export default Marque;