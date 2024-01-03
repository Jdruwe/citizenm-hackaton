import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeExperienceContentSkeleton } from "./TypeExperienceContent";
import type { TypeFooterSkeleton } from "./TypeFooter";
import type { TypeMetadataSkeleton } from "./TypeMetadata";
import type { TypeNavigationSkeleton } from "./TypeNavigation";
import type { TypeNewsArticleSkeleton } from "./TypeNewsArticle";
import type { TypePageThumbnailSkeleton } from "./TypePageThumbnail";

export interface TypePageFields {
    name: EntryFieldTypes.Symbol;
    pageTitle: EntryFieldTypes.Symbol;
    slug: EntryFieldTypes.Symbol;
    pageMetadata?: EntryFieldTypes.EntryLink<TypeMetadataSkeleton>;
    pageThumbnail?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypePageThumbnailSkeleton>>;
    pageType: EntryFieldTypes.EntryLink<TypeExperienceContentSkeleton | TypeNewsArticleSkeleton>;
    hideInSearch: EntryFieldTypes.Boolean;
    alternativeNavigation?: EntryFieldTypes.EntryLink<TypeNavigationSkeleton>;
    alternativeFooter?: EntryFieldTypes.EntryLink<TypeFooterSkeleton>;
}

export type TypePageSkeleton = EntrySkeletonType<TypePageFields, "page">;
export type TypePage<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypePageSkeleton, Modifiers, Locales>;
