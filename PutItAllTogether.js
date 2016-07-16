// Bball court is 94 ft length by 50 ft wide

var x = d3.scaleLinear()
	.domain([33.1733, 34.0883])
	.range([5,940]);
	
var y = d3.scaleLinear()
	.domain([-118.52,-118.022])
	.range([5,500]);

d3.csv('data.csv', function(d) {
	return {
		action_type: d.action_type,
		lat: d.lat,
		lon: d.lon,
		loc_x: d.loc_x,
		loc_y: d.loc_y,
		shot_made_flag: d.shot_made_flag,
		shot_type: d.shot_type
	};
}, function(shots) {
	
	var svg = d3.select('svg');
	
	var circle = svg.selectAll("circle")
		.data(shots);
	
	var circleEnter = circle.enter().append("circle");
	
	circleEnter
		.attr("cx", function(d) {
			return x(d.lat);
		})
		.attr("cy", function(d) {
			return y(d.lon);
		})
		.attr("r", 2)
		.attr("fill", function(d) {
			switch(d.shot_type) {
				case '3PT Field Goal':
					return "steelblue";
					break;
				case '2PT Field Goal':
					return "none";
					break;
				default:
					return "none";
					break;
			}
		});
});	