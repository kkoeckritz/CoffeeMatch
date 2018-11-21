$(document).ready(function() {
  $('.sidenav').sidenav();
  $('.tabs').tabs();
  $('.fixed-action-btn').floatingActionButton();
  // $('.tooltipped').tooltip();
   function go() {
    const fileInput = document.getElementById('file');
    const outputDiv = document.getElementById('output');
    let html = '';
    for (const file of fileInput.files) {
      html += '<img src="images/' + file.name + '">';
    }
    outputDiv.textContent = html;
  }
  
});