import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeImageSkeleton } from "./TypeImage";

export interface TypeVideoFields {
    name: EntryFieldTypes.Symbol;
    youtubeUrl: EntryFieldTypes.Symbol;
    altText: EntryFieldTypes.Symbol;
    enableOrDisableOptions?: EntryFieldTypes.Array<EntryFieldTypes.Symbol<"Disable controls" | "Disable video suggestions" | "Enable autoloop" | "Enable autoplay">>;
    customThumbnail?: EntryFieldTypes.EntryLink<TypeImageSkeleton>;
}

export type TypeVideoSkeleton = EntrySkeletonType<TypeVideoFields, "video">;
export type TypeVideo<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeVideoSkeleton, Modifiers, Locales>;
