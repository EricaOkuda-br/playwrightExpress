import { test, expect } from '@playwright/test'


test('Deve poder cadastrar uma nova tarefa', async ({ page, request }) => {

    const taskName = 'ler um livro sobre type'
    await request.delete('http://localhost:3333/helper/tasks/' + taskName)

    await page.goto('http://localhost:3000/')
    const inputTaskName = page.locator('input[placeholder="Add a new Task"]')
    await inputTaskName.fill(taskName)

    await page.click('css=button >> text=Create')

    const target = page.locator('css=.task-item p >> text=' + taskName)
    await expect(target).toBeVisible()
})

test('Não deve permitir tarefa duplicada', async ({page,request}) => {

    const task = {
        name: 'Estudar A',
        is_done: 'false'
    }

    await request.delete('http://localhost:3333/helper/tasks/' + task.name)

    const newTask = await request.post('http://localhost:3333/tasks', {data: task})

    expect(newTask.ok()).toBeTruthy()

    await page.goto('http://localhost:3000/')

    const inputTaskName = page.locator('input[placeholder="Add a new Task"]')
    await inputTaskName.fill(task.name)
    await page.click('css=button >> text=Create')

    const target = page.locator('.swal2-html-container')
    await expect(target).toHaveText('Task already exists!')

})