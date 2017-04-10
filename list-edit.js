(function($) {
    $('.list-edit').on('keydown', '.list-edit-new-input', function(event) {
    		if (event.which === 13) {
    			  var textVal = $(event.currentTarget).val();

    			  $('<li class="list-group-item list-edit-item">' +
                        '<div class="input-group">' +
                            '<input type="text" class="form-control list-edit-item-input" value="' + textVal + '"></input>' +
                            '<span class="input-group-btn list-edit-item-remove">' +
        	                   '<button class="btn btn-default" type="button"><span class=" glyphicon glyphicon-remove"></span></button>' +
                            '</span>' +
                        '</div>' +
                    '</li>').insertBefore('li.list-edit-new');

    				$(event.currentTarget).val('');
    				}
    		});

    $('.list-edit').on('click', '.list-edit-item-remove', function(event) {
    	$(event.currentTarget).parents('li').remove();
    	});
})(jQuery);
