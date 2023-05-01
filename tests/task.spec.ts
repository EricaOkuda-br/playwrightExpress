import { test} from '@playwright/test'
import { TaskModel } from './fixtures/task.model'
import { deleteTaskByHelper, postTak } from './support/herlpers'
import { TasksPage } from './support/pages/tasks'


test('Deve poder cadastrar uma nova tarefa', async ({ page, request }) => {
    const task: TaskModel = {
        name: 'Estudar A',
        is_done: false
    }

    await deleteTaskByHelper(request, task.name)

    const tasksPage: TasksPage = new TasksPage(page)
    await tasksPage.go()
    await tasksPage.create(task)

    await tasksPage.ShouldHaveText(task.name)
})

test('Não deve permitir tarefa duplicada', async ({ page, request }) => {

    const task: TaskModel = {
        name: 'Estudar A',
        is_done: false
    }

    await deleteTaskByHelper(request, task.name)
    await postTak(request, task)

    const tasksPage: TasksPage = new TasksPage(page)
    await tasksPage.go()
    await tasksPage.create(task)
    await tasksPage.alertHaveText('Task already exists!')
   
})