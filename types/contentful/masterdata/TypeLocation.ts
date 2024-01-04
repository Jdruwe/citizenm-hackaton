import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeCitySkeleton } from "./TypeCity";

export interface TypeLocationFields {
    name: EntryFieldTypes.Symbol;
    city: EntryFieldTypes.EntryLink<TypeCitySkeleton>;
    coordinates: EntryFieldTypes.Location;
    street: EntryFieldTypes.Symbol;
    postalCode: EntryFieldTypes.Symbol;
}

export type TypeLocationSkeleton = EntrySkeletonType<TypeLocationFields, "location">;
export type TypeLocation<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeLocationSkeleton, Modifiers, Locales>;

export function isTypeLocation<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeLocation<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'location'
}
