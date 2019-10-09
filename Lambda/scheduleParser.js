const ForwardStringReader = require('./forwardStringReader');

exports.scheduleParser = function(scheduleData){
    this.getTodayTitles = function () {
        var results = [];
        var reader = new ForwardStringReader(scheduleData);
        var data=null;
        do{
            data = reader.between("class=\"title-text\"","</p>");
            if (data && data.length>0){
                var title = new ForwardStringReader(data).between("link-title\">","<");
                if (title && title.length>0){
                    results.push(title);
                }
            }
        }while(data && data.length>0);
        return results;
    };
}