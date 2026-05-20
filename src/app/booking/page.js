import Container from "@/components/Container"

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