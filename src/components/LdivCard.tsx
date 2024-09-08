import { Svgs } from "./Svg";
interface LcardProps {
  title: string;
  desc: string;
  svg: keyof typeof Svgs;
}
export const LdivCard: React.FC<LcardProps> = ({ title, desc, svg }) => {
  const fname = Svgs[svg];
  return (
    <div>
      <div className="flex justify-start ">
        <div className="h-12 rounded-xl bg-gradient-to-br from-border-001 from-10% via-border-002 via-30% to-transparent to-90% pt-0.5 pl-0.5 w-12 flex justify-center items-center   mt-8 ml-7">
          <div className="   h-12 bg-rose-1100 w-12 rounded-xl flex  justify-center items-center absolute shadow-lg">
            {fname}
          </div>
        </div>
        <div className="mt-9 ml-3 ">
          <div className="text-xs text-neutral-400 font-light ">{title}</div>
          <div className="font-light text-sm mt-0.5 truncate w-[170px]">
            {desc}
          </div>
        </div>
      </div>
    </div>
  );
};
