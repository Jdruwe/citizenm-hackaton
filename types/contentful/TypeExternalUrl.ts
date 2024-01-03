import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeExternalUrlFields {
    name: EntryFieldTypes.Symbol;
    url: EntryFieldTypes.Symbol;
    noFollow: EntryFieldTypes.Boolean;
}

export type TypeExternalUrlSkeleton = EntrySkeletonType<TypeExternalUrlFields, "externalUrl">;
export type TypeExternalUrl<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeExternalUrlSkeleton, Modifiers, Locales>;
