/**
 * Updates the CMS Collection Management table with existing collections and
 * available shopify collection.
 */
function updateCollectionManagementTable() {
  $(".enabled-collection-row").remove();
  $(".available-collections-row").remove();
  $.get("/api/collections/caff")
    .then(enabledCollections => {
      console.log(`/api/collections: ${JSON.stringify(enabledCollections)}`);
      enabledCollections.map(collection => {
        let newRow = $("<tr scope='row'>");
        newRow.addClass("enabled-collection-row");
        newRow.attr("id", `enabled-${collection.handle}`);
        newRow.append($("<td>").text(collection.name));
        let button = $("<button>").text("Remove");
        button.addClass("remove-collection-button btn btn-danger");
        button.attr("data-collection-id", collection._id);
        newRow.append($("<td>").html(button));
        $("#enabled-collections-table").append(newRow);
      });
      $.get("/api/shopify-collections")
        .then(shopifyCollections => {
          console.log(`/api/shopify-collections: ${JSON.stringify(shopifyCollections)}`);
          shopifyCollections
            .filter(collection => (
              !enabledCollections.map(c => c.handle).includes(collection.handle)
            ))
            .map(collection => {
              let newRow = $("<tr scope='row'>");
              newRow.addClass("available-collection-row");
              newRow.attr("id", `enabled-${collection.handle}`);
              newRow.append($("<td>").text(collection.title));
              let button = $("<button>").text("Add");
              button.addClass("add-collection-button btn btn-primary");
              button.attr("data-handle", collection.handle);
              button.attr("data-name", collection.title);
              newRow.append($("<td>").html(button));
              $("#available-collections-table").append(newRow);
            });
        });
    });
}

function addCollection() {
  let handle = $(this).attr("data-handle");
  let name = $(this).attr("data-name");
  var defaultImageUrl = window.location.origin + "/assets/images/flat-coffee-beans.jpg";
  let defaultDescription = "Hi there. My name is Clint. I don't have for time for descriptions, I roast beans.";
  var imageUrl = prompt("Please enter the image URL for this collection", defaultImageUrl);
  var description = prompt("Please enter a description for this collection", defaultDescription);
  if (imageUrl == null || imageUrl === '') {
    imageUrl = defaultImageUrl;
  }
  if (description == null || description === '') {
    description = defaultDescription;
  }
  let collection = { 
    name: name, 
    handle: handle, 
    imgURL: imageUrl, 
    has_decaf: false,
    description: description
  }
  console.log(collection);
  $.post("/collection", collection)
    .then(response => updateCollectionManagementTable());
}

function removeCollection() {
  let id = $(this).attr("data-collection-id");
  console.log(`Deleting ${id}`);
  $.ajax( { url: `/collection/${id}`, type: "DELETE"})
    .then(response => updateCollectionManagementTable());
}

/**
 * Grab stats data from db
 * @returns {Promise} 
 */
function loadStats() {
  let raw_stats = [];

  return new Promise((resolve, reject) => {
    $.get( "/stats", data => {
      raw_stats = data;
      
      if (raw_stats) {
        console.log(raw_stats);
        resolve(raw_stats);
      } else {
        let errmsg = new Error("Cannot load stats from DB.");
        reject(errmsg);
      }
    })
  })

}

/**
 * Parses raw stats data into tallies
 * @param {object} raw_stats - JSON straight from stats db
 * @returns {Promise} - counts of unique items in raw_stats
 */
function parseStats(raw_stats) {
  let parsed = {
    caff: {
      yes: 0,
      no: 0
    },
    coll: {},
    flav: {}
  };
  
  for (let i of raw_stats) {

    // check caffeine, collection handle, flavor bucket
    i.caffeinated ?
      parsed.caff.yes = (parsed.caff.yes + 1 || 1) :
      parsed.caff.no = (parsed.caff.no + 1 || 1);
    parsed.coll[i.collection_handle] = (parsed.coll[i.collection_handle] + 1 || 1);
    parsed.flav[i.bucket] = (parsed.flav[i.bucket] + 1 || 1);
  }

  return new Promise((resolve, reject) => {
    if (raw_stats) {
      console.log(parsed)
      resolve(parsed);
    } else {
      let errmsg = new Error("No stats available for parsing.");
      reject(errmsg);
    }
  })
}

/**
 * Generates random colors
 * @param {integer} num_colors - number of sets of rgb to generate
 * @returns {array} - array of rgb objects
 */
function randColors(num_colors) {
  let colors = [];

  for (let i = 0; i < num_colors; i++) {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    let color = String("rgb(" + r + "," + g + "," + b + ")");
    colors.push(color);
  }

  return colors;
}

/**
 * Render stats charts
 */
function drawCharts() {
  loadStats()
    .then(raw_stats => {
      return parseStats(raw_stats);
    })
    .then(parsed_stats => {
      let elem_caff = $("#chart_caff");
      let elem_coll = $("#chart_coll");
      let elem_flav = $("#chart_flav");

      // configure caffeine chart
      let data_caff = {
        datasets: [{
            data: [parsed_stats.caff.yes, parsed_stats.caff.no],
            backgroundColor: randColors(2)
        }],
    
        labels: ["Yes", "No"]
      };

      var chart_caff = new Chart(elem_caff, {
        type: 'doughnut',
        data: data_caff,
        options: {
          legend: {
            position: "bottom"
          }
        }
      });

      // configure collection chart
      let data_coll = {
        datasets: [{
            data: Object.values(parsed_stats.coll),
            backgroundColor: randColors(Object.keys(parsed_stats.coll).length)
        }],
    
        labels: Object.keys(parsed_stats.coll)
      };

      var chart_coll = new Chart(elem_coll, {
        type: 'doughnut',
        data: data_coll,
        options: {
          legend: {
            position: "bottom"
          }
        }
      });

      // configure flavor chart
      let data_flav = {
        datasets: [{
            data: Object.values(parsed_stats.flav),
            backgroundColor: randColors(Object.keys(parsed_stats.flav).length)
        }],
    
        labels: Object.keys(parsed_stats.flav)
      };

      var chart_flav = new Chart(elem_flav, {
        type: 'doughnut',
        data: data_flav,
        options: {
          legend: {
            position: "bottom"
          }
        }
      });

    });
}

$(document).on("click", ".add-collection-button", addCollection);
$(document).on("click", ".remove-collection-button", removeCollection);

$(document).ready(function() {
  updateCollectionManagementTable();
  drawCharts();
});