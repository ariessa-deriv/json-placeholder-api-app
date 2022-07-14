import React from "react";
import commentService from "../services/comments";

const GetRequestByID = () => {
  const [comment, setComment] = React.useState([]);
  const regInput = React.useRef(null);

  const getCommentById = () => {
    const inputValue = regInput.current.value;

    commentService.getSingleton(inputValue).then((initialComment) => {
      setComment(initialComment);
    });
  };
  return (
    <>
      <div className="min-h-full flex flex-col space-y-28 items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-lg w-full space-y-32 divide-y divide-dashed divide-gray-400">
          <div className="max-w-md w-full space-y-8">
            <div>
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Get Comment by ID
              </h2>
            </div>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="name" className="sr-only">
                  ID
                </label>
                <input
                  id="id"
                  name="id"
                  type="id"
                  ref={regInput}
                  autoComplete="id"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="ID"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={getCommentById}
              >
                Send Request
              </button>
            </div>
          </div>
          <div className="max-w-md w-full space-y-8 flex flex-col items-center justify-center">
            <h3 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Response
            </h3>
            <div className="block p-6 w-full bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <p
                style={{ whitespace: "normal" }}
                className="font-normal text-gray-700 dark:text-gray-400"
              >
                {JSON.stringify(comment, null, 2)}
              </p>
            </div>

            {/* {comments.map((item, index) => {
              console.log(item);
              return (
                <div
                  key={index}
                  className="block p-6 w-full bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                >
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    {JSON.stringify(item, null, 4)}
                  </p>
                </div>
              );
            })} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default GetRequestByID;
