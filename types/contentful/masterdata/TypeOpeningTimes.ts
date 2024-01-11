import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeOpeningTimesFields {
    internalName?: EntryFieldTypes.Symbol;
    start?: EntryFieldTypes.Date;
    end?: EntryFieldTypes.Date;
}

export type TypeOpeningTimesSkeleton = EntrySkeletonType<TypeOpeningTimesFields, "openingTimes">;
export type TypeOpeningTimes<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeOpeningTimesSkeleton, Modifiers, Locales>;

export function isTypeOpeningTimes<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeOpeningTimes<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'openingTimes'
}
