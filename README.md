# ![LOGO](logo.png) Cloud Tool Results **flow**ground Connector

## Description

A generated **flow**ground connector for the Cloud Tool Results API (version v1beta3).

Generated from: https://api.apis.guru/v2/specs/googleapis.com/toolresults/v1beta3/swagger.json<br/>
Generated at: 2019-05-07T17:42:04+03:00

## API Description

Reads and publishes results from Firebase Test Lab.

## Authorization

Supported authorization schemes:
- OAuth2

For OAuth 2.0 you need to specify OAuth Client credentials as environment variables in the connector repository:
* `OAUTH_CLIENT_ID` - your OAuth client id
* `OAUTH_CLIENT_SECRET` - your OAuth client secret

## Actions

### Lists Histories for a given Project.<br/>
> <br/>
> The histories are sorted by modification time in descending order. The history_id key will be used to order the history with the same modification time.<br/>
> <br/>
> May return any of the following canonical error codes:<br/>
> <br/>
> - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the History does not exist

*Tags:* `projects`

#### Input Parameters
* `filterByName` - _optional_ - If set, only return histories with the given name.

Optional.
* `pageSize` - _optional_ - The maximum number of Histories to fetch.

Default value: 20. The server will use this default if the field is not set or has a value of 0. Any value greater than 100 will be treated as 100.

Optional.
* `pageToken` - _optional_ - A continuation token to resume the query at the next item.

Optional.
* `projectId` - _required_ - A Project id.

Required.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Creates a History.<br/>
> <br/>
> The returned History will have the id set.<br/>
> <br/>
> May return any of the following canonical error codes:<br/>
> <br/>
> - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing project does not exist

*Tags:* `projects`

#### Input Parameters
* `projectId` - _required_ - A Project id.

Required.
* `requestId` - _optional_ - A unique request ID for server to detect duplicated requests. For example, a UUID.

Optional, but strongly recommended.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Gets a History.<br/>
> <br/>
> May return any of the following canonical error codes:<br/>
> <br/>
> - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the History does not exist

*Tags:* `projects`

#### Input Parameters
* `historyId` - _required_ - A History id.

Required.
* `projectId` - _required_ - A Project id.

Required.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Lists Executions for a given History.<br/>
> <br/>
> The executions are sorted by creation_time in descending order. The execution_id key will be used to order the executions with the same creation_time.<br/>
> <br/>
> May return any of the following canonical error codes:<br/>
> <br/>
> - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing History does not exist

*Tags:* `projects`

#### Input Parameters
* `historyId` - _required_ - A History id.

Required.
* `pageSize` - _optional_ - The maximum number of Executions to fetch.

Default value: 25. The server will use this default if the field is not set or has a value of 0.

Optional.
* `pageToken` - _optional_ - A continuation token to resume the query at the next item.

Optional.
* `projectId` - _required_ - A Project id.

Required.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Creates an Execution.<br/>
> <br/>
> The returned Execution will have the id set.<br/>
> <br/>
> May return any of the following canonical error codes:<br/>
> <br/>
> - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the containing History does not exist

*Tags:* `projects`

#### Input Parameters
* `historyId` - _required_ - A History id.

Required.
* `projectId` - _required_ - A Project id.

Required.
* `requestId` - _optional_ - A unique request ID for server to detect duplicated requests. For example, a UUID.

Optional, but strongly recommended.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Gets an Execution.<br/>
> <br/>
> May return any of the following canonical error codes:<br/>
> <br/>
> - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the Execution does not exist

*Tags:* `projects`

#### Input Parameters
* `executionId` - _required_ - An Execution id.

Required.
* `historyId` - _required_ - A History id.

Required.
* `projectId` - _required_ - A Project id.

Required.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Updates an existing Execution with the supplied partial entity.<br/>
> <br/>
> May return any of the following canonical error codes:<br/>
> <br/>
> - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if the requested state transition is illegal - NOT_FOUND - if the containing History does not exist

*Tags:* `projects`

#### Input Parameters
* `executionId` - _required_ - Required.
* `historyId` - _required_ - Required.
* `projectId` - _required_ - A Project id. Required.
* `requestId` - _optional_ - A unique request ID for server to detect duplicated requests. For example, a UUID.

Optional, but strongly recommended.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Lists Screenshot Clusters<br/>
> <br/>
> Returns the list of screenshot clusters corresponding to an execution. Screenshot clusters are created after the execution is finished. Clusters are created from a set of screenshots. Between any two screenshots, a matching score is calculated based off their metadata that determines how similar they are. Screenshots are placed in the cluster that has screens which have the highest matching scores.

*Tags:* `projects`

#### Input Parameters
* `executionId` - _required_ - An Execution id.

Required.
* `historyId` - _required_ - A History id.

Required.
* `projectId` - _required_ - A Project id.

Required.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Retrieves a single screenshot cluster by its ID

*Tags:* `projects`

#### Input Parameters
* `clusterId` - _required_ - A Cluster id

Required.
* `executionId` - _required_ - An Execution id.

Required.
* `historyId` - _required_ - A History id.

Required.
* `projectId` - _required_ - A Project id.

Required.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Lists Steps for a given Execution.<br/>
> <br/>
> The steps are sorted by creation_time in descending order. The step_id key will be used to order the steps with the same creation_time.<br/>
> <br/>
> May return any of the following canonical error codes:<br/>
> <br/>
> - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if an argument in the request happens to be invalid; e.g. if an attempt is made to list the children of a nonexistent Step - NOT_FOUND - if the containing Execution does not exist

*Tags:* `projects`

#### Input Parameters
* `executionId` - _required_ - A Execution id.

Required.
* `historyId` - _required_ - A History id.

Required.
* `pageSize` - _optional_ - The maximum number of Steps to fetch.

Default value: 25. The server will use this default if the field is not set or has a value of 0.

Optional.
* `pageToken` - _optional_ - A continuation token to resume the query at the next item.

Optional.
* `projectId` - _required_ - A Project id.

Required.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Creates a Step.<br/>
> <br/>
> The returned Step will have the id set.<br/>
> <br/>
> May return any of the following canonical error codes:<br/>
> <br/>
> - PERMISSION_DENIED - if the user is not authorized to write to project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if the step is too large (more than 10Mib) - NOT_FOUND - if the containing Execution does not exist

*Tags:* `projects`

#### Input Parameters
* `executionId` - _required_ - A Execution id.

Required.
* `historyId` - _required_ - A History id.

Required.
* `projectId` - _required_ - A Project id.

Required.
* `requestId` - _optional_ - A unique request ID for server to detect duplicated requests. For example, a UUID.

Optional, but strongly recommended.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Gets a Step.<br/>
> <br/>
> May return any of the following canonical error codes:<br/>
> <br/>
> - PERMISSION_DENIED - if the user is not authorized to read project - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the Step does not exist

*Tags:* `projects`

#### Input Parameters
* `executionId` - _required_ - A Execution id.

Required.
* `historyId` - _required_ - A History id.

Required.
* `projectId` - _required_ - A Project id.

Required.
* `stepId` - _required_ - A Step id.

Required.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Updates an existing Step with the supplied partial entity.<br/>
> <br/>
> May return any of the following canonical error codes:<br/>
> <br/>
> - PERMISSION_DENIED - if the user is not authorized to write project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if the requested state transition is illegal (e.g try to upload a duplicate xml file), if the updated step is too large (more than 10Mib) - NOT_FOUND - if the containing Execution does not exist

*Tags:* `projects`

#### Input Parameters
* `executionId` - _required_ - A Execution id.

Required.
* `historyId` - _required_ - A History id.

Required.
* `projectId` - _required_ - A Project id.

Required.
* `requestId` - _optional_ - A unique request ID for server to detect duplicated requests. For example, a UUID.

Optional, but strongly recommended.
* `stepId` - _required_ - A Step id.

Required.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Retrieves a PerfMetricsSummary.<br/>
> <br/>
> May return any of the following error code(s): - NOT_FOUND - The specified PerfMetricsSummary does not exist

*Tags:* `projects`

#### Input Parameters
* `executionId` - _required_ - A tool results execution ID.
* `historyId` - _required_ - A tool results history ID.
* `projectId` - _required_ - The cloud project
* `stepId` - _required_ - A tool results step ID.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Creates a PerfMetricsSummary resource. Returns the existing one if it has already been created.<br/>
> <br/>
> May return any of the following error code(s): - NOT_FOUND - The containing Step does not exist

*Tags:* `projects`

#### Input Parameters
* `executionId` - _required_ - A tool results execution ID.
* `historyId` - _required_ - A tool results history ID.
* `projectId` - _required_ - The cloud project
* `stepId` - _required_ - A tool results step ID.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Lists PerfSampleSeries for a given Step.<br/>
> <br/>
> The request provides an optional filter which specifies one or more PerfMetricsType to include in the result; if none returns all. The resulting PerfSampleSeries are sorted by ids.<br/>
> <br/>
> May return any of the following canonical error codes: - NOT_FOUND - The containing Step does not exist

*Tags:* `projects`

#### Input Parameters
* `executionId` - _required_ - A tool results execution ID.
* `filter` - _optional_ - Specify one or more PerfMetricType values such as CPU to filter the result
* `historyId` - _required_ - A tool results history ID.
* `projectId` - _required_ - The cloud project
* `stepId` - _required_ - A tool results step ID.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Creates a PerfSampleSeries.<br/>
> <br/>
> May return any of the following error code(s): - ALREADY_EXISTS - PerfMetricSummary already exists for the given Step - NOT_FOUND - The containing Step does not exist

*Tags:* `projects`

#### Input Parameters
* `executionId` - _required_ - A tool results execution ID.
* `historyId` - _required_ - A tool results history ID.
* `projectId` - _required_ - The cloud project
* `stepId` - _required_ - A tool results step ID.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Gets a PerfSampleSeries.<br/>
> <br/>
> May return any of the following error code(s): - NOT_FOUND - The specified PerfSampleSeries does not exist

*Tags:* `projects`

#### Input Parameters
* `executionId` - _required_ - A tool results execution ID.
* `historyId` - _required_ - A tool results history ID.
* `projectId` - _required_ - The cloud project
* `sampleSeriesId` - _required_ - A sample series id
* `stepId` - _required_ - A tool results step ID.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Lists the Performance Samples of a given Sample Series - The list results are sorted by timestamps ascending - The default page size is 500 samples; and maximum size allowed 5000 - The response token indicates the last returned PerfSample timestamp - When the results size exceeds the page size, submit a subsequent request including the page token to return the rest of the samples up to the page limit<br/>
> <br/>
> May return any of the following canonical error codes: - OUT_OF_RANGE - The specified request page_token is out of valid range - NOT_FOUND - The containing PerfSampleSeries does not exist

*Tags:* `projects`

#### Input Parameters
* `executionId` - _required_ - A tool results execution ID.
* `historyId` - _required_ - A tool results history ID.
* `pageSize` - _optional_ - The default page size is 500 samples, and the maximum size is 5000. If the page_size is greater than 5000, the effective page size will be 5000
* `pageToken` - _optional_ - Optional, the next_page_token returned in the previous response
* `projectId` - _required_ - The cloud project
* `sampleSeriesId` - _required_ - A sample series id
* `stepId` - _required_ - A tool results step ID.

### Creates a batch of PerfSamples - a client can submit multiple batches of Perf Samples through repeated calls to this method in order to split up a large request payload - duplicates and existing timestamp entries will be ignored. - the batch operation may partially succeed - the set of elements successfully inserted is returned in the response (omits items which already existed in the database).<br/>
> <br/>
> May return any of the following canonical error codes: - NOT_FOUND - The containing PerfSampleSeries does not exist

*Tags:* `projects`

#### Input Parameters
* `executionId` - _required_ - A tool results execution ID.
* `historyId` - _required_ - A tool results history ID.
* `projectId` - _required_ - The cloud project
* `sampleSeriesId` - _required_ - A sample series id
* `stepId` - _required_ - A tool results step ID.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Lists thumbnails of images attached to a step.<br/>
> <br/>
> May return any of the following canonical error codes: - PERMISSION_DENIED - if the user is not authorized to read from the project, or from any of the images - INVALID_ARGUMENT - if the request is malformed - NOT_FOUND - if the step does not exist, or if any of the images do not exist

*Tags:* `projects`

#### Input Parameters
* `executionId` - _required_ - An Execution id.

Required.
* `historyId` - _required_ - A History id.

Required.
* `pageSize` - _optional_ - The maximum number of thumbnails to fetch.

Default value: 50. The server will use this default if the field is not set or has a value of 0.

Optional.
* `pageToken` - _optional_ - A continuation token to resume the query at the next item.

Optional.
* `projectId` - _required_ - A Project id.

Required.
* `stepId` - _required_ - A Step id.

Required.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Publish xml files to an existing Step.<br/>
> <br/>
> May return any of the following canonical error codes:<br/>
> <br/>
> - PERMISSION_DENIED - if the user is not authorized to write project - INVALID_ARGUMENT - if the request is malformed - FAILED_PRECONDITION - if the requested state transition is illegal, e.g try to upload a duplicate xml file or a file too large. - NOT_FOUND - if the containing Execution does not exist

*Tags:* `projects`

#### Input Parameters
* `executionId` - _required_ - A Execution id.

Required.
* `historyId` - _required_ - A History id.

Required.
* `projectId` - _required_ - A Project id.

Required.
* `stepId` - _required_ - A Step id. Note: This step must include a TestExecutionStep.

Required.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Gets the Tool Results settings for a project.<br/>
> <br/>
> May return any of the following canonical error codes:<br/>
> <br/>
> - PERMISSION_DENIED - if the user is not authorized to read from project

*Tags:* `projects`

#### Input Parameters
* `projectId` - _required_ - A Project id.

Required.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

### Creates resources for settings which have not yet been set.<br/>
> <br/>
> Currently, this creates a single resource: a Google Cloud Storage bucket, to be used as the default bucket for this project. The bucket is created in an FTL-own storage project. Except for in rare cases, calling this method in parallel from multiple clients will only create a single bucket. In order to avoid unnecessary storage charges, the bucket is configured to automatically delete objects older than 90 days.<br/>
> <br/>
> The bucket is created with the following permissions: - Owner access for owners of central storage project (FTL-owned) - Writer access for owners/editors of customer project - Reader access for viewers of customer project The default ACL on objects created in the bucket is: - Owner access for owners of central storage project - Reader access for owners/editors/viewers of customer project See Google Cloud Storage documentation for more details.<br/>
> <br/>
> If there is already a default bucket set and the project can access the bucket, this call does nothing. However, if the project doesn't have the permission to access the bucket or the bucket is deleted, a new bucket will be created.<br/>
> <br/>
> May return any canonical error codes, including the following:<br/>
> <br/>
> - PERMISSION_DENIED - if the user is not authorized to write to project - Any error code raised by Google Cloud Storage

*Tags:* `projects`

#### Input Parameters
* `projectId` - _required_ - A Project id.

Required.
* `fields` - _optional_ - Selector specifying which fields to include in a partial response.
* `key` - _optional_ - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* `oauth_token` - _optional_ - OAuth 2.0 token for the current user.
* `prettyPrint` - _optional_ - Returns response with indentations and line breaks.
* `quotaUser` - _optional_ - An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
* `userIp` - _optional_ - Deprecated. Please use quotaUser instead.

## License

**flow**ground :- Telekom iPaaS / googleapis-com-toolresults-connector<br/>
Copyright © 2019, [Deutsche Telekom AG](https://www.telekom.de)<br/>
contact: flowground@telekom.de

All files of this connector are licensed under the Apache 2.0 License. For details
see the file LICENSE on the toplevel directory.
