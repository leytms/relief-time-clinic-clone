"use client"

import { useState } from "react"
import Container from "@/components/Container"
type Specialty = {
  id: string;
  title: string;
}
type Doctor = {
  id: string;
  name: string;
  specialty: string;
}

const doctors: Doctor[] = [
  {
    id: "dr-john-doe",
    name: "Dr. John Doe",
    specialty: "Cardiology",
  },
  {
    id: "dr-jane-doe",
    title: "Dr. Jane Doe",
    specialty: "Dermatology",
  },
  { 
    id: "dr-jim-beam",
    name: "Dr. Jim Beam",
    specialty: "Orthopedics",
  },
]
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
  const [selectedSpecialty, setSelectedSpecialty] = useState("")
  const selectedSpecialtyObject = specialties.find((specialty) => {
    return specialty.id === selectedSpecialty
  })
  return (
    <main className="py-16">
      <Container>
        <h1 className="text-3xl font-bold">
          Book your appointment
        </h1>

        <p className="mt-4 text-gray-600">
          Choose a doctor and an available time slot.
        </p>
        {specialties.map((specialty) =>{
          return (
            <button
            key={specialty.id}
            className="px-4 py-2 text-gray-600"
            onClick={() => setSelectedSpecialty(specialty.id)}
            >
              {specialty.title}
            </button>
          )
        })}
        {selectedSpecialtyObject && (
          <p className="mt-4 text-gray-600">
            You selected: {selectedSpecialtyObject.title}
          </p>
        )}
      </Container>
    </main>
  )
}