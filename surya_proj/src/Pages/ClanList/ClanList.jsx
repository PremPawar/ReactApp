import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import ToggleContent from './Toggle/ToggleContent';
import ContentContext from '../../Context/ContentContext';
import ClanContent from './Content/ClanContent';
import { Accordion } from 'flowbite-react';

const ClanList = () => {
    const lang = useContext(ContentContext)[0];
    const currentLang = ClanContent[lang];



    return (
        <>
            <div className="bg-gray-200 h-screen">
                <p className='justify-center font-extrabold text-4xl text-center p-8'>मराठ्यांची ९६ कुळे</p>
                <p className='justify-center text-center p-5 pr-8 pl-8 space-x-10'>
                स्कंद पुराणातील सह्याद्रिखंड ह्या ग्रंथात 'षण्णव कुल' नामक प्रकरणात, त्याचप्रमाणे स्वामी नरोत्तमानंद सरस्वतीकृत मराठा, शहाण्णव कुळी आणि बाळाजी नथूजी गावंडे यांनी केलेली वंशावळी व शाहाजीकालीन मूळस्तंभ अध्याय १७ आणि 'क्षत्रियांची उत्पत्ती व वंशावळी' या ग्रंथांत क्षत्रिय मराठा जातींची ९६ कुळे पुढे दिलेल्या अनुक्रमाने लिहिलेली आहेत. - वरील ग्रंथांतील ९६ कुळांचा परस्परांशी मेळ आहे. सबब ही ९६ कुळी विश्वसनीय आहे, असे आम्हांस वाटते. <br />
                - प्रा.आ.रा.कदम
                </p>
                <ToggleContent />
                <Accordion alwaysOpen={true} >
                    <Accordion.Panel>
                        <Accordion.Title>
                            <p className='text-2xl'>1. {`${currentLang.Ahirrao.Title}`}</p>
                        </Accordion.Title>
                        <Accordion.Content>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                <span className='font-bold'>Title : </span>
                                {`${currentLang.Ahirrao.Title}`} 
                            </p>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                <span className='font-bold'>Clan Number : </span>
                                {`${currentLang.Ahirrao.ClanNumber}`} 
                            </p>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                <span className='font-bold'>Sub-Clans : </span>
                                {`${currentLang.Ahirrao.SubClan}`} 
                            </p>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                <span className='font-bold'>Vansh : </span>
                                {`${currentLang.Ahirrao.Vansh}`} 
                            </p>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                <span className='font-bold'>Gotra : </span>
                                {`${currentLang.Ahirrao.Gotra}`} 
                            </p>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                <span className='font-bold'>Kuldaivata : </span>
                                {`${currentLang.Ahirrao.Kuldaivat}`} 
                            </p>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                <span className='font-bold'>Mantra : </span>
                                {`${currentLang.Ahirrao.Mantra}`} 
                            </p>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                <span className='font-bold'>RularKing Or Title : </span>
                                {`${currentLang.Ahirrao.RularKingOrTitle}`} 
                            </p>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                <span className='font-bold'>ClanPlace : </span>
                                {`${currentLang.Ahirrao.ClanPlace}`} 
                            </p>
                        </Accordion.Content>
                    </Accordion.Panel>

                    <Accordion.Panel>
                        <Accordion.Title>
                            <p className='text-2xl'>2. {`${currentLang.Angre.Title}`}</p>
                        </Accordion.Title>
                        <Accordion.Content>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                <span className='font-bold'>Title : </span>
                                {`${currentLang.Angre.Title}`} 
                            </p>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                <span className='font-bold'>Clan Number : </span>
                                {`${currentLang.Angre.ClanNumber}`} 
                            </p>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                <span className='font-bold'>Sub-Clans : </span>
                                {`${currentLang.Angre.SubClan}`} 
                            </p>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                <span className='font-bold'>Vansh : </span>
                                {`${currentLang.Angre.Vansh}`} 
                            </p>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                <span className='font-bold'>Gotra : </span>
                                {`${currentLang.Angre.Gotra}`} 
                            </p>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                <span className='font-bold'>Kuldaivata : </span>
                                {`${currentLang.Angre.Kuldaivat}`} 
                            </p>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                <span className='font-bold'>Mantra : </span>
                                {`${currentLang.Angre.Mantra}`} 
                            </p>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                <span className='font-bold'>RularKing Or Title : </span>
                                {`${currentLang.Angre.RularKingOrTitle}`} 
                            </p>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                <span className='font-bold'>ClanPlace : </span>
                                {`${currentLang.Angre.ClanPlace}`} 
                            </p>
                        </Accordion.Content>
                    </Accordion.Panel>
                </Accordion>
            </div>
        </>

    )
}

export default ClanList;