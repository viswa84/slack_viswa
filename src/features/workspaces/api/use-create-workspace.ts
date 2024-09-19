import { useMutation } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { useCallback } from "react";



type RequestType = any;
type ResposnseType = any;


type Options={
    onSucess?:()=>void;
    onError?:()=>void;
    onSettled?:()=>void;
}

export const useCreateWorkspace=()=>{
    const mutation = useMutation(api.workspaces.create);

    const mutate = useCallback(async(values:RequestType,options?:Options)=>{
        try {
            const response = await mutation(values);
            options?.onSucess?.()
        } catch (error) {
            options?.onError?.();
        } finally {
          options?.onSettled?.();
        }
    },[mutation]);

    return mutate

}