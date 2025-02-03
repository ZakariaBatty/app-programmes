export default function ConferenceSchedule() {
  return (
    <div className="max-w-3xl mx-auto bg-white">
      {/* Logo Section */}
      <div className="p-8 flex justify-center border-b">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-YkidEIagGHQK7IgEONCeJMwm3FAcKd.png"
          alt="ANDA Logo"
          className="h-20 object-contain"
        />
      </div>

      {/* Schedule Content with diagonal pattern background */}
      <div
        className="min-h-screen p-8"
        style={{
          background: `
            linear-gradient(135deg, 
              rgba(255,255,255,0.9) 0%,
              rgba(255,255,255,0.9) 100%
            ),
            repeating-linear-gradient(
              45deg,
              #f0f9ff 0px,
              #f0f9ff 2px,
              transparent 2px,
              transparent 8px
            )
          `,
        }}
      >
        {/* February 5 */}
        <div className="mb-8">
          <h2 className="text-[#004258] text-xl font-bold mb-4">05 Février 2025</h2>

          <div className="space-y-0">
            <div className="border-b border-[#d4a373] py-4">
              <div className="flex gap-8">
                <span className="text-gray-800 w-32 flex-shrink-0 font-medium">10h00 - 14h00</span>
                <div>
                  <h3 className="text-[#d4a373] font-bold">SESSION NETWORKING / B TO B :</h3>
                  <p className="text-gray-800 mt-1">
                    Mise en réseau des acteurs et synergies sectorielles et commerciales
                  </p>
                </div>
              </div>
            </div>

            <div className="border-b border-[#d4a373] py-4">
              <div className="flex gap-8">
                <span className="text-gray-800 w-32 flex-shrink-0 font-medium">14h00 - 16h00</span>
                <div>
                  <h3 className="text-[#22d3ee] font-bold">MASTER CLASS:</h3>
                  <p className="text-gray-800 mt-1">Elevage de la crevette</p>
                </div>
              </div>
            </div>

            <div className="border-b border-[#d4a373] py-4">
              <div className="flex gap-8">
                <span className="text-gray-800 w-32 flex-shrink-0 font-medium">16h00 - 17h00</span>
                <div>
                  <h3 className="text-[#004258] font-bold">SIDE EVENT :</h3>
                  <p className="text-gray-800 font-bold mt-1">
                    Aquaculture et Finance Bleue : Catalyseurs du Développement des chaines de valeurs
                  </p>
                  <ul className="text-gray-800 mt-2 space-y-2">
                    <li>
                      • Finance Bleue : Quelles nouvelles voies pour le financement des activités de l&apos;aquaculture,{" "}
                      <span className="text-[#004258]">Pierre FAILLER (BM)</span>
                    </li>
                    <li>
                      • La chaine de valeur de valeur aquacole, une contribution à la sécurité alimentaire;{" "}
                      <span className="text-[#004258]">Mourabit Said (BID)</span>
                    </li>
                    <li>
                      • Les clusters côtiers, une voie de développement de l&apos;économie Bleue et de l&apos;aquaculture;{" "}
                      <span className="text-[#004258]">Siham FELLAHI (MEF)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="border-b border-[#d4a373] py-4">
              <div className="flex gap-8">
                <span className="text-gray-800 w-32 flex-shrink-0 font-medium">17h00 - 19h00</span>
                <div>
                  <h3 className="text-[#22d3ee] font-bold">MASTER CLASS :</h3>
                  <p className="text-gray-800 mt-1">Couvrir les risques opérationnels des fermes aquacoles</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* February 6 */}
        <div className="mb-8">
          <h2 className="text-[#004258] text-xl font-bold mb-4">06 Février 2025</h2>

          <div className="space-y-0">
            <div className="border-b border-[#d4a373] py-4">
              <div className="flex gap-8">
                <span className="text-gray-800 w-32 flex-shrink-0 font-medium">10h00 - 16h00</span>
                <div>
                  <h3 className="text-[#d4a373] font-bold">CONFÉRENCE AQUACOLE : SESSION NETWORKING / B TO B</h3>
                  <p className="text-gray-800 mt-1">
                    Mise en réseau des acteurs et synergies sectorielles et commerciales
                  </p>
                </div>
              </div>
            </div>

            <div className="border-b border-[#d4a373] py-4">
              <div className="flex gap-8">
                <span className="text-gray-800 w-32 flex-shrink-0 font-medium">16h00 - 18h00</span>
                <div>
                  <h3 className="text-[#004258] font-bold">SIDE EVENT :</h3>
                  <p className="text-gray-800 font-bold mt-1">FAO – ANDA</p>
                  <p className="text-gray-800 mt-1">
                    Les iniatiatives conjointes en faveur des professionnelles des filières aquacoles
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Continue with February 7 and 8 with the same styling pattern... */}
      </div>
    </div>
  )
}

