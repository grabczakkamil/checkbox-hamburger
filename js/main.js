$('input[type="checkbox"]').change(function (e) {
    'use strict';

    var checked = $(this).prop("checked"),
        container = $(this).parent(),
        siblings = container.siblings();

    container.find('input[type="checkbox"]').prop({
        indeterminate: false,
        checked: checked
    });

    function checkSiblings(el) {

        var parent = el.parent().parent(),
            all = true;

        el.siblings().each(function () {
            return all = ($(this).children('input[type="checkbox"]').prop("checked") === checked);
        });

        if (all && checked) {

            parent.children('input[type="checkbox"]').prop({
                indeterminate: false,
                checked: checked
            });

            checkSiblings(parent);

        } else if (all && !checked) {

            parent.children('input[type="checkbox"]').prop("checked", checked);
            parent.children('input[type="checkbox"]').prop("indeterminate", (parent.find('input[type="checkbox"]:checked').length > 0));
            checkSiblings(parent);

        } else {

            el.parents("li").children('input[type="checkbox"]').prop({
                indeterminate: true,
                checked: false
            });

        }

    }

    checkSiblings(container);
});

$('#top-bun').click(function bun1() {
    if ($(this).is(":checked")) {
        $(".bun-1").addClass("bun-1-show")
    } else {
        $(".bun-1").removeClass("bun-1-show");
    };
});
$('#ketchup').click(function ketchup() {
    if ($(this).is(":checked")) {
        $(".ketchup").addClass("ketchup-show")
    } else {
        $(".ketchup").removeClass("ketchup-show");
    };
});
$('#1-pickle').click(function pickle1() {
    if ($(this).is(":checked")) {
        $(".pickle-1").addClass("pickle-show")
    } else {
        $(".pickle-1").removeClass("pickle-show");
    };
});
$('#1-extra-pickle').click(function pickle2() {
    if ($(this).is(":checked")) {
        $(".pickle-2").addClass("pickle-show")
    } else {
        $(".pickle-2").removeClass("pickle-show");
    };
});

$('#2-extra-pickle').click(function pickle3() {
    if ($(this).is(":checked")) {
        $(".pickle-3").addClass("pickle-show")
    } else {
        $(".pickle-3").removeClass("pickle-show");
    };
});

$('#pickles').click(function pickles() {
    if ($(this).is(":checked")) {
        $(".pickle-1").addClass("pickle-show");
        $(".pickle-2").addClass("pickle-show");
        $(".pickle-3").addClass("pickle-show");
    } else {
        $(".pickle-1").removeClass("pickle-show");
        $(".pickle-2").removeClass("pickle-show");
        $(".pickle-3").removeClass("pickle-show");
    };
});
$('#cheese').click(function cheese() {
    if ($(this).is(":checked")) {
        $(".cheese").addClass("cheese-show")
    } else {
        $(".cheese").removeClass("cheese-show");
    };
});
$('#meat').click(function meat() {
    if ($(this).is(":checked")) {
        $(".meat").addClass("meat-show")
    } else {
        $(".meat").removeClass("meat-show");
    };
});

$('#onion-ring').click(function onion1() {
    if ($(this).is(":checked")) {
        $(".onion-1").addClass("onion-show")
    } else {
        $(".onion-1").removeClass("onion-show");
    };
});
$('#extra-onion-ring').click(function onion2() {
    if ($(this).is(":checked")) {
        $(".onion-2").addClass("onion-show")
    } else {
        $(".onion-2").removeClass("onion-show");
    };
});

$('#onion').click(function onions() {
    if ($(this).is(":checked")) {
        $(".onion-1").addClass("onion-show");
        $(".onion-2").addClass("onion-show");
    } else {
        $(".onion-1").removeClass("onion-show");
        $(".onion-2").removeClass("onion-show");
    };
});
$('#salad').click(function salad() {
    if ($(this).is(":checked")) {
        $(".salad").addClass("salad-show")
    } else {
        $(".salad").removeClass("salad-show");
    };
});
$('#bottom-bun').click(function bun2() {
    if ($(this).is(":checked")) {
        $(".bun-2").addClass("bun-2-show")
    } else {
        $(".bun-2").removeClass("bun-2-show");
    };
});
$('#ingredient').click(function ingredient() {
    if ($(this).is(":checked")) {
        $(".bun-1").addClass("bun-1-show");
        $(".ketchup").addClass("ketchup-show");
        $(".pickle-1").addClass("pickle-show");
        $(".pickle-2").addClass("pickle-show");
        $(".pickle-3").addClass("pickle-show");
        $(".cheese").addClass("cheese-show");
        $(".meat").addClass("meat-show");
        $(".onion-1").addClass("onion-show");
        $(".onion-2").addClass("onion-show");
        $(".salad").addClass("salad-show");
        $(".bun-2").addClass("bun-2-show");    
    } else {
        $(".bun-1").removeClass("bun-1-show");
        $(".ketchup").removeClass("ketchup-show");
        $(".pickle-1").removeClass("pickle-show");
        $(".pickle-2").removeClass("pickle-show");
        $(".pickle-3").removeClass("pickle-show");
        $(".cheese").removeClass("cheese-show");
        $(".meat").removeClass("meat-show");
        $(".onion-1").removeClass("onion-show");
        $(".onion-2").removeClass("onion-show");
        $(".salad").removeClass("salad-show"); 
        $(".bun-2").removeClass("bun-2-show");
    };
});