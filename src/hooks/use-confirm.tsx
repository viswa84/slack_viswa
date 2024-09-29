import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
    DialogTrigger,
    DialogHeader,
    DialogTitle,
    DialogClose,
    DialogFooter,
    Dialog,
    DialogContent,
    DialogDescription
} from "@/components/ui/dialog";


export const useConfirm = (title: string, message: string): [()=> JSX.Element, ()=>Promise<unknown>] => {

    const [promise, setPromise] = useState<{ resolve: (value: boolean) => void } | null>(null);

    const confirm = () => new Promise((resolve, reject) => {
        setPromise({ resolve })
    })
    const handleClose = () => {
        setPromise(null)
    }

    const hanldeCancel = () => {
        promise?.resolve(false);
        handleClose()
    }
    const hanldeConfirm = () => {
        promise?.resolve(true);
        handleClose()
    }
    const ConfirmDialog = () => (
        <Dialog open={promise !== null}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        {title}
                    </DialogTitle>
                    <DialogDescription>
                        {message}
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className="pt-2">
                    <Button onClick={hanldeCancel} variant={"outline"}>
                        Cancel
                    </Button>
                    <Button onClick={hanldeConfirm} >
                      Confirm
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )

    return [ConfirmDialog, confirm]
}