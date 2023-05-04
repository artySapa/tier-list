import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export default function EntryPage(props) {
  const [entryContents, setEntryContents] = useState("");
  const [entries, setEntries] = useState([]);
  const [rank, setRank] = useState(0);

  const URL = "http://localhost:8080";

  const addPost = () => {
    if (entryContents === "") {
      console.log("Enter something!");
      return;
    }

    axios
      .post(URL + "/entries/new", {
        content: entryContents,
        rank: rank,
        timestamp: Date.now(),
      })
      .then((response) => {
        console.log(response);
      })
      .catch(console.error);
    
  };

  const getFeed = () => {
    axios
      .get(URL + "/entries")
      .then((response) => {
        setEntries(response.data);
      })
      .catch(console.error);
  };

  useEffect(() => {
    getFeed();
  }, [entries]);

  return (
    <div>
      <div>
        <input
          type="text"
          onChange={(e) => setEntryContents(e.target.value)}
          placeholder="Hello!"
          value={entryContents}
        />
        <button
          onClick={() => {
            addPost();
          }}
        >
          Post
        </button>
      </div>
      <div>
        {entries.map((post, index) => (
          <div key={index}>
            <p>{post.content}</p>
            <p>
              {post.rank} {post.timestamp}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
