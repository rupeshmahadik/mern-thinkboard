import { PenSquareIcon, Trash2Icon } from "lucide-react";
import { Link } from "react-router";
import { formatDate } from "../lib/utils";
import baseUrl from "../lib/fetch";
import toast from "react-hot-toast";

const NoteCard = ({ note, setNotes }) => {
  const handleDelete = async (e, noteId) => {
    e.preventDefault();
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this note?"
    );
    if (!confirmDelete) return;
    try {
      const response = await fetch(`${baseUrl}/notes/${noteId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Failed to delete note");
      }
      const data = await response.json();
      console.log("Note deleted:", data);
      toast.success("Note deleted successfully");
      setNotes((prevNotes) => prevNotes.filter((note) => note._id !== noteId));
    } catch (error) {
      console.error("Error deleting note:", error);
      alert("Failed to delete note. Please try again.");
    }
  };
  return (
    <div>
      <Link
        to={`/note/${note._id}`}
        className="card bg-base-100 hover:shadow-lg transition-all duration-200 ease-in-out border border-t-4 border-solid border-[#00FF9D]"
      >
        <div className="card-body cursor-pointer">
          <h3 className="card-title text-base-content">{note.title}</h3>
          <p className="text-base-content/70 line-clamp-3">{note.content}</p>
          <div className="card-actions justify-between items-center mt-4">
            <span className="text-sm text-base-content/60">
              {formatDate(new Date(note.createdAt))}
            </span>
            <div className="flex items-center gap-1">
              <button className="btn btn-ghost btn-xs text-error">
                <PenSquareIcon className="size-5 text-primary" />
              </button>
              <button
                className="btn btn-ghost btn-xs text-error"
                onClick={(e) => {
                  handleDelete(e, note._id);
                }}
              >
                <Trash2Icon className="size-5" />
              </button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default NoteCard;
