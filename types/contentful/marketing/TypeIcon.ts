import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeIconFields {
    name: EntryFieldTypes.Symbol;
    iconId: EntryFieldTypes.Symbol;
}

export type TypeIconSkeleton = EntrySkeletonType<TypeIconFields, "icon">;
export type TypeIcon<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeIconSkeleton, Modifiers, Locales>;

export function isTypeIcon<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeIcon<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'icon'
}
