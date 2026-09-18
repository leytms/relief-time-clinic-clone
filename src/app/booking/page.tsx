import Container from "@/components/Container"
type Specialty = {
  id: string;
  title: string;
}
const specialties: Specialty[] = [
  {
    id: "cardiology",
    title: "Cardiology",
  },
  {
    id: "dermatology",
    title: "Dermatology",
  },
  {
    id: "orthopedics",
    title: "Orthopedics",
  },
]
export default function BookingPage() {
  return (
    <main className="py-16">
      <Container>
        <h1 className="text-3xl font-bold">
          Book your appointment
        </h1>

        <p className="mt-4 text-gray-600">
          Choose a doctor and an available time slot.
        </p>
      </Container>
    </main>
  )
}