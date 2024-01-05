import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeArtSkeleton } from "./TypeArt";
import type { TypeContentCardSkeleton } from "./TypeContentCard";
import type { TypeExperienceContentSkeleton } from "./TypeExperienceContent";
import type { TypeHotelSkeleton } from "./TypeHotel";

export interface TypeCuratedCollectionFields {
    name: EntryFieldTypes.Symbol;
    items: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeArtSkeleton | TypeContentCardSkeleton | TypeExperienceContentSkeleton | TypeHotelSkeleton>>;
    displayAs: EntryFieldTypes.Symbol<"grid" | "list" | "slider">;
}

export type TypeCuratedCollectionSkeleton = EntrySkeletonType<TypeCuratedCollectionFields, "curatedCollection">;
export type TypeCuratedCollection<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeCuratedCollectionSkeleton, Modifiers, Locales>;

export function isTypeCuratedCollection<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeCuratedCollection<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'curatedCollection'
}
