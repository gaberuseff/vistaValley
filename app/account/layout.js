import AccountNavigation from "@/app/_components/Account/AccountNavigation"

function Layout({ children }) {
    return (
        <div className="max-w-4xl mx-auto">
            <div>
                <AccountNavigation />
            </div>

            <div className="mt-8">
                {children}
            </div>
        </div>
    )
}

export default Layout
