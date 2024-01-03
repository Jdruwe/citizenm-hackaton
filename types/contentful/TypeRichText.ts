import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeRichTextFields {
    name: EntryFieldTypes.Symbol;
    content: EntryFieldTypes.RichText;
}

export type TypeRichTextSkeleton = EntrySkeletonType<TypeRichTextFields, "richText">;
export type TypeRichText<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeRichTextSkeleton, Modifiers, Locales>;
