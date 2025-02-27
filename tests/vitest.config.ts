import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		dangerouslyIgnoreUnhandledErrors: true,
		poolOptions: {
			threads: {
				singleThread: true,
			},
		},
		// retry: 2,
		testTimeout: 60 * 1000 * 10, // 2  mins
	},
});
