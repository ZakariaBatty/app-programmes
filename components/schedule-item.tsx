import { SpeakerDialog } from "./speaker-dialog"
import type { ScheduleItem as ScheduleItemType } from "@/types/schedule"
import { Button } from "@/components/ui/button"
import { Dialog, DialogTrigger } from "@/components/ui/dialog"

export function ScheduleItem({ item }: { item: ScheduleItemType }) {
  return (
    <div className="border-b border-[#d4a373] py-4">
      <div className="flex gap-8">
        <span className="text-gray-800 w-32 flex-shrink-0 font-medium">{item.time}</span>
        <div>
          <div className="flex">
            <h3
              className={`${item.type === "MASTER_CLASS"
                ? "text-[#55bcdb]"
                : item.type === "NETWORKING"
                  ? "text-[#be5610]"
                  : item.type === "SHOWCASE"
                    ? "text-[#be5610]"
                    : "text-[#0e3d49]"
                } font-bold`}
            >
              {item.title}
            </h3>
            {item.description && <p className="text-gray-800 font-bold ml-2">{item.description}</p>}
          </div>
          {item.speakers && (
            <ul className="text-gray-800 mt-2 space-y-2">
              {item.speakers.map((speaker, index) => (
                <li key={index}>
                  {/* {speaker.title && <span>{speaker.title}</span>} */}
                  {speaker.pdfUrl ? (
                    <Dialog>
                      <DialogTrigger asChild>
                        {item.show ? (
                          <Button variant="link" className="text-[#004258] font-bold p-0 h-auto pl-2">
                            {speaker.title && <span className="text-gray-800 ">{speaker.title}</span>}
                            {speaker.name} ({speaker.organization})
                          </Button>
                        ) : (
                          <div>
                            {speaker.title && <span className="text-gray-800 ">{speaker.title}</span>}
                          </div>
                        )

                        }
                      </DialogTrigger>
                      <SpeakerDialog speaker={speaker} />
                    </Dialog>
                  ) : (
                    <span>
                      {speaker.name} {speaker.organization && `(${speaker.organization})`}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}

