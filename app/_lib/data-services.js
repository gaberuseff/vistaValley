import { notFound } from "next/navigation";
import { supabase } from "./supabase";
import { eachDayOfInterval } from "date-fns";
import { auth } from "./auth";

export async function getCabins() {
    const { data, error } = await supabase
        .from('cabins')
        .select('id, name, maxCapacity, regularPrice, discount, image')
        .order('name');

    if (error) {
        console.error(error);
        throw new Error('Failed to fetch cabins');
    }

    return data;
}

export async function getCabin(id) {
    const { data, error } = await supabase
        .from('cabins')
        .select('*')
        .eq('id', id)
        .single();

    if (error) {
        console.error(error);
        notFound();
    }

    return data;
}

// ======= Get bookings
export async function getBookings() {
    const { data, error } = await supabase
        .from('bookings')
        .select('*')
        .single();

    if (error) {
        console.error(error);
        throw new Error('Failed to fetch bookings');
    }

    return data;
}

export async function getBooking(id) {
    const { data, error } = await supabase
        .from('bookings')
        .select('*')
        .eq('id', id)
        .single();

    if (error) {
        console.error(error);
        notFound();
    }

    return data;
}

// export async function updateBooking(id, obj) {
//     const { data, error } = await supabase
//         .from('bookings')
//         .update(obj)
//         .eq('id', id)
//         .single();

//     if (error) {
//         console.error(error);
//         throw new Error('Booking could not be updated');
//     }
// }

export async function getBookedDatesByCabinId(cabinId) {
    let today = new Date();
    today.setUTCHours(0, 0, 0, 0);
    today = today.toISOString();

    // Getting all bookings
    const { data, error } = await supabase
        .from('bookings')
        .select('*')
        .eq('cabinId', cabinId)
        .or(`startDate.gte.${today},status.eq.checked-in`);

    // await new Promise((resolve) => setTimeout(resolve, 3000));

    if (error) {
        console.error(error);
        throw new Error('Bookings could not get loaded');
    }

    // Converting to actual dates to be displayed in the date picker
    const bookedDates = data
        .map((booking) => {
            return eachDayOfInterval({
                start: new Date(booking.startDate),
                end: new Date(booking.endDate),
            });
        })
        .flat();

    return bookedDates;
}

export async function getGuestBookings(guestId) {
    const { data, error, count } = await supabase
        .from('bookings')
        .select(
            'id, created_at, startDate, endDate, numNights, numGuests, totalPrice, guestId, cabinId, cabins(name, image)'
        )
        .eq('guestId', guestId)
        .order('startDate');

    if (error) {
        console.error(error);
        throw new Error('Bookings could not get loaded');
    }

    return data;
}

// ======= Get settings
export async function getSettings() {
    const { data, error } = await supabase
        .from('settings')
        .select('*')
        .single();

    if (error) {
        console.error(error);
        throw new Error('Failed to fetch settings');
    }

    return data;
}

// ======= Guest 
export async function getGuest(email) {
    const { data, error } = await supabase
        .from('guests')
        .select('*')
        .eq('email', email)
        .single();

    return data;
}

export async function createGuest(guest) {
    const { data, error } = await supabase
        .from('guests')
        .insert([guest])
        .single();

    if (error) {
        console.error(error);
        throw new Error('Guest could not be created');
    }

    return data;
}

// ====== update guest
// export async function updateProfile(id, updateFields) {
//     const { data, error } = await supabase
//         .from('guests')
//         .update(updateFields)
//         .eq('id', id)
//         .single();

//     if (error) {
//         throw new Error('Guest could not be updated');
//     }
// }

// ======= Get countries
export async function getCountries() {
    try {
        const res = await fetch(
            'https://restcountries.com/v2/all?fields=name,flag'
        );
        const countries = await res.json();
        return countries;
    } catch {
        throw new Error('Could not fetch countries');
    }
}