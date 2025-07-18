import Link from "@/app/_components/Link";
import { CheckCircle } from "lucide-react";

function ThankYouPage() {
    return (
        <div className="flex items-center justify-center text-center px-4">
            <div className="p-8 sm:p-12 flex flex-col items-center gap-4 max-w-3xl">
                <div className="flex justify-center mb-6">
                    <CheckCircle className="w-10 h-10 text-green-500" />
                </div>
                <h1>
                    Thank You!
                </h1>

                <p className="p-small max-w-lg">
                    Your reservation has been successfully confirmed. We are looking forward to welcoming you at Vista Valley.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link href="/" className="btn-primary">
                        Back to Homepage
                    </Link>
                    <Link href="/account/reservations" className="btn-secondary">
                        View My Reservations
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ThankYouPage;