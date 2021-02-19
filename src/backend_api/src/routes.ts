import {Router} from 'express'
import DebatesPublicosController from './controllers/DebatesPublicosController'
import UsuariosController from './controllers/UsuariosController'
import RespostasController from './controllers/RespostasController'
import DebatesSeguidosController from './controllers/DebatesSeguidosController'

const routes = Router()

routes.post('/debates_publicos', DebatesPublicosController.create)
routes.get('/debates_publicos/:id', DebatesPublicosController.show )
routes.get('/debates_publicos', DebatesPublicosController.index)
routes.post('/usuarios', UsuariosController.create)
routes.get('/usuarios/:id', UsuariosController.show)
routes.get('/usuarios', UsuariosController.index)
routes.post('/respostas', RespostasController.create)
routes.get('/respostas/:id_debate', RespostasController.create)
routes.post('/debates_seguidos', DebatesSeguidosController.create)
routes.get('/debates_seguidos/:id', DebatesSeguidosController.index)
routes.get('/', (req,res) => {res.send('testando!')})
 export default routes