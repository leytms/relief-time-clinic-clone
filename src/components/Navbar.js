import Container from "@/components/Container"

export default function Navbar() {
    return (
        <nav className="border-b">
            <Container>
                <div className="flex justify-between items-center">
                    <h1 className="font-bold">Relief</h1>

                    <div className="flex gap-4">
                        <button>Login</button>
                        <button className="px-3 py-1 bg-black text-white rounded">
                            SignUp
                        </button>
                    </div>
                </div>
            </Container>
        </nav>
    )
}
