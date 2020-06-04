---
title: Child Design Systems
weight: 6
---

The CMS design system (CMSDS) provides a set of components and styles to meet many design and development needs. However, there are cases where teams need to make modifications beyond [theming]({{root}}/startup/theming/) or where assets need to be published for multiple teams to use. Child design systems are intended for these use cases.

## What is a child design system?

Child design systems are extentions of the core CMSDS for a specific context or site. They consist of:

- Core CMSDS components & styles
- New and modified components & styles
- A preconfigured, customizable documentation site
- An NPM package
- A group of active maintainers and contributors consisting of the users of the child design system

Child design systems recieve updates from the core CMSDS by importing [`@cmsgov/design-system`](https://github.com/CMSgov/design-system/tree/master/packages/design-system) as dependency. They also share tooling ((`cmsgov/design-system-scripts`)[https://github.com/CMSgov/design-system/tree/master/packages/design-system-scripts]) and documentation ([`cmsgov/design-system-docs`](https://github.com/CMSgov/design-system/tree/master/packages/design-system-docs)) with the core CMSDS so teams have the resources and best practices to maintain a child design system.

<div class="ds-c-alert ds-c-alert--warn ds-u-margin-bottom--2 ds-u-font-size--small">
  <div class="ds-c-alert__body">
    <h3 class="ds-c-alert__heading ds-u-font-size--base">Note on naming</h3>
    <p class="ds-c-alert__text">
      Child design systems were previously called "site packages". We changed the name because many teams found the terminology confusing, and we believe "child design systems" better reflects our vision for independent and self-sustaining systems within the CMS Design System family. 
    </p>
  </div>
</div>

## Who should use a child design system?

Child design systems are commonly used when multiple product teams work under the same CMS site. Child design systems help teams build products under the same brand and experience by providing common assets (i.e. brand colors, site header, custom icons, etc) and a documentation site for teams to collaborate around.

### Existing child design systems:

- [Healthcare.gov Child Design System](https://github.cms.gov/CMS-WDS/ds-healthcare-gov)
- [Medicare.gov Child Design System](https://github.cms.gov/MedicareGov/ds-site-package)

## Child design system guidelines

- A child design system should be actively maintained by product teams using the system. This includes releasing new versions and publishing the documentation site. The core CMSDS team is not responsible for these tasks; however the core team is responsible for contributing updates at the core level, and assisting with design system adoption and processes.
- Users of child design system should contribute back to the larger CMS design system community by giving feedback or raising issues/bugs in Github or Jira. This type of collaboration and participation is essential to the success of the CMS design system family.
- A child design system should defer to the core CMS design system for best practices or accessibility guidelines.

## Creating a child design system

[Read more about running the design system locally](https://github.com/CMSgov/design-system/blob/master/README.md#running-locally)
