// Function to control the relay
function buttonClick(clicked_id){

  if (clicked_id == "1"){
    $.ajax({
      type: 'GET',
      url: '/send',
      async: false,
      data: {state: 'on'},
      success: function( data ) {
        json_data = jQuery.parseJSON(data);
      }
    });  
  } 

  if (clicked_id == "2"){
    $.ajax({
      type: 'GET',
      url: '/send',
      async: false,
      data: {state: 'off'},
      success: function( data ) {
        json_data = jQuery.parseJSON(data);
      }
    });  
  }  
}