import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import {
    add,
    eachDayOfInterval,
    endOfMonth,
    endOfWeek,
    format,
    getDay,
    isEqual,
    isSameMonth,
    isToday,
    parse,
    startOfToday,
    startOfWeek,
    isBefore,
} from "date-fns";
import { useState } from "react";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function CalendarComponent({
    selectedDay,
    tempSelectedDay,
    onDaySelection,
}) {
    let today = startOfToday();
    let [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));
    let firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());

    let days = eachDayOfInterval({
        start: startOfWeek(firstDayCurrentMonth),
        end: endOfWeek(endOfMonth(firstDayCurrentMonth)),
    });

    function previousMonth() {
        let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
        setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
    }

    function nextMonth() {
        let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
        setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
    }

    const handleDayClick = (day) => {
        onDaySelection(day); // Call the parent function to store the temporary selected day
    };

    return (
        <div>
            <div className="md:w-[390px] min-size-[280px] ">
                <div className="h-fit py-4 px-5 md:p-5">
                    <div className="flex items-center">
                        <h2 className="flex-auto font-semibold text-gray-900">
                            {format(firstDayCurrentMonth, "MMMM yyyy")}
                        </h2>
                        {currentMonth !== format(today, "MMM-yyyy") && (
                            <button
                                type="button"
                                onClick={previousMonth}
                                className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
                            >
                                <span className="sr-only">Previous month</span>
                                <ChevronLeftIcon
                                    className="w-5 h-5"
                                    aria-hidden="true"
                                />
                            </button>
                        )}
                        <button
                            onClick={nextMonth}
                            type="button"
                            className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
                        >
                            <span className="sr-only">Next month</span>
                            <ChevronRightIcon
                                className="w-5 h-5"
                                aria-hidden="true"
                            />
                        </button>
                    </div>
                    <div className="grid grid-cols-7 mt-8 text-xs md:text-xs gap-2 leading-6 text-center text-gray-500">
                        <div>SUN</div>
                        <div>MON</div>
                        <div>TUE</div>
                        <div>WED</div>
                        <div>THU</div>
                        <div>FRI</div>
                        <div>SAT</div>
                    </div>
                    <div className="grid grid-cols-7 mt-2 text-sm md:text-base">
                        {days.slice(0, 35).map((day, dayIdx) => {
                            const rowIdx = Math.floor(dayIdx / 7);
                            const isDayBeforeToday = isBefore(day, today);
                            return (
                                <div
                                    key={day.toString()}
                                    className={classNames(
                                        rowIdx > 4 &&
                                            "border-t border-gray-200",
                                        dayIdx === 0 &&
                                            colStartClasses[getDay(day)],
                                        "md:py-1.5"
                                    )}
                                >
                                    <button
                                        type="button"
                                        onClick={() => handleDayClick(day)}
                                        disabled={isDayBeforeToday} // Store selected day temporarily
                                        className={classNames(
                                            isEqual(day, tempSelectedDay) &&
                                                "text-white", // Use tempSelectedDay for visual update
                                            !isEqual(day, tempSelectedDay) &&
                                                isToday(day) &&
                                                "text-red-500",
                                            !isEqual(day, tempSelectedDay) &&
                                                !isToday(day) &&
                                                isSameMonth(
                                                    day,
                                                    firstDayCurrentMonth
                                                ) &&
                                                "text-gray-900",
                                            !isEqual(day, tempSelectedDay) &&
                                                !isToday(day) &&
                                                !isSameMonth(
                                                    day,
                                                    firstDayCurrentMonth
                                                ) &&
                                                "text-gray-400",
                                            isEqual(day, tempSelectedDay) &&
                                                isToday(day) &&
                                                "bg-red-500",
                                            isEqual(day, tempSelectedDay) &&
                                                !isToday(day) &&
                                                "bg-gray-900",
                                            !isEqual(day, tempSelectedDay) &&
                                                "hover:bg-gray-200",
                                            (isEqual(day, tempSelectedDay) ||
                                                isToday(day)) &&
                                                "font-semibold",
                                            isDayBeforeToday &&
                                                "opacity-50 cursor-not-allowed",
                                            "mx-auto flex h-8 w-8 items-center justify-center rounded-full"
                                        )}
                                    >
                                        <time
                                            dateTime={format(day, "yyyy-MM-dd")}
                                        >
                                            {format(day, "d")}
                                        </time>
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

let colStartClasses = [
    "",
    "col-start-2",
    "col-start-3",
    "col-start-4",
    "col-start-5",
    "col-start-6",
    "col-start-7",
];
