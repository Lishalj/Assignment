function add_field()
{
    var total_text=document.getElementsByClassName("input_text");
    total_text=total_text.length+1;
    document.getElementById("field_div").innerHTML=document.getElementById("field_div").innerHTML+
    "<p style='margin:14px 20px 14px 16px' id='input_text"+ total_text+"_wrapper'><input type='text'style='size:23px' class='input_text' id='input_text"+total_text+ "' placeholder='Enter Text'><input style='margin:14px 20px 14px 16px' type='button' value='Remove' onclick=remove_field('input_text"+total_text+"');></p>";
}
function remove_field(id)
{
    document.getElementById(id+"_wrapper").innerHTML="";
}