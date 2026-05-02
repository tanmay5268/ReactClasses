import Switch from "react-switch"
export const Toggles = ({Label,uppercase, handleUppercase}) => {
  return (
        <div className=" px-2 w-full justify-between flex gap-4">
        <label className="font-bold">{Label || "false"}</label>
        <Switch
          checked={uppercase}
          onChange={handleUppercase}
        />
      </div>
  )
}
