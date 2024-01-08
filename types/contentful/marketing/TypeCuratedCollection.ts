import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeArtSkeleton } from "./TypeArt";
import type { TypeContentCanvasSkeleton } from "./TypeContentCanvas";
import type { TypeContentCardSkeleton } from "./TypeContentCard";
import type { TypeExperienceSkeleton } from "./TypeExperience";
import type { TypeFaqSkeleton } from "./TypeFaq";
import type { TypeHotelSkeleton } from "./TypeHotel";

export interface TypeCuratedCollectionFields {
    name: EntryFieldTypes.Symbol;
    collectionTitle: EntryFieldTypes.Symbol;
    items: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeArtSkeleton | TypeContentCanvasSkeleton | TypeContentCardSkeleton | TypeExperienceSkeleton | TypeFaqSkeleton | TypeHotelSkeleton>>;
    displayAs: EntryFieldTypes.Symbol<"grid" | "list" | "slider">;
}

export type TypeCuratedCollectionSkeleton = EntrySkeletonType<TypeCuratedCollectionFields, "curatedCollection">;
export type TypeCuratedCollection<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeCuratedCollectionSkeleton, Modifiers, Locales>;

export function isTypeCuratedCollection<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeCuratedCollection<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'curatedCollection'
}
