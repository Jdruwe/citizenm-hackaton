import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeImageSkeleton } from "./TypeImage";
import type { TypeRichTextSkeleton } from "./TypeRichText";
import type { TypeVideoSkeleton } from "./TypeVideo";

export interface TypeBannerFields {
    name: EntryFieldTypes.Symbol;
    media: EntryFieldTypes.EntryLink<TypeImageSkeleton | TypeVideoSkeleton>;
    content: EntryFieldTypes.EntryLink<TypeRichTextSkeleton>;
    backgroundColour: EntryFieldTypes.Symbol<"Primary (default)" | "Secondary">;
    layout: EntryFieldTypes.Symbol<"Media left (default)" | "Media right">;
}

export type TypeBannerSkeleton = EntrySkeletonType<TypeBannerFields, "banner">;
export type TypeBanner<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeBannerSkeleton, Modifiers, Locales>;
