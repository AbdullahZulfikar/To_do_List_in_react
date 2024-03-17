import {useGetUserInfo} from "../../customs/hooks/useGetUser"
import {useAddTransaction} from "../../customs/hooks/useAddTransaction"
import {TransactionTable} from "../components/form"
import {useState} from "react"
import {useProfileDropdown} from "../components/useProfileDropDown.js"
import { useGetTransactions } from "../../customs/hooks/useGetTransaction"; 

export const ExpenseTracker = () => {
    const {addTransaction} = useAddTransaction()
    const [description, setDescription] = useState("")
    const [Amount, setAmount] = useState(0)
    const [TransactionType, setType] = useState("expense")
    const {Profile, name} = useGetUserInfo()
    const {ProfileDropdown} = useProfileDropdown(Profile)

    const {transactionTotals} = useGetTransactions()

    const {balance,expenses, income} = transactionTotals;

    const onSubmit = (e) => {
        e.preventDefault()
        addTransaction({description:description, transactionAmount:Amount, transactionType:TransactionType});
        setDescription("")
        setAmount("")
    }
    return(
        <>
        <div>
            <div className="flex justify-center  rounded shadow-lg mt-6 mb-6 pb-3 static">
                <h1 className="font-bold  text-3xl pl-16">Expense Tracker</h1>
                <p className="text-red-600 pl-1">Track down your Expenses</p>
                {/* <img src={Profile} alt="" className="flex justify-end h-8 w-8 shadow-2xl rounded-full absolute right-3 border-2 border-sky-500 "/> */}
                <ProfileDropdown/>
                <h1 className="absolute right-14 underline decoration-solid font-semibold shadow-lg shadow-cyan-500/50 ">{name}</h1>
                
            </div>
            
            <div className="flex justify-center ">
                <h1 className="font-xl font-semibold">Expense Tracker</h1>
                <h3 className="pl-2 text-gray-600">{balance >= 0 ? balance : - (balance * - 1)}$</h3>
            </div>
            <div className="flex justify-center pt-5">
                <h4>Income</h4>
                <h3 className="pl-2 text-gray-600">{income}$</h3>
            </div>

            <div className="flex justify-center pt-5">
                <h4>Expense</h4>
                <h3 className="pl-2 text-gray-600">{expenses}$</h3>
            </div>
            <div>
                <form className=" flex justify-center py-3" onSubmit={onSubmit}>
                    <input className="border-2 hover:border-cyan-500 rounded-lg" type="text" placeholder="Description" value={description}  onChange={(e) => setDescription(e.target.value)} required/>
                    <input className="border-2 hover:border-cyan-500 rounded-lg" type="number" placeholder="Amount" value={Amount} onChange={(e) =>  setAmount(e.target.value)} required/>
                    <input type="radio" id="Expense" value="expense" onChange={(e) => setType(e.target.value)} checked={TransactionType === "expense"}/>
                    <label htmlFor="Expense">Expense</label>
                    <input type="radio" id="income" value="income" onChange={(e) => setType(e.target.value)} checked={TransactionType === "income"}/>
                    <label htmlFor="income">Income</label>
                    <button className=" text-white font-bold py-2 px-4 rounded-lg transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300" type="Submit">Add Transaction</button>
                </form>
            </div>
            <div className="text-center font-semibold">
                <h1 className="italic underline decoration-solid  text-2xl">{name}'s Data</h1>
                <TransactionTable/>
            </div>
        </div>
        </>
        

    )
}