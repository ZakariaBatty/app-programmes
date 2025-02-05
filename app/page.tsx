"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ScheduleItem } from "@/components/schedule-item"
import type { ConferenceData } from "@/types/schedule"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { DialogTitle } from "@radix-ui/react-dialog"

const conferenceData: ConferenceData = {
  "sideEvent": [
    {
      "date": "05 Février 2025",
      "items": [
        {
          "time": "14h00 - 16h00",
          "type": "MASTER_CLASS",
          "title": "MASTER CLASS:",
          "description": "Elevage de la crevette",
          "speakers": [
            {
              "name": "Lorenzo M. Juarez",
              "pdfUrl": "/programmes/speakers/Lorenzo-m-juarez.jpg",
              "organization": "Banque mondiale"
            }
          ]
        },
        {
          "time": "16h00 - 17h00",
          "type": "SIDE_EVENT",
          "title": "SIDE EVENT :",
          "description": "Aquaculture et Finance Bleue : Catalyseurs du Développement des chaines de valeurs",
          "speakers": [
            {
              "name": "Pierre FAILLER",
              "pdfUrl": "/programmes/speakers/Pierre-FAILLER.jpg",
              "organization": "Banque mondiale",
              "title": "Quelles nouvelles voies pour le financement des activités de l'aquaculture"
            },
            {
              "name": "Mourabit Said",
              "pdfUrl": "/programmes/speakers/Mourabit-Said.jpg",
              "organization": "Banque Islamique de Développement",
              "title": "La chaine de valeur aquacole, une contribution à la sécurité alimentaire"
            },
            {
              "name": "Siham FELLAHI",
              "pdfUrl": "",
              "organization": "Ministère de l'Économie et des Finances",
              "title": "Les clusters côtiers, une voie de développement de l'économie Bleue et de l'aquaculture"
            }
          ]
        },
        {
          "time": "17h00 - 18h00",
          "type": "MASTER_CLASS",
          "title": "MASTER CLASS:",
          "description": "Couvrir les risques opérationnels des fermes aquacoles",
          "speakers": [
            {
              "name": "Mohamed TAHIRI",
              "pdfUrl": "/programmes/speakers/Mohamed-tAHIRI.jpg",
              "organization": "Assurances Atlantique Sud"
            }
          ]
        }
      ]
    },
    {
      "date": "06 Février 2025",
      "items": [
        {
          "time": "10h30 - 15h00",
          "type": "NETWORKING",
          "title": "CONFÉRENCE DU SALON HALIEUTIS",
          "description": "« L’Aquaculture de Demain : Synergie entre Recherche, Innovation et Développement Durable »"
        },
        {
          "time": "15h30 - 17h30",
          "type": "SIDE_EVENT",
          "title": "SIDE EVENT : FAO – ANDA – ANEF",
          "description": "La coopération au service de l’innovation et de la recherche dans le secteur de la pêche et de l’aquaculture"
        }
      ]
    },
    {
      "date": "07 Février 2025",
      "items": [
        {
          "time": "10h00 - 11h00",
          "type": "MASTER_CLASS",
          "title": "MASTER CLASS:",
          "description": "Techniques de la plongée sous-marine pour les opérations aquacoles",
          "speakers": [
            {
              "name": "Taha Mohamed",
              "pdfUrl": "/programmes/speakers/Taha-Mohamed.jpg",
              "organization": "Université Ibn Zohr-Agadir"
            }
          ]
        },
        {
          "time": "11h00 - 13h00",
          "type": "MASTER_CLASS",
          "title": "MASTER CLASS:",
          "description": "Elevage de la crevette",
          "speakers": [
            {
              "name": "Lorenzo M. Juarez",
              "pdfUrl": "/programmes/speakers/Lorenzo-m-juarez.jpg",
              "organization": "Banque mondiale"
            }
          ]
        },
        {
          "time": "13h00 - 15h00",
          "type": "SHOWCASE",
          "title": "SHOWCASE :",
          "description": "Aquaculture et innovation, les nouvelles voies pour l’aquaculture",
          "speakers": [
            {
              "name": "Nir Tzohari",
              "pdfUrl": "/programmes/speakers/Nir-Tzohari.jpg",
              "organization": "Aquamanager",
              "title": "L’intelligence artificielle au service de l’aquaculture"
            },
            {
              "name": "Ralf Klis",
              "pdfUrl": "/programmes/speakers/Ralf-Klis.jpg",
              "organization": "Tonalli Moana",
              "title": "L’intelligence artificielle en aquaculture ‘Hands-on session’"
            },
            {
              "name": "Seth Coan",
              "pdfUrl": "/programmes/speakers/Seth-Coan.jpg",
              "organization": "Baraka Industrie",
              "title": "Osmose inverse des eaux saumâtres (BWRO) et solutions intégrées de gestion de la saumure"
            }
          ]
        },
        {
          "time": "15h00 - 16h00",
          "type": "SHOWCASE",
          "title": "SHOWCASE :",
          "description": "Des fjords à l’Atlantique : L’application de l’expertise norvégienne en matière d’aquaculture dans les eaux marocaines",
          "speakers": [
            {
              "name": "H.E. Mr. Larsen Sjur",
              "pdfUrl": "",
              "organization": "Ambassadeur de la Norvège au Maroc"
            },
            {
              "name": "Morchid Abdelkadouss",
              "pdfUrl": "",
              "organization": "ANDA"
            },
            {
              "name": "Mr. Jan-Helge Dahl",
              "pdfUrl": "",
              "organization": "Alta Mar"
            }
          ]
        },
        {
          "time": "16h30 - 17h30",
          "type": "ROUNDTABLE",
          "title": "ROUNDTABLE :",
          "description": "Emergence de l’aquaculture en Afrique, quelles opportunités?"
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
          "description": "Elevage de la crevette",
          "speakers": [
            {
              "name": "Lorenzo M. Juarez",
              "pdfUrl": "/programmes/speakers/LorenzoMJuarez.jpg",
              "organization": "Banque mondiale"
            }
          ]
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
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  return (
    <main
      className="min-h-screen bg-cover bg-center  relative overflow-hidden"
      style={{
        backgroundImage: `url('/programmes/bg-home.jpg')`,
      }}
    >
      <div className="absolute inset-0 bg-blue-900/70" />
      <div className="relative z-10 flex flex-col items-center h-full">
        {/* Header */}
        <header className="w-full text-center pt-16">
          <Image src="/programmes/logo-ANDA.svg" alt="ANDA Logo" width={400} height={146} className="mx-auto mb-8" />
        </header>

        {/* Main Content - Centered */}
        <div className="flex-1 mt-20 flex items-center justify-center w-full px-16">
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
                onClick={() => {
                  setActiveView("conference")
                  setIsDialogOpen(true)
                }}
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
          ) : activeView === "sideEvent" ? (
            <div
              className="bg-white/90 rounded-lg p-8 w-full max-w-[1800px] mx-auto  h-full "
              style={{
                backgroundImage: `url('/programmes/bg.jpg')`,
              }}
            >
              <div className="flex justify-between">
                <div></div>
                <Button variant="outline" className="mb-4 text-2xl bg-[#0e3d49] text-white p-4" onClick={() => setActiveView("none")}>
                  ← Retour
                </Button>
              </div>

              <div className="text-center py-8 px-4">
                <h1 className="text-3xl md:text-4xl font-bold text-[#002A38] uppercase">
                  Side Event
                </h1>
                <p className="text-xl md:text-2xl text-[#C4A879] font-medium mt-2">
                  Agadir Du 05 au 08 Février 2025
                </p>
                <p className="text-lg md:text-xl font-semibold text-[#002A38] mt-1">
                  - Pavillon Aquacole Hall E 63 -
                </p>
              </div>

              {conferenceData.sideEvent.map((day, index) => (
                <div key={index} className="mb-8">
                  <h2 className="text-white bg-[#0e3d49] p-4 text-3xl font-bold mb-4 text-center">{day.date}</h2>
                  <div className="space-y-0">
                    {day.items.map((item, itemIndex) => (
                      <ScheduleItem key={itemIndex} item={item} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : null}

          {/* Conference PDF Dialog */}
          <Dialog
            open={isDialogOpen}
            onOpenChange={(open) => {
              setIsDialogOpen(open)
              if (!open) setActiveView("none")
            }}
          >
            <DialogContent className="w-auto h-auto max-w-full max-h-full">
              <div className="relative">
                <DialogTitle />
                {/* <div className="flex justify-between">
                  <div></div> */}
                <Button
                  variant="outline"
                  className="mb-4 text-2xl self-start bg-[#0e3d49] text-white p-4"
                  onClick={() => {
                    setIsDialogOpen(false)
                    setActiveView("none")
                  }}
                >
                  ← Retour
                </Button>
                {/* </div> */}
                <Image
                  src="/programmes/confedence.jpg"
                  alt="test"
                  width={4000}
                  height={3000}
                  className="w-auto h-auto max-w-full max-h-[90vh] object-contain"
                />
              </div>
            </DialogContent>
          </Dialog>
        </div>

      </div>
    </main>
  )
}


