var linearScale = d3.scaleOrdinal()
  .domain(["poor", "good", "great"])
  .range(["red", "white", "green"]);

console.log(linearScale("good"));
console.log(linearScale("poor"));
console.log(linearScale("great"));


var timeScale = d3.scaleTime()
  .domain([new Date(2016, 0, 1), new Date()])
  .range([0, 100]);

console.log(timeScale(new Date(2016, 0, 15)));
console.log(timeScale(new Date(2016, 5, 3)));
console.log(timeScale(new Date()));

console.log(timeScale.invert(50));

d3.json('data/data.json', function(data) {
    var extent = d3.extent(data, function(d){
      return d.age
    });
    console.log(extent);

    var scale = d3.scaleLinear()
      .domain(extent)
      .range([0, 600]);
      console.log(scale(37));

    var ages = d3.set(data, function(d) {
      return d.age;
    });

    console.log(ages.values());
});

var div = d3.selectAll('div');
console.log(div.nodes());

var divLinks = div.selectAll('a');
console.log(divLinks.nodes());

var actionLink = d3.selectAll('.action');
console.log(actionLink.nodes());
