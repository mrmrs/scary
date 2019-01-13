const images = require('remark-images')
const emoji = require('remark-emoji')
const webpack = require("webpack")
const path = require("path")
const fs = require("fs-extra")

const fetchFiles = async filePath => {
  const files = await fs.readdir(filePath)

  return files.reduce((acc, file) => {
    const elName = path.basename(file, ".js")
    return {
      ...acc,
      [elName]: [`${filePath}/${file}`, "default"]
    }
  }, {})
}

module.exports = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  webpack: async (config, { defaultLoaders }) => {
    config.module.rules.push({
      test: /\.mdx?$/,
      use: [
        defaultLoaders.babel,
        {
          loader: '@mdx-js/loader',
          options: {
            mdPlugins: [images, emoji]
          }
        }
      ]
    })
    const elements = await fetchFiles(path.join(__dirname, "elements"))
    const components = await fetchFiles(path.join(__dirname, "components"))
    config.plugins.push(
      new webpack.ProvidePlugin(elements),
      new webpack.ProvidePlugin(components)
    )
    config.resolve = {
      alias: {
        elements: path.resolve(__dirname, "elements/"),
        components: path.resolve(__dirname, "components/")
      }
    }

    return config
  }
}
