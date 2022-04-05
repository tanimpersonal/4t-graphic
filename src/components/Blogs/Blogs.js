import React from "react";

const Blogs = () => {
  return (
    <div>
      <h1 className="flex justify-center my-10 font-extrabold text-5xl">Q/A</h1>
      <div className="first-question m-10 border-2 p-5">
        <h1>What is context API?</h1>
        <p>
          -Context api is a powerful tool from the react library. We know by
          default react data passing is unidirectional. It means we need to send
          data through one way. It is up to down flow. We can send data through
          props from upper component to lower components to use the data. But
          sometimes such method can be irritating. Which is props drilling. To
          avoid this rusty method we can use context api to create a common data
          and pass them through out all components simultaneously in a block!
        </p>
      </div>
      <div className="second-question m-10 border-2 p-5">
        <h1>What is symantic tag?</h1>
        <p>
          -There are some tags in HTML5 which does the same work like some other
          normal elements but carries some special meaning to the browser itself
          even the search engine also are symantic tags. Like we can do a header
          with 'div' but here we can use 'header'. Which is a symantic tag. Some
          symantic tags are 'article', 'section' etc. They do the work same but
          carries some information to the browser what exactly it is!
        </p>
      </div>
      <div className="third-question m-10 border-2 p-5">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Block
                </th>
                <th scope="col" className="px-6 py-3">
                  Inline
                </th>
                <th scope="col" className="px-6 py-3">
                  Inline-Block
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="px-6 py-4 ">Block elements take full width</td>
                <td className="px-6 py-4">
                  Inline elements takes only required width
                </td>
                <td className="px-6 py-4">
                  Inline block elements behaves like block but still takes
                  required width
                </td>
              </tr>
              <tr className="bg-white border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="px-6 py-4 ">
                  Block elements can use maximum kind of css properties
                </td>
                <td className="px-6 py-4">
                  Inline elements can't use some css property
                </td>
                <td className="px-6 py-4">
                  Inline block elements can take css properties like block but
                  not so much
                </td>
              </tr>
              <tr className="bg-white hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="px-6 py-4 ">
                  Block elements can take margin, padding
                </td>
                <td className="px-6 py-4">
                  Inline elements cant take margin padding
                </td>
                <td className="px-6 py-4">
                  Inline block can use margin and padding
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
