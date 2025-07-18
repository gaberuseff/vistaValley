import SubmitButton from "@/app/_components/SubmitButton";
import { updateBooking } from "@/app/_lib/actions";
import { getBooking, getCabin } from "@/app/_lib/data-services";

export const metadata = {
    title: 'Edit Reservation'
}

export default async function Page({ params }) {
    const { bookingId } = params;
    const { numGuests, observations, cabinId } = await getBooking(bookingId);
    const { maxCapacity } = await getCabin(cabinId);

    return (
        <div>
            <h2>
                Edit Reservation #{bookingId}
            </h2>

            <form action={updateBooking} className="bg-gray-900 py-8 
                md:px-12 sm:px-6 px-2 text-lg flex gap-6 flex-col">
                <input type="hidden" name="bookingId" value={bookingId} />

                <div className="flex flex-col gap-2">
                    <label htmlFor="numGuests" className="sm:text-lg text-base">How many guests?</label>
                    <select
                        name="numGuests"
                        id="numGuests"
                        className="px-5 py-3 bg-gray-700 text-gray-200 w-full shadow-sm rounded-sm"
                        required
                    >
                        <option value="" key="">
                            Select number of guests...
                        </option>
                        {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
                            <option value={x} key={x}>
                                {x} {x === 1 ? "guest" : "guests"}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="observations" className="sm:text-lg text-base">
                        Anything we should know about your stay?
                    </label>
                    <textarea
                        name="observations"
                        defaultValue={observations}
                        className="px-5 py-3 bg-gray-700 text-gray-200 w-full shadow-sm rounded-sm"
                    />
                </div>

                <div className="flex justify-end items-center gap-6">
                    <SubmitButton pendingText="Updating...">Update reservation</SubmitButton>
                </div>
            </form>
        </div>
    );
}