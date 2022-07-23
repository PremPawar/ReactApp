import React, { useContext } from "react";
import ContentContext from "../Context/ContentContext";
import About from "../Content/Content";
import ToggleButton from "../Components/ToggleButton";
import HeroImage from "../Components/HeroImage";

const Home = () => {
    const lang = useContext(ContentContext)[0];
    const currentLang = About[lang];

    return (
        <>
        <HeroImage />
            <div className="text-center text-3xl p-7 bg-gray-200 flex-wrap">
                {`${currentLang.Title}`}
                <ToggleButton />
                <div className="text-center text-xl">
                    {`${currentLang.About}`}
                </div>

            </div>
        </>

    )
}

export default Home