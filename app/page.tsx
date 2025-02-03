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
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url('/bg-home.jpg')`,
      }}
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <header className="py-8">
          <Image
            src="logo-ANDA.svg"
            alt="ANDA Logo"
            width={600}
            height={73}
            className="mx-auto"
          />
        </header>

        {/* Main Content */}
        {activeView === "none" ? (
          <div className="flex flex-col items-center gap-8 mt-20">
            <Button className="w-full max-w-xl h-auto p-0" onClick={() => setActiveView("sideEvent")}>
              <Image
                src="/Botton-01.png"
                alt="Programme Side Event"
                width={500}
                height={100}
                className="w-full"
              />
            </Button>
            <Button className="w-full max-w-xl h-auto p-0" onClick={() => setActiveView("conference")}>
              <Image
                src="/Botton-02.png"
                alt="Programme Conference"
                width={500}
                height={100}
                className="w-full"
              />
            </Button>
          </div>
        ) : (
          <div className="bg-white/90 rounded-lg p-8 my-8 max-w-4xl mx-auto"
            style={{
              backgroundImage: `url('/bg.jpg')`,
            }}
          >
            <Button variant="outline" className="mb-4" onClick={() => setActiveView("none")}>
              ← Retour
            </Button>
            <header className="py-8">
              <Image
                src="bg.jpg"
                alt="ANDA Logo"
                width={600}
                height={73}
                className="mx-auto"
              />
            </header>
            {(activeView === "sideEvent" ? conferenceData.sideEvent : conferenceData.conference).map((day, index) => (
              <div key={index} className="mb-8">
                <h2 className="text-[#004258] text-xl font-bold mb-4">{day.date}</h2>
                <div className="space-y-0">
                  {day.items.map((item, itemIndex) => (
                    <ScheduleItem key={itemIndex} item={item} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Footer */}
        {/* <footer className="py-8 text-center text-white">
          <div className="text-2xl mb-4 font-bold">
            بالاســــــتــــدامــــــة مـلـتــزمــــون
            <br />
            ENGAGÉS POUR LA DURABILITÉ
          </div>
          <div className="flex justify-center gap-4">
            <a href="#" className="text-white">
              ANDA.aquaculture
            </a>
            <a href="#" className="text-white">
              ANDAaqua
            </a>
          </div>
        </footer> */}
      </div>
    </main>
  )
}

