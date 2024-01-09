import type { ChainModifiers, Entry, EntryCollection, EntrySkeletonType } from 'contentful'

async function getEntry<
    TEntrySkeletonType extends EntrySkeletonType,
    TChainModifiers extends ChainModifiers = 'WITHOUT_UNRESOLVABLE_LINKS',
>(space: 'marketing' | 'masterdata', id: string, query: object): Promise<Entry<TEntrySkeletonType, TChainModifiers>> {
  const response = await fetch(
    'http://localhost:3000/api/contentful/entry',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        space,
        id,
      }),
    },
  )

  return await response.json()
}

async function getEntries<
    TEntrySkeletonType extends EntrySkeletonType,
    TChainModifiers extends ChainModifiers = 'WITHOUT_UNRESOLVABLE_LINKS',
>(space: 'marketing' | 'masterdata', query: object): Promise<EntryCollection<TEntrySkeletonType, TChainModifiers>> {
  const response = await fetch(
    'http://localhost:3000/api/contentful/entries',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        space,
      }),
    },
  )

  return await response.json()
}

export { getEntry, getEntries }
