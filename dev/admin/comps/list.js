
riot.tag2('list', '<div class="block"><br> <p>.</p> <table class="display" id="list1" width="95%"></table> </div>', 'list .dataTables_filter,[data-is="list"] .dataTables_filter{ width: 210px; padding: 4px; border-radius: 20px; border: 1px solid gray; } list .dataTables_filter label,[data-is="list"] .dataTables_filter label{ padding-left: 4px; display: flex; } list input[type=search],[data-is="list"] input[type=search]{ } list input[type="search"]::-webkit-search-decoration,[data-is="list"] input[type="search"]::-webkit-search-decoration,list input[type="search"]::-webkit-search-cancel-button,[data-is="list"] input[type="search"]::-webkit-search-cancel-button,list input[type="search"]::-webkit-search-results-button,[data-is="list"] input[type="search"]::-webkit-search-results-button,list input[type="search"]::-webkit-search-results-decoration,[data-is="list"] input[type="search"]::-webkit-search-results-decoration{ -webkit-appearance: none; display: none; } list table td,[data-is="list"] table td{ text-align: center !important; }', '', function(opts) {
    console.log('list1')
    loadjs(['//cdn.datatables.net/1.10.16/css/jquery.dataTables.min.css'])
    loadjs(['//cdn.datatables.net/1.10.16/js/jquery.dataTables.min.js'

    	, '//cdn.jsdelivr.net/npm/fluxify@0.2.3/build/fluxify.js'
    	, '/models/models.js'
    	], 'list', {async: false})
    loadjs.ready('list', {
    	success: function() {
    		initList()
    		modelGet()
    		},
    	error: function(depsNotFound) { Logger.log('could not load', depsNotFound ) }
    })

    function modelGet() {
    	console.log('start')
    	list().then(function(val) {
    		console.log('back')
    		console.log(val)

    		let dw= $('#list1').DataTable()
    		dw.clear()
    		dw.rows.add(val)
    		dw.draw()
    		console.log( dw.data().length )
    	})
    }

    function initList() {
    	console.log('list2')

    	$(document).ready(function() {
    		console.log('jq ready')
    		$('#list1').DataTable( {

    			paging: true,

    			data: dataSet,
    			columns: [
    					{ title: 'Title' },
    					{ title: 'File' },
    					{ title: 'Date' },
    					{ title: 'Type' },
    					{ title: 'Status' },
    			]
    		} )

    		let dw= $('#list1').DataTable()

    		$('#list1 tbody').on('click', 'tr', function () {
    			var data = dw.row( this ).data()
    			console.log( 'clicked on '+data[1]+'\'s row' )
    		})

    	} )

    }

    var dataSet = [
    	['First post', 'content/blog/2013/second-post', 123, 'post', 'ok'] ,
    	['First post', 'content/blog/2013/second-post', 123, 'post', 'ok']

    ]
});