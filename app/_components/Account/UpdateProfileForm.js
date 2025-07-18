'use client';

import { updateProfile } from "@/app/_lib/actions";
import Image from "next/image";
import { useState } from "react";
import SubmitButton from "../SubmitButton";


function UpdateProfileForm({ children, guest }) {
    const [count, setCount] = useState('');

    const { fullName, email, nationality, nationalId, countryFlag } = guest

    return (
        <form action={updateProfile} className="bg-white dark:bg-gray-900 py-8 px-12 text-lg flex gap-6 flex-col">
            <div className="space-y-2">
                <label>Full name</label>
                <input
                    defaultValue={fullName}
                    name="fullName"
                    className="px-5 py-3 bg-gray-200 dark:bg-gray-700 dark:text-gray-100 w-full shadow-sm 
                            rounded-sm disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-500 
                            dark:disabled:bg-gray-500 dark:disabled:text-gray-400"
                />
            </div>

            <div className="space-y-2">
                <label>Email address</label>
                <input
                    defaultValue={email}
                    name="email"
                    disabled
                    className="px-5 py-3 bg-gray-200 dark:bg-gray-700 dark:text-gray-100 w-full shadow-sm 
                            rounded-sm disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-500 
                            dark:disabled:bg-gray-500 dark:disabled:text-gray-400"
                />
            </div>

            <div className="space-y-2">
                <div className="flex items-center justify-between">
                    <label htmlFor="nationality">Where are you from?</label>
                    <Image
                        width={30}
                        height={15}
                        src={countryFlag}
                        alt="Country flag"
                        className="h-5 rounded-sm"
                    />
                </div>

                {children}
            </div>

            <div className="space-y-2">
                <label htmlFor="nationalId">National ID number</label>
                <input
                    defaultValue={nationalId ?? ''}
                    name="nationalId"
                    className="px-5 py-3 bg-gray-200 dark:bg-gray-700 dark:text-gray-100 w-full shadow-sm rounded-sm"
                />
            </div>

            <div className="flex justify-end items-center gap-6">
                <SubmitButton pendingText="Updating...">Update</SubmitButton>
            </div>
        </form>
    )
}



export default UpdateProfileForm
