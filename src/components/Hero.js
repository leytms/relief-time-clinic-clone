"use client"

import { useState } from "react"
import Container from "@/components/Container"

const appointmentOptions = [ 
  { 
    id: "book-online",
    label: "Book online",
    description: "Choose a doctor and an available time slot",
    actionLabel: "Continue to booking",
  },
  { 
    id: "call-clinic",
    label: "Call clinic",
    description: "Call the clinic during working hours",
    actionLabel: "Show phone number",
  },
]

export default function Hero() {
  const [isInfoOpen, setIsInfoOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState("")
  const sAO = appointmentOptions.find((option) => {
    return option.id === selectedOption
  })

  function handleToggleInfo() {
    if (isInfoOpen) {
      setSelectedOption("")
    }
    setIsInfoOpen((prev) => !prev)
  }

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
          onClick={handleToggleInfo}          
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
              <div className="py-4">

                <div className="mt-4 flex gap-3">     
                  {appointmentOptions.map((option) => {
                    return (
                      <button 
                        key={option.id}
                        onClick={() => setSelectedOption(option.id)}
                        className={`rounded px-4 py-2 transition ${
                          selectedOption === option.id
                           ? "bg-blue-600 text white"
                           : "border bg-red hover:shadow-md"
                      }`}>
                        {option.label}
                      </button>

                    )
                  })}         
                  
                 
                </div>
                {selectedOption && (
                  <p className="py-4">
                    You selected: {selectedOption}
                  </p>
                )}

                
                {sAO && (
                  <div className="mt-10">
                    <p className="text-sm">
                      {sAO.description}
                    </p>
                  
                    <button className="border rounded mt-4 px-4 py-2">
                      {sAO.actionLabel}
                    </button>
                  </div>
                )}
              
              </div>            
            </div>
          )}

      </Container>
    </section>
  )
}