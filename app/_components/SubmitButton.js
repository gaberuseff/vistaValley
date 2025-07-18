'use client'

import { useFormStatus } from "react-dom";

function SubmitButton({ children, pendingText }) {
    const { pending } = useFormStatus();

    return (
        <button className="btn-primary" disabled={pending}>
            {pending ? pendingText : children}
        </button>
    )
}

export default SubmitButton