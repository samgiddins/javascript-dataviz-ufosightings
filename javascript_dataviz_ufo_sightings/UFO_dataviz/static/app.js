//create a variable to store the data
var ufoData = data;
//select the html body as a place to put the data
var ufoTable = d3.select("tbody");
//create a function that will add the full data into the webpage as a columnar table
function addFullData(table) {
    ufoTable.html("");
    console.log(table);
    table.forEach(function(ufo) {
        console.log(ufo);
        var row = ufoTable.append("tr");
        Object.entries(ufo).forEach(function([x, y]) {
            var cell = ufoTable.append("td");
            cell.text(y)
        })
        
    })
}
//create a function to filter the data to match the user's input date
function filterData() {
    d3.event.preventDefault();
    var filteredData = ufoData;
    console.log("Button working.");
    var dateTimeFilter = d3.select("#datetime").property("value")
    console.log(dateTimeFilter);
    if (dateTimeFilter) {
        filteredData = filteredData.filter(data => data.datetime === dateTimeFilter) 
    }
    console.log(filteredData);
    //run the function that adds the full data, but this time just add the filtered data.
    addFullData(filteredData);
}
//this function adds the full data to the page
addFullData(ufoData);
//on click, filter the data and replace the full data with the result
d3.selectAll("#filter-btn").on("click", filterData)
