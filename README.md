# node serverless AWS lambda typescript starter

This is a starter project for doing node projects in typescript. It is aimed at serverless AWS lambda projects.

Ethos:
- minimise the use of node dependencies
- use typescript but not via ts-node, or serverless plugins as it violates ^

Features:
-   eslint for typescript [thank you](https://www.robertcooper.me/using-eslint-and-prettier-in-a-typescript-project)
-   [husky](https://github.com/typicode/husky) for git hooks
-   [commitizen](https://github.com/commitizen/cz-cli) for consistent git messages
-   [git-secret](https://git-secret.io/) for managing git secrets for .envs
-   [asdf](https://asdf-vm.com/#/core-manage-asdf-vm) for managing node versions

Serverless:
- uses the [serverless framework](https://www.serverless.com/) _but pegged to version 1.70.0 because after this, hot reloading does not work_
- setup with a simple hello world GET function using typescript types
- CORS (**to the whole world**) is enabled

AWS best practices for lambdas
- sets defaults for functions which can be checked (after deployment) using [sls dev tools](https://github.com/Theodo-UK/sls-dev-tools) `npx sls-dev-tools --ci -r us-east-1`
- uses [serverless-iam-roles-per-function](https://github.com/functionalone/serverless-iam-roles-per-function) as this supports avoiding having a single IAM role for all of your serverless functions (the default). Having a role targetted per function is a best practice as each role can have least privilages
- configured with [X-Ray](https://aws.amazon.com/xray/)