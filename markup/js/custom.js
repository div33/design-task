// Custome tag input
$('#tags').tagsInput();

// Custome select
$('select').selectric();

// Tooltip enable
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

// Custome Slider and Datepicker
! function(e) {
    function t(n) {
        if (o[n]) return o[n].exports;
        var r = o[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(r.exports, r, r.exports, t), r.l = !0, r.exports
    }
    var o = {};
    t.m = e, t.c = o, t.d = function(e, o, n) {
        t.o(e, o) || Object.defineProperty(e, o, {
            configurable: !1,
            enumerable: !0,
            get: n
        })
    }, t.n = function(e) {
        var o = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return t.d(o, "a", o), o
    }, t.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, t.p = "", t(t.s = 5)
}({
    5: function(e, t) {
        ! function(e) {
            e(document).ready(function() {
                setTimeout(function() {
                    e(".loader").addClass("hidden").delay(200).remove(), e(".slide-in").each(function() {
                        e(this).addClass("visible")
                    })
                }, 1900), e('[data-toggle="popover"]').popover(), e('[data-toggle="tooltip"]').tooltip(), e(".example a").click(function(e) {
                    "#" === e.target.getAttribute("href") && e.preventDefault()
                }), e("#scroll-to-content").click(function(t) {
                    t.preventDefault(), void 0 !== t.target.dataset.scrollTo && e("html, body").animate({
                        scrollTop: e(t.target.dataset.scrollTo).offset().top - 100
                    }, 1e3)
                }), e("#slider-example-1").customSlider({
                    start: [20, 80],
                    range: {
                        min: 0,
                        max: 100
                    },
                    connect: !0
                }), e("#slider-example-2").customSlider({
                    start: [20, 80],
                    range: {
                        min: 0,
                        max: 100
                    },
                    connect: !0,
                    tooltips: !0
                }), e("#datepicker-example-1").datepicker({}), e("#datepicker-example-2").datepicker({})
            })
        }(jQuery)
    }
});
