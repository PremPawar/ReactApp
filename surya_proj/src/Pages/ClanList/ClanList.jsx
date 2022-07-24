import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import ToggleContent from './Toggle/ToggleContent';
import ContentContext from '../../Context/ContentContext';
import ClanContent from './Content/ClanContent';
import AccordionComponent from './Components/Accordion';

const ClanList = () => {
    const lang = useContext(ContentContext)[0];
    const currentLang = ClanContent[lang];



    return (
        <>
            <div className="bg-gray-200 h-fit">
                {/* <p className='justify-center font-extrabold text-4xl text-center p-8'>मराठ्यांची ९६ कुळे</p>
                <p className='justify-center text-center p-5 pr-8 pl-8 space-x-10'>
                स्कंद पुराणातील सह्याद्रिखंड ह्या ग्रंथात 'षण्णव कुल' नामक प्रकरणात, त्याचप्रमाणे स्वामी नरोत्तमानंद सरस्वतीकृत मराठा, शहाण्णव कुळी आणि बाळाजी नथूजी गावंडे यांनी केलेली वंशावळी व शाहाजीकालीन मूळस्तंभ अध्याय १७ आणि 'क्षत्रियांची उत्पत्ती व वंशावळी' या ग्रंथांत क्षत्रिय मराठा जातींची ९६ कुळे पुढे दिलेल्या अनुक्रमाने लिहिलेली आहेत. - वरील ग्रंथांतील ९६ कुळांचा परस्परांशी मेळ आहे. सबब ही ९६ कुळी विश्वसनीय आहे, असे आम्हांस वाटते. <br />
                - प्रा.आ.रा.कदम
                </p> */}
                <ToggleContent />
                <AccordionComponent Title={`${currentLang.Ahirrao.Title}`} ClanNumber={`${currentLang.Ahirrao.ClanNumber}`} SubClan={`${currentLang.Ahirrao.SubClan}`} Vansh={`${currentLang.Ahirrao.Vansh}`} Gotra={`${currentLang.Ahirrao.Gotra}`} Kuldaivat={`${currentLang.Ahirrao.Kuldaivat}`} Mantra={`${currentLang.Ahirrao.Mantra}`} RularKingOrTitle={`${currentLang.Ahirrao.RularKingOrTitle}`} ClanPlace={`${currentLang.Ahirrao.ClanPlace}`}/>
                {/* <AccordionComponent Title={`${currentLang.Angre.Title}`} ClanNumber={`${currentLang.Angre.ClanNumber}`} SubClan={`${currentLang.Angre.SubClan}`} Vansh={`${currentLang.Angre.Vansh}`} Gotra={`${currentLang.Angre.Gotra}`} Kuldaivat={`${currentLang.Angre.Kuldaivat}`} Mantra={`${currentLang.Angre.Mantra}`} RularKingOrTitle={`${currentLang.Angre.RularKingOrTitle}`} ClanPlace={`${currentLang.Angre.ClanPlace}`}/>
                <AccordionComponent Title={`${currentLang.Angane.Title}`} ClanNumber={`${currentLang.Angane.ClanNumber}`} SubClan={`${currentLang.Angane.SubClan}`} Vansh={`${currentLang.Angane.Vansh}`} Gotra={`${currentLang.Angane.Gotra}`} Kuldaivat={`${currentLang.Angane.Kuldaivat}`} Mantra={`${currentLang.Angane.Mantra}`} RularKingOrTitle={`${currentLang.Angane.RularKingOrTitle}`} ClanPlace={`${currentLang.Angane.ClanPlace}`}/> */}
            </div>
        </>

    )
}

export default ClanList;