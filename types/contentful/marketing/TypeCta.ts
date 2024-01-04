import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeExternalUrlSkeleton } from "./TypeExternalUrl";
import type { TypePageSkeleton } from "./TypePage";

export interface TypeCtaFields {
    name: EntryFieldTypes.Symbol;
    label: EntryFieldTypes.Symbol;
    link: EntryFieldTypes.EntryLink<TypeExternalUrlSkeleton | TypePageSkeleton>;
}

export type TypeCtaSkeleton = EntrySkeletonType<TypeCtaFields, "cta">;
export type TypeCta<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeCtaSkeleton, Modifiers, Locales>;

export function isTypeCta<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeCta<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'cta'
}
