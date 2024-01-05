import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeArtFields {
    name: EntryFieldTypes.Symbol;
    artMasterdata: EntryFieldTypes.EntryResourceLink<EntrySkeletonType>;
}

export type TypeArtSkeleton = EntrySkeletonType<TypeArtFields, "art">;
export type TypeArt<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeArtSkeleton, Modifiers, Locales>;

export function isTypeArt<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeArt<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'art'
}
