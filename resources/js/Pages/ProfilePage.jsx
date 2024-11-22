import React from "react";
import { Link } from "@inertiajs/react";
import NavbarTripin from "@/Components/navbarTripin";

const ProfilePage = () => {
    return (
        <>
            <div className="flex justify-center">
                <div className="  h-fit w-full lg:max-w-[500px] bg-slate-200">
                    <div className="w-full h-[220px] bg-primary">
                        <p className="text-white font-semibold text-3xl pt-16 text-center">
                            Profile
                        </p>
                    </div>
                    <div className="w-full h-full bg-white mt-[-1.75rem] rounded-t-3xl px-6">
                        <div className="flex flex-col items-center">
                            <div className="w-[120px] h-[120px] rounded-full overflow-hidden mt-[-3.5rem]">
                                <img src="https://placehold.co/120x120" />
                            </div>
                            <p className="text-3xl font-bold text-center">
                                John Doe
                            </p>
                            <p className="text-sm font-thin text-center">
                                @John Doe
                            </p>
                        </div>
                        <div className="h-max-[230px] w-max-[392px] py-3 ">
                            <p className="font-bold text-lg leading-10">
                                Account
                            </p>
                            <div className="w-full h-[198px] grid grid-cols-1 overflow-hidden rounded-xl">
                                <Link
                                    href="#"
                                    className="bg-[#DADADA59] flex flex-row items-center px-5 text-lg font-medium"
                                >
                                    <img src="/profile.svg" alt="icon" />
                                    <p className="px-5">Edit Profile</p>
                                </Link>
                                <Link
                                    href="#"
                                    className="bg-[#DADADA59] flex flex-row items-center px-5 text-lg font-medium border-y-2"
                                >
                                    <img src="/notif.svg" alt="icon" />
                                    <p className="px-5">Notification</p>
                                </Link>
                                <Link
                                    href="#"
                                    className="bg-[#DADADA59] flex flex-row items-center px-5 text-lg font-medium"
                                >
                                    <img src="/history.svg" alt="icon" />
                                    <p className="px-5">History</p>
                                </Link>
                            </div>
                        </div>
                        <div className="h-max-[230px] w-max-[392px] py-3 ">
                            <p className="font-bold text-lg leading-10">
                                About
                            </p>
                            <div className="w-full h-[198px] grid grid-cols-1 overflow-hidden rounded-xl">
                                <Link
                                    href="#"
                                    className="bg-[#DADADA59] flex flex-row items-center px-5 text-lg font-medium"
                                >
                                    <img src="/faq.svg" alt="icon" />
                                    <p className="px-5">FAQ</p>
                                </Link>
                                <Link
                                    href="/terms-condition"
                                    className="bg-[#DADADA59] flex flex-row items-center px-5 text-lg font-medium border-y-2"
                                >
                                    <img src="/term.svg" alt="icon" />
                                    <p className="px-5">Term & Conditions</p>
                                </Link>
                                <Link
                                    href="/privacy-policy"
                                    className="bg-[#DADADA59] flex flex-row items-center px-5 text-lg font-medium"
                                >
                                    <img src="/privacy.svg" alt="icon" />
                                    <p className="px-5">Privacy Policy</p>
                                </Link>
                            </div>
                        </div>
                        <div className="h-max-[230px] w-max-[392px] py-3 ">
                            <p className="font-bold text-lg leading-10">
                                Action
                            </p>
                            <div className="w-full h-[68px]  overflow-hidden rounded-xl mb-14">
                                <Link
                                    href="#"
                                    className="bg-[#DADADA59] flex flex-row items-center px-5 text-lg font-medium h-[68px]"
                                >
                                    <img src="/logout.svg" alt="icon" />
                                    <p className="px-5">Log Out</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <NavbarTripin pageInfo={"ProfilePage"} />
        </>
    );
};

export default ProfilePage;
