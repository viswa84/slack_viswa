"use client";

import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import Sidebar from "./Sidebar";
import { Toolbar } from "./toolbar"

interface WorkspaceIdLayoutProps {
    children: React.ReactNode
}
const WorkspaceIdLayout = ({ children }: WorkspaceIdLayoutProps) => {
    return (
        <div className="h-full">
            <Toolbar />
            <div className="flex h-[calc(100vh-40px)]">
                <Sidebar />
                <ResizablePanelGroup direction="horizontal" autoSaveId={"viswa-workspace-layout"}>
                    <ResizablePanel  defaultSize={20} minSize={11} className="bg-[#5e2c5f]">
                        <div>
                            channels Sidebar
                        </div>
                    </ResizablePanel>
                    <ResizableHandle withHandle/>
                    <ResizablePanel minSize={20}>
                        {children}
                    </ResizablePanel>
                </ResizablePanelGroup>
            </div>

        </div>
    )
}

export default WorkspaceIdLayout
