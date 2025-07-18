import { signOutAction } from "@/app/_lib/actions"
import { LogOut } from "lucide-react"

function SignOutButton() {
    return (
        <form action={signOutAction}>
            <button className="cursor-pointer hover:text-gray-500 flex items-center gap-2">
                Sign out <LogOut size={16} />
            </button>
        </form>
    )
}

export default SignOutButton
