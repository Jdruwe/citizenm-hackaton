import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeAutomatedCollectionFields {
    name: EntryFieldTypes.Symbol;
    types: EntryFieldTypes.Array<EntryFieldTypes.Symbol<"content card" | "experience content" | "hotel" | "news article" | "person">>;
    displayAs: EntryFieldTypes.Symbol<"grid" | "list" | "slider">;
}

export type TypeAutomatedCollectionSkeleton = EntrySkeletonType<TypeAutomatedCollectionFields, "automatedCollection">;
export type TypeAutomatedCollection<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeAutomatedCollectionSkeleton, Modifiers, Locales>;
