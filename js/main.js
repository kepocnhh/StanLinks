/* globals angular */
(function ()
{
	angular.module('StanLinksApp', [])
		.controller('StanLinksCtrl', ['$scope', '$http', function ($scope, $http)
		{
			$http({
				method: 'GET',
				url: 'projects.json'
			}).then(function successCallback (response)
			{
				$scope.projects = response.data;
      		})
    	}])
}
)()
