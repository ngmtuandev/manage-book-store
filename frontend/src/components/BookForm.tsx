import React, { useRef, useState } from "react";
import { useTag } from "../hooks/useTag";
import { useBook } from "../hooks/useBook";
import { useForm, Controller } from "react-hook-form";
import useBookStore from "../store-zustand/book";
const BookForm = () => {
  const { tags } = useTag();
  console.log("tags >>>", tags);
  const { addBook, updateBook } = useBook();
  const [tagList, setTagList] = useState<string[]>([]);
  const { handleSubmit, control, reset, getValues } = useForm();

  const bookSelect = useBookStore((state) => state.slectBook);
  console.log("bookSelect >>>", bookSelect);

  const handleSubmitBook = async () => {
    // console.log("control >>>>", control);
    if (bookSelect) {
      const data = getValues();
      await updateBook(bookSelect?.id, {
        ...data,
        price: +data.price,
        tags: tagList,
      });
    } else {
      const data = getValues();
      console.log("tagList>>", tagList);
      addBook.mutate({ ...data, price: +data.price, tags: tagList });
    }
  };
  return (
    <div className="p-4">
      <h3 className="text-[24px] font-bold">Book Form</h3>
      <div>
        <form>
          <div className="flex flex-col">
            <label>Book Name</label>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <input
                  className="outline-none h-[30px] mt-1 px-4 rounded-xl"
                  placeholder="Book Name"
                  defaultValue={bookSelect && bookSelect.name}
                  {...field}
                />
              )}
            ></Controller>
          </div>
          <div className="flex flex-col">
            <label>Description</label>
            <Controller
              name="description"
              control={control}
              render={({ field }) => (
                <input
                  className="outline-none h-[30px] mt-1 px-4 rounded-xl"
                  placeholder="Book Desc dsadsad"
                  defaultValue={bookSelect && bookSelect.description}
                  {...field}
                />
              )}
            ></Controller>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col">
              <label>Book Price</label>
              <Controller
                name="price"
                control={control}
                render={({ field }) => (
                  <input
                    className="outline-none h-[30px] mt-1 px-4 rounded-xl"
                    placeholder="Book Name đá"
                    defaultValue={bookSelect && bookSelect.price}
                    {...field}
                  />
                )}
              ></Controller>
            </div>
            {/* <div className="flex flex-col">
              <label>Description</label>
              
            </div> */}
          </div>
          <div className="flex flex-col">
            <label>Author</label>
            <Controller
              name="author"
              control={control}
              render={({ field }) => (
                <input
                  className="outline-none h-[30px] mt-1 px-4 rounded-xl"
                  placeholder="Book Author"
                  defaultValue={bookSelect && bookSelect.author}
                  {...field}
                />
              )}
            ></Controller>
          </div>
          <div className="flex flex-col">
            <label>Year</label>
            <Controller
              name="publicationDate"
              control={control}
              render={({ field }) => (
                <input
                  className="outline-none h-[30px] mt-1 px-4 rounded-xl"
                  placeholder="Book Year"
                  defaultValue={bookSelect && bookSelect.publicationDate}
                  {...field}
                />
              )}
            ></Controller>
          </div>
        </form>
      </div>
      <div className="flex mt-4 flex-wrap">
        {tags.map((item, index) => {
          return (
            <div
              onClick={() => {
                setTagList((tagList) => [...tagList, item.id]);
              }}
              key={index}
              className={`text-white mr-3 mb-3 min-w-[100px] h-[25px] bg-red-600
            rounded-2xl flex justify-center items-center cursor-pointer hover:bg-opacity-80`}
            >
              <span>{item?.name}</span>
            </div>
          );
        })}
      </div>
      <div>
        <button className="w-[150px] h-[40px] bg-pink-600 rounded-xl text-gray-50 font-bold">
          Cancel
        </button>
        <button
          onClick={handleSubmit(handleSubmitBook)}
          className="w-[150px] ml-4 h-[40px] bg-purple-700 rounded-xl text-gray-50 font-bold"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default BookForm;
