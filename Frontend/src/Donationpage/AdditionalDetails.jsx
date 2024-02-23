export default function AdditionalDetails() {
  return (
    <div className="">
      <p className="text-base text-gray-500 -mt-16 flex items-center text-center justify-center">
        Just a few more questions!
      </p>
      <div className="mt-6 block">
        <label className="block font-medium p-2">Write us a comment</label>
        <textarea
          className="border-2 focus:outline-4 focus:outline-gray-800 rounded-xl border-gray-500 p-4 placeholder:text-gray-500 text-gray-950 transition-all duration-300 focus:shadow-lg"
          placeholder="Just a few more questions..."
          rows="5"
          cols="80"
        />
        <div className="relative">
          <span className="absolute bottom-28 right-8 text-gray-500">
            Optional
          </span>
        </div>
      </div>
    </div>
  );
}
