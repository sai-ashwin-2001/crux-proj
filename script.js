 $(window).load(function(){
       $(document).scroll(function () {
        var scrollTop = $(window).scrollTop();
        var docHeight = $(document).height();
        var winHeight = $(window).height();
        var scrollPercent = scrollTop / (docHeight - winHeight);

        var divHeight = $("div").height(); 
        var divContentHeight = $('div')[0].scrollHeight;

        var equation = scrollPercent * (divContentHeight-divHeight);

        $('div').scrollTop(equation);

    });

}); 