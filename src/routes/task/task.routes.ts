import { Router } from 'express'
import TaskController from '../../controllers/task/task.controller'

const taskRoutes = Router()

taskRoutes.post('/', TaskController.store)

taskRoutes.get('/', TaskController.index)

taskRoutes.get('/:id', TaskController.show)

taskRoutes.put('/:id', TaskController.update)

taskRoutes.delete('/:id', TaskController.delete)

export default taskRoutes