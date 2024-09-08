import memoji from "../assets/Memoji.png";
import { LdivCard } from "./LdivCard";

export function Ldiv() {
  return (
    <div
      className="text-white   font-poppins auto-rows-fr xl:h-[500px] "
      // style={{ height: "500px" }}
    >
      <div className=" flex  justify-start  lg:block">
        <div className="lg:flex lg:justify-center lg:mt-16 p-4 lg:p-0">
          <div className="bg-gradient-to-br from-rose-900 to-rose-950 lg:h-36 lg:w-[138px] rounded-3xl xl:pt-3 pt-2 h-[80px] w-full flex justify-center">
            <img className="lg:h-36 h-20 " src={memoji} alt="" />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div>
            <div className="lg:flex lg:justify-center lg:mt-5 lg:text-2xl font-medium  ">
              Adarsh Kamble
            </div>
            <div className="bg-rose-1050 lg:mx-18 flex justify-center mt-4 rounded-lg text-xs py-1.5 lg:px-4  whitespace-nowrap">
              Web developer
            </div>
          </div>
        </div>
      </div>
      <div className="bg-stone-1000 h-0.5 rounded-full mx-7 mt-8"></div>
      <div>
        <LdivCard
          title={"EMAIL"}
          desc={"adarshkamble01@gmail.com"}
          svg={"email"}
        />

        <LdivCard title={"PHONE"} desc={"+91 8793112422"} svg={"phone"} />

        <LdivCard title={"BIRTHDAY"} desc={"Sept 04, 1998"} svg={"calender"} />

        <LdivCard
          title={"LOCATION"}
          desc={"Nagpur, MH, India"}
          svg={"location"}
        />
      </div>
      <div className="mt-7   gap-4 flex justify-center">
        <div>
          <a
            href="https://www.linkedin.com/in/adarsh-kamble-98ba6b18a/"
            target="_blank"
          >
            <svg
              enableBackground="new 0 0 56.693 56.693"
              height="56.693px"
              id="Layer_1"
              version="1.1"
              viewBox="0 0 56.693 56.693"
              width="56.693px"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              className="h-[18px] w-[18px] stroke-[#9f9f9f]  text-[#9f9f9f] fill-current cursor-pointer hover:text-[#cecece]"
            >
              <g>
                <path d="M30.071,27.101v-0.077c-0.016,0.026-0.033,0.052-0.05,0.077H30.071z" />
                <path d="M49.265,4.667H7.145c-2.016,0-3.651,1.596-3.651,3.563v42.613c0,1.966,1.635,3.562,3.651,3.562h42.12   c2.019,0,3.654-1.597,3.654-3.562V8.23C52.919,6.262,51.283,4.667,49.265,4.667z M18.475,46.304h-7.465V23.845h7.465V46.304z    M14.743,20.777h-0.05c-2.504,0-4.124-1.725-4.124-3.88c0-2.203,1.67-3.88,4.223-3.88c2.554,0,4.125,1.677,4.175,3.88   C18.967,19.052,17.345,20.777,14.743,20.777z M45.394,46.304h-7.465V34.286c0-3.018-1.08-5.078-3.781-5.078   c-2.062,0-3.29,1.389-3.831,2.731c-0.197,0.479-0.245,1.149-0.245,1.821v12.543h-7.465c0,0,0.098-20.354,0-22.459h7.465v3.179   c0.992-1.53,2.766-3.709,6.729-3.709c4.911,0,8.594,3.211,8.594,10.11V46.304z" />
              </g>
            </svg>
          </a>
        </div>
        <div>
          <a href="https://x.com/adarsh_k01" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1200"
              height="1227"
              viewBox="0 0 1200 1227"
              fill="none"
              className="h-[16px] w-[16px] stroke-[#9f9f9f]  text-[#9f9f9f] fill-current  cursor-pointer hover:text-[#cecece]"
            >
              <g clipPath="url(#clip0_1_2)">
                <path
                  d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
                  fill="[#9f9f9f]"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_2">
                  <rect width="1200" height="1227" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </a>
        </div>
        <div>
          <a href="https://www.instagram.com/adarshkamble01/" target="_blank">
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 56.7 56.7"
              enableBackground="new 0 0 56.7 56.7"
              xmlSpace="preserve"
              className="h-[18px] w-[18px] stroke-[#9f9f9f]  text-[#9f9f9f] fill-current  cursor-pointer hover:text-[#cecece]"
            >
              <g>
                <path
                  d="M28.2,16.7c-7,0-12.8,5.7-12.8,12.8s5.7,12.8,12.8,12.8S41,36.5,41,29.5S35.2,16.7,28.2,16.7z M28.2,37.7
		c-4.5,0-8.2-3.7-8.2-8.2s3.7-8.2,8.2-8.2s8.2,3.7,8.2,8.2S32.7,37.7,28.2,37.7z"
                />
                <circle cx="41.5" cy="16.4" r="2.9" />
                <path
                  d="M49,8.9c-2.6-2.7-6.3-4.1-10.5-4.1H17.9c-8.7,0-14.5,5.8-14.5,14.5v20.5c0,4.3,1.4,8,4.2,10.7c2.7,2.6,6.3,3.9,10.4,3.9
		h20.4c4.3,0,7.9-1.4,10.5-3.9c2.7-2.6,4.1-6.3,4.1-10.6V19.3C53,15.1,51.6,11.5,49,8.9z M48.6,39.9c0,3.1-1.1,5.6-2.9,7.3
		s-4.3,2.6-7.3,2.6H18c-3,0-5.5-0.9-7.3-2.6C8.9,45.4,8,42.9,8,39.8V19.3c0-3,0.9-5.5,2.7-7.3c1.7-1.7,4.3-2.6,7.3-2.6h20.6
		c3,0,5.5,0.9,7.3,2.7c1.7,1.8,2.7,4.3,2.7,7.2V39.9L48.6,39.9z"
                />
              </g>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
