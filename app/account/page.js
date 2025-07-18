import { auth } from "../_lib/auth";

export const metadata = {
    title: 'Account',
    description: 'Manage your Vista-Valley account. View your bookings, update your personal information, and customize your preferences for a seamless and personalized stay.'
}

async function page() {
    const session = await auth();
    const firstName = session?.user?.name.split(' ')[0];

    console.log(session);

    return (
        <h1>
            Welcome, {firstName}
        </h1>
    )
}

export default page
