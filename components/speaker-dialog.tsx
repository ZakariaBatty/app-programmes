"use client"

import { DialogContent } from "@/components/ui/dialog"
import type { Speaker } from "@/types/schedule"
import { DialogTitle } from "@radix-ui/react-dialog"
import Image from "next/image"

export function SpeakerDialog({ speaker }: { speaker: Speaker }) {

  return (

    <DialogContent className="w-auto h-auto max-w-full max-h-full">
      <div className="relative">
        <DialogTitle />
        <Image
          src={speaker.pdfUrl}
          alt="test"
          width={4000}
          height={3000}
          className="w-auto h-auto max-w-full max-h-[90vh] object-contain"
        />
      </div>
    </DialogContent>


    // <DialogContent className="max-w-[90vw] max-h-[90vh] w-[2000px] h-[3000px]">
    //   <div className=" h-full">
    //     <DialogTitle />
    //     {/* <div className="flex-1 overflow-hidden"> */}
    //     <Image src={speaker.pdfUrl} alt="test" width={4000} height={100} className="w-full h-full" />
    //   </div>
    //   {/* <iframe
    //         src={speaker.pdfUrl}
    //         className="w-full h-full"
    //         title={`PDF presentation for ${speaker.name}`}
    //       /> */}
    //   {/* </div> */}
    // </DialogContent>

    // <DialogContent className="max-w-4xl max-h-[80vh]">
    //   <DialogHeader>
    //     <DialogTitle>PDF Viewer</DialogTitle>
    //   </DialogHeader>
    //   <iframe src={`${speaker.pdfUrl}#toolbar=0`} className="w-full h-[65vh]" title={`PDF presentation for ${speaker.name}`} />
    // </DialogContent>
    // </Dialog>
  )
}

