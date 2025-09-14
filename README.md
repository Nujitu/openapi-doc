# Skoola OpenAPI Documentation

This repository contains OpenAPI specifications for the Skoola API and automatically generates Swagger UI documentation.

## 📚 View Documentation

### Main Documentation (Latest)
[**View Latest Documentation**](https://nujitu.github.io/openapi-doc/)

The main page provides a version selector where you can choose between:
- **Main Branch**: Always up-to-date with the latest changes
- **Tagged Releases**: Specific versions of the API documentation

### Direct Links
- [Latest (Main Branch)](https://nujitu.github.io/openapi-doc/swagger-ui/)
- [Version Selector](https://nujitu.github.io/openapi-doc/)

## 🚀 Features

- **Multi-Version Support**: View documentation for any git tag/release
- **Automatic Deployment**: Documentation is automatically updated when you push to main or create new tags
- **Beautiful Interface**: Clean, modern UI for browsing different API versions
- **Fast Navigation**: Easy switching between different versions of your API

## 🔄 How It Works

### Main Branch Documentation
- Automatically deployed when you push to the `main` branch
- Always reflects the latest API changes
- Available at the root of the GitHub Pages site

### Tagged Version Documentation
- Automatically deployed when you create and push git tags
- Each tag gets its own documentation version
- Accessible via the version selector interface
- Maintains historical API documentation for reference

## 🛠️ Development

To generate the swagger initializer locally:

```bash
node generate-swagger-initializer.js
```

This will update the `swagger-ui/swagger-initializer.js` file with the current OpenAPI specifications.

## 📁 Project Structure

```
├── openapi/
│   └── modules/          # OpenAPI specification files
├── swagger-ui/           # Swagger UI assets and generated files
├── .github/workflows/    # GitHub Actions for automatic deployment
├── index.html           # Version selector interface
└── generate-swagger-initializer.js  # Script to generate swagger config
```

## 🏷️ Creating New Versions

To create a new version of the documentation:

1. Make your API changes and commit them
2. Create and push a new tag:
   ```bash
   git tag v1.0.0
   git push origin v1.0.0
   ```
3. GitHub Actions will automatically deploy the documentation for this tag
4. The new version will appear in the version selector

## 🤝 Contributing

1. Make your changes to the OpenAPI specifications in the `openapi/modules/` directory
2. Test locally by running the generate script
3. Commit and push your changes
4. Create a tag for releases to make them available in the version selector
