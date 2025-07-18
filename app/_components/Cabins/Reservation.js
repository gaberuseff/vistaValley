import { getBookedDatesByCabinId, getSettings } from "@/app/_lib/data-services";
import DateSelector from "./DateSelector";
import ReservationForm from "./ReservationForm";
import { auth } from "@/app/_lib/auth";
import LoginMessage from "./LoginMessage";

async function Reservation({ cabin }) {
    const session = await auth();
    const [settings, bookedDates] = await Promise.all([getSettings(),
    getBookedDatesByCabinId(cabin.id)
    ]);

    return (
        <div className="flex flex-col justify-center gap-6">
            <h2 id="reservation-heading" className="mb-4 text-center">
                Reserve Cabin {cabin.name} today, Pay on arrival
            </h2>


            <DateSelector settings={settings}
                bookedDates={bookedDates} cabin={cabin} />

            {session?.user ? <ReservationForm cabin={cabin} user={session.user}
            /> : <LoginMessage />}
        </div>
    );
}

export default Reservation;