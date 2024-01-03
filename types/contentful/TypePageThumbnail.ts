import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeImageSkeleton } from "./TypeImage";

export interface TypePageThumbnailFields {
    name: EntryFieldTypes.Symbol;
    title: EntryFieldTypes.Symbol;
    description: EntryFieldTypes.RichText;
    media: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeImageSkeleton>>;
}

export type TypePageThumbnailSkeleton = EntrySkeletonType<TypePageThumbnailFields, "pageThumbnail">;
export type TypePageThumbnail<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypePageThumbnailSkeleton, Modifiers, Locales>;
