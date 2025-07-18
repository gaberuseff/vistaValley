'use client';

import Image from "next/image";
import { useReservation } from "../../_context/ReservationContext";
import { differenceInDays } from "date-fns";
import { createBooking } from "@/app/_lib/actions";
import SubmitButton from "../SubmitButton";

function ReservationForm({ cabin, user }) {
    const { range } = useReservation();
    const { maxCapacity, regularPrice, discount, id } = cabin;

    const startDate = range.from;
    const endDate = range.to;

    const numNights = startDate && endDate ? differenceInDays(endDate, startDate) : 0;
    const cabinPrice = numNights * (regularPrice - discount);

    const bookingData = {
        startDate,
        endDate,
        numNights,
        cabinPrice,
        cabinId: id,
    }

    const createBookingWithData = createBooking.bind(null, bookingData);

    return (
        <div className='scale-[1.01]'>
            <div className='bg-gray-800 text-gray-300 sm:px-16 px-6 py-2 flex justify-between items-center'>
                <p>Logged in as</p>

                <div className='flex gap-4 items-center'>
                    <Image
                        // Important to display google profile images
                        referrerPolicy='no-referrer'
                        className='rounded-full'
                        src={user.image}
                        alt={user.name}
                        height={32}
                        width={32}
                    />
                    <p>{user.name.split(' ')[0]}</p>
                </div>
            </div>

            <form action={createBookingWithData} className='bg-gray-800 py-10 px-6 sm:px-16 text-lg flex gap-5 flex-col'>
                <div className='space-y-2'>
                    <label htmlFor='numGuests' className="sm:text-lg text-sm">How many guests?</label>
                    <select
                        name='numGuests'
                        id='numGuests'
                        className='px-5 py-3 bg-gray-700 text-gray-200 sm:text-base 
                            text-sm w-full shadow-sm rounded-sm'
                        required
                    >
                        <option value='' key=''>
                            Select number of guests...
                        </option>
                        {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
                            <option value={x} key={x}>
                                {x} {x === 1 ? 'guest' : 'guests'}
                            </option>
                        ))}
                    </select>
                </div>

                <div className='flex flex-col gap-3'>
                    <label htmlFor='observations' className="sm:text-lg text-sm">
                        Anything we should know about your stay?
                    </label>
                    <textarea
                        name='observations'
                        id='observations'
                        className='px-5 py-3 bg-gray-700 text-gray-200 w-full shadow-sm rounded-sm
                            sm:text-base text-xs'
                        placeholder='Any pets, allergies, special requirements, etc.?'
                    />
                </div>

                <div className='flex justify-end items-center gap-6'>
                    {
                        !(startDate && endDate) ? (
                            <p className="p-small">Please select a date range.</p>
                        ) : (
                            <SubmitButton>Reserve now</SubmitButton>
                        )
                    }
                </div>
            </form>
        </div>
    );
}

export default ReservationForm;