import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeContinentFields {
    name: EntryFieldTypes.Symbol;
}

export type TypeContinentSkeleton = EntrySkeletonType<TypeContinentFields, "continent">;
export type TypeContinent<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeContinentSkeleton, Modifiers, Locales>;

export function isTypeContinent<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeContinent<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'continent'
}
