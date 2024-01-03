import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeHeroSkeleton } from "./TypeHero";
import type { TypePersonSkeleton } from "./TypePerson";
import type { TypeSectionSkeleton } from "./TypeSection";

export interface TypeNewsArticleFields {
    name: EntryFieldTypes.Symbol;
    hero?: EntryFieldTypes.EntryLink<TypeHeroSkeleton>;
    authors?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypePersonSkeleton>>;
    publicationDate?: EntryFieldTypes.Date;
    content: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeSectionSkeleton>>;
}

export type TypeNewsArticleSkeleton = EntrySkeletonType<TypeNewsArticleFields, "newsArticle">;
export type TypeNewsArticle<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeNewsArticleSkeleton, Modifiers, Locales>;
