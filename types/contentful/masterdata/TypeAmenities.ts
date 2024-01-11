import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeNameSkeleton } from "./TypeName";

export interface TypeAmenitiesFields {
    name: EntryFieldTypes.Symbol;
    title: EntryFieldTypes.Symbol;
    icon: EntryFieldTypes.EntryLink<TypeNameSkeleton>;
}

export type TypeAmenitiesSkeleton = EntrySkeletonType<TypeAmenitiesFields, "amenities">;
export type TypeAmenities<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeAmenitiesSkeleton, Modifiers, Locales>;

export function isTypeAmenities<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeAmenities<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'amenities'
}
