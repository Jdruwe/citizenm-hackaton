import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeArtistFields {
    name: EntryFieldTypes.Symbol;
    artistName: EntryFieldTypes.Symbol;
    artistDescription: EntryFieldTypes.RichText;
}

export type TypeArtistSkeleton = EntrySkeletonType<TypeArtistFields, "artist">;
export type TypeArtist<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeArtistSkeleton, Modifiers, Locales>;

export function isTypeArtist<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeArtist<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'artist'
}
