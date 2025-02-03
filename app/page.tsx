"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ScheduleItem } from "@/components/schedule-item"
import type { ConferenceData } from "@/types/schedule"

const conferenceData: ConferenceData = {
  sideEvent: [
    {
      "date": "05 Février 2025",
      "items": [
        {
          "time": "10h00 - 14h00",
          "type": "NETWORKING",
          "title": "SESSION NETWORKING / B TO B :",
          "description": "Mise en réseau des acteurs et synergies sectorielles et commerciales"
        },
        {
          "time": "14h00 - 16h00",
          "type": "MASTER_CLASS",
          "title": "MASTER CLASS:",
          "description": "Elevage de la crevette"
        },
        {
          "time": "16h00 - 17h00",
          "type": "SIDE_EVENT",
          "title": "SIDE EVENT :",
          "description": "Aquaculture et Finance Bleue : Catalyseurs du Développement des chaines de valeurs",
          "speakers": [
            {
              "name": "Pierre FAILLER",
              "organization": "BM",
              "pdfUrl": "/pdfs/pierre-failler.pdf",
              "title": "Finance Bleue : Quelles nouvelles voies pour le financement des activités de l'aquaculture"
            },
            {
              "name": "Mourabit Said",
              "organization": "BID",
              "pdfUrl": "/pdfs/mourabit-said.pdf",
              "title": "La chaine de valeur aquacole, une contribution à la sécurité alimentaire"
            },
            {
              "name": "Siham FELLAHI",
              "organization": "MEF",
              "pdfUrl": "/pdfs/siham-fellahi.pdf",
              "title": "Les clusters côtiers, une voie de développement de l'économie Bleue et de l'aquaculture"
            }
          ]
        },
        {
          "time": "17h00 - 19h00",
          "type": "MASTER_CLASS",
          "title": "MASTER CLASS:",
          "description": "Couvrir les risques opérationnels des fermes aquacoles"
        }
      ]
    },
    {
      "date": "06 Février 2025",
      "items": [
        {
          "time": "10h00 - 16h00",
          "type": "NETWORKING",
          "title": "CONFÉRENCE AQUACOLE : SESSION NETWORKING / B TO B",
          "description": "Mise en réseau des acteurs et synergies sectorielles et commerciales"
        },
        {
          "time": "16h00 - 18h00",
          "type": "SIDE_EVENT",
          "title": "SIDE EVENT :",
          "description": "FAO – ANDA : Les initiatives conjointes en faveur des professionnels des filières aquacoles"
        }
      ]
    },
    {
      "date": "07 Février 2025",
      "items": [
        {
          "time": "10h00 - 11h00",
          "type": "SHOWCASE",
          "title": "SHOWCASE :",
          "description": "L'expérience norvégienne en aquaculture, leçons et opportunités pour les producteurs marocains"
        },
        {
          "time": "11h00 - 13h00",
          "type": "MASTER_CLASS",
          "title": "MASTER CLASS:",
          "description": "Elevage de la crevette"
        },
        {
          "time": "13h00 - 15h00",
          "type": "SHOWCASE",
          "title": "SHOWCASE :",
          "description": "Aquaculture et innovation, les nouvelles voies de l'aquaculture",
          "speakers": [
            {
              "name": "Nir Tzohari",
              "organization": "AQUAMANAGER",
              "title": "L’intelligence artificielle en aquaculture 'Handson session'",
              "pdfUrl": "/pdfs/mourabit-said.pdf",
            },
            {
              "name": "M. Ralf Klis",
              "organization": "UMITRON",
              "title": "Osmose inverse des eaux saumâtres (BWRO) et solutions intégrées de gestion de la saumure",
              "pdfUrl": "/pdfs/mourabit-said.pdf",
            },
            {
              "name": "SETH COAN",
              "organization": "BARAKA INDUSTRIE",
              "title": "",
              "pdfUrl": "/pdfs/mourabit-said.pdf",
            }
          ]
        },
        {
          "time": "15h00 - 16h00",
          "type": "MASTER_CLASS",
          "title": "MASTER CLASS:",
          "description": "Techniques de la plongée sous marine pour les opérations aquacoles, Université IBN ZOHR d’Agadir"
        },
        {
          "time": "17h00 - 18h00",
          "type": "ROUNDTABLE",
          "title": "ROUNDTABLE :",
          "description": "Emergence de l'aquaculture en Afrique, quelles opportunités ?"
        }
      ]
    },
    {
      "date": "08 Février 2025",
      "items": [
        {
          "time": "10h00 - 12h00",
          "type": "MASTER_CLASS",
          "title": "MASTER CLASS:",
          "description": "Elevage de la crevette"
        },
        {
          "time": "13h00 - 18h00",
          "type": "NETWORKING",
          "title": "SESSION NETWORKING / B TO B :",
          "description": "Mise en réseau des acteurs et synergies sectorielles et commerciales"
        }
      ]
    }
  ],
  conference: [
    // ... Conference schedule data
  ],
}

export default function Home() {
  const [activeView, setActiveView] = useState<"none" | "conference" | "sideEvent">("none")

  return (
    <main
      className="h-[3840px] w-[2160px] bg-cover bg-center relative overflow-hidden"
      style={{
        backgroundImage: `url('/bg-home.jpg')`,
      }}
    >
      <div className="absolute inset-0 bg-blue-900/70" />
      <div className="relative z-10 flex flex-col items-center h-full">
        {/* Header */}
        <header className="w-full text-center pt-16">
          <Image src="/logo-ANDA.svg" alt="ANDA Logo" width={400} height={146} className="mx-auto mb-8" />
        </header>

        {/* Main Content - Centered */}
        <div className="flex-1 flex items-center justify-center w-full px-16">
          {activeView === "none" ? (
            <div className="flex flex-col items-center gap-16">
              <button
                className="w-[800px] h-[150px] transition-transform hover:scale-105"
                onClick={() => setActiveView("sideEvent")}
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Botton-01-pbbMG0CZsVusxABbi6Vx36cDVzebar.png"
                  alt="Programme Side Event"
                  width={800}
                  height={150}
                  className="w-full h-full"
                />
              </button>
              <button
                className="w-[800px] h-[150px] transition-transform hover:scale-105"
                onClick={() => setActiveView("conference")}
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Botton-02-y6Y4GIN7yuDsmXFcSKcFkAMwEDfRqV.png"
                  alt="Programme Conference"
                  width={800}
                  height={150}
                  className="w-full h-full"
                />
              </button>
            </div>
          ) : (
            <div className="bg-white/90 rounded-lg p-8 w-full max-w-[1800px] mx-auto max-h-[2800px] overflow-y-auto"
              style={{
                backgroundImage: `url('/bg.jpg')`,
              }}
            >
              <Button variant="outline" className="mb-4 text-2xl" onClick={() => setActiveView("none")}>
                ← Retour
              </Button>
              {(activeView === "sideEvent" ? conferenceData.sideEvent : conferenceData.conference).map((day, index) => (
                <div key={index} className="mb-8">
                  <h2 className="text-[#004258] text-3xl font-bold mb-4">{day.date}</h2>
                  <div className="space-y-0">
                    {day.items.map((item, itemIndex) => (
                      <ScheduleItem key={itemIndex} item={item} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Space for footer if needed */}
        <div className="h-16"></div>

      </div>
    </main>
  )
}


