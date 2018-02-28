
<zoom>
  <div class="block"><br/>
    <div class="grid-container"><br/>
      <form class="grid-form">
        <fieldset>
          <legend>Edit</legend>
          <div data-row-span="4">
            <div data-field-span="2">
              <label>Short Teaser  Title</label>
              <input type="text"/>
            </div>
            <div data-field-span="2">
              <label>Tags CSV</label>
              <input type="text"/>
            </div>
          </div><br/>
          <fieldset>
            <legend>Copy</legend>
            <div data-row-span="4">
              <div data-field-span="4">
                <label>Markdown</label>
                <textarea id="cms1" rows="4" autofocus=""></textarea>
              </div>
            </div>
            <div data-row-span="4">
              <div data-field-span="4">
                <label>Summary</label>
                <input type="text"/>
              </div>
            </div>
          </fieldset><br/>
          <fieldset>
            <Legend>Extra</Legend>
            <div data-row-span="4">
              <div data-field-span="2">
                <label>Date</label>
                <input type="text"/>
              </div>
              <div data-field-span="2">
                <label>Author</label>
                <input type="text"/>
              </div>
            </div>
            <!--div(data-row-span='4')
            div(data-field-span='4', data-field-error='Please enter a valid url')
            	label Paste URL
            	input(type='text')
            -->
            <!--div(data-row-span='4')
            div(data-field-span='4')
            	label Image URL (320x160)
            	input(type='text')
            -->
          </fieldset>
        </fieldset>
      </form>
    </div><br/>
    <div>
      <div class="block">
        <p class="segmented segmented-round">
          <button class="button button-round button-outline">Save</button>
          <button class="button button-round button-outline">Cancel</button>
        </p>
      </div>
    </div>
  </div>
  <script>
    console.log('loaded zoom1')
    loadjs(['/assets/gridforms/gridforms.css'
    			,'/assets/gridforms/gridforms.js'])
    
    loadjs(['//cdn.jsdelivr.net/npm/codemirror@5.33.0/lib/codemirror.css' 
    			,'//cdn.jsdelivr.net/npm/codemirror@5.33.0/theme/neat.css'])
    
    loadjs(['//cdn.jsdelivr.net/npm/codemirror@5.33.0/lib/codemirror.min.js'
    	, '//cdn.jsdelivr.net/npm/codemirror@5.33.0/mode/markdown/markdown.js'
    	, '//cdn.jsdelivr.net/npm/codemirror@5.33.0/keymap/sublime.js'
    	], 'zoom', {async: false})
    loadjs.ready('zoom', {
    	success: function() { 
    		initCodeMirror() 
    		},
    	error: function(depsNotFound) { Logger.log('could not load', depsNotFound ) }
    })
    
    function initCodeMirror() {
    	console.log('loaded zoom2')
    	var myCodeMirror = CodeMirror.fromTextArea( document.querySelector('#cms1') ,
    				{
    					mode:  'markdown'
    					, theme: 'neat'
    					, keyMap: 'sublime'
    				}
    		)
    	myCodeMirror.setValue('## oh hi')
    	setTimeout(function() {
    				myCodeMirror.refresh()
    		}, 1)
    }
  </script>
</zoom>