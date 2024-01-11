import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeImageSkeleton } from "./TypeImage";
import type { TypeLocationSkeleton } from "./TypeLocation";
import type { TypeRichTextSkeleton } from "./TypeRichText";

export interface TypeCityguideFields {
    internalName?: EntryFieldTypes.Symbol;
    title?: EntryFieldTypes.Symbol;
    content?: EntryFieldTypes.EntryLink<TypeRichTextSkeleton>;
    image?: EntryFieldTypes.EntryLink<TypeImageSkeleton>;
    location?: EntryFieldTypes.EntryLink<TypeLocationSkeleton>;
    activities?: EntryFieldTypes.Array<EntryFieldTypes.Symbol<"art-culture" | "coffee" | "drink" | "food" | "health-fitness" | "late" | "running" | "shop">>;
}

export type TypeCityguideSkeleton = EntrySkeletonType<TypeCityguideFields, "cityguide">;
export type TypeCityguide<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeCityguideSkeleton, Modifiers, Locales>;

export function isTypeCityguide<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeCityguide<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'cityguide'
}
