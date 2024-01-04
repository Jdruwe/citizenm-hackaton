import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeCtaSkeleton } from "./TypeCta";
import type { TypeIconSkeleton } from "./TypeIcon";
import type { TypeImageSkeleton } from "./TypeImage";
import type { TypeVideoSkeleton } from "./TypeVideo";

export interface TypeContentCardFields {
    name: EntryFieldTypes.Symbol;
    media: EntryFieldTypes.EntryLink<TypeIconSkeleton | TypeImageSkeleton | TypeVideoSkeleton>;
    title: EntryFieldTypes.Symbol;
    description?: EntryFieldTypes.RichText;
    callToAction?: EntryFieldTypes.EntryLink<TypeCtaSkeleton>;
}

export type TypeContentCardSkeleton = EntrySkeletonType<TypeContentCardFields, "contentCard">;
export type TypeContentCard<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeContentCardSkeleton, Modifiers, Locales>;

export function isTypeContentCard<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeContentCard<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'contentCard'
}
