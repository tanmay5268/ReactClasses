import { useState } from "react";
import Transactions from "./Transactions";
// define states here 
const Balance = () => {
    const [balance, setBalance]=useState(0);
    const [income,setIncome]=useState(0);
    const [expense,setExpense]=useState(0);

    function onIncome(amount){
        setIncome(income+amount);
        setBalance(balance+amount);
    }
    function onExpense(amount){
        setExpense(expense+amount);
        setBalance(balance-amount);
    }
  return (
    <div className="flex flex-col items-center gap-5 text-white text-xl ">
      <p className="text-2xl mt-16">
        Balance <span className="font-bold">${balance}</span>
      </p>
      <div className="flex gap-5">
        <p className="text-2xl bg-green-700 p-4 rounded-lg">Income <span className="font-bold">${income}</span></p>
        <p className="text-2xl bg-red-700 p-4 rounded-lg">Expense <span className="font-bold">${expense}</span></p>
      </div>
        <Transactions onIncome={onIncome} onExpense={onExpense}></Transactions>
    </div>
  );
};

export default Balance;
