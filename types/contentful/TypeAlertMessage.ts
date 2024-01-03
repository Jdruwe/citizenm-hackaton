import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeAlertMessageFields {
    name: EntryFieldTypes.Symbol;
    message: EntryFieldTypes.RichText;
    colour: EntryFieldTypes.Symbol<"Primary (default)" | "Secondary">;
}

export type TypeAlertMessageSkeleton = EntrySkeletonType<TypeAlertMessageFields, "alertMessage">;
export type TypeAlertMessage<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeAlertMessageSkeleton, Modifiers, Locales>;
