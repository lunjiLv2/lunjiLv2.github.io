import { getCollection, type CollectionEntry } from 'astro:content';

export const isPreviewBuild = import.meta.env.DEV || import.meta.env.INCLUDE_DRAFTS === 'true';

export async function getVisibleNotes() {
  const notes = await getCollection('notes', ({ data }) => !data.draft || isPreviewBuild);
  return notes.sort((a, b) => {
    const aDate = a.data.date?.getTime();
    const bDate = b.data.date?.getTime();
    if (aDate !== undefined && bDate !== undefined && aDate !== bDate) return bDate - aDate;
    if (aDate !== undefined && bDate === undefined) return -1;
    if (aDate === undefined && bDate !== undefined) return 1;
    return a.id < b.id ? -1 : a.id > b.id ? 1 : 0;
  });
}

export function getNoteHref(note: CollectionEntry<'notes'>) {
  return note.data.externalUrl ?? `/notes/${note.id}/`;
}

export function formatNoteDate(date: Date) {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC',
  }).format(date);
}
