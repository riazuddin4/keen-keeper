import React from 'react';

const Hero = () => {
    return (
        <div>
            <div className="bg-gray-100 py-20">
                <div className="max-w-4xl mx-auto text-center px-4">

                    
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">
                        Friends to keep close in your life
                    </h1>

                    
                    <p className="text-gray-500 mb-6">
                        Your personal shelf of meaningful connections. Browse, tend, and nurture the
                        relationships that matter most.
                    </p>

                    
                    <button className="bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded">
                        + Add a Friend
                    </button>

                </div>
            </div>
        </div>
    );
};

export default Hero;