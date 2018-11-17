$(document).ready(function(){
    $('.sidenav').sidenav();
  });
        

$(document).ready(function(){
    $('.tabs').tabs();
  });

  $(document).ready(function(){
    $('.fixed-action-btn').floatingActionButton();
  });


  function go() {
    const fileInput = document.getElementById('file');
    const outputDiv = document.getElementById('output');
    let html = '';
    for (const file of fileInput.files) {
      html += '<img src="images/' + file.name + '">';
    }
    outputDiv.textContent = html;
  }