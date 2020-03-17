
import './css/style.css'
import footer from './footer.html';
import header from './header.html'

(function () {
    $('#header').append(header);
    $('#footer').append(footer);
    var url = 'news';
    $('#header .links a.dynamic').each(function (index) {
        if ($(this)[0].pathname.indexOf(url) >= 0) {
            $(this).addClass('active');
        }
    })
    var host = "https://news.tsfinance.com.cn";
    var all = [];
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
    getCategory(26);
    function getCategory(catid) {
        var catid = catid;
        $.ajax(host + '/api.php?m=Json&a=getalllist&catid=' + catid, {
            dataType: "json",
            crossDomain: true,
            success: function (data) {
                var list = '';
                data.sort(function (a, b) {
                    return b.updatetime - a.updatetime;
                })
                for (var i = 0; i < data.length; i++) {
                    var time = new Date();
                    time.setTime(data[i].updatetime * 1000);

                    var title = "";
                    var color = "";
                    switch (data[i].catid) {
                        case '27':
                            title = "公司新闻";
                            color = "blue";
                            break;
                        case '28':
                            title = "行业观点";
                            color = "orange";
                            break;
                        case '32':
                            title = "市场观察";
                            color = "purple";
                            break;
                    }
                    var date = time.getFullYear() + "-" + (time.getMonth() + 1) + "-" + time.getDate();
                    list += '<div class="item ">'
                        + '<div class="left col-xs-12 col-md-6">'
                        + '<div class="cat">'
                        + '<div class="circle ' + color + '"></div>'
                        + title + '</div>'
                        + '<div class="title">'
                        + '<a href="' + "./content.html?id=" + data[i].id + '&catid=' + data[i].catid + '" target="_self">' + data[i].title + '</a>'
                        + '</div>'
                        + '<div class="desc">' + data[i].description + '</div>'
                        + '<div class="more hidden-xs">'
                        + '<a href="' + "./content.html?id=" + data[i].id + '&catid=' + data[i].catid + '" target="_self">'
                        + '<img src="/images/news/more.png"/>'
                        + '</a>'
                        + '<span class="date">' + date + '</span>'
                        + '</div>'
                        + '</div>'
                        + '<div class="right col-xs-12  col-md-6">'
                        + '<img src=' + data[i].thumb + ' />'
                        + '</div>'
                        + '</div>'

                }
                $(".list").html(list);
            }
        });
    }

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