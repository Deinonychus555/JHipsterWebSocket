 'use strict';

angular.module('jhipsterwebsocketApp')
    .factory('notificationInterceptor', function ($q, AlertService) {
        return {
            response: function(response) {
                var alertKey = response.headers('X-jhipsterwebsocketApp-alert');
                if (angular.isString(alertKey)) {
                    AlertService.success(alertKey, { param : response.headers('X-jhipsterwebsocketApp-params')});
                }
                return response;
            },
        };
    });