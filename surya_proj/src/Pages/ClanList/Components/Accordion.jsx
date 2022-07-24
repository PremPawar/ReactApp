import React from 'react'
import { Link } from 'react-router-dom';
import { Sidebar } from 'flowbite-react/lib/esm/components';




const AccordionComponent = (props) => {

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
            <div className='scrollbar-thin scroll-smooth scrollbar-thumb-gray-900 scrollbar-track-blue-100'>
                <div className="w-fit bg-gray-50 flex-1 text-2xl font-bold h-screen overflow-y-auto">
                    <Sidebar aria-label="Default sidebar example">
                        <Sidebar.Items>
                            <Sidebar.ItemGroup>
                                <Sidebar.Item
                                    to="#"
                                    onClick=""
                                >
                                <Link to="" className='' onClick=''>Ahirrao</Link> 
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
            </div>
        </>

    )
}

export default AccordionComponent;




