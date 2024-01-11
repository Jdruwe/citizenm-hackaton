import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeAmenitySkeleton } from "./TypeAmenity";
import type { TypeFaqSkeleton } from "./TypeFaq";
import type { TypeNameSkeleton } from "./TypeName";

export interface TypeSocietyMFields {
    name?: EntryFieldTypes.Symbol;
    title?: EntryFieldTypes.Symbol;
    shortDescription?: EntryFieldTypes.RichText;
    longDescription?: EntryFieldTypes.RichText;
    images?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeNameSkeleton>>;
    facilities?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeAmenitySkeleton>>;
    faq?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeFaqSkeleton>>;
}

export type TypeSocietyMSkeleton = EntrySkeletonType<TypeSocietyMFields, "societyM">;
export type TypeSocietyM<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeSocietyMSkeleton, Modifiers, Locales>;

export function isTypeSocietyM<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeSocietyM<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'societyM'
}
