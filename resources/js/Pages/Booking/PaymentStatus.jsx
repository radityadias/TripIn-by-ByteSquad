import React, { useState, useEffect } from "react";
import { CheckIcon, CheckBadgeIcon } from "@heroicons/react/24/solid";

const PaymentStatus = ({user}) => {
    const [paymentData, setPaymentData] = useState({
        user: "yoga",
        gopayAccount: "081234567890",
        timeLeft: 60,
        date: new Date().toLocaleDateString("en-GB"),
        transactionNo: `A${Math.random().toString(36).substr(2, 16)}`,
        paymentMethod: "Gopay",
        totalPrice: 120000,
    });
    console.log(user);

    const [isHowToPayOpen, setIsHowToPayOpen] = useState(false);
    const [countdown, setCountdown] = useState(paymentData.timeLeft);

    useEffect(() => {
        if (countdown <= 0) return;

        const timer = setInterval(() => {
            setCountdown((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [countdown]);

    const formatPrice = (price) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(price);
    };

    const formatGopayAccount = (number) => {
        const visible = number.slice(-4);
        const hidden = number.slice(0, -4).replace(/./g, "x");
        return hidden + visible;
    };

    return (
        <>
            <div className="flex justify-center">
                <div className="min-h-screen bg-white lg:w-[400px]">
                    {/* Header */}
                    <div className="bg-primary p-6">
                        <div className="relative flex items-center justify-center">
                            <button className="absolute left-0 p-1 bg-transparent">
                                <img
                                    src="/backArrow.svg"
                                    className="w-6 h-6 text-white"
                                />
                            </button>
                            <h1 className="text-2xl font-bold text-white">
                                Gopay
                            </h1>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="p-6">
                        {/* Success Icon */}
                        <div className="flex justify-center mb-4">
                            <div className="bg-lime-400 rounded-full border-gray-200 border shadow-black p-3">
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
                        <div className="bg-gray-100 rounded-lg p-4 mb-4">
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

                        {/* Back Button */}
                        <div>
                            <button className="w-full bg-primary2 text-white py-3 rounded-lg font-medium">
                                BACK TO HOME
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PaymentStatus;
