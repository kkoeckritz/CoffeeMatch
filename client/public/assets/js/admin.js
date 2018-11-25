
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

$(document).on("click", ".add-collection-button", addCollection);
$(document).on("click", ".remove-collection-button", removeCollection);

$(document).ready(function() {
  updateCollectionManagementTable();
});