import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeNameFields {
    asset: EntryFieldTypes.AssetLink;
    name: EntryFieldTypes.Symbol;
    altText: EntryFieldTypes.Symbol;
}

export type TypeNameSkeleton = EntrySkeletonType<TypeNameFields, "name">;
export type TypeName<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeNameSkeleton, Modifiers, Locales>;

export function isTypeName<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeName<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'name'
}
