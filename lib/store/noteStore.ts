import { create } from 'zustand';
import { NewNoteData } from '@/types/note';

type NoteStore = {
    draft: NewNoteData;
    setDraft: (data: NewNoteData) => void;
    clearDraft: () => void;
};

const initialDraft: NewNoteData = {
  title: "",
  content: "",
  tag: "Todo",
};
 
export const useNoteDraft = create<NoteStore>()((set) => ({
  draft: initialDraft,
  setDraft: (data: NewNoteData) => set(() => ({draft: data,})),
  clearDraft: () => set({ draft: initialDraft }),
}));
