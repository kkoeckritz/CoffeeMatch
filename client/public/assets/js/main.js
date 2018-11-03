document.addEventListener('DOMContentLoaded', function() {
	var elems = document.querySelectorAll('.fixed-action-btn');
	var instances = M.FloatingActionButton.init(elems, {
		direction: 'bottom'
	});
});

// document.addEventListener('DOMContentLoaded', function() {
// 	var elems = document.querySelectorAll('.tabs');
// 	var instance = M.Tabs.init(elems, {
// 	});
// });

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.scrollspy');
    var instances = M.ScrollSpy.init(elems, {});
  });

