import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeCoworkingFields {
    name?: EntryFieldTypes.Symbol;
    coworkingMasterdata?: EntryFieldTypes.EntryResourceLink<EntrySkeletonType>;
}

export type TypeCoworkingSkeleton = EntrySkeletonType<TypeCoworkingFields, "coworking">;
export type TypeCoworking<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeCoworkingSkeleton, Modifiers, Locales>;

export function isTypeCoworking<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeCoworking<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'coworking'
}
