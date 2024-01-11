import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeFaqSkeleton } from "./TypeFaq";
import type { TypeNameSkeleton } from "./TypeName";

export interface TypeAmbassadorsFields {
    name?: EntryFieldTypes.Symbol;
    title?: EntryFieldTypes.Symbol;
    shortDescription?: EntryFieldTypes.RichText;
    longDescription?: EntryFieldTypes.RichText;
    images?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeNameSkeleton>>;
    faq?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeFaqSkeleton>>;
}

export type TypeAmbassadorsSkeleton = EntrySkeletonType<TypeAmbassadorsFields, "ambassadors">;
export type TypeAmbassadors<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeAmbassadorsSkeleton, Modifiers, Locales>;

export function isTypeAmbassadors<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeAmbassadors<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'ambassadors'
}
