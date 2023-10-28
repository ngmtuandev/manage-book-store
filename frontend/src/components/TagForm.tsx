import React from "react";
import useTagStore from "../store-zustand/tag";
const TagForm = () => {
  const tagsAll = useTagStore((state) => state.tags);
  console.log("tagsAll", tagsAll);
  return <div>TagForm</div>;
};

export default TagForm;
