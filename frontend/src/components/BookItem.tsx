import React from "react";
import { useBook } from "../hooks/useBook";
import useBookStore from "../store-zustand/book";
const BookItem = (data, handleSetForm) => {
  console.log("data?.data?.tags.length  >>>>>", data?.data?.tags[2]?.name);
  const { deleteBook } = useBook();
  const { setSelectBook } = useBookStore();
  const handleDelete = () => {
    deleteBook.mutate(data?.data?.id);
  };

  return (
    <div className="w-[60%] h-[250px] bg-gray-300 my-5 ml-3 pl-4 pt-4 rounded-xl">
      <p>Name: {data?.data.name}</p>
      <p>Description: {data?.data.description}</p>
      <p>Price: {data?.data.price}</p>
      <p>Author: {data?.data.author}</p>
      <div className="mt-2 w-[100%] flex">
        {data?.data?.tags?.map((item, index) => {
          return (
            <div
              className={`text-white mr-3 w-[100px] h-[30px] bg-red-600 rounded-2xl flex justify-center items-center`}
              key={index}
            >
              <span className="text-[13px]">{item?.name}</span>
            </div>
          );
        })}
      </div>
      <div className="my-3">
        <button
          onClick={handleDelete}
          className="w-[100px] shadow-xl mr-4 text-white h-[30px] bg-green-500 rounded-md"
        >
          Delete
        </button>
        <button
          onClick={() => {
            setSelectBook(data?.data);
            handleSetForm("book");
          }}
          className="w-[100px] shadow-xl h-[30px] text-white bg-pink-500 rounded-md"
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default BookItem;
