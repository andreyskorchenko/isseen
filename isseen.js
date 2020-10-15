Element.prototype.isSeen = function(p, v) {
    /**
     * Percent
     * Value optional parameter by default = 0
     * The starting point for showing the item as a percentage in the viewport
     * @param int p
    */

    /**
     * Viewport
     * Value optional parameter by default = false
     * If true then return true while element located in viewport
     * @param bool v
    */

    p = ((p || p === 0) && (p >= 0 && p <= 100)) ? p : 0;
    v = (v === true) ? true : false;

    var el = this;
    var ot = el.offsetTop;
    var eh = el.clientHeight;
    var sh = document.documentElement.clientHeight;
    var st = Math.ceil(document.documentElement.scrollTop);
    
    return v ?
        st < ot + eh && Math.round((100 / sh) * (sh - (ot - st))) >= p:
        st >= ot - sh && Math.round((100 / sh) * (sh - (ot - st))) >= p;
};