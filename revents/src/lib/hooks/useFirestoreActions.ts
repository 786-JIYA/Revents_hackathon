// import type {DocumentData} from "firebase/firestore";
// import  {collection,deleteDoc,doc,setDoc,updateDoc} from "firebase/firestore";
// import {db} from "../firebase/firebase";
// import {useState} from "react";

// type Options={
//     path:string
// }

// export const useFirestoreActions = <T extends DocumentData>({path}:Options)=>{
  
//     const [submitting , setSubmitting] =useState(false);

//     const create = async (data:T)=>{

//         try{
//             const ref =doc(collection(db,path));
//             await setDoc(ref,data);
//             return ref;

//         }catch(error){
//             console.log(error);
//             throw error;
//         }
//     }

//     const update = async (id: string, data: T) => {
//         setSubmitting(true);
//   try {
//     const ref = doc(db, path, id);  
//     await updateDoc(ref, data);     
//   } catch (error) {
//     console.log(error);
//     throw error;
//   }
// };


//      const remove = async (id:string )=>{
//       setSubmitting(true);
//         try{
//             const ref =doc(db,path,id);
//             await deleteDoc(ref);
           

//         }catch(error){
//             console.log(error);
//             throw error;
//         } finally{
//             setSubmitting(false);
//         }
//     }

//     return {create,update,remove};
// }

import type { DocumentData } from "firebase/firestore";
import { collection, deleteDoc, doc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { useState } from "react";

type Options = {
  path: string;
};

export const useFirestoreActions = <T extends DocumentData>({ path }: Options) => {
  const [submitting, setSubmitting] = useState(false);

  const create = async (data: T) => {
    setSubmitting(true);
    try {
      const ref = doc(collection(db, path)); // new document ref
      await setDoc(ref, data);
      return ref; // returns the ref so we can get id
    } catch (error) {
      console.error(error);
      throw error;
    } finally {
      setSubmitting(false);
    }
  };

  const update = async (id: string, data: T) => {
    setSubmitting(true);
    try {
      const ref = doc(db, path, id);
      await updateDoc(ref, data);
    } catch (error) {
      console.error(error);
      throw error;
    } finally {
      setSubmitting(false);
    }
  };

  const remove = async (id: string) => {
    setSubmitting(true);
    try {
      const ref = doc(db, path, id);
      await deleteDoc(ref);
    } catch (error) {
      console.error(error);
      throw error;
    } finally {
      setSubmitting(false);
    }
  };

  return { create, update, remove, submitting };
};
