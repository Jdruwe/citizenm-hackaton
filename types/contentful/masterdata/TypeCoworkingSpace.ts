import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeAmenitySkeleton } from "./TypeAmenity";
import type { TypeLocationSkeleton } from "./TypeLocation";

export interface TypeCoworkingSpaceFields {
    name: EntryFieldTypes.Symbol;
    location: EntryFieldTypes.EntryLink<TypeLocationSkeleton>;
    totalDesks: EntryFieldTypes.Integer;
    amenities?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeAmenitySkeleton>>;
}

export type TypeCoworkingSpaceSkeleton = EntrySkeletonType<TypeCoworkingSpaceFields, "coworkingSpace">;
export type TypeCoworkingSpace<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeCoworkingSpaceSkeleton, Modifiers, Locales>;

export function isTypeCoworkingSpace<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeCoworkingSpace<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'coworkingSpace'
}
