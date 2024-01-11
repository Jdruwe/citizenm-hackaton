import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeAmenitySkeleton } from "./TypeAmenity";
import type { TypeFaqSkeleton } from "./TypeFaq";
import type { TypeNameSkeleton } from "./TypeName";

export interface TypeRooftopBarFields {
    name?: EntryFieldTypes.Symbol;
    title?: EntryFieldTypes.Symbol;
    shortDescription?: EntryFieldTypes.RichText;
    longDescription?: EntryFieldTypes.RichText;
    images?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeNameSkeleton>>;
    facilities?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeAmenitySkeleton>>;
    faq?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeFaqSkeleton>>;
}

export type TypeRooftopBarSkeleton = EntrySkeletonType<TypeRooftopBarFields, "rooftopBar">;
export type TypeRooftopBar<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeRooftopBarSkeleton, Modifiers, Locales>;

export function isTypeRooftopBar<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeRooftopBar<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'rooftopBar'
}
