import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeImageSkeleton } from "./TypeImage";
import type { TypeRichTextSkeleton } from "./TypeRichText";
import type { TypeToplineSkeleton } from "./TypeTopline";
import type { TypeVideoSkeleton } from "./TypeVideo";

export interface TypeMediaTextFields {
    name: EntryFieldTypes.Symbol;
    title: EntryFieldTypes.Symbol;
    media: EntryFieldTypes.EntryLink<TypeImageSkeleton | TypeVideoSkeleton>;
    content: EntryFieldTypes.EntryLink<TypeRichTextSkeleton>;
    layout: EntryFieldTypes.Symbol<"Media left (default)" | "Media right">;
    topline?: EntryFieldTypes.EntryLink<TypeToplineSkeleton>;
}

export type TypeMediaTextSkeleton = EntrySkeletonType<TypeMediaTextFields, "mediaText">;
export type TypeMediaText<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeMediaTextSkeleton, Modifiers, Locales>;

export function isTypeMediaText<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeMediaText<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'mediaText'
}
