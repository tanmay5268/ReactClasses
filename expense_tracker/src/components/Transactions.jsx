// takes functoins as props and perform related tasks with it
import {  useState } from "react";
const Transactions = ({ onIncome, onExpense }) => {
  const [menu, setMenu] = useState(false);
  const [data,setData]=useState([]);
  const [amount,setAmount]=useState();
  const [title,settitle]=useState("");
  const [type,setType]=useState("expense");

  return (
    <div>
      <div className="mt-6 flex flex-col items-center">
        <button
          onClick={() => {
            setMenu(!menu);
          }}
          className="p-3 rounded-lg bg-black text-white"
        >
          Add Transaction
        </button>
        {menu && (
          <div className="flex items-center justify-center mt-5">
            <div className="flex flex-col gap-3">
                <input value={amount} type="number" placeholder="how much??" required className="p-2 border rounded-xl"/>
                <input value={title} type="text" placeholder="kaha se aya pesa??" className="p-2 border rounded-xl"/>
                <select value={type} name="type" className="p-2 bg-neutral-500 border rounded-xl text-white">
                  <option value="income">Income</option>
                  <option value="expense">Expense</option>
                </select>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Transactions;
