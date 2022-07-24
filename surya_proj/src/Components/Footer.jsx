import React from 'react'
import { Footer } from 'flowbite-react'

const FooterPage = () => {
    return (
        <Footer container={true}>
            <div className="w-full text-center">
                <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
                    <Footer.Brand
                        href="/"
                        name="Kshatriya Mahratta"
                    />
                    <Footer.LinkGroup>
                        <Footer.Link href="#">
                            About
                        </Footer.Link>

                        <Footer.Link href="#">
                            Contact
                        </Footer.Link>
                    </Footer.LinkGroup>
                </div>
                <Footer.Divider />
                <Footer.Copyright
                    href="#"
                    by=" Design and Developed by PREM PAWAR"
                    year={2022}
                />
            </div>
        </Footer>
    )
}

export default FooterPage;