import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeAlertMessageFields {
    name: EntryFieldTypes.Symbol;
    message: EntryFieldTypes.RichText;
    colour: EntryFieldTypes.Symbol<"Primary (default)" | "Secondary">;
}

export type TypeAlertMessageSkeleton = EntrySkeletonType<TypeAlertMessageFields, "alertMessage">;
export type TypeAlertMessage<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeAlertMessageSkeleton, Modifiers, Locales>;

export function isTypeAlertMessage<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeAlertMessage<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'alertMessage'
}
