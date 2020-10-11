Element.prototype.isSeen = function(p, v) {
    p = ((p || p === 0) && (p >= 0 && p <= 100)) ? p : 0;
    v = (v === true) ? true : false;

    var el = this;
    var ot = el.offsetTop;
    var eh = el.clientHeight;
    var sh = document.documentElement.clientHeight;
    var st = Math.ceil(document.documentElement.scrollTop);

    var vena = st < ot + eh && Math.round((100 / sh) * (sh - (ot - st))) >= p;
    var vdis = st >= ot - sh && Math.round((100 / sh) * (sh - (ot - st))) >= p;
    
    return v ? vena: vdis;
};
