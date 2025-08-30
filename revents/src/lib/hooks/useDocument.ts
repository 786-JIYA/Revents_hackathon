import type {DocumentData} from "firebase/firestore";
import { useAppDispatch } from "../store/store";
import { useAppSelector } from "../store/store";
import {onSnapshot ,doc } from "firebase/firestore";
import { useCallback,useSyncExternalStore } from "react";
import{db} from "../firebase/firebase";
import { setDocuments,setError } from "../firebase/firestoreSlice";
import { setLoading } from "../firebase/firestoreSlice";
import { convertTimestamps } from "../util/util";

type Options ={
    path:string;
    id?:string;
    listen?:boolean;
}

export const useDocument = <T extends DocumentData>({path,id,listen=true}:Options)=>{

    const dispatch = useAppDispatch();
    const documentData = useAppSelector(state=> id ? state.firestore.documents[path]?.[id] as T : undefined);

        const subscribeToDocument = useCallback(()=>{
    
            if(!listen || !id ||!path) return ()=>{};
    
            dispatch(setLoading(true));
            
              const docRef = doc(db, path,id);
            

            
              const unsubscribe = onSnapshot(docRef, (snapshot) => {

                if(!snapshot.exists()){
                    dispatch(setLoading(false));
                    dispatch(setError("Document does not exist"));
                    return ;
                }

                const converted = convertTimestamps(snapshot.data() as T);
                dispatch(setDocuments({path,id,data:{id:snapshot.id , ...converted as T}}))

        
            
                dispatch(setLoading(false));  
              },(error) => {
                console.log(error);
                dispatch(setLoading(false));
                dispatch(setError(error.message));
              });
    
              return () => unsubscribe();
            }, [dispatch,path,listen,id]);
            
    
   useSyncExternalStore(subscribeToDocument, () => documentData);

    return { data: documentData };
}