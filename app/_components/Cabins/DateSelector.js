'use client'

import { differenceInDays, isPast, isSameDay, isWithinInterval } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useReservation } from "../../_context/ReservationContext";

function isAlreadyBooked(range, datesArr) {
    return (
        range.from &&
        range.to &&
        datesArr.some((date) =>
            isWithinInterval(date, { start: range.from, end: range.to })
        )
    );
}

function DateSelector({ settings, bookedDates, cabin }) {
    const { range, setRange, resetRange } = useReservation();
    const displayRange = isAlreadyBooked(range, bookedDates) ? {} : range;

    const { regularPrice, discount } = cabin;

    const numNights = differenceInDays(displayRange.to, displayRange.from); // calculate number of nights
    const cabinPrice = numNights * (regularPrice - discount); // calculate cabin price

    // SETTINGS
    const { minBookingLength,
        maxBookingLength } = settings;

    return (
        <div className="flex flex-col justify-between">
            <DayPicker
                className="pt-12 place-self-center text-xs sm:text-sm text-gray-100"
                mode="range"
                onSelect={(range) => setRange(range)}
                selected={displayRange}
                min={minBookingLength + 1}
                max={maxBookingLength}
                fromMonth={new Date()}
                fromDate={new Date()}
                toYear={new Date().getFullYear() + 5}
                captionLayout="dropdown"
                numberOfMonths={2}
                disabled={(currentDate) => isPast(currentDate) || bookedDates.some(date => isSameDay(date, currentDate))}
            />

            <div className="flex items-center justify-between px-6 bg-gray-800 text-gray-200 h-[72px]">
                <div className="flex items-baseline sm:gap-6 gap-2">
                    <p className="flex gap-2 items-baseline">
                        {discount > 0 ? (
                            <>
                                <span className="sm:text-2xl text-lg">${regularPrice - discount}</span>
                                <span className="line-through font-semibold text-gray-600">
                                    ${regularPrice}
                                </span>
                            </>
                        ) : (
                            <span className="sm:text-2xl text-lg">${regularPrice}</span>
                        )}
                        <span className="">/night</span>
                    </p>
                    {numNights ? (
                        <>
                            <p className="bg-gray-700 px-3 py-2 sm:text-2xl text-base">
                                <span>&times;</span> <span>{numNights}</span>
                            </p>
                            <p>
                                <span className="sm:text-lg text-base font-bold uppercase">Total</span>{" "}
                                <span className="sm:text-2xl text-lg font-semibold">${cabinPrice}</span>
                            </p>
                        </>
                    ) : null}
                </div>

                {range.from || range.to ? (
                    <button
                        className="border border-gray-700 py-2 px-4 text-sm font-semibold"
                        onClick={() => resetRange()}
                    >
                        Clear
                    </button>
                ) : null}
            </div>
        </div>
    );
}

export default DateSelector;