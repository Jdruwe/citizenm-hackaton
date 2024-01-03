import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeContentCardSkeleton } from "./TypeContentCard";
import type { TypeExperienceContentSkeleton } from "./TypeExperienceContent";
import type { TypeNewsArticleSkeleton } from "./TypeNewsArticle";
import type { TypePersonSkeleton } from "./TypePerson";

export interface TypeReferenceCollectionFields {
    name: EntryFieldTypes.Symbol;
    collectionMode: EntryFieldTypes.Symbol<"automated" | "curated">;
    manualSelection?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeContentCardSkeleton | TypeExperienceContentSkeleton | TypeNewsArticleSkeleton | TypePersonSkeleton>>;
    contentTypes?: EntryFieldTypes.Array<EntryFieldTypes.Symbol<"content card" | "experience" | "hotel" | "news article" | "person">>;
    displayAs: EntryFieldTypes.Symbol<"grid" | "list" | "slider">;
}

export type TypeReferenceCollectionSkeleton = EntrySkeletonType<TypeReferenceCollectionFields, "referenceCollection">;
export type TypeReferenceCollection<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeReferenceCollectionSkeleton, Modifiers, Locales>;
