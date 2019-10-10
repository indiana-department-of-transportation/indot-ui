# @INDOT-UI

INDOT TMC React Component Library

### Why monorepo?

I decided to place these components in a monorepo with lock-step versioning because they are intimately tied to react, react-router, formik, and material-ui. It's too easy to get into version hell unless all the components are tied to a specific version, and the same versions across components.

Installing dependencies should be done through the `bootstrap` script which runs lerna with --hoist and --strict to ensure compliance of the individual package-level dependencies.
