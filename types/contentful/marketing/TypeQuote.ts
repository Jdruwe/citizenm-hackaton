import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypePersonSkeleton } from "./TypePerson";

export interface TypeQuoteFields {
    name: EntryFieldTypes.Symbol;
    quote: EntryFieldTypes.RichText;
    author: EntryFieldTypes.EntryLink<TypePersonSkeleton>;
}

export type TypeQuoteSkeleton = EntrySkeletonType<TypeQuoteFields, "quote">;
export type TypeQuote<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeQuoteSkeleton, Modifiers, Locales>;

export function isTypeQuote<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeQuote<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'quote'
}
