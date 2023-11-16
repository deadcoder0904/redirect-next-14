const webpack = require("webpack")

/** @type {import('next').NextConfig} */
const nextConfig = {
	webpack: (config, { isServer, nextRuntime }) => {
		// Avoid AWS SDK Node.js require issue
		if (isServer && nextRuntime === "nodejs")
			config.plugins.push(new webpack.IgnorePlugin({ resourceRegExp: /^aws-crt$/ }))
		return config
	},
	redirects: async () => {
		const redirects = [
			{
				source: "/google",
				destination:
					"https://google.com/",
				permanent: true,
			},
		]
		return redirects
	},
}

module.exports = nextConfig