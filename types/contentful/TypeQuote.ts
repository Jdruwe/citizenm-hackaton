import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypePersonSkeleton } from "./TypePerson";

export interface TypeQuoteFields {
    name: EntryFieldTypes.Symbol;
    quote: EntryFieldTypes.RichText;
    author: EntryFieldTypes.EntryLink<TypePersonSkeleton>;
}

export type TypeQuoteSkeleton = EntrySkeletonType<TypeQuoteFields, "quote">;
export type TypeQuote<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeQuoteSkeleton, Modifiers, Locales>;
