import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeDigitalSignageFields {
    name: EntryFieldTypes.Symbol;
    content: EntryFieldTypes.EntryLink<EntrySkeletonType>;
}

export type TypeDigitalSignageSkeleton = EntrySkeletonType<TypeDigitalSignageFields, "digitalSignage">;
export type TypeDigitalSignage<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeDigitalSignageSkeleton, Modifiers, Locales>;

export function isTypeDigitalSignage<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeDigitalSignage<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'digitalSignage'
}
