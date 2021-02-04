import {Router} from 'express'
import DebatesPublicosController from './controllers/DebatesPublicosController'

const routes = Router()

routes.post('/debates_publicos', DebatesPublicosController.create)
routes.get('/debates_publicos/:id', DebatesPublicosController.show )
routes.get('/debates_publicos', DebatesPublicosController.index)

 export default routes