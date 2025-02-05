/* On DOM loaded */
$(function() {
    hide_div('#show_impl');
//    console.log("OnLoad end");

    // Function to reset the form to the initial state
    $("input:reset").click( function() {
       reset_form();
    });

    $("input[id^=search_group_impl]:radio").click( function() {
      implication_on();
    });

    $('input[id$=_cross]:radio').click( function() {
      cross_on(this);
    });

    $('input[id$=_compare]:radio').click( function() {
      compare_on(this);
    });
});

/* Function to hide a div by id */
function hide_div(id){
    $(id).hide('slow');
}

/* Function to show a div by id */
function show_div(id){
    $(id).show('slow');
}

/* Function triggered by clicking the reset button */
function reset_form(){
//    console.log("Reset!");
    show_includes();
    hide_div('#show_impl');
    enable("input[id^=search_group_impl]:radio");
    enable('input[id$=_cross]:radio');
    enable('input[id$=_compare]:radio');
}

/* Function triggered by selecting an Implication radio button */
function implication_on(){
//    console.log("implication_on");
    show_div('#show_impl');
    hide_includes();
    disable('input[id$=_cross]:radio');
    disable('input[id$=_compare]:radio');
}

// Function triggered by selecting a Cross radio button
// TODO: disable Value Pairs boxes
function cross_on(radio_element){
//    console.log("cross_on =>" + radio_element.id);
    hide_includes();
    hide_div('#show_impl');
    disable('input[id$=_compare]:radio');
    disable("input[id^=search_group_impl]:radio");
    disable_except('input[id$=_cross]:radio', radio_element)
}

// Function triggered by selecting a Compare radio button
function compare_on(radio_element){
//    console.log("compare_on =>"+ radio_element.id);
    hide_includes();
    hide_div('#show_impl');
    disable('input[id$=_cross]:radio');
    disable("input[id^=search_group_impl]:radio");

    var is_depth_1 = new RegExp("1_compare$");
    if(is_depth_1.test(radio_element.id))
    { disable('input[id$=0_compare]:radio'); }
    else
    { disable('input[id$=1_compare]:radio'); }

}

/* Function to group the hiding of includes div */
function hide_includes(){
  hide_div('#show_parent');
  hide_div('#show_child');
}

/* Function to group the showing of includes div */
function show_includes(){
  show_div('#show_parent');
  show_div('#show_child');
}

/* Function to disable an element */
function disable(element){
//  console.log("disable "+element);
  $(element).attr("disabled", true);
}

/* Function to enable an element */
function enable(element){
//  console.log("enable "+element);
  $(element).attr("disabled", false);
}

function disable_except(elements_regexp, except){
    disable($(elements_regexp).not(except));
}

