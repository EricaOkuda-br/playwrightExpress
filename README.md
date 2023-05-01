
# VS Code Readme Editor 📝  
Import your existing Readme using the import button on the top right corner of the navbar, 
or create a new Readme from scratch by typing in the editor.  

## Comandos importrantes 🚀  

Criar a estrutura de banco de dados
```http
  npm run db:init 
``` 

## Iniciar a API 🔥  

```http
npm run dev
```
    
## Iniciar a web ✨  
```http
npm run dev
```

## Executar os test 
```http
npm playwright test --debug
```
 
## Mostrar report 
```http
 npx playwright show-report
 ```
 
## Features  
- Accessibility in VS Code  
- Download directly to project root  
- Live Previews    
 
# Project Title  
A brief description of what this project does and who it's for  
 
## API Reference

#### Get all items  

```http
  GET /api/items
```  

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Required**. ID of the item you're requesting |

#### Get item

~~~http
  POST /api/items
~~~

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`  | `string` | **Required**. Name of a new item |
| `price` | `number` | **Required**. Name of a new item |  
 
## API Reference

#### Get all items  

```http
  GET /api/items
```  

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Required**. ID of the item you're requesting |

#### Get item

~~~http
  POST /api/items
~~~

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`  | `string` | **Required**. Name of a new item |
| `price` | `number` | **Required**. Name of a new item |  
