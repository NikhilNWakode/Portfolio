import React, { useState, useEffect } from 'react';
import { User, Code2, Boxes, Mail } from 'lucide-react';

const StickyNav = () => {
    const [activeSection, setActiveSection] = useState('header');
    const [isNavVisible, setIsNavVisible] = useState(false);
    let timeoutId = null;

    const menuItems = [
        { id: 'header', label: 'About', icon: User },
        { id: 'technologies', label: 'Stack', icon: Boxes },
        { id: 'projects', label: 'Projects', icon: Code2 },
        { id: 'contact', label: 'Contact', icon: Mail }
    ];

    const handleSetActive = (to) => {
        setActiveSection(to);
    };

    useEffect(() => {
        const handleMouseMove = () => {
            setIsNavVisible(true);
            
            // Clear any existing timeout
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
            
            // Set new timeout to hide the nav after 2.5 seconds of no movement
            timeoutId = setTimeout(() => {
                setIsNavVisible(false);
            }, 2500);
        };

        window.addEventListener('mousemove', handleMouseMove);
        
        // Show nav initially for 2.5 seconds
        setIsNavVisible(true);
        timeoutId = setTimeout(() => {
            setIsNavVisible(false);
        }, 2500);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, []);

    return (
        <nav className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-auto sm:w-[90%] md:w-[60%] lg:w-auto transition-opacity duration-300 ${isNavVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="px-4 py-3 bg-black/80 backdrop-blur-lg rounded-2xl border border-white/10 shadow-lg shadow-black/50">
                <ul className="flex  justify-around md:justify-center md:gap-6 items-center">
                    {menuItems.map((item) => {
                        const Icon = item.icon;
                        return (
                            <li key={item.id} className="w-full md:w-auto flex justify-center">
                                <button
                                    onClick={() => {
                                        const element = document.getElementById(item.id);
                                        element?.scrollIntoView({ behavior: 'smooth' });
                                        handleSetActive(item.id);
                                    }}
                                    className={`group flex items-center gap-2 px-3 py-2 w-full md:w-auto justify-center rounded-xl transition-all duration-300 ${
                                        activeSection === item.id
                                            ? 'bg-white/10 text-white'
                                            : 'text-white/60 hover:text-white hover:bg-white/5'
                                    }`}
                                >
                                    <Icon 
                                        className={`w-4 h-4 transition-transform duration-300 group-hover:scale-110 ${
                                            activeSection === item.id ? 'text-white' : 'text-white/60'
                                        }`}
                                    />
                                    <span className="hidden md:inline text-sm font-medium">{item.label}</span>
                                    
                                    {activeSection === item.id && (
                                        <span className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-stone-500 to-stone-400 opacity-75 rounded-full" />
                                    )}
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
};

export default StickyNav;
