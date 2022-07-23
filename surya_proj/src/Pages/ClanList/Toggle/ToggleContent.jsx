import React, { useContext } from 'react'
import ContentContext from '../../../Context/ContentContext';

const ToggleContent = () => {
    const [langMode, setLangMode] = useContext(ContentContext);

    return (
        <>
            <div className='text-center p-4 text-2xl'>
                <label htmlFor="default-toggle" className="inline-flex relative items-center cursor-pointer">
                    <input type="checkbox" value="" id="default-toggle" className="sr-only peer" 
                    onClick={() => {
                        setLangMode(langMode == "English" ? "Marathi" : "English");
                    }} />
                    <div className="w-11 h-6 bg-green-400 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-blue-400">{langMode == "English" ? "Switch for Marathi" : "Switch for English"}</span>
                </label>
            </div>


        </>

    );
};

export default ToggleContent;