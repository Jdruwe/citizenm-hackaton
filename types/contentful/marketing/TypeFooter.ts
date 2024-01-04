import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeNavigationItemSkeleton } from "./TypeNavigationItem";

export interface TypeFooterFields {
    name: EntryFieldTypes.Symbol;
    primaryNavigation: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeNavigationItemSkeleton>>;
    secondaryNavigation?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeNavigationItemSkeleton>>;
    disclaimerMessage: EntryFieldTypes.Symbol;
}

export type TypeFooterSkeleton = EntrySkeletonType<TypeFooterFields, "footer">;
export type TypeFooter<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeFooterSkeleton, Modifiers, Locales>;

export function isTypeFooter<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeFooter<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'footer'
}
