import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeContinentSkeleton } from "./TypeContinent";

export interface TypeCountryFields {
    name: EntryFieldTypes.Symbol;
    continent: EntryFieldTypes.EntryLink<TypeContinentSkeleton>;
}

export type TypeCountrySkeleton = EntrySkeletonType<TypeCountryFields, "country">;
export type TypeCountry<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeCountrySkeleton, Modifiers, Locales>;

export function isTypeCountry<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeCountry<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'country'
}
