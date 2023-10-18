## Set-up

1. Download git (https://git-scm.com/downloads)
2. Download github CLI (https://cli.github.com/) and set it up.
3. Download NodeJS LTS (https://nodejs.org/en)
4. Download Visual Studio **Code** (https://code.visualstudio.com/download)
    * Install the Svelte extension (https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode)
5. Restart your computer
6. Make a folder where you want to put the repository and navigate a terminal to it `cd github`
7. Clone the repository in the folder  `gh repo clone kaseys117/WellMo`
8. Cd into the folder `cd WellMo`
9. Install the project `npm install`
10. **Switch to the development branch** (`git checkout dev`)
11. Open the project in VS Code
    * Open VS Code
    * Press Ctrl + Shift + P
    * Type `File: Open Folder` and press enter
    * Select the repository folder (`WellMo`)
12. Start the server `npm run dev -- --open`
13. **All code goes in the `src` folder. Don't make or change files in any other folder.**
    * Optional - To understand the project structure read this: https://kit.svelte.dev/docs/project-structure
14. Push your changes to the branch:
    * git add *
    * git commit -m "write about what you did here"
    * git push
    * git pull
15. To learn how to use SvelteKit follow the tutorial here: https://learn.svelte.dev/tutorial/introducing-sveltekit or read the docs at https://kit.svelte.dev/docs
16. Check the [project board](https://github.com/users/kaseys117/projects/4/views/1) - specific items (like the design phase for a specific feature) will have additional resources to help you out and guide you.

## Helpful Sources

* Docs: https://kit.svelte.dev/docs
* Tutorial: https://learn.svelte.dev/tutorial/introducing-sveltekit
* Routing (what the different files mean): https://kit.svelte.dev/docs/routing
* Project Board: https://github.com/users/kaseys117/projects/4/views/1
