import { ChangeEvent, ChangeEventHandler, useEffect, useState } from "react";

type SwitchProps = {
  onChange?: ChangeEventHandler;
  checked?: boolean;
};

export default function Switch(props: SwitchProps) {
  const [isSelected, setSelected] = useState(false);

  useEffect(() => {
    if (props.checked) setSelected(props.checked);
  }, [props.checked]);

  const fgActiveClass = () => {
    if (isSelected) return "translate-x-full bg-blue-500 shadow-blue-500/50";
    return "bg-slate-500 shadow-slate-500/50";
  };

  const bgActiveClass = () => {
    if (isSelected) return "bg-blue-300";
    return "bg-slate-300";
  };

  const changeHandler = (event: ChangeEvent) => {
    setSelected(!isSelected);
    if (props.onChange) props.onChange(event);
  };

  return (
    <label>
      <div
        className={`h-4 w-8 transition ease inline-block relative rounded-full align-middle ${bgActiveClass()}`}
      >
        <input
          type="checkbox"
          className="hidden"
          checked={isSelected}
          onChange={(event) => changeHandler(event)}
        />
        <div
          className={`shadow-lg absolute transition ease w-4 h-4 rounded-full left-0 top-0 ${fgActiveClass()}`}
        ></div>
      </div>
    </label>
  );
}
