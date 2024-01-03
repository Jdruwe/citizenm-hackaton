import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypePersonFields {
    name: EntryFieldTypes.Symbol;
    firstName: EntryFieldTypes.Symbol;
    lastName: EntryFieldTypes.Symbol;
    role: EntryFieldTypes.Symbol<"Account manager" | "Not applicable (default)">;
    additionalInformation?: EntryFieldTypes.Symbol;
    headshot: EntryFieldTypes.AssetLink;
    phoneNumber?: EntryFieldTypes.Symbol;
    emailAddress?: EntryFieldTypes.Symbol;
}

export type TypePersonSkeleton = EntrySkeletonType<TypePersonFields, "person">;
export type TypePerson<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypePersonSkeleton, Modifiers, Locales>;
