import { startTransition, useEffect, useOptimistic, useState } from "react";
import apiService from "./apiServices";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [inputVal, setInputVal] = useState("");
  const [loading, setLoading] = useState(false)
  const [optimisticComment, setOptimisticComment] = useOptimistic(comments, (prevComment, newComment) => {
    const isAlreadyAdded = prevComment.some(
      (c) => c.message === newComment.message && c.createdAt === newComment.createdAt
    );
    if (isAlreadyAdded) {
      return prevComment;
    }
    return [...prevComment, newComment];
  })
  useEffect(() => {
    const fetchComments = async () => {
      setLoading(true)
      try {
        const data = await apiService.getComments();
        setComments(data);
      } catch (error) {

      } finally {
        setLoading(false)
      }
    }
    fetchComments()
  }, [])

  const handleAddComment = async () => {
    const payload = {
      message: inputVal,
      createdAt: new Date().toISOString(),
      id: Date.now(),
      postId: 2,
      isValid: false,
    }
    setOptimisticComment(payload);
    try {
      await new Promise((r) => setTimeout(r, 2000));
      if (Math.random() < 0.5) throw new Error('Network Error Occured')
      const data = await apiService.addComment({ ...payload, isValid: true })

      setComments((prev) => (
        [...prev, data]
      ))

    } catch (error) {

    }
  }

  return (
    <div className="border-2 p-3" >
      <h2 className="text-2xl font-bold mb-4" >Comments</h2>
      {loading && <p>loading...</p>}

      {optimisticComment.map((comment) => (
        <div className="border p-4 mb-2 flex justify-between items-center" key={comment.id}>
          <div>
            <p>{comment.message}</p>
            <small>
              {comment.createdAt}
            </small>
          </div>
          {comment.isValid === false && (
            <span className="text-sm text-gray-500 italic">Loading comment...</span>
          )}
        </div>
      ))}

      <div className="mt-5 flex">
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          className="border-1 rounded-2xl p-2 mr-2"
          placeholder="Write Comment"
        />
        <div className="relative group inline-block">
          <button
            type="button"
            className="bg-blue-500 text-white p-2 rounded-2xl cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed pointer-events-none data-[enabled=true]:pointer-events-auto"
            disabled={inputVal.trim().length === 0}
            data-enabled={inputVal.trim().length > 0} // Helps manage pointer events smoothly
            onClick={() => { startTransition(handleAddComment); setInputVal(""); }}
          // onClick={handleAddComment}
          >
            Add Comment
          </button>

          {/* Tooltip text - Only shows on hover IF the button inside is disabled */}
          {inputVal.trim().length === 0 && (
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-800 text-white text-xs p-2 rounded whitespace-nowrap shadow-lg z-10">
              Please write a comment first
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

export default Comments;
