declare var QUnit: any
QUnit.test( 'list', function( assert :any ) {
	assert.expect( 1 )
	var done = assert.async()
	tstList(assert, done)
 })
function tstList(assert :any, done :any) {
	console.log('start')
	list().then(function(val) {
		console.log('back')
		console.log(val)
		assert.ok(true)
		done()
		console.log('done')
	})
}
QUnit.test( 'read', function( assert :any ) {
	assert.expect( 1 )
	var done = assert.async()
	tstRead(assert, done)
 })
function tstRead(assert :any, done :any) {
	console.log('start')
	read('blog/2013/some-post').then(function(val) {
		console.log('back')
		console.log(val)
		assert.ok(true)
		done()
		console.log('done')
	})
}
// end tests


// /////////////////////////////////////
console.log('F')
onModel('dataLst', function(nv, state) {
	console.log('MODEL')
	console.log(state)
})
act('updateList', 'bla')

//  ////

declare var fluxify: any // tsc

var myStore = fluxify.createStore({
	id: 'myStore',
	actionCallbacks: {
		myAction: function( updater ){
			console.log( 'Hi!');
		}
	}
});

// These two action calls will trigger the store's callback
fluxify.doAction( 'myAction' )