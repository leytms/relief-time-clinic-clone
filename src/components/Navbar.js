export default function Navbar() {
    return (
        <nav className="border-b">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center p-6">
                    <h1 className="font-bold">Relief</h1>

                    <div className="flex gap-4">
                        <button>Login</button>
                        <button className="px-3 py-1 bg-black text-white rounded">
                            SignUp
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}
