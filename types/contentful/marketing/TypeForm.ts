import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeFormFields {
    name: EntryFieldTypes.Symbol;
    typeformReference: EntryFieldTypes.Symbol;
}

export type TypeFormSkeleton = EntrySkeletonType<TypeFormFields, "form">;
export type TypeForm<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeFormSkeleton, Modifiers, Locales>;

export function isTypeForm<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeForm<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'form'
}
