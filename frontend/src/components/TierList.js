import React from "react";

import { useState, useEffect } from "react";

import './TierList.css';

export default function TierList({ items }) {
  const [itemContent, setItemContent] = useState([]);
  const [tierList, setTierList] = useState([]);

  /* Retrieve items from the database array to further map them into divs */
  const getItems = () => {
    if (items.length === 0) {
      return;
    }

    const itemMap = {};
    for (let i = 0; i < items.length; i++) {
      const label = items[i].rank;
      const content = items[i].content;
      if (!itemMap[label]) {
        itemMap[label] = { label, items: [] };
      }
     itemMap[label].items.push(content);
    }

    const tempCont = Object.values(itemMap);
    setTierList(tempCont);
  };

  /* We only have to render the getItems() function when items array is changed, not all the time*/
  useEffect(() => {
    getItems();
  }, [items]);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {tierList.map((tier, index) => (
        <div
          key={index}
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            margin: "50px",
          }}
        >
          <h2>{tier.label}</h2>
          <div
            className="tier-row"
          >
            {tier.items.map((item, itemIndex) => (
              <div
                key={itemIndex}
                draggable
                className = "tier-square"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      ))}
      <div style={{ flex: 1 }}></div>
    </div>
  );
}
