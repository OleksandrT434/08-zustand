import { fetchNotes } from "@/lib/api";
import AppPage from "./Notes.client";

type Props = {
  params: Promise<{ slug: string[] }>;
};

const NotesByFilter = async ({ params }: Props) => {
  const { slug } = await params; 
  const tag = slug?.[0];

  const response = await fetchNotes(1, 12, '', undefined, tag === "All" ? undefined : tag);

  return (
    <div>
      <AppPage tag={tag} initialData={response} />
    </div>
  );
};

export default NotesByFilter;
