import { Equipments } from "./equipments";
import { Foods } from "./foods";
import { Guest } from "./guest";

export class Event {
    eventId!: number;
    eventName?: string;
    eventOrganizerName?: string;
    eventVenue?: string;
    eventDate?: string;
    eventOrganizerPhone?: string;
    eventOrganizerAddress?: string;
    guestDetails?: Guest[];
    foodDetails?: Foods[];
    equipmentDetails?: Equipments[]; 
}
