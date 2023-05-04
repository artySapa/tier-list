import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import TierList from "./TierList";
import './EntryPage.css';

import Button from "@mui/material/Button";

export default function EntryPage(props) {
  const [entryContents, setEntryContents] = useState("");
  const [entries, setEntries] = useState([]);
  const [rank, setRank] = useState("");

  const URL = "http://localhost:8080";

  const addPost = () => {
    if (rank === "" ) {
      alert("Enter something!");
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
      setRank("");
      setEntryContents("");
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
    <div className="Linput-Rtiers">
      <div>
        <div className="input-button">
        <input
          type="text"
          onChange={(e) => setEntryContents(e.target.value)}
          placeholder="Give a name"
          className="input-box"
          value={entryContents}
        />
        <input
          type="text"
          onChange={(e) => setRank(e.target.value)}
          placeholder="Set the tier"
          className="input-box"
          value={rank}
        />
        <Button variant = "filled" sx={{margin: "15px", background: "linear-gradient(45deg, rgb(255, 0, 157), rgb(255, 157, 0))"}} onClick={() => {
            addPost();
          }}>
            Post
        </Button>
        </div>
      </div>
        <div>
            <TierList items = {entries}/>
        </div>
    </div>
  );
}
