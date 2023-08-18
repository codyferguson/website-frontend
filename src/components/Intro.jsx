import React from 'react';

function Intro() {
    return (
        // Check out Tailwindcss for help on these properties
        <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
            <h1 className="text-4x1 md:text-7x1 mb-1 md:mb-3 font-bold">Cody</h1>
            <p className="text-base md:text-x1 md-3 font-medium">Software Engineer</p>
            <p className="text-sm max-w-x1 mb-6 font-bold">TODO bio</p>
        </div>
    )
}

export default Intro;