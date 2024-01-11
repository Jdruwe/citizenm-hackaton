import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeAmenitySkeleton } from "./TypeAmenity";

export interface TypeMembershipFields {
    internalName?: EntryFieldTypes.Symbol;
    title?: EntryFieldTypes.Symbol;
    text?: EntryFieldTypes.RichText;
    features?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeAmenitySkeleton>>;
    commercialTitle?: EntryFieldTypes.Symbol;
    commercialText?: EntryFieldTypes.RichText;
}

export type TypeMembershipSkeleton = EntrySkeletonType<TypeMembershipFields, "membership">;
export type TypeMembership<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeMembershipSkeleton, Modifiers, Locales>;

export function isTypeMembership<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeMembership<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'membership'
}
