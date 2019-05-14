$(function() {
    $(".devour").on("click", function(event) {
        var id = $(this).data("id");

        var newBurger = {
            devoured: true
        };

        // Send PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newBurger
        }).then(function() {
        
            // Reload the page to get the updated list
            location.reload();
        });
    });  

    $(".form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        // event.preventDefault();

        var name = $("[name=burger-name]").val().trim();

        if(name !== "") {
            var newBurger = {
                name: name
            };

            // Send the POST request.
            $.ajax("/api/burgers", {
                type: "POST",
                data: newBurger
            }).then(function() {
                
                // Reload the page to get the updated list
                location.reload();
            });
        }
        else {
            $("[name=burger-name]").val("");
        }
    });

    $(".delete-sleep").on("click", function(event) {
        var id = $(this).data("id");

        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(function() {
            // Reload the page to get the updated list
            location.reload();
        });
    });  
});