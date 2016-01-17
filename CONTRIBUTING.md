# Contributing

Everyone is welcome to contribute with patches, bug-fixes and new features

1. Create an [issue][issue] on github so the community can comment on your idea
2. [Fork this project in github][fork]
3. Create a new branch `git checkout -b my_branch`
4. Add specs for your unimplemented feature or bug fix.
5. Run `npm test`. If your specs pass, return to step 4.
5. Implement your feature or bug fix.
7. Run `npm test`. If your specs fail, return to step 5.
6. Commit your changes using a descriptive commit message that follows this
   [commit message conventions][commit]. For documentation-only fixes, please
   add "[ci skip]" to your commit message to avoid needless CI builds.
7. Push to your branch `git push origin my_branch`
8. [Create a pull request][pr]

Please fix all issues identified in the pre-commit hooks before sending your
patch. If you don't, we will close the patch and ask you to re-open it once
you have:

1. 100% code coverage
2. proper code style
3. linted all your code

This is not a replacement for appropriate tests, please make sure that you haver
adequate coverage and thoroughly test the code you introduced.

[issue]: http://github.com/magarcia/generator-angular2-webpack-starter/issues
[fork]: https://help.github.com/articles/fork-a-repo
[pr]: https://help.github.com/articles/using-pull-requests
[commit]: https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md#commit-message-format
