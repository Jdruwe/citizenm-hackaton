import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeCtaSkeleton } from "./TypeCta";
import type { TypeImageSkeleton } from "./TypeImage";
import type { TypeVideoSkeleton } from "./TypeVideo";

export interface TypeHeroFields {
    name: EntryFieldTypes.Symbol;
    media: EntryFieldTypes.EntryLink<TypeImageSkeleton | TypeVideoSkeleton>;
    title: EntryFieldTypes.Symbol;
    description?: EntryFieldTypes.RichText;
    callToAction?: EntryFieldTypes.EntryLink<TypeCtaSkeleton>;
}

export type TypeHeroSkeleton = EntrySkeletonType<TypeHeroFields, "hero">;
export type TypeHero<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeHeroSkeleton, Modifiers, Locales>;

export function isTypeHero<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeHero<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'hero'
}
