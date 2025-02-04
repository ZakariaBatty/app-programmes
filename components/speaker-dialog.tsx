"use client"

import { DialogContent } from "@/components/ui/dialog"
import type { Speaker } from "@/types/schedule"
import { DialogTitle } from "@radix-ui/react-dialog"

export function SpeakerDialog({ speaker }: { speaker: Speaker }) {

  return (
    <DialogContent className="max-w-[90vw] max-h-[90vh] w-[2000px] h-[3000px]">
      <div className="flex flex-col h-full">
        <DialogTitle />
        <div className="flex-1 overflow-hidden">
          <iframe
            src={speaker.pdfUrl}
            className="w-full h-full"
            title={`PDF presentation for ${speaker.name}`}
          />
        </div>
      </div>
    </DialogContent>

    // <DialogContent className="max-w-4xl max-h-[80vh]">
    //   <DialogHeader>
    //     <DialogTitle>PDF Viewer</DialogTitle>
    //   </DialogHeader>
    //   <iframe src={`${speaker.pdfUrl}#toolbar=0`} className="w-full h-[65vh]" title={`PDF presentation for ${speaker.name}`} />
    // </DialogContent>
    // </Dialog>
  )
}

