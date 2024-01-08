import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeNameSkeleton } from "./TypeName";

export interface TypeAmenityFields {
    name: EntryFieldTypes.Symbol;
    title: EntryFieldTypes.Symbol;
    icon: EntryFieldTypes.EntryLink<TypeNameSkeleton>;
}

export type TypeAmenitySkeleton = EntrySkeletonType<TypeAmenityFields, "amenity">;
export type TypeAmenity<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeAmenitySkeleton, Modifiers, Locales>;

export function isTypeAmenity<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeAmenity<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'amenity'
}
