import { useContext } from "react"
import { TaskContext } from "./TaskContext";

export const useTasks = () => {
    const context = useContext(TaskContext);
    if (!context) throw new Error("useTasks must be used with a TaskProvider");
    return context;
}