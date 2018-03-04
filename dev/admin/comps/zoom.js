
riot.tag2('zoom', '<p>.</p> <div class="block"> <div> <form class="grid-form"> <fieldset> <legend>Edit</legend> <div data-row-span="4"> <div data-field-span="2"> <label>Short Teaser Title</label> <input type="text"> </div> <div data-field-span="2"> <label>Tags CSV</label> <input type="text"> </div> </div><br> <fieldset> <legend>Text</legend> <div data-row-span="4"> <div data-field-span="4"> <label>Markdown</label> <textarea id="cms1" rows="4" autofocus=""></textarea> </div> </div> <div data-row-span="4"> <div data-field-span="4"> <label>Summary</label> <input type="text"> </div> </div> </fieldset><br> <fieldset> <legend>Extra</Legend> <div data-row-span="4"> <div data-field-span="2"> <label>Date</label> <input type="text"> </div> <div data-field-span="2"> <label>Author</label> <input type="text"> </div> </div> </fieldset> </fieldset> </form> </div> <p></p> <div> <div class="block"> <p class="segmented segmented-round"> <button class="button button-round button-outline">Save</button> <button class="button button-round button-outline">Cancel</button> </p> </div> </div> </div>', 'zoom CodeMirror,[data-is="zoom"] CodeMirror{ height: auto !important; }', 'style="visibility: hidden;"', function(opts) {
    console.log('loaded zoom1')
    loadjs(['/assets/gridforms/gridforms.css'
    			,'/assets/gridforms/gridforms.js'])

    loadjs(['//cdn.jsdelivr.net/npm/codemirror@5.35.0/lib/codemirror.css'
    			,'//cdn.jsdelivr.net/npm/codemirror@5.35.0/theme/neat.css'])

    loadjs(['//cdn.jsdelivr.net/npm/codemirror@5.35.0/lib/codemirror.min.js'
    	, '//cdn.jsdelivr.net/npm/codemirror@5.35.0/mode/markdown/markdown.js'
    	, '//cdn.jsdelivr.net/npm/codemirror@5.35.0/keymap/sublime.js'

    	, '//cdn.jsdelivr.net/npm/fluxify@0.2.3/build/fluxify.js'
    	, '/models/models.js'

    	], 'zoom', {async: false})
    loadjs.ready('zoom', {
    	success: function() {
    		initCodeMirror()
    		modelGet()
    		},
    	error: function(depsNotFound) { Logger.log('could not load', depsNotFound ) }
    })

    function modelGet() {
    	console.log('start')
    	var item = getQSByName('item')
    	console.log(item)

    	read(item).then(function(val) {
    		console.log('back')
    		console.log(val)

    		myCodeMirror.setValue(val.orig)
    		setTimeout(function() {
    				myCodeMirror.refresh()
    		}, 1)
    	})

    }

    var myCodeMirror
    function initCodeMirror() {
    	console.log('loaded zoom2')
     	myCodeMirror = CodeMirror.fromTextArea( document.querySelector('#cms1') ,
    				{
    					mode:  'markdown'
    					, lineNumbers: true
    					, theme: 'neat'
    					, keyMap: 'sublime'
    					, v1iewportMargin: 'Infinity'
    				}
    		)
    	myCodeMirror.setSize('100%',200)
    	document.getElementsByTagName('zoom')[0].style.visibility = 'visible'

    }
});