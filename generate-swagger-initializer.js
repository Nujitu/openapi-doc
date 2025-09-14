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
    // Since files are deployed to the root of gh-pages, just use the filename
    const filename = path.basename(file);
    const urlPath = `${baseUrl}${filename}`;

    const name = path.basename(file, path.extname(file));
    return { url: urlPath, name: name.replace('.domain.openapi', '') };
  });
}

// Generate the swagger-ui-initializer.js file
function generateSwaggerInitializer(urls, originalPaths) {
  const initializerTemplate = `
    window.onload = function() {
      // Fetch available tags from GitHub API and create version selector
      async function fetchTagsAndCreateSelector() {
        try {
          const response = await fetch('https://api.github.com/repos/Nujitu/openapi-doc/tags');
          const tags = await response.json();
          const tagNames = tags.slice(0, 20).map(tag => tag.name); // Get first 20 tags
          
          if (tagNames.length > 0) {
            const versionSelector = document.createElement('div');
            versionSelector.innerHTML = \`
              <div style="padding: 15px; background: #f8f9fa; border-bottom: 2px solid #e9ecef; margin-bottom: 20px;">
                <h3 style="margin: 0 0 10px 0; color: #333;">API Documentation Versions</h3>
                <select id="version-selector" style="padding: 8px 12px; border: 1px solid #ddd; border-radius: 4px; background: white; font-size: 14px; min-width: 200px;">
                  <option value="current">Current (Main Branch)</option>
                  \${tagNames.map(tag => \`<option value="\${tag}">\${tag}</option>\`).join('')}
                </select>
              </div>
            \`;
            document.body.insertBefore(versionSelector, document.getElementById('swagger-ui'));
            
            // Add event listener for automatic switching
            document.getElementById('version-selector').addEventListener('change', function() {
              const selectedVersion = this.value;
              
              let newUrls;
              if (selectedVersion === 'current') {
                // Use current main branch URLs
                newUrls = ${JSON.stringify(urls, null, 2)};
              } else {
                // Create URLs for the selected tag using raw GitHub URLs
                // Use the original file paths from the source modules
                const originalFiles = ${JSON.stringify(originalPaths, null, 2)};
                newUrls = ${JSON.stringify(urls, null, 2)}.map((spec, index) => {
                  const originalPath = originalFiles[index];
                  return {
                    ...spec,
                    url: \`https://raw.githubusercontent.com/Nujitu/openapi-doc/\${selectedVersion}/\${originalPath}\`
                  };
                });
              }
              
              // Reinitialize Swagger UI with new URLs
              const ui = SwaggerUIBundle({
                urls: newUrls,
                dom_id: '#swagger-ui',
                deepLinking: true,
                presets: [
                  SwaggerUIBundle.presets.apis,
                  SwaggerUIStandalonePreset
                ],
                layout: "StandaloneLayout"
              });
              window.ui = ui;
            });
          }
        } catch (error) {
          console.log('Could not fetch tags:', error);
          // Continue without version selector if API fails
        }
      }
      
      // Fetch tags and create selector
      fetchTagsAndCreateSelector();

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
// Get original files from the modules directory to preserve paths
const originalOpenapiDir = path.join(__dirname, 'openapi/modules');
let originalPaths = [];

try {
  const originalOpenapiFiles = getOpenAPIFiles(originalOpenapiDir);
  originalPaths = originalOpenapiFiles.map(file => path.relative(__dirname, file));
} catch (error) {
  console.log('Could not read original files, using fallback mapping');
  // Fallback: create paths based on known structure
  originalPaths = [];
}

// Get files from swagger-ui directory for URL generation
const openapiFiles = getOpenAPIFiles(openapiDir);
const swaggerUrls = createSwaggerUrls(openapiFiles);

// If we couldn't get original paths, create them based on filenames
if (originalPaths.length === 0) {
  originalPaths = openapiFiles.map(file => {
    const filename = path.basename(file);
    const baseName = filename.replace('-domain.openapi.yaml', '');
    return `openapi/modules/${baseName}/v1/${filename}`;
  });
}

generateSwaggerInitializer(swaggerUrls, originalPaths);
