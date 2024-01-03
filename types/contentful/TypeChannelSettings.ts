import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeFooterSkeleton } from "./TypeFooter";
import type { TypeMetadataSkeleton } from "./TypeMetadata";
import type { TypeNavigationSkeleton } from "./TypeNavigation";
import type { TypePageSkeleton } from "./TypePage";

export interface TypeChannelSettingsFields {
    name: EntryFieldTypes.Symbol;
    channelLogo: EntryFieldTypes.AssetLink;
    channelMetadata: EntryFieldTypes.EntryLink<TypeMetadataSkeleton>;
    homepage: EntryFieldTypes.EntryLink<TypePageSkeleton>;
    page404: EntryFieldTypes.EntryLink<TypePageSkeleton>;
    navigation: EntryFieldTypes.EntryLink<TypeNavigationSkeleton>;
    footer: EntryFieldTypes.EntryLink<TypeFooterSkeleton>;
}

export type TypeChannelSettingsSkeleton = EntrySkeletonType<TypeChannelSettingsFields, "channelSettings">;
export type TypeChannelSettings<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeChannelSettingsSkeleton, Modifiers, Locales>;
