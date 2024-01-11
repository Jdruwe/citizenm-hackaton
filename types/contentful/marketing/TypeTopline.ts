import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeToplineFields {
    internalName?: EntryFieldTypes.Symbol;
    text?: EntryFieldTypes.Symbol;
}

export type TypeToplineSkeleton = EntrySkeletonType<TypeToplineFields, "topline">;
export type TypeTopline<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeToplineSkeleton, Modifiers, Locales>;

export function isTypeTopline<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeTopline<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'topline'
}
