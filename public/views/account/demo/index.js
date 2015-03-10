// demo/index.js

'use strict';

// desktop view only
var width = 960,
    height = 900;
    
// demo-specific variables 
    
// set the data lookup call
var url = "demo/data";
    
/*
   SVG Body
*/
var svg = d3.select("#demodata").append("svg")
    .attr("width", width)
    .attr("height", height);
    
var linemaker = function( obj ) {
    var str = "";
    for (var p in obj) {
        if (p != "_id") {
            str += String(obj[p]) + " ";
        }
    }
    return str;
}

/*
    MAIN 
        
    get the data and do something with it
    - display one line at a time
*/
d3.xhr(url, function (error, res) {

    if (res && res.response) {
      var demodata = JSON.parse(res.response);
    }
        
    // display all data
    svg.selectAll("text").data(demodata)
        .enter()
        .append("text")
        .text(function(d) { return linemaker(d); })
        .attr("x", "20")
        .attr("y", function(d,i) { return i*20; });
    
});

d3.select(self.frameElement).style("height", height + "px");
