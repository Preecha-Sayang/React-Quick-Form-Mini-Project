/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import movies from "../data/data";

function Pform() {
  const [names, isnames] = useState("");
  const [emails, isemails] = useState("");
  const [like, islike] = useState("");
  const [comments, iscomments] = useState("");
  const [error, iserror] = useState({});

  function handsubmit(e) {
    e.preventDefault();
    const newerror = {};

    if (!names.trim()) newerror.names = "โปรดใส่ชื่อของคุณ";
    if (!emails.trim()) {
      newerror.emails = "โปรดใส่อีเมลของคุณ";
    } else {
      const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!pattern.test(emails))
        newerror.emails = "รูปแบบอีเมลไม่ถูกต้อง";
    }
    if (!like.trim()) newerror.like = "กรุณาเลือกหนังที่คุณชอบ";

    iserror(newerror);

    if (Object.keys(newerror).length === 0) {
      const productData = {
        Name: names,
        Email: emails,
        FavoriteMovie: like,
        ...(comments.trim() ? { Comment: comments } : {}),
      };
      alert(JSON.stringify(productData, null, 4));
    }
  }

  return (
    <form
      className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md flex flex-col gap-6"
    >
      <label className="flex flex-col gap-2">
        <span className="font-semibold text-gray-700">Name</span>
        <input
          type="text"
          placeholder="Enter your name"
          value={names}
          onChange={(e) => isnames(e.target.value)}
          className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {error.names && <span className="text-red-500">{error.names}</span>}
      </label>

      <label className="flex flex-col gap-2">
        <span className="font-semibold text-gray-700">Email</span>
        <input
          type="text"
          placeholder="Enter your email"
          value={emails}
          onChange={(e) => isemails(e.target.value)}
          className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {error.emails && <span className="text-red-500">{error.emails}</span>}
      </label>

      <div className="flex flex-col gap-2">
        <span className="font-semibold text-gray-700">Favorite Movie</span>
        {movies.map((item) => (
          <label key={item.title} className="flex items-center gap-2">
            <input
              type="radio"
              name="option"
              value={item.title}
              checked={like === item.title}
              onChange={(e) => islike(e.target.value)}
              className="accent-blue-400"
            />
            <span className="text-gray-700">
              {item.title} ({item.year}) - {item.director}
            </span>
          </label>
        ))}
        {error.like && <span className="text-red-500">{error.like}</span>}
      </div>

      <label className="flex flex-col gap-2">
        <span className="font-semibold text-gray-700">Comment</span>
        <textarea
          value={comments}
          onChange={(e) => iscomments(e.target.value)}
          className="border border-gray-300 rounded-md p-2 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Write your comment here..."
        />
      </label>

      <div className="flex gap-4 justify-end">
        <button
          type="submit"
          onClick={handsubmit}
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 transition"
        >
          Submit
        </button>
        <button
          type="button"
          onClick={() => {
            isnames("");
            isemails("");
            islike("");
            iscomments("");
            iserror({});
          }}
          className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-md hover:bg-gray-400 transition"
        >
          Reset
        </button>
      </div>
    </form>
  );
}

export default Pform;