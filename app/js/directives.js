
// this function is here to destroy the sidepanel loading indicator once the players are loaded
angular.module('ezrxDirectives', [])
	.directive('pieChart', [function() {
		return function(scope, elm, attrs) {

			Morris.Donut({
				element: elm[0].id,
				data: JSON.parse(attrs.symptoms),
				formatter: function (value) {
					return value + '%';
				}
			});






		};
	}]);
