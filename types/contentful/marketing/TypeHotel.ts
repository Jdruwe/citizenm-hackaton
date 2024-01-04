import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeHotelFields {
    name: EntryFieldTypes.Symbol;
    hotelMasterdata: EntryFieldTypes.EntryResourceLink<EntrySkeletonType>;
}

export type TypeHotelSkeleton = EntrySkeletonType<TypeHotelFields, "hotel">;
export type TypeHotel<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeHotelSkeleton, Modifiers, Locales>;

export function isTypeHotel<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeHotel<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'hotel'
}
