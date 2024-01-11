import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeScreenFields {
    name: EntryFieldTypes.Symbol;
    media: EntryFieldTypes.AssetLink;
    title: EntryFieldTypes.Symbol;
    description?: EntryFieldTypes.RichText;
    qr?: EntryFieldTypes.AssetLink;
}

export type TypeScreenSkeleton = EntrySkeletonType<TypeScreenFields, "screen">;
export type TypeScreen<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeScreenSkeleton, Modifiers, Locales>;

export function isTypeScreen<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeScreen<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'screen'
}
