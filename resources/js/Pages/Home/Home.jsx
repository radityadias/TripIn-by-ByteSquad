import { useLayoutEffect, useEffect, useState } from "react";
import { BellIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import CarouselDashboard from "@/Components/CarouselDashboard";
import CardComponent from "@/Components/CardComponent";
import NavbarTripin from "@/Components/navbarTripin";

const Home = ({ credit, username, user_id, booking, notification_status }) => {
    const [isTripAvailable, setIsTripsAvailable] = useState(false);
    const [isUpcomingTripAvailable, setIsUpcomingTripAvailable] =
        useState(false);
    const [todayTripCardProp, setTodayTripCardProp] = useState([]);
    const [upcomingTripsCardProp, setUpcomingTripsCardProp] = useState({});
    const { todays, upcomings } = booking; // Destructure the booking props (from backend) to get today and upcoming

    console.log("Today Booking : ", todays); // Debug data today
    console.log("Upcoming Booking : ", upcomings); // Debug data upcoming
    console.log("Notif Status: ", notification_status); // Debug data credit

    const formattedCredit = new Intl.NumberFormat("id-ID", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(credit);

    function checkIsCardDataEmpty(datas, setTrip, setVisible) {
        if (Object.keys(datas).length !== 0) {
            setVisible(true);
            setTrip((prevState) => ({ ...prevState, ...datas }));
        }
    }
    const todayCardProp = todays.map((today) => ({
        id: today.booking_id,
        name: "Shuttle Bus Tripin",
        plateNumber: today.trips[0]?.schedule.vehicle.license_plate,
        origin: today.trips[0]?.origin,
        destination: today.trips[0]?.schedule.location.name,
        status: "On Trip",
        price: today.price,
    }));

    const upcomingCardProp = upcomings.map((upcoming) => ({
        id: upcoming.booking_id,
        name: "Shuttle Bus Tripin",
        plateNumber: upcoming.trips[0]?.schedule.vehicle.license_plate,
        origin: upcoming.trips[0]?.origin,
        destination: upcoming.trips[0]?.schedule.location.name,
        status: "Upcoming Trip",
        price: upcoming.price,
    }));

    useEffect(() => {
        // Dummy data for today's and upcoming trips

        checkIsCardDataEmpty(
            todayCardProp,
            setTodayTripCardProp,
            setIsTripsAvailable
        );
        checkIsCardDataEmpty(
            upcomingCardProp,
            setUpcomingTripsCardProp,
            setIsUpcomingTripAvailable
        );
    }, [booking]); // Run effect when users data changes

    return (
        <>
            <div className=" flex justify-center ">
                <div className="h-fit w-full lg:max-w-[400px] bg-white">
                    <div className="h-[222px] bg-primary rounded-b-3xl relative">
                        <div className="absolute top-8 right-5">
                            <BellIcon
                                onClick={() =>
                                    (window.location.href =
                                        route("notification"))
                                }
                                className={`size-8 text-white cursor-pointer relative z-40 hover:animate-shake`}
                            ></BellIcon>
                            {notification_status == "unread" && (
                                <div className="rounded-full bg-primary2 size-2 absolute top-1 right-1 z-50"></div>
                            )}
                        </div>
                        <div className="h-[90px] relative pt-8 pl-5">
                            <img
                                src="/TripInLogo.svg"
                                className="w-16 h-8"
                                alt="Logo of TripIn"
                                loading="lazy"
                            />
                        </div>
                        <div className="mx-5">
                            <p className="font-semibold text-white text-2xl sm:text-3xl tracking-tighter">
                                Welcome, {username}
                            </p>
                            <p className="font-medium text-white text-base sm:text-lg tracking-tight">
                                Enjoy Your Trip!
                            </p>
                        </div>
                    </div>

                    <div className="min-h-[100vh] h-full w-full px-5 pb-8 ">
                        <a
                            onClick={() =>
                                console.log("Navigate to credit screen")
                            }
                            className=" group flex px-5 mx-5 bg-white border border-primary relative top-[-1.5rem]  rounded-lg py-2 hover:cursor-pointer"
                        >
                            <img
                                className="mr-3"
                                src="/credit.svg"
                                alt="CreditIcon"
                                loading="lazy"
                            />
                            <p className="text-orange text-sm absolute left-14 top-1/2 -translate-y-1/2">
                                {formattedCredit} CP
                            </p>
                            <ChevronRightIcon className="size-5 text-black absolute right-3 top-1/2 translate-y-[-50%] duration-200 group-hover:translate-x-2"></ChevronRightIcon>
                        </a>
                        <button
                            onClick={() =>
                                (window.location.href = route("booking.index"))
                            }
                            className="text-white bg-primary2 py-2 rounded-lg  mb-8 w-full"
                        >
                            Booking
                        </button>

                        <div className="font-semibold text-black">
                            Popular Destinations
                        </div>
                        <div className="lg:flex lg:justify-center">
                            <CarouselDashboard />
                        </div>
                        <div className="font-semibold text-black mt-12 mb-3">
                            Today's Trip
                        </div>

                        <div className="grid gap-4">
                            {isTripAvailable ? (
                                <CardComponent CardProp={todayCardProp} />
                            ) : (
                                <div className="pb-9 justify-center items-center flex flex-col">
                                    <img src="/tayo-bus.svg " loading="lazy" />
                                    <p>no tayo trip available</p>
                                </div>
                            )}
                        </div>

                        <div className=" flex justify-between items-baseline mt-16 mb-3 px-2">
                            <p className="font-semibold text-orange">
                                Upcoming's Trip
                            </p>
                            <p className="text-sm text-primary">see more</p>
                        </div>
                        <div className="grid gap-4">
                            <div className="grid mb-10 gap-4">
                                {isUpcomingTripAvailable ? (
                                    <CardComponent
                                        CardProp={upcomingCardProp}
                                    />
                                ) : (
                                    <div className="pb-9 justify-center items-center flex flex-col">
                                        <img src="/tayo-bus.svg" />
                                        <p>no tayo trip available</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <NavbarTripin pageInfo={"HomePage"} />
        </>
    );
};

export default Home;
