import Container from "@/components/Container"
import FeatureCards from "@/components/FeatureCards"
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
                    {features.map((feature, index) => (
                        <FeatureCards 
                        key={index}
                        title={feature.title}
                        description={feature.description}
                        />                      
                    ))}

                </div>
            </Container>
        </section>
    )
}
