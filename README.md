# typescript AWS lambda starter

This is a starter project for doing node projects in typescript. It is aimed at serverless AWS lambda projects.

### Ethos:

-   minimise the use of node dependencies
-   use typescript but not via ts-node, or serverless plugins as it violates ^
-   installs all dev-depedencies

### Features:

-   eslint for typescript [thank you](https://www.robertcooper.me/using-eslint-and-prettier-in-a-typescript-project)
-   [husky](https://github.com/typicode/husky) for git hooks
-   [commitizen](https://github.com/commitizen/cz-cli) for consistent git messages
-   [git-secret](https://git-secret.io/) for managing git secrets for .envs. **requires installation**
-   [asdf](https://asdf-vm.com/#/core-manage-asdf-vm) for managing node versions **requires installation**

### Serverless:

-   uses the [serverless framework](https://www.serverless.com/) _but pegged to version 1.70.0 because after this, hot reloading does not work_
-   setup with 2 simple hello world handler functions illustrating two approaches of mapping from serverless yaml to js
    -   function per HTTP method (e.g. a GET). This is typical but becomes repetitive and can bloat your yaml
    -   single function for all HTTP methods
-   CORS (**to the whole world**) is enabled
-   [lumigo-cli](https://github.com/lumigo-io/lumigo-CLI) for additional commands against AWS particularly useful if you have multiple AWS profiles as you can use `npx lumigo-cli whoami` and `npx lumigo-cli switch-profile`
-   documentation with request validation by AWS API Gateway such that lambda's are not invoked. This also enabled OpenApi (FKKA swagger) documentation.

### AWS best practices for lambdas

-   sets defaults for functions which can be checked (after deployment) using [sls dev tools](https://github.com/Theodo-UK/sls-dev-tools) `npx sls-dev-tools --ci -r us-east-1`
-   uses [serverless-iam-roles-per-function](https://github.com/functionalone/serverless-iam-roles-per-function) as this supports avoiding having a single IAM role for all of your serverless functions (the default). Having a role targetted per function is a best practice as each role can have least privilages
-   configured with [X-Ray](https://aws.amazon.com/xray/)
