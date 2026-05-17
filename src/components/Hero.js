"use client"

import { useState } from "react"
import Container from "@/components/Container"

const appointmentOptions = [ 
  { label: "Book online"},
  { label: "Call clinic"}
]

export default function Hero() {
  const [isInfoOpen, setIsInfoOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState("")

  return (
    <section className="py-16">
      <Container>
         
          <h2 className="text-4xl font-bold">
            Get your consultation online
          </h2>

          <p className="mt-4">
            Fast, simple & secure
          </p>

          <button 
          onClick={() => setIsInfoOpen((prev) => !prev)}
          className={`px-4 py-4 mt-6 rounded trasition ${
            isInfoOpen ? "bg-red-500 text-black" : "bg-blue-500 text-black"}`}
          >
            {isInfoOpen ? "Show less" : "Get started"}
          </button>

          {isInfoOpen && (
            <div className="mt-6 rounded border p-4 text-sm">
              <p className="font-medium">
                Choose how you want to continue 
              </p>  

              <div className="mt-4 flex gap-3">
                <button 
                onClick={() => setSelectedOption("Book online")}
                className={`rounded px-4 py-2 transition ${
                  selectedOption === "Book online"
                  ? "bg-blue-600 text white"
                  : "border bg-red hover:shadow-md"
                }`}>
                  Book online
                </button>
                <button
                onClick={() => setSelectedOption("Call clinic")}
                className={`rounded px-4 py-2 transition ${
                  selectedOption === "Call clinic"
                  ? "bg-blue-600 text-white"
                  : "border bg-red hover:shadow-md"
                }`}
                >
                   Call clinic
                </button>

                {selectedOption && (
                  <p className="py-4">
                    You selected: {selectedOption}
                  </p>
                )}
              
              </div>            
            </div>
          )}

      </Container>
    </section>
  )
}