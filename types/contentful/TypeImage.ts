import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeImageFields {
    name: EntryFieldTypes.Symbol;
    asset: EntryFieldTypes.AssetLink;
    altText: EntryFieldTypes.Symbol;
    caption?: EntryFieldTypes.Symbol;
    focalPoint?: EntryFieldTypes.Symbol;
}

export type TypeImageSkeleton = EntrySkeletonType<TypeImageFields, "image">;
export type TypeImage<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeImageSkeleton, Modifiers, Locales>;
