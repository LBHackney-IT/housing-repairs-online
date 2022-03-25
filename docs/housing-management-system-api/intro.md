# Housing Management System API

<a class="badge badge--secondary" href="https://github.com/LBHackney-IT/HousingManagementSystemApi">GitHub Repository</a>

## Frameworks used

Written in .Net

## Environment variables
| Name                                                                    | Description                                                                           |
|-------------------------------------------------------------------------|---------------------------------------------------------------------------------------|
| AUTHENTICATION_IDENTIFIER                                               | A unique identifier used to validate access.*                                         |
| JWT_SECRET                                                              | A hash secret used for encryption.*                                                   |
| UNIVERSAL_HOUSING_CONNECTION_STRING                                     | Connection string to Universal Housing database.                                      |
| [SENTRY_DSN](../alerting-and-monitoring/intro#azure-component-setup) | [Sentry Data Source Name](https://docs.sentry.io/product/sentry-basics/dsn-explainer/)|

\* See [Authentication](../apis/authentication) for more details.

## Health Checks

See [Health Checks](../apis/health-checks) for details.

The API is determined to be health if:

- it can connect to the Universal Housing SQL Server database
