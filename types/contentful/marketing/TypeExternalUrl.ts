import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeExternalUrlFields {
    name: EntryFieldTypes.Symbol;
    url: EntryFieldTypes.Symbol;
    noFollow: EntryFieldTypes.Boolean;
}

export type TypeExternalUrlSkeleton = EntrySkeletonType<TypeExternalUrlFields, "externalUrl">;
export type TypeExternalUrl<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeExternalUrlSkeleton, Modifiers, Locales>;

export function isTypeExternalUrl<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeExternalUrl<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'externalUrl'
}
