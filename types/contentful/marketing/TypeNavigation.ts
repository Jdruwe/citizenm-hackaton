import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeNavigationItemSkeleton } from "./TypeNavigationItem";

export interface TypeNavigationFields {
    name: EntryFieldTypes.Symbol;
    primaryNavigation: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeNavigationItemSkeleton>>;
    secondaryNavigation?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeNavigationItemSkeleton>>;
    enableSearch: EntryFieldTypes.Boolean;
    enableAccount: EntryFieldTypes.Boolean;
    enableShoppingCart: EntryFieldTypes.Boolean;
}

export type TypeNavigationSkeleton = EntrySkeletonType<TypeNavigationFields, "navigation">;
export type TypeNavigation<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeNavigationSkeleton, Modifiers, Locales>;

export function isTypeNavigation<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeNavigation<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'navigation'
}
