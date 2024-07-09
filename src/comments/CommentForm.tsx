import Button from "@/ui/Button";

export default function CommentForm() {
  return (
    <form className="rounded-10px bg-white p-6">
      <h3 className="mb-6 text-h3">Add Comment</h3>

      <textarea
        rows={4}
        placeholder="Type your comment here"
        className="form-input text-body-4 placeholder:text-slate-300 p-4"
      ></textarea>

      <div className="mt-4 flex items-center justify-between">
        <span className="text-body-4 text-slate-500">250 Characters left</span>
        <Button type="submit" variant="purple">
          Post Comment
        </Button>
      </div>
    </form>
  );
}
