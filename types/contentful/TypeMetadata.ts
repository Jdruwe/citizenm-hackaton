import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeMetadataFields {
    name: EntryFieldTypes.Symbol;
    seoTitle: EntryFieldTypes.Symbol;
    seoDescription: EntryFieldTypes.Text;
    seoKeywords?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
    noIndexNoFollow: EntryFieldTypes.Boolean;
    socialTitle?: EntryFieldTypes.Symbol;
    socialDescription?: EntryFieldTypes.Text;
    socialImage?: EntryFieldTypes.AssetLink;
}

export type TypeMetadataSkeleton = EntrySkeletonType<TypeMetadataFields, "metadata">;
export type TypeMetadata<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeMetadataSkeleton, Modifiers, Locales>;
