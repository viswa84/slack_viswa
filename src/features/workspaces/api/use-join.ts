import { useMutation } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { useCallback, useMemo, useState } from "react";
import { Id } from "../../../../convex/_generated/dataModel";

type RequestType = {
    workspaceId:Id<"workspaces">,
    joinCode:string

} ;
type ResposnseType = Id<"workspaces"> | null;

type Options={
    onSucess?:(data:ResposnseType)=>void;
    onError?:(error:Error)=>void;
    onSettled?:()=>void;
    throwError?:boolean
}

export const useJoin=()=>{


    const [data,setData]=useState<ResposnseType>(null);
    const [error,setError]=useState<Error | null>(null);
    const mutation = useMutation(api.workspaces.join);
    const [status,setStatus]=useState<"success" | "error" | "settled" | "pending" | null >(null)
    

    const isPending = useMemo(()=> status === "pending", [status]);
    const isSuccess = useMemo(()=> status === "success", [status]);
    const isError = useMemo(()=> status === "error", [status]);
    const isSettled = useMemo(()=> status === "settled", [status]);

    const mutate = useCallback(async(values:RequestType,options?:Options)=>{
        try {


            setData(null);
            setError(null);
            setStatus("pending")
            //values error is showing needtobesolved need_to_to
            const response = await mutation(values);
            options?.onSucess?.(response)
            return response
        } catch (error) {
            setStatus("error")
            options?.onError?.(error as Error);
            if(options?.throwError){
                throw error;
            }
        } finally {
          setStatus("settled")
          options?.onSettled?.();
        }
    },[mutation]);

    return {mutate,data,error,isPending,isSuccess,isError,isSettled,}

}