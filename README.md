# Dynamic Port Allocation with Nx Inference API

This is a demo project to show how to use the Nx Inference API to dynamically allocate ports for Storybook to avoid clashes when running multiple instances in parallel.

## More info

- [Blog: Avoiding Port Conflicts with Multiple Storybook Instances](https://nx.dev/blog/dynamic-targets-with-inference-tasks)
- [Nx Docs: Infer Tasks or Projects](https://nx.dev/extending-nx/recipes/project-graph-plugins)

## Running the project

Clone the repo and run `pnpm install` to install the dependencies.

Then run the following command to start storybook tests:

```bash
pnpm nx run-many -t test-storybook
```

## Credits

Credits to [Nicolas Beaussart](https://github.com/beaussan) for collaborating on this.
