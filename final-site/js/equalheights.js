$.fn.setAllToMaxHeight = function(){
return this.height( Math.max.apply(this, $.map( this , function(e){ return $(e).height() }) ) );
}