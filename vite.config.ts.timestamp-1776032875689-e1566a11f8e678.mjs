// vite.config.ts
import { defineConfig } from "file:///Users/aaron/Work/dev/asgertler.github.io/node_modules/vite/dist/node/index.js";
import react from "file:///Users/aaron/Work/dev/asgertler.github.io/node_modules/@vitejs/plugin-react/dist/index.mjs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { storybookTest } from "file:///Users/aaron/Work/dev/asgertler.github.io/node_modules/@storybook/addon-vitest/dist/vitest-plugin/index.js";
import { playwright } from "file:///Users/aaron/Work/dev/asgertler.github.io/node_modules/@vitest/browser-playwright/dist/index.js";
var __vite_injected_original_dirname = "/Users/aaron/Work/dev/asgertler.github.io";
var __vite_injected_original_import_meta_url = "file:///Users/aaron/Work/dev/asgertler.github.io/vite.config.ts";
var dirname = typeof __vite_injected_original_dirname !== "undefined" ? __vite_injected_original_dirname : path.dirname(fileURLToPath(__vite_injected_original_import_meta_url));
var vite_config_default = defineConfig({
  plugins: [react()],
  define: {
    APP_VERSION: JSON.stringify(process.env.npm_package_version)
  },
  test: {
    projects: [{
      extends: true,
      plugins: [
        // The plugin will run tests for the stories defined in your Storybook config
        // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
        storybookTest({
          configDir: path.join(dirname, ".storybook")
        })
      ],
      test: {
        name: "storybook",
        browser: {
          enabled: true,
          headless: true,
          provider: playwright({}),
          instances: [{
            browser: "chromium"
          }]
        }
      }
    }]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvYWFyb24vV29yay9kZXYvYXNnZXJ0bGVyLmdpdGh1Yi5pb1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2Fhcm9uL1dvcmsvZGV2L2FzZ2VydGxlci5naXRodWIuaW8vdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2Fhcm9uL1dvcmsvZGV2L2FzZ2VydGxlci5naXRodWIuaW8vdml0ZS5jb25maWcudHNcIjsvLy8gPHJlZmVyZW5jZSB0eXBlcz1cInZpdGVzdC9jb25maWdcIiAvPlxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuaW1wb3J0IHBhdGggZnJvbSAnbm9kZTpwYXRoJztcbmltcG9ydCB7IGZpbGVVUkxUb1BhdGggfSBmcm9tICdub2RlOnVybCc7XG5pbXBvcnQgeyBzdG9yeWJvb2tUZXN0IH0gZnJvbSAnQHN0b3J5Ym9vay9hZGRvbi12aXRlc3Qvdml0ZXN0LXBsdWdpbic7XG5pbXBvcnQgeyBwbGF5d3JpZ2h0IH0gZnJvbSAnQHZpdGVzdC9icm93c2VyLXBsYXl3cmlnaHQnO1xuY29uc3QgZGlybmFtZSA9IHR5cGVvZiBfX2Rpcm5hbWUgIT09ICd1bmRlZmluZWQnID8gX19kaXJuYW1lIDogcGF0aC5kaXJuYW1lKGZpbGVVUkxUb1BhdGgoaW1wb3J0Lm1ldGEudXJsKSk7XG5cbi8vIE1vcmUgaW5mbyBhdDogaHR0cHM6Ly9zdG9yeWJvb2suanMub3JnL2RvY3MvbmV4dC93cml0aW5nLXRlc3RzL2ludGVncmF0aW9ucy92aXRlc3QtYWRkb25cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtyZWFjdCgpXSxcbiAgZGVmaW5lOiB7XG4gICAgQVBQX1ZFUlNJT046IEpTT04uc3RyaW5naWZ5KHByb2Nlc3MuZW52Lm5wbV9wYWNrYWdlX3ZlcnNpb24pXG4gIH0sXG4gIHRlc3Q6IHtcbiAgICBwcm9qZWN0czogW3tcbiAgICAgIGV4dGVuZHM6IHRydWUsXG4gICAgICBwbHVnaW5zOiBbXG4gICAgICAvLyBUaGUgcGx1Z2luIHdpbGwgcnVuIHRlc3RzIGZvciB0aGUgc3RvcmllcyBkZWZpbmVkIGluIHlvdXIgU3Rvcnlib29rIGNvbmZpZ1xuICAgICAgLy8gU2VlIG9wdGlvbnMgYXQ6IGh0dHBzOi8vc3Rvcnlib29rLmpzLm9yZy9kb2NzL25leHQvd3JpdGluZy10ZXN0cy9pbnRlZ3JhdGlvbnMvdml0ZXN0LWFkZG9uI3N0b3J5Ym9va3Rlc3RcbiAgICAgIHN0b3J5Ym9va1Rlc3Qoe1xuICAgICAgICBjb25maWdEaXI6IHBhdGguam9pbihkaXJuYW1lLCAnLnN0b3J5Ym9vaycpXG4gICAgICB9KV0sXG4gICAgICB0ZXN0OiB7XG4gICAgICAgIG5hbWU6ICdzdG9yeWJvb2snLFxuICAgICAgICBicm93c2VyOiB7XG4gICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICBoZWFkbGVzczogdHJ1ZSxcbiAgICAgICAgICBwcm92aWRlcjogcGxheXdyaWdodCh7fSksXG4gICAgICAgICAgaW5zdGFuY2VzOiBbe1xuICAgICAgICAgICAgYnJvd3NlcjogJ2Nocm9taXVtJ1xuICAgICAgICAgIH1dXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XVxuICB9XG59KTsiXSwKICAibWFwcGluZ3MiOiAiO0FBQ0EsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxXQUFXO0FBR2xCLE9BQU8sVUFBVTtBQUNqQixTQUFTLHFCQUFxQjtBQUM5QixTQUFTLHFCQUFxQjtBQUM5QixTQUFTLGtCQUFrQjtBQVIzQixJQUFNLG1DQUFtQztBQUFpSixJQUFNLDJDQUEyQztBQVMzTyxJQUFNLFVBQVUsT0FBTyxxQ0FBYyxjQUFjLG1DQUFZLEtBQUssUUFBUSxjQUFjLHdDQUFlLENBQUM7QUFHMUcsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUyxDQUFDLE1BQU0sQ0FBQztBQUFBLEVBQ2pCLFFBQVE7QUFBQSxJQUNOLGFBQWEsS0FBSyxVQUFVLFFBQVEsSUFBSSxtQkFBbUI7QUFBQSxFQUM3RDtBQUFBLEVBQ0EsTUFBTTtBQUFBLElBQ0osVUFBVSxDQUFDO0FBQUEsTUFDVCxTQUFTO0FBQUEsTUFDVCxTQUFTO0FBQUE7QUFBQTtBQUFBLFFBR1QsY0FBYztBQUFBLFVBQ1osV0FBVyxLQUFLLEtBQUssU0FBUyxZQUFZO0FBQUEsUUFDNUMsQ0FBQztBQUFBLE1BQUM7QUFBQSxNQUNGLE1BQU07QUFBQSxRQUNKLE1BQU07QUFBQSxRQUNOLFNBQVM7QUFBQSxVQUNQLFNBQVM7QUFBQSxVQUNULFVBQVU7QUFBQSxVQUNWLFVBQVUsV0FBVyxDQUFDLENBQUM7QUFBQSxVQUN2QixXQUFXLENBQUM7QUFBQSxZQUNWLFNBQVM7QUFBQSxVQUNYLENBQUM7QUFBQSxRQUNIO0FBQUEsTUFDRjtBQUFBLElBQ0YsQ0FBQztBQUFBLEVBQ0g7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
