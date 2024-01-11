import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeLocationFields {
    internalName?: EntryFieldTypes.Symbol;
    locationMasterdata?: EntryFieldTypes.EntryResourceLink<EntrySkeletonType>;
}

export type TypeLocationSkeleton = EntrySkeletonType<TypeLocationFields, "location">;
export type TypeLocation<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeLocationSkeleton, Modifiers, Locales>;

export function isTypeLocation<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeLocation<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'location'
}
