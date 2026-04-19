import Container from "@/components/Container"
const features = [
    {
        title: "Fast approval",
        description: "Quick and easy process",
    },
    {
        title: "Private",
        description: "Your information stays secure"
    },
    {
        title: "Online access",
        description: "Everything from your home"
    },
]


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
                    {features.map((feature, index) => {
                        return (
                            <div key={index} className="p-6 border rounded">
                                <h4 className="font-semibold">{feature.title}</h4>
                                <p className="mt-2 text-sm">{feature.description}</p>
                            </div>
                        )
                    })}

                </div>
            </Container>
        </section>
    )
}
