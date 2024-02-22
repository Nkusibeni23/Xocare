export default function AdditionalDetails() {
  return (
    <div className=" mx-auto max-w-screen-2xl">
      <p className="text-base text-gray-500 -mt-16 flex items-center text-center justify-center">
        Just a few more questions!
      </p>
      <div className="flex-1 justify-center items-center w-full bg-white mt-4">
        <div className="flex justify-between">
          <div className="mb-3">
            <span className="font-semibold cursor-pointer p-2">
              Write us a comment
            </span>
          </div>
        </div>
        <div className="relative">
          <textarea
            className="p-4 focus:outline-gray-700 focus:outline-offset-1 border-2 resize-none h-[120px] border-[#9EA5B1] rounded-lg w-[60vw] px-4"
            placeholder="Add your comment..."
          ></textarea>
          <span className="absolute top-5 text-gray-500 right-4">Optional</span>
        </div>
      </div>
    </div>
  );
}
