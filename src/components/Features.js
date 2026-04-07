import Container from "@/components/Container"

export default function Features() {
    return (
        <section className="py-16">
            <Container>
                <h3 className="text-2xl font-bold">
                    Why choose us
                </h3>

                <p className="mt-4">
                    Simple, fast and reliable service
                </p>

                <div className="grid gap-6 mt-10 md:grid-cols-3">
                    <div className="p-6 border rounded">
                        <h4 className="font-semibold">Fast approval</h4>
                        <p className="mt-2 text-sm">Quick and easy process.</p>
                    </div>

                    <div className="p-6 border rounded">
                        <h4 className="font-semibold">Private</h4>
                        <p className="mt-2 text-sm">Your information stays secure</p>
                    </div>

                    <div className="p-6 border rounden">
                        <h4 className="font-semibold">Online access</h4>
                        <p className="mt-2 text-sm">Everything from your home</p>
                    </div>

                </div>
            </Container>
        </section>
    )
}
