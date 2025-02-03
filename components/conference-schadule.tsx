import type { DaySchedule } from "@/types/schedule"
import { ScheduleItem } from "./schedule-item"

export function ConferenceSchedule({ days }: { days: DaySchedule[] }) {
   return (
      <div className="max-w-3xl mx-auto bg-white">
         <div className="p-8 flex justify-center border-b">
            <img
               src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-YkidEIagGHQK7IgEONCeJMwm3FAcKd.png"
               alt="ANDA Logo"
               className="h-20 object-contain"
            />
         </div>

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
            {days.map((day, index) => (
               <div key={index} className="mb-8">
                  <h2 className="text-[#004258] text-xl font-bold mb-4">{day.date}</h2>
                  <div className="space-y-0">
                     {day.items.map(
                        (
                           item,
                           itemIndex, // Changed from 'schedule' to 'items'
                        ) => (
                           <ScheduleItem key={itemIndex} item={item} />
                        ),
                     )}
                  </div>
               </div>
            ))}
         </div>
      </div>
   )
}

