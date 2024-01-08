import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeLocationSkeleton } from "./TypeLocation";
import type { TypeNameSkeleton } from "./TypeName";

export interface TypeExperienceFields {
    name: EntryFieldTypes.Symbol;
    title: EntryFieldTypes.Symbol;
    content?: EntryFieldTypes.RichText;
    image: EntryFieldTypes.EntryLink<TypeNameSkeleton>;
    location: EntryFieldTypes.EntryLink<TypeLocationSkeleton>;
    activities: EntryFieldTypes.Array<EntryFieldTypes.Symbol<"art-culture" | "coffee" | "drink" | "food" | "health-fitness" | "late" | "running" | "shop">>;
}

export type TypeExperienceSkeleton = EntrySkeletonType<TypeExperienceFields, "experience">;
export type TypeExperience<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeExperienceSkeleton, Modifiers, Locales>;

export function isTypeExperience<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeExperience<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'experience'
}
