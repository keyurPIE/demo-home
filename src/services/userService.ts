import { db } from "@/lib/firebase";
import { doc, setDoc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";

// interface UserData {
//   name?: string | null;
//   email?: string | null;
//   createdAt?: Date;
// }

const COLLECTION = "users";

export const addUserData = async (uid: string, data: any) => {
  const ref = doc(db, COLLECTION, uid);
  return await setDoc(ref, data);
};

export const getUserData = async (uid: string) => {
  const ref = doc(db, COLLECTION, uid);
  const snapshot = await getDoc(ref);
  return snapshot.exists() ? snapshot.data() : null;
};

// export const addOrUpdateUserData = async (uid: string, data: any) => {
//   try {
//     await setDoc(doc(db, "users", uid), data, { merge: true });
//     console.log("✅ User data saved/updated");
//   } catch (error) {
//     console.error("❌ Error saving user data:", error);
//   }
// };

export const updateUserData = async (uid: string, newData: any) => {
  const ref = doc(db, COLLECTION, uid);
  return await updateDoc(ref, newData);
};

export const deleteUserData = async (uid: string) => {
  const ref = doc(db, COLLECTION, uid);
  return await deleteDoc(ref);
};
