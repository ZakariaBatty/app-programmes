export interface Speaker {
   name: string;
   organization: string;
   pdfUrl: string;
   title?: string;
}

export interface ScheduleItem {
   time: string;
   type:
      | 'NETWORKING'
      | 'MASTER_CLASS'
      | 'SIDE_EVENT'
      | 'SHOWCASE'
      | 'ROUNDTABLE';
   title: string;
   description?: string;
   show?: boolean;
   speakers?: Speaker[];
}

export interface DaySchedule {
   date: string;
   items: ScheduleItem[]; // Changed from 'schedule' to 'items'
}

export interface ConferenceData {
   sideEvent: DaySchedule[];
   conference: DaySchedule[];
}
