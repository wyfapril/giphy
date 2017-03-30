
      var reactions = ["YAY~", "Sob sob", "Eek!", "AAAAH!!!", "Interesting..."];

      function displayReactions() {

        var reaction = $(this).attr("data-reactions");
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
        reaction + "&api_key=dc6zaTOxFJmzC&limit=10";

        $.ajax({url: queryURL, method: "GET"})
        .done(function(response) {
          
          console.log(queryURL);
          console.log('response');
          console.log(response);

          var data = response.data;
          for (var i=0; i<data.length; i++){

            var reactionDiv = $("<div class='reaction'>");
            var rating = $("<p>").text("Rating: " + data[i].rating);
            var imgURL = data[i].images.fixed_height_still.url;
            var reactionImage = $("<img>").attr({src: imgURL, "data-state": "still"});
            //$("img").addClass("still");
            reactionDiv.append(rating);
            reactionDiv.append(reactionImage);
console.log(reactionDiv);
            $("#reactions-view").prepend(reactionDiv);
          }
        });

      }

      function renderButtons() {

        $("#buttons-view").empty();

        for (var i = 0; i < reactions.length; i++) {

          var button = $("<button>");
          button.addClass("reaction");
          button.attr("data-reactions", reactions[i]);
          button.text(reactions[i]);
          $("#buttons-view").append(button);
        }
      }

      $("#add-reaction").on("click", function(event) {
        event.preventDefault();
        var newReaction = $("#reaction-input").val().trim();

        reactions.push(newReaction);

        renderButtons();
      });

      $(document).on("click", ".reaction", displayReactions);

      renderButtons();

      $("img").on("click", function(){
        var state = $(this).attr("data-state");
        if (state == "still") {
          imgURL = data[i].images.fixed_height.url;
          $(this).attr("src", imgURL);
          console.log("image URL: " + imgURL);
          $(this).attr("data-state", "animate");
          console.log("data-state");
        } else {
          imgURL = data[i].images.fixed_height_still.url;
          $(this).attr("src", imgURL);
          console.log("image URL: " + imgURL);
          $(this).attr("data-state", "still");
          console.log("data-state");
        }
      })

