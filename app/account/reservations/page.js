// import ReservationCard from "./ReservationCard";
import ReservationList from "@/app/_components/Account/ReservationList";
import Link from "@/app/_components/Link";
import { auth } from "@/app/_lib/auth";
import { getGuestBookings } from "@/app/_lib/data-services";

export const metadata = {
    title: "Your reservations",
    description: "Manage your reservations",
};

export default async function Page() {
    const session = await auth();

    const bookings = await getGuestBookings(session.user.guestId);

    return (
        <div>
            <h2>
                Your reservations
            </h2>

            <div className="mt-4">
                {bookings.length === 0 ? (
                    <p className="text-lg">
                        You have no reservations yet. Check out our{" "}
                        <Link className="underline text-accent-500" href="/cabins">
                            luxury cabins &rarr;
                        </Link>
                    </p>
                ) : (
                    <ReservationList bookings={bookings} />
                )}
            </div>
        </div>
    );
}