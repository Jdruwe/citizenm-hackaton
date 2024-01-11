import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeMembershipFields {
    name: EntryFieldTypes.Symbol;
    membershipMasterdata: EntryFieldTypes.EntryResourceLink<EntrySkeletonType>;
}

export type TypeMembershipSkeleton = EntrySkeletonType<TypeMembershipFields, "membership">;
export type TypeMembership<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeMembershipSkeleton, Modifiers, Locales>;

export function isTypeMembership<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeMembership<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'membership'
}
