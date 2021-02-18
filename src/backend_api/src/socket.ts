module.exports = (io: any) => {
    io.on('connection', function (socket:any) {

        socket.on('getUsers', () => {
            console.log('get users')
        }) 
    })
}