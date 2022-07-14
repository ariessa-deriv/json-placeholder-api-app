import React from "react";
import commentService from "../../services/comments";

const FormPost = () => {
  const [response, setResponse] = React.useState([]);
  const nameInput = React.useRef(null);
  const emailInput = React.useRef(null);
  const bodyInput = React.useRef(null);

  const addNewComment = () => {
    const nameInputValue = nameInput.current.value;
    const emailInputValue = emailInput.current.value;
    const bodyInputValue = bodyInput.current.value;

    const commentObject = {
      name: nameInputValue,
      email: emailInputValue,
      body: bodyInputValue,
    };

    commentService.create(commentObject).then((initialComment) => {
      setResponse(initialComment);
    });
  };
  return (
    <>
      <div className="min-h-full flex flex-col items-center space-y-28 justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-lg w-full space-y-32 divide-y divide-dashed divide-gray-400">
          <div className="max-w-md w-full space-y-8">
            <div>
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Add Comment
              </h2>
            </div>

            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <input
                  ref={nameInput}
                  id="name"
                  name="name"
                  type="name"
                  autoComplete="name"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Name"
                />
              </div>
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  ref={emailInput}
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="comment" className="sr-only">
                  Comment
                </label>
                <input
                  ref={bodyInput}
                  id="comment"
                  name="comment"
                  type="comment"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Comment"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={addNewComment}
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
                {JSON.stringify(response, null, 2)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormPost;
