const fs = require('fs');
const path = require('path');

// Base URL where your OpenAPI files will be hosted in GitHub Pages
const baseUrl = ''; // Leave empty if the files are in the root of the swagger-ui directory

// Directory to search for OpenAPI files
const openapiDir = path.join(__dirname, 'swagger-ui');

// Function to recursively read OpenAPI files from the specified directory
function getOpenAPIFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isFile() && (file.endsWith('.yaml') || file.endsWith('.yml'))) {
      // Only process .yaml or .yml files
      fileList.push(filePath);
    }
  });

  return fileList;
}

// Create URLs for the Swagger UI configuration
function createSwaggerUrls(fileList) {
  return fileList.map((file) => {
    // Convert file path to URL path relative to the GitHub Pages base URL
    const urlPath = `/${path.basename(file)}`;

    const name = path.basename(file, path.extname(file));
    return { url: urlPath, name: name.replace('.domain.openapi', '') };
  });
}

// Generate the swagger-ui-initializer.js file
function generateSwaggerInitializer(urls) {
  const initializerTemplate = `
    window.onload = function() {
      const ui = SwaggerUIBundle({
        urls: ${JSON.stringify(urls, null, 2)},
        dom_id: '#swagger-ui',
        deepLinking: true,
        presets: [
          SwaggerUIBundle.presets.apis,
          SwaggerUIStandalonePreset
        ],
        layout: "StandaloneLayout"
      });
      window.ui = ui;
    };
  `;

  const outputPath = path.join(__dirname, 'swagger-ui/swagger-initializer.js');
  
  // Write file, overwriting if it already exists
  fs.writeFileSync(outputPath, initializerTemplate, 'utf8');
  console.log('swagger-ui-initializer.js file has been generated and overwritten.');
}

// Main logic
const openapiFiles = getOpenAPIFiles(openapiDir);
const swaggerUrls = createSwaggerUrls(openapiFiles);
generateSwaggerInitializer(swaggerUrls);
