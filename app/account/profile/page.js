import SelectCountry from "@/app/_components/Account/SelectCountry";
import UpdateProfileForm from "@/app/_components/Account/UpdateProfileForm";
import { auth } from "@/app/_lib/auth";
import { getGuest } from "@/app/_lib/data-services";

export const metadata = {
    title: "Update  profile",
    description: "Update your guest profile",
};

export default async function Page() {
    const session = await auth();
    const guest = await getGuest(session.user.email);


    return (
        <div>
            <h2 className="font-semibold text-2xl text-accent-400 mb-4">
                Update your profile
            </h2>

            <p className="p-small">
                Providing the following information will make your check-in process
                faster and smoother. See you soon!
            </p>

            <UpdateProfileForm guest={guest}>
                <SelectCountry
                    name="nationality"
                    id="nationality"
                    className="px-5 py-3 bg-gray-200 dark:bg-gray-700 
                        dark:text-gray-100 w-full shadow-sm rounded-sm"
                    defaultCountry={guest.nationality}
                />
            </UpdateProfileForm>
        </div>
    );
}