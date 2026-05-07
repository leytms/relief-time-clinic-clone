"use client"

import { useState } from "react"
import Container from "@/components/Container"

export default function Hero() {
  const [isStarted, setIsStarted] = useState(false)
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
          onClick={() => setIsStarted(true)}
          className="px-4 py-4 mt-6 rounded">
            Get Started
          </button>

          {isStarted && (
            <p className="mt-10 text-sm">
              Great! You can now continue with your online consultation
            </p>
          )}

      </Container>
    </section>
  )
}