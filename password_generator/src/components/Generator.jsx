import { Toggles } from "./Toggles";
import { useState } from "react";
import Button from "@mui/material/Button";
const Generator = () => {
const [passwordLength, setPasswordLength] = useState(8);
  const [uppercase, setUppercase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [specialChars, setSpecialChars] = useState(false);
  const [password,setPassword]= useState("")
  async function handleUppercase() {
    await setUppercase(!uppercase);
  }
  async function handleNumbers() {
    await setNumbers(!numbers);
  }
  async function handleSpecialChars() {
    await setSpecialChars(!specialChars);
  }
  async function generatePassword() {
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const specialCharsSet = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    let characterSet = lowercaseChars;
    if (uppercase) {
      characterSet += uppercaseChars;
    }
    if (numbers) {
      characterSet += numberChars;
    }
    if (specialChars) {
      characterSet += specialCharsSet;
    }
    let GeneratedPassword = "";
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * characterSet.length);
      GeneratedPassword += characterSet[randomIndex];
    }
    console.log(GeneratedPassword);
    await setPassword(GeneratedPassword);
  }
  return (
    <div className="h-fit flex text-2xl flex-col items-center justify-center-safe  w-120 rounded-lg bg-[#7b44ae]">
      <div className="w-full  px-1 py-2 justify-center flex gap-4">
        <label className="font-bold">Password Length:</label>
        <input
          className="w-15 h-full bg-[#8f47cf] ml-4"
          type="number"
          min={1}
          max={20}
          value={passwordLength}
          onChange={(e) => setPasswordLength(parseInt(e.target.value))}
        />
      </div>
      <Toggles
        Label="Include Uppercase"
        uppercase={uppercase}
        handleUppercase={handleUppercase}
      />
      <Toggles
        Label="hello Special Characters"
        uppercase={specialChars}
        handleUppercase={handleSpecialChars}
      />
      <Toggles
        Label="Include Numbers"
        uppercase={numbers}
        handleUppercase={handleNumbers}
      />
      <div onClick={generatePassword} className="mt-3 text-3xl">
        <Button variant="contained">
          <h1 className="text-xl font-bold">Generate Password</h1>
        </Button>
      </div>
          <div className="flex gap-4 mt-4 p-4">
            <h2 className="text-xl font-bold">Generated Password:</h2>
            <p className="text-lg">{password}</p>
          </div>
        
    </div>
  );
};

export default Generator;

