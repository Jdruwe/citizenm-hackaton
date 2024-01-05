import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeHeroSkeleton } from "./TypeHero";
import type { TypeSectionSkeleton } from "./TypeSection";

export interface TypeContentCanvasFields {
    name: EntryFieldTypes.Symbol;
    hero?: EntryFieldTypes.EntryLink<TypeHeroSkeleton>;
    content: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeSectionSkeleton>>;
}

export type TypeContentCanvasSkeleton = EntrySkeletonType<TypeContentCanvasFields, "contentCanvas">;
export type TypeContentCanvas<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeContentCanvasSkeleton, Modifiers, Locales>;

export function isTypeContentCanvas<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeContentCanvas<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'contentCanvas'
}
