import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeArtistSkeleton } from "./TypeArtist";
import type { TypeNameSkeleton } from "./TypeName";

export interface TypeArtFields {
    name: EntryFieldTypes.Symbol;
    title: EntryFieldTypes.Symbol;
    image: EntryFieldTypes.EntryLink<TypeNameSkeleton>;
    artist: EntryFieldTypes.EntryLink<TypeArtistSkeleton>;
}

export type TypeArtSkeleton = EntrySkeletonType<TypeArtFields, "art">;
export type TypeArt<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeArtSkeleton, Modifiers, Locales>;

export function isTypeArt<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeArt<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'art'
}
