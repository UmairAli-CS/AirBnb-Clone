import React from "react";
import { FiGlobe, FiChevronUp } from 'react-icons/fi';
import { BiPound, BiMapAlt } from "react-icons/bi";

const Footer = () => {

    return (
        <>
            <div className="fixed bottom-20 left-0 z-20 w-full">
                <div className="flex justify-center">
                    <button type="button" className="flex items-center p-3 text-white bg-slate-700 rounded-full">Show map <BiMapAlt size={18} className="mt-1 ml-2" /> </button>
                </div>
            </div>
            <footer className="fixed bottom-0 left-0 z-20 w-full bg-white border-t border-gray-200 shadow">
                <div className="container">
                    <div className="flex items-center justify-between py-3">
                        <div className="footer-menu grow">
                            <span>© 2022 Airbnb, Inc.</span>
                            <span className="space" aria-hidden="true">·</span>
                            <a href="/" className="hover:underline">Privacy</a>
                            <span className="space" aria-hidden="true">·</span>
                            <a href="/" className="hover:underline">Terms</a>
                            <span className="space" aria-hidden="true">·</span>
                            <a href="/" className="hover:underline">Sitemap</a>
                            <span className="space" aria-hidden="true">·</span>
                            <a href="https://a0.muscache.com/static/uk-modern-slavery-act-statement.pdf" className="hover:underline">UK Modern Slavery Act</a>
                            <span className="space" aria-hidden="true">·</span>
                            <a href="/" className="hover:underline">Company details</a>
                            <span className="space" aria-hidden="true">·</span>
                            <a href="/" className="hover:underline">Destinations</a>
                        </div>
                        <div className="flex items-end">
                            <button type="button" className="flex items-center mr-4">
                                <FiGlobe className="mr-2" />
                                <span className="hover:underline">English (GB)</span>
                            </button>
                            <button type="button" className="flex items-center mr-4">
                                <BiPound className="mr-2" />
                                <span className="hover:underline">GBP</span>
                            </button>
                            <button type="button" className="flex items-center mr-4">
                                <span className="hover:underline">Support & resources</span>
                                <FiChevronUp className="ml-2" />
                            </button>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer