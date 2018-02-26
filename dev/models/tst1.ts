declare var QUnit: any
console.log('loaded')
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

onModel('data', function(nv, state) {
	console.log('here')
	console.log(state)
})

//act('updateStory', 'bla')

