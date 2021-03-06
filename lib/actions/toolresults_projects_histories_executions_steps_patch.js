/**
 * Auto-generated action file for "Cloud Tool Results" API.
 *
 * Generated at: 2019-05-23T09:13:45.584Z
 * Mass generator version: 1.1.0
 *
 * flowground :- Telekom iPaaS / googleapis-com-toolresults-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'toolresults.projects.histories.executions.steps.patch'
 * Endpoint Path: '/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}'
 * Method: 'patch'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "executionId",
    "historyId",
    "projectId",
    "requestId",
    "stepId",
    "quotaUser",
    "userIp"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "executionId": "executionId",
    "historyId": "historyId",
    "projectId": "projectId",
    "requestId": "requestId",
    "stepId": "stepId",
    "quotaUser": "quotaUser",
    "userIp": "userIp",
    "nanos": "nanos",
    "seconds": "seconds",
    "completionTime": "completionTime",
    "creationTime": "creationTime",
    "description": "description",
    "deviceUsageDuration": "deviceUsageDuration",
    "dimensionValue": "dimensionValue",
    "hasImages": "hasImages",
    "labels": "labels",
    "multistepNumber": "multistepNumber",
    "individualOutcome": "individualOutcome",
    "rollUp": "rollUp",
    "primaryStep": "primaryStep",
    "primaryStepId": "primaryStepId",
    "multiStep": "multiStep",
    "name": "name",
    "crashed": "crashed",
    "notInstalled": "notInstalled",
    "otherNativeCrash": "otherNativeCrash",
    "timedOut": "timedOut",
    "unableToCrawl": "unableToCrawl",
    "failureDetail": "failureDetail",
    "abortedByUser": "abortedByUser",
    "infrastructureFailure": "infrastructureFailure",
    "inconclusiveDetail": "inconclusiveDetail",
    "incompatibleAppVersion": "incompatibleAppVersion",
    "incompatibleArchitecture": "incompatibleArchitecture",
    "incompatibleDevice": "incompatibleDevice",
    "skippedDetail": "skippedDetail",
    "successDetail": "successDetail",
    "summary": "summary",
    "outcome": "outcome",
    "runDuration": "runDuration",
    "state": "state",
    "testIssues": "testIssues",
    "testSuiteOverviews": "testSuiteOverviews",
    "testProcessDuration": "testProcessDuration",
    "testTiming": "testTiming",
    "commandLineArguments": "commandLineArguments",
    "number": "number",
    "exitCode": "exitCode",
    "toolLogs": "toolLogs",
    "toolOutputs": "toolOutputs",
    "toolExecution": "toolExecution",
    "testExecutionStep": "testExecutionStep",
    "toolExecutionStep": "toolExecutionStep",
    "requestBody": "requestBody"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = 'application/json';

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};
    securities['Oauth2'] = {token: cfg['auth_Oauth2']};

    let callParams = {
        spec: spec,
        operationId: 'toolresults.projects.histories.executions.steps.patch',
        pathName: '/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}',
        method: 'patch',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}