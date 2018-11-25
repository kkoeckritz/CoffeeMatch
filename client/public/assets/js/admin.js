
/**
 * Updates the CMS Collection Management table with existing collections and
 * available shopify collection.
 */
function updateCollectionManagementTable() {
  $.get("/api/collections/caff")
    .then(enabledCollections => {
      console.log(`/api/collections: ${JSON.stringify(enabledCollections)}`);
      enabledCollections.map(collection => {
        let newRow = $("<tr scope='row'>");
        newRow.attr("id", `enabled-${collection.handle}`);
        newRow.append($("<td>").text(collection.name));
        let button = $("<button>").text("Remove");
        button.addClass("remove-collection-button btn btn-danger");
        newRow.data("data-handle", collection.handle);
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
              newRow.attr("id", `enabled-${collection.handle}`);
              newRow.append($("<td>").text(collection.title));
              let button = $("<button>").text("Add");
              button.addClass("add-collection-button btn btn-primary");
              newRow.data("data-handle", collection.handle);
              newRow.append($("<td>").html(button));
              $("#available-collections-table").append(newRow);
            });
        });
    });
}

function addCollection() {
  let handle = $(this).attr("data-handle");
}

$(document).on("click", ".add-collection-button", addCollection);
$(document).on("click", ".remove-collection-button", removeCollection);

$(document).ready(function() {
  updateCollectionManagementTable();
});