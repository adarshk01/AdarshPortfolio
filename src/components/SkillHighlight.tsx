interface ChildComponentProps {
  prop: string;
}
export function SkillHighlight({ prop }: ChildComponentProps) {
  return (
    <div>
      <div className="text-white h-fit bg-navi-001 w-fit p-1 px-2 rounded-lg cursor-pointer  hover:bg-gradient-to-br from-highlight to-orange-300 hover:text-stone-900 font-semibold">
        {prop}
      </div>
    </div>
  );
}
