import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeFooterSkeleton } from "./TypeFooter";
import type { TypeNavigationSkeleton } from "./TypeNavigation";
import type { TypePageSkeleton } from "./TypePage";

export interface TypeChannelSettingsFields {
    name: EntryFieldTypes.Symbol;
    channelLogo: EntryFieldTypes.AssetLink;
    homepage: EntryFieldTypes.EntryLink<TypePageSkeleton>;
    page404: EntryFieldTypes.EntryLink<TypePageSkeleton>;
    navigation: EntryFieldTypes.EntryLink<TypeNavigationSkeleton>;
    footer: EntryFieldTypes.EntryLink<TypeFooterSkeleton>;
}

export type TypeChannelSettingsSkeleton = EntrySkeletonType<TypeChannelSettingsFields, "channelSettings">;
export type TypeChannelSettings<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeChannelSettingsSkeleton, Modifiers, Locales>;

export function isTypeChannelSettings<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeChannelSettings<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'channelSettings'
}
