jQuery(document).ready(function(){
    $(".firstPrompt").fadeIn(3500,function(){
        $(".firstPrompt").fadeOut(3000,function(){
            $(".secPrompt").fadeIn(3500, function(){
                $(".secPrompt").fadeOut(3000, function(){
                    $(".thirdPrompt").fadeIn(3500, function(){
                        $(".thirdPrompt").fadeOut(3000, function(){
                            $(".locButton").fadeIn(3000)
                        });
                    });
                });
            });
        });
    });
});