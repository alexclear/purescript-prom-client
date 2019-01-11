"use strict";

exports.createPromClient = function () {
    var promClient = require('prom-client');
    promClient.collectDefaultMetrics({ timeout: 5000 });
    return promClient;
};

exports.metrics = function (promClient) {
    return function () {
        return promClient.register.metrics();
    };
};

exports.metricsContentType = function (promClient) {
    return function () {
        return promClient.register.contentType;
    };
};

exports.increment = function (promClient) {
    return function(name) {
        return function () {
            if(promClient.register.getSingleMetric(name) == undefined) {
                new promClient.Counter({
                    name: name,
                    help: name
                });
            }
            promClient.register.getSingleMetric(name).inc();
            return {};
        };
    };
};
