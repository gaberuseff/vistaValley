'use client';

import { useTransition } from "react";
import SpinnerMini from "../SpinnerMini";

function DeleteReservation({ bookingId, onDelete }) {
    const [isPending, startTransition] = useTransition();

    function handleDelete() {
        if (confirm('Are you sure you want to delete this reservation?'))
            startTransition(() => onDelete(bookingId));
    }

    return (
        <button className='btn-red'
            onClick={handleDelete}>
            {!isPending ? <span className='mt-1'>Delete</span> : <span><SpinnerMini /></span>}
        </button>
    );
}

export default DeleteReservation;