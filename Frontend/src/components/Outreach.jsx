export default function Outreach() {
  return (
    <div className="px-4 sm:px-8 md:px-16 max-w-screen-3xl mx-auto bg-gradient-to-b from-stone-300 via-gray-100 to-white">
      <h2 className="text-2xl font-bold text-stone-900 text-center pt-8">
        Our Outreach
      </h2>
      <div className="flex flex-col sm:flex-row items-center justify-center text-center">
        <div className="flex flex-wrap justify-center items-center">
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
            <img
              src="https://lh3.googleusercontent.com/pw/ABLVV85IAZ2Y57wFX_ysGHevsgq6RKlSWKJKHGRELxbS65Tb6ognj8_BVPyfxl-KqOMawez4tG4gnl_FQh5E7Vz15H6kzN88kwVZSzybv5ZKpj5B43RYF-t4iFJJrNBuYiUb-oubVa_Z07NrDma92TkLon8=w1514-h1010-s-no-gm?authuser=0"
              alt=""
              className="w-full rounded-lg object-cover mb-3"
            />
            <h3 className="font-bold leading-6 mb-3 text-black">
              Enhancing Health and Well-being
            </h3>
            <p className=" text-sm lg:text-lg text-gray-700 font-medium">
              This is a custom image upload field. You can drag and drop or
              click to select an image from your computer, then it will be
              displayed here for you to review before submitting the form below.
              If you don &apos;t want any image, just leave this field blank.
            </p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
            <img
              src="https://lh3.googleusercontent.com/pw/ABLVV84TiUb7HwK8TeodEd2z2Bk5jxNaFyclIawI8gu8PFNOQdDg18hM5yS1wAUEO9SBSDiRHeID81ALzwaDCyC9CJKFRfwxaqia9fMAHeb33qbl3rW5CKqM4SBxUmQvuNUJUj5kiNgLoFPOE2dCa-1-JRQ=w1514-h1010-s-no-gm?authuser=0"
              alt=""
              className="w-full rounded-lg object-cover mb-3"
            />
            <h3 className="font-bold leading-6 mb-3 text-black">
              Empowerment Through Education
            </h3>
            <p className=" text-sm lg:text-lg text-gray-700 font-medium">
              The preview on the right shows what will be sent when the form is
              submitted. It includes both the uploaded file(s) as well as any
              other fields that are in the form. In this case, there &apos;s
              only one file input so far, but you could easily add more if
              needed.
            </p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
            <img
              src="https://lh3.googleusercontent.com/pw/ABLVV84PgTXkFfWZ0xz8JsoeL451pyGeUIz2__mVeHffqJQtOiVrM5OXwKQw29FiiZmHFM830iQUPhHdLyPBzjEExw2vyLEeROQmwomSFXMMEY8pI8Fix9b4OJNvAxbmksyxaL8JHGTQ3_ds7gu1eXVX3eU=w1514-h1010-s-no-gm?authuser=0"
              alt=""
              className="w-full rounded-lg object-cover mb-3"
            />
            <h3 className="font-bold leading-6 mb-3 text-black">
              Alleviating Hunger and Food Insecurity
            </h3>
            <p className=" text-sm lg:text-lg text-gray-700 font-medium">
              Note that the images are not actually saved anywhere by this
              component – they simply get passed through to whatever process is
              handling the form submission. They do, however, need to have
              unique names, otherwise, they will overwrite each other.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
