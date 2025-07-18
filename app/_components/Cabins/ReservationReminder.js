'use client'

import { format } from 'date-fns';
import { useReservation } from '../../_context/ReservationContext';
import { X } from 'lucide-react';

function ReservationReminder() {
    const { range, resetRange } = useReservation();

    if (!range.from || !range.to) return null;

    return (
        <div className='fixed bottom-6 left-1/2 -translate-x-1/2 py-5 px-8 
            rounded-full bg-gray-800 text-gray-100 text  font-semibold shadow-xl 
            shadow-slate-900 flex gap-8 items-center'>
            <p>
                <span>👋</span> Don&#39;t if forget to reserve your dates <br /> from{' '}
                {format(new Date(range.from), 'MMM dd yyyy')} to{' '}
                {format(new Date(range.to), 'MMM dd yyyy')}
            </p>
            <button className='rounded-full p-1 hover:bg-gray-600 
                transition-all cursor-pointer' onClick={resetRange}>
                <X className='icon-primary' />
            </button>
        </div>
    );
}

export default ReservationReminder;