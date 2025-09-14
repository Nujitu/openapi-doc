const fs = require('fs');
const path = require('path');

// Base URL where your OpenAPI files are hosted in GitHub Pages (root of gh-pages)
const baseUrl = 'https://nujitu.github.io/openapi-doc/';

// Directory to search for OpenAPI files
const openapiDir = path.join(__dirname, 'swagger-ui');

// Get available tags from environment variable (passed by GitHub Actions)
const availableTags = process.env.AVAILABLE_TAGS ? JSON.parse(process.env.AVAILABLE_TAGS) : [];

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
    // Construct URL path relative to the GitHub Pages base URL
    const urlPath = `${baseUrl}${path.relative(openapiDir, file).replace(/\\/g, '/')}`;

    const name = path.basename(file, path.extname(file));
    return { url: urlPath, name: name.replace('.domain.openapi', '') };
  });
}

// Generate the swagger-ui-initializer.js file
function generateSwaggerInitializer(urls) {
  const initializerTemplate = `
    window.onload = function() {
      // Add version selector if tags are available
      ${availableTags.length > 0 ? `
      const versionSelector = document.createElement('div');
      versionSelector.innerHTML = \`
        <div style="padding: 15px; background: #f8f9fa; border-bottom: 2px solid #e9ecef; margin-bottom: 20px;">
          <h3 style="margin: 0 0 10px 0; color: #333;">API Documentation Versions</h3>
          <select id="version-selector" style="padding: 8px 12px; border: 1px solid #ddd; border-radius: 4px; background: white; font-size: 14px; min-width: 200px;">
            <option value="current">Current (Main Branch)</option>
            ${availableTags.map(tag => `<option value="${tag}">${tag}</option>`).join('')}
          </select>
          <button onclick="switchVersion()" style="margin-left: 10px; padding: 8px 16px; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 14px;">Switch Version</button>
        </div>
      \`;
      document.body.insertBefore(versionSelector, document.getElementById('swagger-ui'));
      
      window.switchVersion = function() {
        const selector = document.getElementById('version-selector');
        const selectedVersion = selector.value;
        if (selectedVersion !== 'current') {
          // Redirect to tag-specific documentation
          window.location.href = \`https://nujitu.github.io/openapi-doc/\${selectedVersion}/\`;
        }
      };
      ` : ''}

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
  console.log(`Available tags: ${availableTags.length > 0 ? availableTags.join(', ') : 'None'}`);
}

// Main logic
const openapiFiles = getOpenAPIFiles(openapiDir);
const swaggerUrls = createSwaggerUrls(openapiFiles);
generateSwaggerInitializer(swaggerUrls);
