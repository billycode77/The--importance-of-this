$ ("button").mouseenter(function(){
    $(this).removeClass("makered").addClass("makeblue");
});
$ ("button").mouseleave(function(){
    $(this).removeClass("makeblue").addClass("makered");
});