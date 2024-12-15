import React, { useState, useEffect } from "react";
import { CheckIcon, CheckBadgeIcon } from "@heroicons/react/24/solid";
import { format } from "date-fns";

const PaymentStatus = ({ user, booking }) => {
    const csrfToken = document.head.querySelector(
        'meta[name="csrf-token"]'
    ).content;
    const [paymentData, setPaymentData] = useState({
        user: user.username,
        gopayAccount: user.phone_number ?? "+62xxxxxxxxxxx",
        date: format(booking.booking_time, 'yyy-MM-dd'),
        time: format(booking.booking_time, 'HH:mm:ss'),
        transactionNo: booking.booking_code,
        paymentMethod: "Dana",
        totalPrice: booking.price,
    });

    const formatPrice = (price) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(price);
    };

    return (
        <>
            <div className="lg:flex lg:justify-center">
                <div className="min-h-screen bg-white lg:w-[400px] relative">
                    {/* Header */}
                    <div className="bg-primary p-6">
                        <div className="relative flex items-center justify-center">
                            <h1 className="text-2xl font-bold text-white">
                                Gopay
                            </h1>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="p-6 relative">
                        {/* Success Icon */}
                        <div className="flex justify-center mb-4">
                            <div className="bg-blue-500 ring-2 ring-blue-100 rounded-full border-gray-200 border shadow-black p-3">
                                <CheckIcon className="size-8 text-white"></CheckIcon>
                            </div>
                        </div>

                        {/* Notification Text */}
                        <div className="text-center text-black mb-6">
                            <h2 className="text-xl font-semibold mb-2">
                                Payment Successfull !!!
                            </h2>
                            <p className="text-sm">
                                You've successfuly booked a shuttle
                            </p>
                        </div>

                        {/* Payment Details Card */}
                        <div className="bg-gray-100 rounded-lg p-4 mb-4 relative">
                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <span className="text-black">Name</span>
                                    <span>{paymentData.user}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-black">
                                        phone number
                                    </span>
                                    <span>{paymentData.gopayAccount}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-black">Date</span>
                                    <span>{paymentData.date}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-black">Time</span>
                                    <span>{paymentData.time}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-black">
                                        Transaction No
                                    </span>
                                    <span>{paymentData.transactionNo}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-black">
                                        Payment Method
                                    </span>
                                    <span>{paymentData.paymentMethod}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-black font-bold">
                                        Total Price
                                    </span>
                                    <span className="font-bold">
                                        {formatPrice(paymentData.totalPrice)}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Transaction Details Card */}
                    </div>
                    {/* Back Button */}
                    <div className="relative w-full bottom-0 p-5">
                        <button
                            onClick={() =>
                                (window.location.href = route("home"))
                            }
                            className="w-full bg-primary2 text-white py-3 rounded-lg font-medium"
                        >
                            BACK TO HOME
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PaymentStatus;
