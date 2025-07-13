import { useState } from "react";
import NavBar from "../components/NavBar";
import { useEffect } from "react";
import NoteCard from "../components/NoteCard";
import baseUrl from "../lib/fetch";
import NotesNotFound from "../components/NotesNotFound";

const HomePage = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await fetch(`${baseUrl}/notes`);
        if (!response.ok) {
          throw new Error("Failed to fetch notes");
        }
        const data = await response.json();
        setNotes(data);
        console.log("Fetched notes:", data);
      } catch (error) {
        console.error("Error fetching notes:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchNotes();
  }, []);
  return (
    <div className="min-h-screen">
      <NavBar />
      {
        <div className="max-w-7xl mx-auto p=4 mt-6">
          {loading && (
            <div className="text-center text-primary py-10">
              Loading Notes.....
            </div>
          )}
          {notes.length === 0 && !loading && <NotesNotFound />}
          {notes.length > 0 && !loading && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {notes.map((note) => (
                <NoteCard key={note._id} note={note} setNotes={setNotes} />
              ))}
            </div>
          )}
        </div>
      }
    </div>
  );
};

export default HomePage;
