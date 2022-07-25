import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { Sidebar } from 'flowbite-react/lib/esm/components';
import ContentContext from '../../../Context/ContentContext';
import ClanContent from '../Content/ClanContent';
import ToggleContent from '../Toggle/ToggleContent';




const AccordionComponent = (props) => {
    const lang = useContext(ContentContext)[0];
    const currentLang = ClanContent[lang];

    const title = props.Title;
    const clanNo = props.ClanNumber;
    const subClan = props.SubClan;
    const vansh = props.Vansh;
    const gotra = props.Gotra;
    const kuldaivat = props.Kuldaivat;
    const mantra = props.Mantra;
    const rular = props.RularKingOrTitle;
    const clanPlace = props.ClanPlace;
    return (
        <>
            <div className='flex flex-wrap w-full scrollbar-thin scroll-smooth scrollbar-thumb-red-900 scrollbar-track-blue-100'>
                <div className=" bg-gray-50 text-2xl font-bold h-screen overflow-y-auto">
                    <Sidebar aria-label="Default sidebar example">
                        <Sidebar.Items>
                            <Sidebar.ItemGroup>
                                <Sidebar.Item
                                    to="#"
                                >
                                    <label>1. {`${currentLang.Ahirrao.Title}`}</label>
                                </Sidebar.Item>
                                <Sidebar.Item
                                    to="#"
                                    labelColor="alternative"
                                >
                                    Kanban
                                </Sidebar.Item>
                                <Sidebar.Item
                                    to="#"
                                >
                                    Inbox
                                </Sidebar.Item>
                                <Sidebar.Item
                                    to="#"
                                >
                                    Users
                                </Sidebar.Item>
                                <Sidebar.Item
                                    to="#"
                                >
                                    Products
                                </Sidebar.Item>
                                <Sidebar.Item
                                    to="#"

                                >
                                    Sign In
                                </Sidebar.Item>
                                <Sidebar.Item
                                    to="#"
                                >
                                    Sign Up
                                </Sidebar.Item>
                                <Sidebar.Item
                                    to="#"
                                >
                                    Dashboard
                                </Sidebar.Item>
                                <Sidebar.Item
                                    to="#"
                                    labelColor="alternative"
                                >
                                    Kanban
                                </Sidebar.Item>
                                <Sidebar.Item
                                    to="#"
                                >
                                    Inbox
                                </Sidebar.Item>
                                <Sidebar.Item
                                    to="#"
                                >
                                    Users
                                </Sidebar.Item>
                                <Sidebar.Item
                                    to="#"
                                >
                                    Products
                                </Sidebar.Item>
                                <Sidebar.Item
                                    to="#"

                                >
                                    Sign In
                                </Sidebar.Item>
                                <Sidebar.Item
                                    to="#"
                                >
                                    Sign Up
                                </Sidebar.Item>
                                <Sidebar.Item
                                    to="#"
                                >
                                    Inbox
                                </Sidebar.Item>
                                <Sidebar.Item
                                    to="#"
                                >
                                    Users
                                </Sidebar.Item>
                                <Sidebar.Item
                                    to="#"
                                >
                                    Products
                                </Sidebar.Item>
                                <Sidebar.Item
                                    to="#"

                                >
                                    Sign In
                                </Sidebar.Item>
                                <Sidebar.Item
                                    to="#"
                                >
                                    Sign Up
                                </Sidebar.Item>

                            </Sidebar.ItemGroup>
                        </Sidebar.Items>
                    </Sidebar>
                </div>
                <div className='relative mx-auto my-auto p-3 h-screen w-auto bg-blue-200 '>

                    <ToggleContent />

                    <div className="relative max-w-md mx-auto md:max-w-2xl min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-6">

                        <div className="px-6">

                            <div className="flex flex-wrap justify-center">
                                <div className="w-full flex justify-center">
                                    <div className="relative">
                                        <img src="src\assets\sketches\3.jfif" className="shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]" />
                                    </div>
                                </div>


                            </div>
                            <div className="flex flex-col text-start mt-20">
                                <h3 className="flex-col text-2xl  font-bold mb-1 opacity-75">Title : </h3>
                                <div className="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
                                    <i className=" text-2xl fas fa-map-marker-alt mr-2 text-slate-400 opacity-95">{`${currentLang.Ahirrao.Title}`}</i>
                                </div>
                            </div>
                            <div className="grid mt-6 py-6 border-t border-slate-200 text-center">
                                <div className="flex flex-col text-start">
                                    <h3 className="text-xl text-slate-700 font-bold leading-normal mb-1 opacity-75">
                                        Clan Number :
                                    </h3>
                                    <div className=" text-xl font-thin uppercase">
                                        {`${currentLang.Ahirrao.ClanNumber}`}
                                    </div>
                                </div>
                                <div className="flex flex-col text-start">
                                    <h3 className="flex flex-col text-xl text-slate-700 font-bold leading-normal mb-2 opacity-75">
                                        SubClans :
                                        <div className="text-xs font-bold uppercase">
                                            <p className="fas fa-map-marker-alt mr-2 text-slate-400 opacity-55">{`${currentLang.Ahirrao.SubClan}`}</p>
                                        </div>
                                    </h3>
                                </div>
                                <div className="flex flex-col text-start">
                                    <h3 className="flex flex-col text-xl text-slate-700 font-bold leading-normal mb-2 opacity-75">
                                        Vansh :
                                        <div className="text-xs font-bold uppercase">
                                            <p className="fas fa-map-marker-alt mr-2 text-slate-400 opacity-55">{`${currentLang.Ahirrao.Vansh}`}</p>
                                        </div>
                                    </h3>
                                </div>
                                <div className="flex flex-col text-start">
                                    <h3 className="flex flex-col text-xl text-slate-700 font-bold leading-normal mb-2 opacity-75">
                                        Gotra :
                                        <div className="text-xs font-bold uppercase">
                                            <p className="fas fa-map-marker-alt mr-2 text-slate-400 opacity-55">{`${currentLang.Ahirrao.Gotra}`}</p>
                                        </div>
                                    </h3>
                                </div>
                                <div className="flex flex-col text-start">
                                    <h3 className="flex flex-col text-xl text-slate-700 font-bold leading-normal mb-2 opacity-75">
                                        Kuldeivat :
                                        <div className="text-xs font-bold uppercase">
                                            <p className="fas fa-map-marker-alt mr-2 text-slate-400 opacity-55">{`${currentLang.Ahirrao.Kuldaivat}`}</p>
                                        </div>
                                    </h3>
                                </div>
                                <div className="flex flex-col text-start">
                                    <h3 className="flex flex-col text-xl text-slate-700 font-bold leading-normal mb-2 opacity-75">
                                        Victory Weapon :
                                        <div className="text-xs font-bold uppercase">
                                            <p className="fas fa-map-marker-alt mr-2 text-slate-400 opacity-55">{`${currentLang.Ahirrao.VictoryWeapon}`}</p>
                                        </div>
                                    </h3>
                                </div>
                                <div className="flex flex-col text-start">
                                    <h3 className="flex flex-col text-xl text-slate-700 font-bold leading-normal mb-2 opacity-75">
                                        Mantra :
                                        <div className="text-xs font-bold uppercase">
                                            <p className="fas fa-map-marker-alt mr-2 text-slate-400 opacity-55">{`${currentLang.Ahirrao.Mantra}`}</p>
                                        </div>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>

    )
}

export default AccordionComponent;




