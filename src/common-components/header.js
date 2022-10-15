import React, { Fragment } from "react";
import { Menu, Transition } from '@headlessui/react'
import DefaulLogo from "../assets/svg/default-logo.svg";
import { FiGlobe, FiMenu, FiSearch } from 'react-icons/fi';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Header = () => {

    return (
        <>
            <div className="container px-5 bg-white">
                <header className="flex items-center justify-between">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <a href="/" className="default-company-logo">
                            <span className="sr-only">Your Company</span>
                            <img src={DefaulLogo} alt="" />
                        </a>
                    </div>
                    <nav className="hidden space-x-10 md:flex">
                        <div className="header-centerlized-menu">
                            <button class="left" type="button">
                                <div class="px-3">Anywhere</div>
                            </button>
                            <span></span>
                            <button class="left" data-index="1" type="button">
                                <div class="px-3">Any week</div>
                            </button>
                            <span></span>
                            <button class="right" type="button">
                                <div class="px-3"><p>Add guests</p></div>
                                <div data-testid="little-search-icon" className="search-spacing bg-slate-700">
                                    <FiSearch className="my-auto" />
                                </div>
                            </button>
                        </div>
                    </nav>
                    <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
                        <div className="p-3 cursor-pointer rounded-full m-0 hover:bg-gray-100">Become a host</div>
                        <div className="relative inline">
                            <button type="button" className="p-3 cursor-pointer rounded-full m-0 hover:bg-gray-100"><FiGlobe size={18} /></button>
                        </div>
                        <div className="relative inline">
                            <Menu as="div" className="relative z-50 inline-block text-left">
                                <div>
                                    <Menu.Button className="p-2 ml-2 rounded-full inline-flex items-center border-2 border-gray-300 hover:drop-shadow-lg">
                                        <FiMenu
                                            className={classNames('ml-2 h-5 w-5 group-hover:text-gray-500'
                                            )}
                                            aria-hidden="true"
                                        />
                                        <img className="w-6 h-6 rounded-full ml-4" src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="loggerin-user" />
                                    </Menu.Button>
                                </div>
                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <div className="px-1 py-1 ">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <button
                                                        className={`${active ? 'bg-gray-500 text-white' : 'text-gray-900'
                                                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                    >

                                                        Signup
                                                    </button>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <button
                                                        className={`${active ? 'bg-gray-500 text-white' : 'text-gray-900'
                                                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                    >

                                                        Login
                                                    </button>
                                                )}
                                            </Menu.Item>
                                        </div>
                                        <div className="px-1 py-1">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <button
                                                        className={`${active ? 'bg-gray-500 text-white' : 'text-gray-900'
                                                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                    >
                                                        Host your home
                                                    </button>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <button
                                                        className={`${active ? 'bg-gray-500 text-white' : 'text-gray-900'
                                                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                    >
                                                        Host an experience
                                                    </button>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <button
                                                        className={`${active ? 'bg-gray-500 text-white' : 'text-gray-900'
                                                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                    >
                                                        Help
                                                    </button>
                                                )}
                                            </Menu.Item>
                                        </div>
                                    </Menu.Items>
                                </Transition>
                            </Menu>
                        </div>
                    </div>
                </header>
            </div>
        </>
    )
}
export default Header