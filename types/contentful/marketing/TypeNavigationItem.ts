import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeExternalUrlSkeleton } from "./TypeExternalUrl";
import type { TypePageSkeleton } from "./TypePage";

export interface TypeNavigationItemFields {
    name: EntryFieldTypes.Symbol;
    title: EntryFieldTypes.Symbol;
    link: EntryFieldTypes.EntryLink<TypeExternalUrlSkeleton | TypePageSkeleton>;
    children?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeNavigationItemSkeleton>>;
}

export type TypeNavigationItemSkeleton = EntrySkeletonType<TypeNavigationItemFields, "navigationItem">;
export type TypeNavigationItem<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeNavigationItemSkeleton, Modifiers, Locales>;

export function isTypeNavigationItem<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeNavigationItem<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'navigationItem'
}
