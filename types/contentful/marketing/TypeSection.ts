import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeAutomatedCollectionSkeleton } from "./TypeAutomatedCollection";
import type { TypeBannerSkeleton } from "./TypeBanner";
import type { TypeCtaSkeleton } from "./TypeCta";
import type { TypeCuratedCollectionSkeleton } from "./TypeCuratedCollection";
import type { TypeFormSkeleton } from "./TypeForm";
import type { TypeImageSkeleton } from "./TypeImage";
import type { TypeQuoteSkeleton } from "./TypeQuote";
import type { TypeRichTextSkeleton } from "./TypeRichText";
import type { TypeVideoSkeleton } from "./TypeVideo";

export interface TypeSectionFields {
    name: EntryFieldTypes.Symbol;
    content: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeAutomatedCollectionSkeleton | TypeBannerSkeleton | TypeCtaSkeleton | TypeCuratedCollectionSkeleton | TypeFormSkeleton | TypeImageSkeleton | TypeQuoteSkeleton | TypeRichTextSkeleton | TypeVideoSkeleton>>;
    backgroundColour: EntryFieldTypes.Symbol<"Black" | "Bright" | "Dark" | "Light" | "White (default)">;
}

export type TypeSectionSkeleton = EntrySkeletonType<TypeSectionFields, "section">;
export type TypeSection<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeSectionSkeleton, Modifiers, Locales>;

export function isTypeSection<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeSection<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'section'
}
