import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeBannerSkeleton } from "./TypeBanner";
import type { TypeCardCollectionSkeleton } from "./TypeCardCollection";
import type { TypeCtaSkeleton } from "./TypeCta";
import type { TypeDocumentSkeleton } from "./TypeDocument";
import type { TypeImageSkeleton } from "./TypeImage";
import type { TypeQuoteSkeleton } from "./TypeQuote";
import type { TypeReferenceCollectionSkeleton } from "./TypeReferenceCollection";
import type { TypeRichTextSkeleton } from "./TypeRichText";
import type { TypeVideoSkeleton } from "./TypeVideo";

export interface TypeSectionFields {
    name: EntryFieldTypes.Symbol;
    content: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeBannerSkeleton | TypeCardCollectionSkeleton | TypeCtaSkeleton | TypeDocumentSkeleton | TypeImageSkeleton | TypeQuoteSkeleton | TypeReferenceCollectionSkeleton | TypeRichTextSkeleton | TypeVideoSkeleton>>;
    backgroundColour: EntryFieldTypes.Symbol<"Black" | "Bright" | "Dark" | "Light" | "White (default)">;
}

export type TypeSectionSkeleton = EntrySkeletonType<TypeSectionFields, "section">;
export type TypeSection<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeSectionSkeleton, Modifiers, Locales>;
