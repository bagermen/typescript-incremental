# Typescript's references explanation (incremental build)

Typescript config has root option named *references*. The option allows loading referenced modules by their compilled types (.d.ts instead of .ts).

It makes possible to do incremental projects builds. To make the feature workable additional option named *composite* is added to *compilerOptions*.

*composite* option adds validation by which the project must include only files mentioned in *include* or *files* arrays plus it enables *incremental* flag.

If the project has referenced projects, those projects should be listed inside the *references* array.

## How to set up environment

1. We create shared configuration in file: *tsconfig.base.json*
2. We create solution file: *tsconfig.json* (this file should not include any file, but keep *references* to all child projects)
3. Each project should have enabled *composite* option, and list all linked projects in *references* array
4. You will need to either set the *outDir* to an explicit subfolder of the output folder, or set the *rootDir* to the common root of all project folders.

## Notes
  Requirement 4 is required here because we should be aware of relative paths by which projects might adress each other.

  Typescript has option *incremental*. This option is enabled for composite project regardless of it's settings. This option means that Typescript creates *.tsbuildinfo* files.

  *.tsbuildinfo* files are used by Typescript for detection of project changes and could be safely removed or placed into different place by option *tsBuildInfoFile*

## Links
- [Official description](https://www.typescriptlang.org/docs/handbook/project-references.html)
- [Good Explanation using project examples](https://wallis.dev/blog/typescript-project-references)
- [Jest with Typescript](https://kulshekhar.github.io/ts-jest/)
