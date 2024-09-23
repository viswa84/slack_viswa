"use client";

import { Toolbar } from "./toolbar"

interface WorkspaceIdLayoutProps {
    children: React.ReactNode
}
const WorkspaceIdLayout = ({ children }: WorkspaceIdLayoutProps) => {
    return (
        <div className="h-full">
            <Toolbar />

            <div className="flex h-[clac(100vh-40px)]">

                {children}
            </div>
        </div>
    )
}

export default WorkspaceIdLayout