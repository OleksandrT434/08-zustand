
import NoteForm from "@/components/NoteForm/NoteForm";
import css from "./CreateNote.module.css";

export default function CreateNote() {
  return (
    <main className={css.main}>
      <div className={css.container}>
        <h1 className={css.title}>Create note</h1>
        <NoteForm  />
      </div>
    </main>
  );
}

export async function generateMetadata() {
    return {
        title: 'Create note',
        description: 'Create a new note in NoteHub',
        url: 'https://notehub.com/notes/create',
        openGraph: {
            title: 'Create note',
            description: 'Create a new note in NoteHub',
            url: 'https://notehub.com/notes/create',
            images: [
                {
                    url: 'https://ac.goit.global/fullstack/react/notehub-og-meta.jpg',
                    width: 1200,
                    height: 630,
                    alt: 'Create note in NoteHub',
                }
            ]
        },
    }
}
