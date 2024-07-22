import { useState } from "react";

export function Contact() {
  const [click, setClick] = useState("");
  return (
    <div className="transition ease-in  delay-150">
      <div className="text-white text-3xl font-semibold p-8  ">Contact</div>
      <div className="pl-8" style={{ marginTop: -15 }}>
        <div className="h-1.5 w-10 bg-gradient-to-r from-amber-300 to-orange-300 rounded-lg "></div>
      </div>
      <div className="m-8 w-full  pr-16">
        <iframe
          className="w-full rounded-3xl grayscale invert"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119064.900275948!2d78.99010793294912!3d21.161225997003935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0a5a31faf13%3A0x19b37d06d0bb3e2b!2sNagpur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1720990478984!5m2!1sen!2sin"
          width="600"
          height="375"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className=" mt-[-5px] text-white  text-2xl font-semibold ml-8">
        Contact Form
      </div>
      <div className="xl:flex ml-8 gap-5 mt-5 pr-8">
        <div className="xl:w-1/2 w-full">
          <input
            onClick={function () {
              setClick("name");
            }}
            className={`h-14 w-full rounded-2xl bg-transparent border   text-base pl-5 text-neutral-400   outline-none ${
              click == "name" ? "border-highlight" : "border-stone-1000"
            }`}
            type="text"
            placeholder="Full name"
          />
        </div>
        <div className="xl:w-1/2 w-full mt-8 xl:mt-0">
          <input
            onClick={function () {
              setClick("email");
            }}
            className={`h-14 w-full rounded-2xl bg-transparent border   text-base pl-5 text-neutral-400 outline-none  ${
              click == "email" ? "border-highlight" : "border-stone-1000"
            }`}
            type="text"
            placeholder="Email address"
          />
        </div>
      </div>
      <div className="ml-8 mt-8 mb-36 mr-8">
        <textarea
          onClick={function () {
            setClick("msg");
          }}
          className={`h-28 w-full rounded-2xl bg-transparent border text-base pl-5  pt-3  text-neutral-400  outline-none   ${
            click == "msg" ? "border-highlight" : "border-stone-1000"
          }`}
          placeholder="Your Message"
        />
      </div>

      <div className="flex justify-end mt-[-110px] mb-10 mr-8">
        <div
          className="h-fit rounded-xl bg-gradient-to-br from-border-001 from-10% via-border-002 via-20% to-transparent to-90% pt-0.5 pl-0.5 w-fit   hover:from-highlight hover:from-5% 
          hover:via-[#c1a656] hover:via-20%  hover:to-border-002 hover:to-40%"
        >
          <button className="flex h-fit w-fit bg-rose-1100 p-4 rounded-xl gap-2 hover:bg-gradient-to-br hover:from-[#564b2b] hover:45% hover:to-rose-1100 hover:to-45%">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6 -rotate-12  stroke-rose-1100 fill-[#ffdb70]"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
              />
            </svg>
            <div className="text-[#ffdb70]">Send Message</div>
          </button>
        </div>
      </div>
    </div>
  );
}
