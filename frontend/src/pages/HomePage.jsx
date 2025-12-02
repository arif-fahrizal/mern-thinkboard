import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import RateLimited from "../components/RateLimited";
import NoteCard from "../components/NoteCard";
import api from "../lib/axios";
import NotesNotFound from "../components/NotesNotFound";
import Loading from "../components/Loading";

export default function HomePage() {
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const { data } = await api.get("/notes");
        setNotes(data.notes);
        setIsRateLimited(false);
      } catch (error) {
        console.error("Error fetching notes", error);
        if (error.response.status === 429) {
          setIsRateLimited(true);
        } else {
          toast.error("Failed to load notes");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchNotes();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="max-w-7xl mx-auto mt-6 p-4">
        {loading && <Loading />}
        {notes.length === 0 && !isRateLimited && !loading && <NotesNotFound />}

        {notes.length > 0 && !isRateLimited && !loading && (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {notes.map((note) => (
              <NoteCard key={note._id} note={note} setNotes={setNotes} />
            ))}
          </div>
        )}
      </div>

      {isRateLimited && <RateLimited />}
    </div>
  );
}
