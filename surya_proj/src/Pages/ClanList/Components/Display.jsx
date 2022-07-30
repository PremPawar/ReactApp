import React, { useContext } from 'react'
import ToggleContent from '../Toggle/ToggleContent'
import ContentContext from '../../../Context/ContentContext';
import ClanContent from '../Content/ClanContent';
import AccordionComponent from './Accordion';

const Display = (props) => {
    // const lang = useContext(ContentContext)[0];
    // const currentLang = ClanContent[lang];

    
    // console.log("name:" + props.Name);

    // const title = props.title;
    // const clanNo = props.clanNo;
    // const subClan = props.subClan;
    // const vansh = props.vansh;
    // const gotra = props.gotra;
    // const kuldaivat = props.kuldaivat;
    // const victory = props.victory;
    // const mantra = props.mantra;
    // const rular = props.rular;
    // const clanPlace = props.clanPlace;
    
    return (
        <></>
        // <>
        //     <div className='flex flex-row'>
        //     <AccordionComponent />
        //         <div className='relative mx-auto my-auto p-3 h-screen w-full bg-blue-200 '>
                
        //             <ToggleContent />

        //             <div className="relative max-w-md mx-auto md:max-w-2xl min-w-0 break-words bg-white w-fit mb-6 shadow-lg rounded-xl mt-6">
                    
        //                 <div className="px-8">

        //                     <div className="flex flex-wrap justify-center">
        //                         <div className="w-full flex justify-center">
        //                             <div className="relative">
        //                                 <img src="src\assets\sketches\3.jfif" className="shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]" />
        //                             </div>
        //                         </div>


        //                     </div>
        //                     <div className="flex flex-row sm:flex-row md:flex-row text-start mt-20">
        //                         <h3 className="text-2xl  font-bold mb-1 opacity-75">Title : </h3>
        //                         <p className="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
        //                             <i className=" text-2xl fas fa-map-marker-alt mr-2 text-slate-400 opacity-95">{title}</i>
        //                         </p>
        //                     </div>
        //                     <div className="mt-6 py-3 border-t border-slate-200 text-center"></div>
        //                     <div className="flex flex-row h-auto space-x-2 sm:flex-col md:flex-row xl:flex-row items-center mb-2">
        //                         <div className="text-xl w-30 text-slate-700 font-bold leading-normal opacity-75">
        //                             Clan Number :
        //                         </div>
        //                         <div className=" mr-2 text-xs font-bold text-slate-400 opacity-55 uppercase">
        //                             {clanNo}

        //                         </div>
        //                     </div>
        //                     <div className="flex flex-row h-auto space-x-2 sm:flex-col md:flex-row xl:flex-row items-center mb-2">
        //                         <div className="text-xl w-30 text-slate-700 font-bold leading-normal opacity-75">
        //                             Sub-Clans :
        //                         </div>
        //                         <div className=" mr-2 text-xs font-bold text-slate-400 opacity-55 uppercase">
        //                             {subClan}
        //                         </div>
        //                     </div>
        //                     <div className="flex flex-row h-auto space-x-2 sm:flex-col md:flex-row xl:flex-row items-center mb-2">
        //                         <div className="text-xl text-slate-700 font-bold leading-normal opacity-75">
        //                             Vansh :
        //                         </div>
        //                         <div className=" mr-2 text-xs font-bold text-slate-400 opacity-55 uppercase">
        //                             {vansh}
        //                         </div>
        //                     </div>
        //                     <div className="flex flex-row h-auto space-x-2 sm:flex-col md:flex-row xl:flex-row items-center mb-2 ">
        //                         <div className="text-xl text-slate-700 font-bold leading-normal opacity-75">
        //                             Gotra :
        //                         </div>
        //                         <div className=" mr-2 text-xs font-bold text-slate-400 opacity-55 uppercase">
        //                             {gotra}
        //                         </div>
        //                     </div>
        //                     <div className="flex flex-row h-auto space-x-2 sm:flex-col md:flex-row xl:flex-row items-center mb-2 ">
        //                         <div className="text-xl text-slate-700 font-bold leading-normal opacity-75">
        //                             Kuldeivat :
        //                         </div>
        //                         <div className=" mr-2 text-xs font-bold text-slate-400 opacity-55 uppercase">
        //                             {kuldaivat}
        //                         </div>
        //                     </div>
        //                     <div className="flex flex-row h-auto space-x-2 sm:flex-col md:flex-row xl:flex-row items-center mb-2 ">
        //                         <div className="text-xl text-slate-700 font-bold leading-normal opacity-75">
        //                             Victory Weapon :
        //                         </div>
        //                         <div className=" mr-2 text-xs font-bold text-slate-400 opacity-55 uppercase">
        //                             {victory}
        //                         </div>
        //                     </div>
        //                     <div className="flex flex-row h-auto space-x-2 sm:flex-col md:flex-row xl:flex-row items-center mb-2 ">
        //                         <div className="text-xl text-slate-700 font-bold leading-normal opacity-75">
        //                             Mantra :
        //                         </div>
        //                         <div className=" mr-2 text-xs font-bold text-slate-400 opacity-55 uppercase">
        //                             {mantra}
        //                         </div>
        //                     </div>
        //                     <div className="flex flex-row h-auto space-x-2 sm:flex-col md:flex-row xl:flex-row items-center mb-2">
        //                         <div className="text-xl text-slate-700 font-bold leading-normal opacity-75">
        //                             RularKingOrTitle :
        //                         </div>
        //                         <div className=" mr-2 text-xs font-bold text-slate-400 opacity-55 uppercase">
        //                             {rular}
        //                         </div>
        //                     </div>
        //                     <div className="flex flex-row h-auto space-x-2 sm:flex-col md:flex-row xl:flex-row items-center mb-2">
        //                         <div className="text-xl text-slate-700 font-bold leading-normal opacity-75">
        //                             Clan Place :
        //                         </div>
        //                         <div className=" mr-2 text-xs font-bold text-slate-400 opacity-55 uppercase">
        //                             {clanPlace}
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </>
    )
}

export default Display