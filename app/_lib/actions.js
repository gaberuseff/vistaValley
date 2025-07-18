'use server'

import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import { supabase } from "./supabase";
import { getGuestBookings } from "./data-services";
import { redirect } from "next/navigation";

export async function updateProfile(formData) {
    const session = await auth();
    if (!session) throw new Error('You are not logged in');

    const fullName = formData.get('fullName');
    const nationalId = formData.get('nationalId');
    const [nationality, countryFlag] = formData.get('nationality').split('%');

    if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalId))
        throw new Error('The national ID must be between 6 and 12 alphanumeric characters.');

    const updateData = {
        fullName,
        nationalId,
        nationality,
        countryFlag,
    }

    const { data, error } = await supabase
        .from('guests')
        .update(updateData)
        .eq('id', session.user.guestId)
        .single();

    if (error) {
        throw new Error('Guest could not be updated');
    }

    revalidatePath('/account/profile');
}

export async function deleteReservation(bookingId) {
    const session = await auth();
    if (!session) throw new Error('You are not logged in');

    const guestBookings = await getGuestBookings(session.user.guestId);
    const guestBookingIds = guestBookings.map((booking) => booking.id);

    if (!guestBookingIds.includes(bookingId)) {
        throw new Error('You are not allowed to delete this reservation');
    }

    const { error } = await supabase
        .from('bookings')
        .delete()
        .eq('id', bookingId);

    if (error) {
        console.error(error);
        throw new Error('Bookings could not be deleted');
    }

    revalidatePath('/account/reservations');
}

export async function updateBooking(formData) {
    const session = await auth();
    if (!session) throw new Error('You are not logged in');
    const bookingId = Number(formData.get('bookingId'));

    const guestBookings = await getGuestBookings(session.user.guestId);
    const guestBookingIds = guestBookings.map((booking) => booking.id);

    if (!guestBookingIds.includes(bookingId)) {
        throw new Error('You are not allowed to update this reservation');
    }

    const updatedData = {
        numGuests: Number(formData.get('numGuests')),
        observations: formData.get('observations').slice(0, 1000),
    }

    const { error } = await supabase
        .from('bookings')
        .update(updatedData)
        .eq('id', bookingId)
        .single();

    if (error) {
        console.error(error);
        throw new Error('Booking could not be updated');
    }

    redirect('/account/reservations');
}

export async function createBooking(bookingData, formData) {
    const session = await auth();
    if (!session) throw new Error('You are not logged in');

    const newBooking = {
        ...bookingData,
        guestId: session.user.guestId,
        numGuests: Number(formData.get('numGuests')),
        observations: formData.get('observations').slice(0, 1000),
        extrasPrice: 0,
        totalPrice: bookingData.cabinPrice,
        isPaid: false,
        hasBreakfast: false,
        status: 'unconfirmed',
    }

    const { data, error } = await supabase
        .from('bookings')
        .insert([newBooking])
        .single();

    if (error) {
        console.error(error);
        throw new Error('Booking could not be created');
    }

    revalidatePath(`/cabins/${bookingData.cabinId}`);
    redirect('/cabins/thankyou');
}


export async function signInAction() {
    await signIn('google', { redirectTo: '/account' });
}

export async function signOutAction() {
    await signOut({ redirectTo: '/' });
}