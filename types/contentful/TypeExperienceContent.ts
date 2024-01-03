import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeHeroSkeleton } from "./TypeHero";
import type { TypeSectionSkeleton } from "./TypeSection";

export interface TypeExperienceContentFields {
    name: EntryFieldTypes.Symbol;
    hero?: EntryFieldTypes.EntryLink<TypeHeroSkeleton>;
    content: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeSectionSkeleton>>;
}

export type TypeExperienceContentSkeleton = EntrySkeletonType<TypeExperienceContentFields, "experienceContent">;
export type TypeExperienceContent<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeExperienceContentSkeleton, Modifiers, Locales>;
