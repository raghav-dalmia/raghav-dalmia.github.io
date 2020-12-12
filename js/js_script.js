// typing text effect
var content = 'A software developer & competitive coder. ';
var ele = '<span>' + content.split('').join('</span><span>') + '</span>';

$(ele).hide().appendTo('#hero').each(function (i) {
    $(this).delay(100 * i).css({
        display: 'inline',
        opacity: 0
    }).animate({
        opacity: 1
    }, 100);
});

