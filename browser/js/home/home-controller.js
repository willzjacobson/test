app.controller('HomeCtrl', function($scope, $http) {
	$http.get('http://www.amazon.com/gp/gw/ajax/pdb.html?swn=productdb-ajax&sa=%7B%22asins%22%3A+%5B%221885167776%22%5D%7D')
		.then(function(res) {
			console.log('RES.DATA', res.data)
			return res.data;
		})
})