$(document).ready(function() {

    $(".submit").on("click", createBurger);
    $(".devoured").on("click", updateBurger); 

    function createBurger(event) {
        event.preventDefault();

        var name = $("submit").val().trim();
       
        var newBurger = {
            name: name + "Burger"
            };

            $.post("api/burgers", newBurger, function(result) {
                location.reload();
            });
    }

    function updateBurger(event) {
        event.preventDefault();
        var id =$(this).data("burger-name");

            $.ajax("api/burgers/" + id, {
                type: "PUT", 
                data: {
                    devoured: 1 
                }
            }).then(function () {
                location.reload();
            })
    }



  
});

    
