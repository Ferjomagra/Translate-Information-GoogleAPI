const app = require('./app')
require('./database')

app.listen(app.get('port'), ()=>{
	console.log(`Server en puerto ${app.get('port')}`)
})