import { SkillHighlight } from "./SkillHighlight";

export function Resume() {
  return (
    <div className="transition ease-in  delay-150">
      <div className="text-white text-3xl font-semibold p-8  ">Resume</div>
      <div className="pl-8" style={{ marginTop: -15 }}>
        <div className="h-1.5 w-10 bg-gradient-to-r from-amber-300 to-orange-300 rounded-lg "></div>
      </div>
      <div className="text-white text-2xl font-semibold p-8">My Skills</div>
      <div style={{ marginTop: -35 }}>
        <div className="flex justify-start  mt-8 ml-7">
          {/* <div className=" relative h-56 w-full rounded-xl bg-gradient-to-br from-border-001 from-20% via-border-002 via-45% to-transparent to-90% pt-0.5 pl-0.5 flex justify-center items-center mr-7  mt-8 ml-7"> */}
          {/* <div className=" w-full h-56 bg-card-001  rounded-xl  absolute    gap-5 shadow-xl  mr-42 pt-7 pl-7 pr-1"> */}
          <div className="flex gap-5">
            <SkillHighlight prop={"JavaScript"} />
            <SkillHighlight prop={"TypeScript"} />
            <SkillHighlight prop={"Python"} />
            <SkillHighlight prop={"React.js"} />
            <SkillHighlight prop={"Express.js"} />
            <SkillHighlight prop={"Node.js"} />
            <SkillHighlight prop={"PostgreSQL"} />
          </div>
          {/* </div> */}
          {/* </div> */}
        </div>
        <div className="flex  justify-start  mt-4 ml-7 gap-5">
          <SkillHighlight prop={"MongoDB"} />
          <SkillHighlight prop={"Mongoose"} />
          <SkillHighlight prop={"Prisma"} />
          <SkillHighlight prop={"HTML5"} />
          <SkillHighlight prop={"CSS3"} />
          <SkillHighlight prop={"TailwindCSS"} />
          <SkillHighlight prop={"Serverless"} />
        </div>
        <div className="flex  justify-start  mt-4 ml-7 gap-5">
          <SkillHighlight prop={"AWS"} />
          <SkillHighlight prop={"Git"} />
          <SkillHighlight prop={"Docker"} />
          <SkillHighlight prop={"Postman"} />
        </div>
      </div>
      <div className="mt-10">
        <div className="flex gap-4">
          <div className="h-12 rounded-xl bg-gradient-to-br from-border-001 from-10% via-border-002 via-30% to-transparent to-90% pt-0.5 pl-0.5 w-12 flex justify-center items-center    ml-7">
            <div className=" h-12 bg-rose-1100 w-12 rounded-xl flex  justify-center items-center absolute shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="stroke-amber-200 absolute top-84"
                style={{ width: 19 }}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
                />
              </svg>
            </div>
          </div>
          <div className="text-white  text-2xl font-semibold mt-1">
            Experience
          </div>
        </div>
      </div>
      <div className="flex h-[35px] ml-[52px]">
        <div className="bg-stone-1000 w-0.5"></div>
        <div className="relative">
          <div className="h-4 w-4 bg-rose-1000 mt-[30px] ml-[-9px] pt-[2px] pl-[2px] absolute rounded-full">
            <div className="h-2 w-2 bg-amber-300 mt-[2px] ml-[2px] absolute rounded-full"></div>
          </div>
          <div className="ml-[40px] mt-[25px] text-white font-semibold  ">
            Tech Mahindra
          </div>
          <div className="ml-[40px] text-[#c4a857] font-normal  text-[15px] mt-2">
            Aug 2021 — Present
          </div>
          <div className="text-stone-300 text-[15px] ml-[40px] mt-1  pr-14">
            Developed and optimized responsive website components, ensuring high
            performance and cross-browser compatibility. Focused on delivering
            user-friendly interfaces and seamless user experiences.
          </div>
        </div>
      </div>

      <div className="mt-36">
        <div className="flex gap-4">
          <div className="h-12 rounded-xl bg-gradient-to-br from-border-001 from-10% via-border-002 via-30% to-transparent to-90% pt-0.5 pl-0.5 w-12 flex justify-center items-center    ml-7">
            <div className=" h-12 bg-rose-1100 w-12 rounded-xl flex  justify-center items-center absolute shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="stroke-amber-200 absolute top-84"
                style={{ width: 19 }}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                />
              </svg>
            </div>
          </div>
          <div className="text-white  text-2xl font-semibold mt-1">
            Education
          </div>
        </div>
      </div>
      <div className="flex h-[35px] ml-[52px] mb-32">
        <div className="bg-stone-1000 w-0.5"></div>
        <div className="relative">
          <div className="h-4 w-4 bg-rose-1000 mt-[30px] ml-[-9px] pt-[2px] pl-[2px] absolute rounded-full">
            <div className="h-2 w-2 bg-amber-300 mt-[2px] ml-[2px] absolute rounded-full"></div>
          </div>
          <div className="ml-[40px] mt-[25px] text-white font-semibold  ">
            Rashtrasant Tukadoji Maharaj Nagpur University
          </div>
          <div className="ml-[40px] mt-[5px] text-stone-300 font-semibold  text-[15px]">
            Bachelor of Engineering in Computer Technology
          </div>
          <div className="ml-[40px] text-[#c4a857] font-normal  text-[15px] mt-2">
            2016 — 2020
          </div>
          <div className="text-stone-300 text-[15px] ml-[40px] mt-1 pr-10">
            Graduated with a CGPA of 9.43, demonstrating academic excellence and
            a strong foundation in my field.
          </div>
        </div>
      </div>
      <div className="flex h-[40px] ml-[52px] mb-36">
        <div className="bg-stone-1000 w-0.5 mt-[-120px]"></div>
        <div className="relative">
          <div className="h-4 w-4 bg-rose-1000 mt-[30px] ml-[-9px] pt-[2px] pl-[2px] absolute rounded-full">
            <div className="h-2 w-2 bg-amber-300 mt-[2px] ml-[2px] absolute rounded-full"></div>
          </div>
          <div className="ml-[40px] mt-[25px] text-white font-semibold  ">
            Vijay Nimbalkar Jr. College
          </div>
          <div className="ml-[40px] mt-[5px] text-stone-300 font-semibold  text-[15px]">
            Higher Secondary School Certificate Examination
          </div>
          <div className="ml-[40px] text-[#c4a857] font-normal  text-[15px] mt-2">
            2015 — 2016
          </div>
          <div className="text-stone-300 text-[15px] ml-[40px] mt-1 pr-10">
            Completed Higher Secondary Certificate with a solid academic record.
          </div>
        </div>
      </div>
    </div>
  );
}
