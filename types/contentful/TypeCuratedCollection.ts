import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeContentCardSkeleton } from "./TypeContentCard";
import type { TypeExperienceContentSkeleton } from "./TypeExperienceContent";
import type { TypeNewsArticleSkeleton } from "./TypeNewsArticle";
import type { TypePersonSkeleton } from "./TypePerson";

export interface TypeCuratedCollectionFields {
    name: EntryFieldTypes.Symbol;
    items?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeContentCardSkeleton | TypeExperienceContentSkeleton | TypeNewsArticleSkeleton | TypePersonSkeleton>>;
    displayAs: EntryFieldTypes.Symbol<"grid" | "list" | "slider">;
}

export type TypeCuratedCollectionSkeleton = EntrySkeletonType<TypeCuratedCollectionFields, "curatedCollection">;
export type TypeCuratedCollection<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeCuratedCollectionSkeleton, Modifiers, Locales>;
