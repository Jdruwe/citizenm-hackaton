import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeAmbassadorsSkeleton } from "./TypeAmbassadors";
import type { TypeAmenitySkeleton } from "./TypeAmenity";
import type { TypeArtSkeleton } from "./TypeArt";
import type { TypeCanteenMSkeleton } from "./TypeCanteenM";
import type { TypeCoworkingSkeleton } from "./TypeCoworking";
import type { TypeFaqSkeleton } from "./TypeFaq";
import type { TypeLocationSkeleton } from "./TypeLocation";
import type { TypeNameSkeleton } from "./TypeName";
import type { TypeRooftopBarSkeleton } from "./TypeRooftopBar";
import type { TypeRoomSkeleton } from "./TypeRoom";
import type { TypeSocietyMSkeleton } from "./TypeSocietyM";

export interface TypeHotelFields {
    name: EntryFieldTypes.Symbol;
    title: EntryFieldTypes.Symbol;
    code: EntryFieldTypes.Symbol;
    shortDescription: EntryFieldTypes.Symbol;
    description: EntryFieldTypes.RichText;
    location: EntryFieldTypes.EntryLink<TypeLocationSkeleton>;
    mainImage?: EntryFieldTypes.EntryLink<TypeNameSkeleton>;
    heroImage: EntryFieldTypes.EntryLink<TypeNameSkeleton>;
    amenities?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeAmenitySkeleton>>;
    artCollection?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeArtSkeleton>>;
    faqs?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeFaqSkeleton>>;
    roomtypes?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeRoomSkeleton>>;
    ambassadors?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeAmbassadorsSkeleton>>;
    societyM?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeSocietyMSkeleton>>;
    coworking?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeCoworkingSkeleton>>;
    canteenM?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeCanteenMSkeleton>>;
    rooftopBar?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeRooftopBarSkeleton>>;
}

export type TypeHotelSkeleton = EntrySkeletonType<TypeHotelFields, "hotel">;
export type TypeHotel<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeHotelSkeleton, Modifiers, Locales>;

export function isTypeHotel<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeHotel<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'hotel'
}
