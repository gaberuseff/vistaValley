import { formatCurrency } from "@/app/_utils/helpers";
import { format, formatDistance, isPast, isToday, parseISO } from "date-fns";
import Image from "next/image";
import Link from "../Link";
import DeleteReservation from "./DeleteReservation";

const formatDistanceFromNow = (dateStr) =>
    formatDistance(parseISO(dateStr), new Date(), {
        addSuffix: true,
    }).replace("about ", "");

function ReservationCard({ booking, onDelete }) {

    const {
        id,
        startDate,
        endDate,
        numNights,
        totalPrice,
        numGuests,
        cabins: { name, image },
    } = booking;

    return (
        <div className="flex flex-col md:flex-row border border-gray-800 rounded-md overflow-hidden">
            <div className="relative h-48 md:h-32 w-full md:w-48">
                <Image
                    src={image}
                    alt={`Cabin ${name}`}
                    fill
                    className="object-cover border-r border-gray-800"
                />
            </div>

            <div className="flex-grow px-4 py-3 flex flex-col gap-4 sm:flex-row sm:justify-between">
                <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-gray-200">
                            {numNights} nights in Cabin {name}
                        </h3>
                        {isPast(new Date(startDate)) ? (
                            <span className="bg-yellow-800 text-yellow-200 px-2 py-1 uppercase text-xs font-bold rounded-sm">
                                past
                            </span>
                        ) : (
                            <span className="bg-green-800 text-green-200 px-2 py-1 uppercase text-xs font-bold rounded-sm">
                                upcoming
                            </span>
                        )}
                    </div>

                    <p className="text-sm text-gray-400 mb-2">
                        {format(new Date(startDate), "EEE, MMM dd yyyy")} (
                        {isToday(new Date(startDate))
                            ? "Today"
                            : formatDistanceFromNow(startDate)}
                        ) &mdash; {format(new Date(endDate), "EEE, MMM dd yyyy")}
                    </p>

                    <div className="flex items-baseline space-x-4">
                        <p className="text-lg font-semibold text-gray-300">
                            {formatCurrency(totalPrice)}
                        </p>
                        <span className="text-gray-500">&bull;</span>
                        <p className="text-sm text-gray-300">
                            {numGuests} guest{numGuests > 1 && "s"}
                        </p>
                    </div>
                </div>

                {isPast && <div className="flex justify-end gap-2 sm:flex-col sm:justify-start">
                    <Link
                        href={`/account/reservations/edit/${id}`}
                        className="btn-third"
                    >
                        Edit
                    </Link>
                    <DeleteReservation bookingId={id} onDelete={onDelete} />
                </div>}
            </div>
        </div>
    );
}

export default ReservationCard;