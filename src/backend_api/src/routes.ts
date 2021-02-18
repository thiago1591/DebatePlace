import {Router} from 'express'
import DebatesPublicosController from './controllers/DebatesPublicosController'
import UsuariosController from './controllers/UsuariosController'
import RespostasController from './controllers/RespostasController'

const routes = Router()

routes.post('/debates_publicos', DebatesPublicosController.create)
routes.get('/debates_publicos/:id', DebatesPublicosController.show )
routes.get('/debates_publicos', DebatesPublicosController.index)
routes.post('/usuarios', UsuariosController.create)
routes.post('/respostas', RespostasController.create)
routes.get('/', (req,res) => {res.send('testando!')})

 export default routes