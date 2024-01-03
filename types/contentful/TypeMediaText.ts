import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeImageSkeleton } from "./TypeImage";
import type { TypeRichTextSkeleton } from "./TypeRichText";
import type { TypeVideoSkeleton } from "./TypeVideo";

export interface TypeMediaTextFields {
    name: EntryFieldTypes.Symbol;
    media: EntryFieldTypes.EntryLink<TypeImageSkeleton | TypeVideoSkeleton>;
    content: EntryFieldTypes.EntryLink<TypeRichTextSkeleton>;
    layout: EntryFieldTypes.Symbol<"Media left (default)" | "Media right">;
}

export type TypeMediaTextSkeleton = EntrySkeletonType<TypeMediaTextFields, "mediaText">;
export type TypeMediaText<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeMediaTextSkeleton, Modifiers, Locales>;
