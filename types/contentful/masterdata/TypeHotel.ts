import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeAmenitySkeleton } from "./TypeAmenity";
import type { TypeArtSkeleton } from "./TypeArt";
import type { TypeFaqSkeleton } from "./TypeFaq";
import type { TypeLocationSkeleton } from "./TypeLocation";
import type { TypeNameSkeleton } from "./TypeName";

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
}

export type TypeHotelSkeleton = EntrySkeletonType<TypeHotelFields, "hotel">;
export type TypeHotel<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeHotelSkeleton, Modifiers, Locales>;

export function isTypeHotel<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeHotel<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'hotel'
}
