import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../config/firebase-config"
import { useGetUserInfo } from "./useGetUser";

export const useAddTransaction = () => {
  const transactionCollectionRef = collection(db, "transactions");
  const { userId } = useGetUserInfo();
  const addTransaction = async ({
    description,
    transactionAmount,
    transactionType,
  }) => {
    await addDoc(transactionCollectionRef, {
      userID: userId || null,
      description:description,
      transactionAmount:transactionAmount,
      transactionType:transactionType,
      createdAt: serverTimestamp(),
    });
  };
  return { addTransaction };
};