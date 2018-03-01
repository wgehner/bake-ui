
console.log('fw')

declare var fluxify: any // tsc

var store = fluxify.createStore({ // the global models store, a singleton
	id: 'store'
})
function act(action:string, arg ){// sugar, passes data to action
	fluxify.doAction(action, arg )
}
function onModel(model:string, foo:Function) {//suggar - gets model affected by action
	store.on( 'change:'+model, function( updates ){
		foo(store.getState()[model], store.getState()) // return model and full state
	})
}
function toQs(obj) {// to query string
	return '?' + 
		 Object.keys(obj).map(function(key) {
			  return encodeURIComponent(key) + '=' +
					encodeURIComponent(obj[key])
		 }).join('&')
}

var ERROR:string = '_ERROR'
// end fw, specific /////////////////////////////////////////////////////////
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