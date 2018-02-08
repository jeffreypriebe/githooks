
# githooks

This is a few helpers for githooks to instrument or standardize git across repos.

## Setup

### Commit Message Validation

Setup by symlinking 'commit-msg' and 'commit-msg-validate.js' into your repo's .git/hooks

To share the config, also symlink the '.vcmrc' to the root of your repo. (These are reduced from the default: more types !== more value.)

## Rationale

This enforces standards for your commit messages. Aside from the benefit of standardized messages, the standardization allows for mining git commits and see trends. Originally, this came out of an effort to compare and contrast two projects.

## Todo

* Capture the notion of "project phase" with some option format portion.

## References

Borrowing from other projects for ideas

* [Karma's git commit messages standards](http://karma-runner.github.io/2.0/dev/git-commit-msg.html)
* [conventional-commit-types](https://github.com/commitizen/conventional-commit-types)
* [validate-commit-message](https://github.com/conventional-changelog-archived-repos/validate-commit-msg) (the dep that does most of the work)

