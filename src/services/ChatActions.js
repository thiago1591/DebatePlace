import IO from 'socket.io-client'
const uri = `http://192.168.0.15:5000`
export const socket = IO(`${uri}`,{
    forceNew: true
})

socket.on('connection', () => console.log('Connected'))
 
export const LoadMessages = () => async (dispatch, getState) => {
    socket.emit('getUsers')
}