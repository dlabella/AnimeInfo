exports.forwardStringReader = function(text){
    var index=0;
    this.between = function (from, to) {
        var fromIdx = text.indexOf(from, index);
        if (fromIdx < 0) {
            return null;
        }
        fromIdx += from.length;
        var toIdx = text.indexOf(to, fromIdx + 1);
        if (toIdx < 0) {
            return null;
        }
        index = toIdx;
        return text.substring(fromIdx, toIdx);
    };
}