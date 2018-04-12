function loadPlayer() {
/* document.getElementById("main-content").innerHTML='<object type="type/html" data="/settings/Black_Bayou/1a_Intro.html" ></object>';*/
/*    $(document).ready(function(){
        $("button").click(function(){
            $("#main-content").load("/settings/Black_Bayou/1a_Intro.html");
        });
    });*/
}

jQuery(document).ready(function($){
  //you can now use $ as your jQuery object.
	var body = $( 'body' );
	var pluginUrl = 'wp-content/plugins/GenCell-System/' ;
	$("#loadPlayer-button").on("click", function(){
		$("#main-content").load("./settings/Black_Bayou/1a_Intro.html");
	});
	$("#loadPlayer-li").on("click", function(){
		$("#main-content").load("./settings/Black_Bayou/1a_Intro.html");
	});
	$("#loadCharacters").on("click", function(){
		document.getElementById("main-content").innerHTML='';
	});
	$("#loadCharacters-button").on("click", function(){
		document.getElementById("main-content").innerHTML='';
	});
});

// JavaScript Document
function characterModalRequested(elementID) {
/*    var id = elementID.split('-')[1];
    var tag = document.getElementById(('asset-tag-' + id)).innerHTML ;
    var desc = document.getElementById(('asset-desc-' + id)).innerHTML;
    var form = {
        action: 'causfa_set_session',
        Name: 'ptag',
        Input: tag
    };*/
    jQuery.post(gencell_action_obj.ajax_url, form, function(data) {});
	characterModalLoad();
    document.getElementById('recipient-name').value = '';
    jQuery('#characterModal').find('#transferIndex').val(id);
    jQuery('#characterModal').find('.asset-tag').html(tag);
    jQuery('#characterModal').find('.asset-description').html(desc);
    jQuery('#characterModal').modal();
    jQuery('#characterModal').modal('open');

}
function characterModalLoad(elementID) {
	var form = {
            action: 'causfa_autocomplete_PID',
        }
        jQuery.post(gencell_action_obj.ajax_url, form, function(data) {
            var PID_options = data['PIDs'];
            var Name_options = data['Names'];
			var input = document.getElementById("recipient-name");
			var list_fill = new Array();
			for (var i = 0; i < PID_options.length; i++) {
				var list_item = new Array();
				list_item[0] = Name_options[i];
				list_item[1] = Name_options[i];
				list_fill.push(list_item);
				var option = document.createElement('option');
                option.value = Name_options[i];
                option.setAttribute('data_value', PID_options[i]);
                PIDs.appendChild(option);
			}
			// alert(JSON.stringify(list_fill));
			new Awesomplete(input, {
				list: list_fill
			})
        });
}
