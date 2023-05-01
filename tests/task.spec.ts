import { expect, test } from '@playwright/test'
import { TaskModel } from './fixtures/task.model'
import { deleteTaskByHelper, postTak } from './support/herlpers'
import { TasksPage } from './support/pages/tasks'
import data from './fixtures/tasks.json'


test('Deve poder cadastrar uma nova tarefa', async ({ page, request }) => {
    const task = data.success as TaskModel

    await deleteTaskByHelper(request, task.name)

    const tasksPage: TasksPage = new TasksPage(page)
    await tasksPage.go()
    await tasksPage.create(task)

    await tasksPage.ShouldHaveText(task.name)
})

test('Não deve permitir tarefa duplicada', async ({ page, request }) => {
    const task = data.duplicate as TaskModel

    await deleteTaskByHelper(request, task.name)
    await postTak(request, task)

    const tasksPage: TasksPage = new TasksPage(page)
    await tasksPage.go()
    await tasksPage.create(task)
    await tasksPage.alertHaveText('Task already exists!')

})

test.only('campos obrigatório', async ({ page }) => {
    const task = data.required as TaskModel

    const tasksPage: TasksPage = new TasksPage(page)
    await tasksPage.go()
    await tasksPage.create(task)

    const validationMessage = await tasksPage.inputTaskName.evaluate(e => (e as HTMLInputElement).validationMessage)
    expect(validationMessage).toEqual('Preencha este campo.')

})