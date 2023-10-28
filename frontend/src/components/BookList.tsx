import React, { useState } from "react";
import { useBook } from "../hooks/useBook";
import BookItem from "./BookItem";
import TagForm from "./TagForm";
import BookForm from "./BookForm";
import { Case, Else, If, Switch, Then } from "react-if";
const BookList = () => {
  const [form, setForm] = useState(null);
  const { data } = useBook();

  const handleSetForm = (form) => {
    console.log("check form >>", form);
    setForm(form);
  };

  return (
    <div>
      <div className="flex mt-4">
        <div className=" mx-4 w-[140px] justify-center items-center flex shadow-xl mr-4 text-white h-[30px] bg-green-500 rounded-md">
          <button onClick={() => handleSetForm("tag")}>Create New Tag</button>
        </div>
        <div className=" mx-4 w-[140px] justify-center items-center flex shadow-xl mr-4 text-white h-[30px] bg-yellow-500 rounded-md">
          <button onClick={() => handleSetForm("book")}>Create New Book</button>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-7">
          {data?.map((item, index) => {
            return (
              <div key={index}>
                <BookItem handleSetForm={handleSetForm} data={item}></BookItem>
              </div>
            );
          })}
        </div>
        <div className="col-span-4 space-y-2 mt-4">
          {
            <Switch>
              <Case condition={form === "tag"}>
                <TagForm></TagForm>
              </Case>
              <Case condition={form === "book"}>
                <div className="w-[500px] p-2 bg-slate-300 rounded-xl shadow-xl">
                  <BookForm></BookForm>
                </div>
              </Case>
            </Switch>
          }
        </div>
      </div>
    </div>
  );
};

export default BookList;
