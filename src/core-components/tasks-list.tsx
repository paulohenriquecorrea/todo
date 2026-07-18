import Button from "../components/button";
import PlusIcon from "../assets/icons/Plus-Regular.svg?react"
import TaskItem from "./task-item";
import useTasks from "../hooks/use-tasks";
import useLocalStorage from "use-local-storage";


export default function TasksList() {
    const {tasks} = useTasks();
    console.log(tasks);

    console.log("useLocalStorage =", useLocalStorage);

    return (
        <>
            <section>
                <Button icon={PlusIcon} className="w-full">Nova Tarefa</Button>
            </section>
            <section className="space-y-2">
                <TaskItem />
                <TaskItem />
                <TaskItem />
                <TaskItem />
                <TaskItem />
            </section>
        </>

    )
}