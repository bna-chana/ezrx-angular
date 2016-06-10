'use strict';

angular.module('ezrxServices', []).service('Schedule', function ($http) {
	return {

		getSchedule: function(date) {
			return $http.get('/api/get-schedule/' + date).then(function(response) {
				return response;
			});
		},
		createAppointment: function(origin, destination, appointmentDate, code) {
			return $http.get('/api/create-appointment/' + origin + '/' + destination + '/' + appointmentDate + '/' + code).then(function(response) {
				return response;
			});

		}

	};
});
