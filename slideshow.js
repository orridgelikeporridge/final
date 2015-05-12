$(".request").hide();
function myFunction() {
            $.ajax(
                {
                    url: "data.json",
                    cache:false,
                    success: function(data){
                    $(".request").show();                
                    }
                }
                
            );
     
};
