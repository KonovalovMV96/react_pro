import { TasksWidget } from 'widgets/tasks'
import styled from "./TaskPage.module.css"

export const TaskPage = () => {
  return (
    <div className={styled.wraper}>
        <h1>Список задач на сегодня</h1>
        <TasksWidget />
    </div>
  )
}