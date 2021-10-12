# Api good practices Checklist

This is the checklist of good quality practices and technologies for a api development.

Static Analisys

- [ ] Eslint
- [ ] Prettier

Tests

- [ ] Unit Tests for each feature
- [ ] Mutation Tests to validate unit tests
- [ ] Integration Tests
- [ ] Functional Tests
- [ ] Script to run tests

Infra

- [ ] Script to build and run the project
- [ ] Docker compose to build project

Repository

- [ ] Gitflow
- [ ] Conventional Commits
- [ ] CI/CD (Github Actions, GitlabCi, BitbucketCI, Jenkins)
- [ ] Semantic-Releases

Performance

- [ ] Use frame rate limiter to limit users calls to api
- [ ] Use cache to dependency services

Docs

- [ ] Create a Readme
- [ ] Create a api documentation (Swagger, apidocs)

Environment Variables

- [ ] Use environment variables to maintain sensitive data

Logging

- [ ] Use a dedicated logger instead console.log.

Debugging

- [ ] Use your editor debug mode instead console.log in code

Devops

- [ ] Healthcheck Route
- [ ] Metrics Routes
- [ ] Validate Environment Variables (Ex: joi validator)

Virtualization

- [ ] Create a virtualization config (e.g. docker-compose.yml) to setup your application with one command



- [ ] lint-staged
- [ ] commitlint
# References

https://microservices.io/patterns/observability/health-check-api.html
