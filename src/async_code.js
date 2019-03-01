var MyService = function(){
    this.fetchResult = function(callback){
        jQuery.ajax('url', {
            success: function(result){
                callback(result);
            }
        });
    };
};