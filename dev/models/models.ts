

console.log('map models to actions')
store.addActionCallbacks({
	updateItem:function( updater , arg ){
		updater.set({ data: arg })//set model
	}//action()
})//()
store.addActionCallbacks({
	updateList:function( updater , arg ){
		updater.set({ dataLst: arg })//set model
	}//action()
})//()

// fetch ////

var ROOT = 'http://207.246.121.56:8080/'

function list( ) { // return value
	return fetch(ROOT + 'list', {
		method: 'get',
		headers: new Headers({
			'Accept':'application/json'
		})
	}).then(function(resp) {
		console.log('list back')
		if (!resp.ok) {
			console.log('not ok')
			console.log(resp)
			throw new Error(JSON.stringify(resp))
		}
		return resp.json();
	}).then(function(obj) {
		if (ERROR in obj) {
			console.log('error:')
			console.log(obj[ERROR])
			throw Error(obj[ERROR])
		}
		return obj
	})
}

function read( fn:string ) { // pass a query string ?item=blog/2013/some-post
	var OO = new Object()
	OO['item'] = fn
	var qs = toQs(OO)
	console.log(qs)

	return fetch(ROOT + 'read' + qs, {
		method: 'get',
		headers: new Headers({
			'Accept':'application/json'
		})
	}).then(function(resp) {
		console.log('list back')
		if (!resp.ok) {
			console.log('not ok')
			console.log(resp)
			new Error(JSON.stringify(resp))
		}
		return resp.json();
	}).then(function(obj) {
		if (ERROR in obj) {
			console.log('error:')
			console.log(obj[ERROR])
			throw Error(obj[ERROR])
		}
		return obj
	})

}