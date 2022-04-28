---
sidebar_position: 7
---

# Adoption

## Code Repositories
Clone/fork the following repositories:
- [housing-repairs-online](https://github.com/LBHackney-IT/housing-repairs-online)
- [housing-repairs-online-frontend](https://github.com/LBHackney-IT/housing-repairs-online-frontend)
- [housing-repairs-online-api](https://github.com/LBHackney-IT/housing-repairs-online-api)
- [HousingRepairsSchedulingApi](https://github.com/LBHackney-IT/HousingRepairsSchedulingApi)
- [HousingManagementSystemApi](https://github.com/LBHackney-IT/HousingManagementSystemApi)
- [HACT.Dtos](https://github.com/City-of-Lincoln-Council/HACT.Dtos)
- [HousingRepairsOnline.Authentication](https://github.com/City-of-Lincoln-Council/HousingRepairsOnline.Authentication)

The latter 2 produce Nuget packages, which if made public, could remove the need to clone their repositories.

Forking the repositories will not copy any repository access settings nor branch protection rules. It is therefore recommended to immediately:

- set code review limits, so that users outside of the organisation cannot approve pull requests
  ![Branch protection diagram](/img/github-branch-protection-rules.png)
- set branch protection rules for main (and other applicable branches) to
  - require a pull request before merging
  - require approval(s) on pull requests
  - disable force pushes
  ![Code review limits diagram](/img/github-code-review-limits.png)

## Nugets
[HACT.Dtos](https://github.com/City-of-Lincoln-Council/HACT.Dtos) and [HousingRepairsOnline.Authentication](https://github.com/City-of-Lincoln-Council/HousingRepairsOnline.Authentication) produce Nuget packages which are consumed by other components.

Each repository contains setup instructions which can be followed to establish connectivity.

## Infrastructure
Azure is the supported Cloud platform.

Create the following resouces in Azure:

### APIs
- Azure app service plan 
  - Consider which service plan would best suit the needs. Premium V2 (P1v2: 1) is recommended
  - Use a region which is geographically close to the users/residents and the 3rd party data
- Azure app service for each API
  - Create a 'staging' deployment slot
  - Each app service (and it's deployment slot) will have a publish profile which needs to be added to the repository secrets[^1]
- Cosmos DB
    - 2 databases - production and staging
    - Each with `repair-requests` collections
- Blob storage account
    - Create 2 containers - production and staging

### Frontend
- Create Azure Static Web App
  - A deployment token will need to be added to the repository secrets[^1]

## Integration

### Components
Some of the Housing Repairs Online components will need to integrate to one another.
This is by means of setting environment variables which is detailed within the documentation for each component.

### 3rd Party Systems
Connectivity needs to be establish to each 3rd party system requiring integration.

Each component would require access to the system it is integrating with, i.e. Housing Management System API needs Housing Management System (i.e. Universal Housing) connectivity.

If data is stored on premise, a VPN or other datalink should be setup so that cloud deployed infrastructure has visibility of on premise infrastructure.

### Alerting & Monitoring

See [Alerting & Monitoring](./alerting-and-monitoring/intro) for details.

## Configuration

Each component's configuration is outlined in their own specific documentation.

Please refer to this documentation to configure each component.

[^1]:
     When creating resource in Azure, if using Github integration, some of these secrets will be automatically added to the repository.
