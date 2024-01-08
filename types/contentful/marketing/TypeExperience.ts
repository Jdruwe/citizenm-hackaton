import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeExperienceFields {
    name?: EntryFieldTypes.Symbol;
    experienceMasterdata: EntryFieldTypes.EntryResourceLink<EntrySkeletonType>;
}

export type TypeExperienceSkeleton = EntrySkeletonType<TypeExperienceFields, "experience">;
export type TypeExperience<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeExperienceSkeleton, Modifiers, Locales>;

export function isTypeExperience<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeExperience<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'experience'
}
