export default function AdditionalDetails() {
  return (
    <div className="">
      <p className="text-base text-gray-500 -mt-16 flex items-center text-center justify-center">
        Just a few more questions!
      </p>
      <div className="mb-1 mt-6 block">
        <label className="block font-semibold cursor-pointer p-2">
          Write us a comment
        </label>
        <textarea
          className=" border focus:outline-2 focus:outline-gray-600 rounded-lg border-gray-500 p-4 placeholder:text-gray-500 text-gray-950 transition-all duration-300"
          placeholder="Just a few more questions for details here..."
          rows="5"
          cols="70"
        />
      </div>
    </div>
  );
}
