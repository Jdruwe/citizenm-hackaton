import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeCountrySkeleton } from "./TypeCountry";

export interface TypeCityFields {
    name: EntryFieldTypes.Symbol;
    country: EntryFieldTypes.EntryLink<TypeCountrySkeleton>;
    localizedName?: EntryFieldTypes.Symbol;
}

export type TypeCitySkeleton = EntrySkeletonType<TypeCityFields, "city">;
export type TypeCity<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeCitySkeleton, Modifiers, Locales>;

export function isTypeCity<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeCity<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'city'
}
