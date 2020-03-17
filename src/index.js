
import './css/style.css'
import footer from './footer.html';
import header from './header.html'

(function () {
    $('#header').append(header);
    $('#footer').append(footer);
    var url = 'index';
    $('#header .links a.dynamic').each(function (index) {
        if($(this)[0].pathname.indexOf(url)>=0){
            $(this).addClass('active');
        }
    })
    var host = "https://news.tsfinance.com.cn";
    $('.links>li').hover(
        function () {
            var target = $(this).find('.childContainer');
            target.removeClass('hide');
            var left = $(this).width() - target.width();
            target.css('left', left / 2);
            $(this).find('.childContainer').addClass("show");
        },
        function () {
            $(this).find('.childContainer').removeClass('show');
            $(this).find('.childContainer').addClass("hide");
        }
    );
    $("#btn").click(function () {
        var postData = $("form").serialize();
        if ($('#name').val() == '' || $('#phone').val() == '') {
            alert('姓名和联系电话是必填');
            return;
        }
        let a = document.createElement('a');
        a.setAttribute('href', './file/APAutomationWhitepaper.pdf');
        a.setAttribute('target', '_blank');
        //a.download = '应付账款自动化白皮书.pdf';
        a.click();
        $.ajax({
            url: host + "/api.php?m=Json&a=putemail",
            data: postData,
            type: "POST",
            dataType: "json",
            success: function (response) {
                alert(response.message);
            },
            error: function () {

            }
        });
    })
    $('.banner').on('click', function () {
        $("html,body").animate({ scrollTop: $("#experience").offset().top }, 500);
    });

})();
(function (w, d, n, a, j) {
    w[n] = w[n] || function () {
        (w[n].a = w[n].a || []).push(arguments);
    };
    j = d.createElement('script');
    j.async = true;
    j.src = 'https://qiyukf.com/script/61b5bec5f72b78b7a6bc598344c01c63.js';
    d.body.appendChild(j);
})(window, document, 'ysf');