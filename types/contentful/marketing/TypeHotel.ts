import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeCuratedCollectionSkeleton } from "./TypeCuratedCollection";

export interface TypeHotelFields {
    name: EntryFieldTypes.Symbol;
    hotelMasterdata: EntryFieldTypes.EntryResourceLink<EntrySkeletonType>;
    highlightReel?: EntryFieldTypes.EntryLink<TypeCuratedCollectionSkeleton>;
}

export type TypeHotelSkeleton = EntrySkeletonType<TypeHotelFields, "hotel">;
export type TypeHotel<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeHotelSkeleton, Modifiers, Locales>;

export function isTypeHotel<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeHotel<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'hotel'
}
