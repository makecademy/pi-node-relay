// Function to control relays
function buttonClick(clicked_id){

    if (clicked_id == "on"){
        $.post( "command", {
        state: "on"} );  
    } 

    if (clicked_id == "off"){
        $.post( "command", {
        state: "off"} );  
    }
}












































