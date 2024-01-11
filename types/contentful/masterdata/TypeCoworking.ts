import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeAmenitySkeleton } from "./TypeAmenity";
import type { TypeFaqSkeleton } from "./TypeFaq";
import type { TypeNameSkeleton } from "./TypeName";
import type { TypeOpeningTimesSkeleton } from "./TypeOpeningTimes";

export interface TypeCoworkingFields {
    name?: EntryFieldTypes.Symbol;
    title?: EntryFieldTypes.Symbol;
    shortDescription?: EntryFieldTypes.RichText;
    longDescription?: EntryFieldTypes.RichText;
    images?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeNameSkeleton>>;
    facilities?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeAmenitySkeleton>>;
    faq?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeFaqSkeleton>>;
    openingTime?: EntryFieldTypes.EntryLink<TypeOpeningTimesSkeleton>;
}

export type TypeCoworkingSkeleton = EntrySkeletonType<TypeCoworkingFields, "coworking">;
export type TypeCoworking<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeCoworkingSkeleton, Modifiers, Locales>;

export function isTypeCoworking<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeCoworking<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'coworking'
}
