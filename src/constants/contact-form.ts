import type { ContactService } from "../types/contact";

export type ContactServiceCategory = Exclude<ContactService, "general">;
export type ContactFieldType = "text" | "email" | "tel" | "date" | "time" | "datetime" | "number" | "url" | "textarea" | "select" | "multiselect";
export const CONTACT_SERVICE_CATEGORIES: readonly ContactServiceCategory[] = [
  "concierge", "move", "stay", "home-care", "shop",
];

export interface ContactFieldDefinition {
  readonly key: string;
  readonly label: string;
  readonly type: ContactFieldType;
  readonly options?: readonly string[];
  readonly placeholder?: string;
  readonly hint?: string;
  readonly forRequests?: readonly string[];
}

export interface ContactRequestGroup {
  readonly key: string;
  readonly service: ContactServiceCategory;
  readonly label: string;
  readonly requests: readonly string[];
  readonly fields: readonly ContactFieldDefinition[];
}

const field = (
  key: string,
  label: string,
  type: ContactFieldType = "text",
  placeholder?: string,
  options?: readonly string[],
): ContactFieldDefinition => ({ key, label, type, placeholder, options });

export const CONTACT_REQUEST_GROUPS: Readonly<Record<ContactServiceCategory, readonly ContactRequestGroup[]>> = {
  move: [{
    key: "move",
    service: "move",
    label: "Move · Mobility & transportation",
    requests: ["Airport pick-up and drop-off", "Luxury car rental", "Wedding and event transportation", "Intrastate or interstate transportation", "Car hire and related support"],
    fields: [
      field("movePickup", "Pick-up location"), field("moveDropoff", "Drop-off location"),
      field("moveStops", "Additional stops"),
      field("moveDateTime", "Pick-up date and time", "datetime"),
      {
        ...field("moveFlight", "Flight details (airline, flight number, arrival/departure time)"),
        forRequests: ["Airport pick-up and drop-off"],
      },
      field("movePassengers", "Number of passengers", "number"), field("moveLuggage", "Luggage amount and type"),
      field("moveVehicle", "Vehicle type wanted", "select", undefined, ["Saloon", "SUV", "Luxury", "Bus", "Other"]),
      field("moveDuration", "Driver duration or one-way trip"),
      field("moveReturn", "Return trip details (date and time, if needed)"),
      {
        ...field("moveEvent", "Event details (name, venue, number of vehicles)"),
        forRequests: ["Wedding and event transportation"],
      },
      field("moveRider", "Name and phone number of the traveller"),
    ],
  }],
  stay: [{
    key: "stay",
    service: "stay",
    label: "Stay · Accommodation & travel",
    requests: ["Hotel booking", "Apartment booking", "Premium accommodation", "Travel-related reservation", "Local travel arrangement"],
    fields: [
      field("stayType", "Accommodation type", "select", undefined, ["Hotel", "Apartment", "Premium", "Other"]),
      field("stayArea", "City and preferred area"), field("stayCheckIn", "Check-in date", "date"),
      field("stayCheckOut", "Check-out date", "date"), field("stayGuests", "Guests (adults and children)"),
      field("stayRooms", "Number of rooms or bedrooms"), field("stayBudget", "Budget per night", "text"),
      field("stayMustHaves", "Must-haves (power, Wi-Fi, parking, security, kitchen, pool)"),
      {
        ...field("stayReservations", "Other travel reservations and details", "textarea"),
        forRequests: ["Travel-related reservation", "Local travel arrangement"],
      },
      field("stayGuestNames", "Guest names as they should appear on the booking"),
    ],
  }],
  "home-care": [{
    key: "home",
    service: "home-care",
    label: "Home · Home & lifestyle support",
    requests: ["Laundry pick-up and drop-off", "Home-service car wash", "Personal errand", "Shopping and everyday assistance"],
    fields: [
      field("homePickup", "Pick-up address"), field("homeDropoff", "Drop-off address"),
      field("homeLaundry", "Laundry quantity, item types and care instructions", "textarea"),
      field("homeCar", "Car make, model, colour, plate and wash type", "textarea"),
      field("homeErrand", "Errand details, location and contact person", "textarea"),
      field("homeFrequency", "How often?", "select", undefined, ["One-time", "Weekly", "Monthly", "Other"]),
    ],
  }],
  shop: [{
    key: "shop",
    service: "shop",
    label: "Shop · Shopping & procurement",
    requests: ["Personal shopping", "Business purchase", "Bulk shopping", "Event procurement", "Sourcing and procurement", "Delivery coordination"],
    fields: [
      field("shopItems", "Items to buy (brand, size, colour or specifications)", "textarea"),
      field("shopQuantity", "Quantity of each item"), field("shopSpend", "Maximum spend per item or total"),
      field("shopVendor", "Preferred shop, market or vendor"), field("shopUse", "Personal, family, business or event use"),
      field("shopNeededBy", "Date needed", "date"), field("shopDelivery", "Delivery address"),
      field("shopRecipient", "Delivery recipient name and phone"),
      field("shopQuotes", "Get quotations from multiple suppliers?", "select", undefined, ["Yes", "No"]),
      field("shopReferences", "Reference images or links"),
    ],
  }],
  concierge: [
    {
      key: "concierge-property", label: "Concierge · Home & property",
      service: "concierge",
      requests: [
        "Property check", "Repairs and maintenance coordination",
        "Supervision of service providers", "Building supervision (coming soon)",
        "Property-related follow-up", "Titled documents for land", "Land survey",
      ],
      fields: [
        field("propertyAddress", "Property address and type"), field("propertyTask", "What needs to be done"),
        field("propertyAccess", "On-site access contact name and phone"),
        field("propertyProvider", "Existing contractor, agent or provider"),
        field("propertyDocuments", "Documents already available"), field("propertyEvidence", "Evidence required (photos, video, report, receipts)"),
        field("propertySchedule", "Deadline or ongoing visit schedule"),
      ],
    },
    {
      key: "concierge-family", label: "Concierge · Family support",
      service: "concierge",
      requests: [
        "Arranging services and purchases", "Coordinating deliveries and appointments",
        "Supporting agreed family responsibilities", "Assistance for parents or loved ones",
        "Local coordination for a family member",
      ],
      fields: [
        field("familyName", "Family member's name"), field("familyRelationship", "Relationship to you"),
        field("familyContact", "Their phone number and address"), field("familyHelp", "Help needed"),
        field("familyFrequency", "How often is support needed?"), field("familyLimits", "Limits on actions or spending"),
        field("familyUpdates", "Who should receive updates?", "select", undefined, ["Only me", "Me and the family member"]),
      ],
    },
    {
      key: "concierge-business", label: "Concierge · Business representation",
      service: "concierge",
      requests: [
        "Local follow-ups and site visits", "Vendor and supplier coordination",
        "Procurement and sourcing", "Document collection and delivery",
        "Administrative support", "Local representation",
      ],
      fields: [
        field("businessAddress", "Business name and address"), field("businessTask", "Nature of the task"),
        field("businessContact", "Person or organisation name and contact"),
        field("businessDocuments", "Documents to collect or deliver and from whom"),
        field("businessAuthorisation", "Authorisation letter or company document"),
        field("businessUpdates", "Who at your company should receive updates?"),
        field("businessDuration", "One-time job or ongoing representation"),
      ],
    },
    {
      key: "concierge-personal", label: "Concierge · Personal assistance",
      service: "concierge",
      requests: ["Special request", "Time-sensitive task", "Local bookings and arrangements", "Shopping and purchases", "Personal coordination", "Other agreed support"],
      fields: [
        field("personalTask", "Special request or time-sensitive task", "textarea"),
        field("personalPeople", "People or places involved"), field("personalDeadline", "Hard deadline", "date"),
        field("personalConfidential", "Anything to keep confidential"),
      ],
    },
  ],
};

export const CONTACT_COMMON_FIELDS: readonly ContactFieldDefinition[] = [
  field("cityCountry", "Current city and country"),
  field("contactMethod", "Preferred contact method", "select", undefined, ["WhatsApp", "Phone call", "Email"]),
  field("requestingAs", "I am requesting as", "select", undefined, ["Individual", "Family", "Nigerian in the diaspora", "Busy professional", "Business"]),
  field("businessName", "Business name (if applicable)"),
  field("supportDuration", "One-time request or ongoing support", "select", undefined, ["One-time", "Ongoing (Concierge retainer)"]),
];

export const CONTACT_OVERVIEW_FIELDS: readonly ContactFieldDefinition[] = [
  field("serviceLocation", "Where should the service take place? (city, area, full address)"),
  field("neededDateTime", "Date and time needed or start date", "datetime"),
  field("deadline", "Deadline, if any"), field("urgency", "How urgent is this?", "select", undefined, ["Flexible", "Within a few days", "Within 24 hours", "Emergency"]),
  field("budget", "Budget or budget range"), field("instructions", "Special instructions, preferences or things to avoid", "textarea"),
];

export const CONTACT_RETAINER_FIELDS: readonly ContactFieldDefinition[] = [
  field("retainerAreas", "Areas of support needed", "multiselect", undefined, ["Home & Property", "Family", "Business", "Personal"]),
  field("retainerStart", "Expected start date", "date"),
  field("retainerDuration", "Expected duration", "select", undefined, ["1 month", "3 months", "6 months", "12 months", "Open-ended"]),
  field("retainerTasks", "Estimated tasks per month", "number"),
  field("retainerCheckIn", "Preferred day and time for regular check-ins"),
];

export const CONTACT_UPDATES_FIELDS: readonly ContactFieldDefinition[] = [
  field("updateMethod", "How would you like to receive updates?", "select", undefined, ["WhatsApp", "Phone call", "Email"]),
  field("updateFrequency", "How often?", "select", undefined, ["At every milestone", "Daily", "Weekly", "Only when something needs my attention"]),
  field("completionProof", "Proof of completion you want", "multiselect", undefined, ["Photos", "Receipts", "Documents", "Written confirmation", "Other"]),
  field("approvalContact", "Authorised approver (name, relationship and phone)"),
  field("spendingLimit", "Spending limit without checking with you first"),
  field("paymentMethod", "Preferred payment method", "select", undefined, ["Bank transfer", "Card", "Cash", "Other"]),
];
