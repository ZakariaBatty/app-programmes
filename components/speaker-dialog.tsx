"use client"

import { DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import type { Speaker } from "@/types/schedule"

export function SpeakerDialog({ speaker }: { speaker: Speaker }) {
  return (
    <DialogContent className="max-w-4xl max-h-[90vh]">
      <DialogHeader>
        <DialogTitle>{speaker.name}</DialogTitle>
      </DialogHeader>
      <div className="flex-1 overflow-hidden">
        <iframe
          src={speaker.pdfUrl}
          className="w-full h-[calc(90vh-100px)]"
          title={`PDF presentation for ${speaker.name}`}
        />
      </div>
    </DialogContent>
  )
}

