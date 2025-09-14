
    window.onload = function() {
      // Add version selector if tags are available
      
      const versionSelector = document.createElement('div');
      versionSelector.innerHTML = `
        <div style="padding: 15px; background: #f8f9fa; border-bottom: 2px solid #e9ecef; margin-bottom: 20px;">
          <h3 style="margin: 0 0 10px 0; color: #333;">API Documentation Versions</h3>
          <select id="version-selector" style="padding: 8px 12px; border: 1px solid #ddd; border-radius: 4px; background: white; font-size: 14px; min-width: 200px;">
            <option value="current">Current (Main Branch)</option>
            <option value="v1.2.0-alpha.11">v1.2.0-alpha.11</option><option value="v1.2.0-alpha">v1.2.0-alpha</option><option value="v0.2.71-alpha.167-202509141028">v0.2.71-alpha.167-202509141028</option><option value="v0.2.69-alpha.166-202509130956">v0.2.69-alpha.166-202509130956</option><option value="v0.2.69-alpha.165-202509121545">v0.2.69-alpha.165-202509121545</option><option value="v0.2.69-alpha.165-202509121541">v0.2.69-alpha.165-202509121541</option><option value="v0.2.69-alpha.165-202509121514">v0.2.69-alpha.165-202509121514</option><option value="v0.2.69-alpha.165-202509121201">v0.2.69-alpha.165-202509121201</option><option value="v0.2.69-alpha.165-202509121149">v0.2.69-alpha.165-202509121149</option><option value="v0.2.69-alpha.165-202509121041">v0.2.69-alpha.165-202509121041</option><option value="v0.2.69-alpha.165-202509120817">v0.2.69-alpha.165-202509120817</option><option value="v0.2.69-alpha.165-202509120801">v0.2.69-alpha.165-202509120801</option><option value="v0.2.69-alpha.162-202509131006">v0.2.69-alpha.162-202509131006</option><option value="v0.2.68-alpha.163-202509111715">v0.2.68-alpha.163-202509111715</option><option value="v0.2.68-alpha.162-202509111348">v0.2.68-alpha.162-202509111348</option><option value="v0.2.68-alpha.162-202509111345">v0.2.68-alpha.162-202509111345</option><option value="v0.2.67-alpha.161-202509060301">v0.2.67-alpha.161-202509060301</option><option value="v0.2.67-alpha.161-202509060223">v0.2.67-alpha.161-202509060223</option><option value="v0.2.66-alpha.160-202509041447">v0.2.66-alpha.160-202509041447</option><option value="v0.2.65-alpha.159-202509040811">v0.2.65-alpha.159-202509040811</option>
          </select>
          <button onclick="switchVersion()" style="margin-left: 10px; padding: 8px 16px; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 14px;">Switch Version</button>
        </div>
      `;
      document.body.insertBefore(versionSelector, document.getElementById('swagger-ui'));
      
      window.switchVersion = function() {
        const selector = document.getElementById('version-selector');
        const selectedVersion = selector.value;
        if (selectedVersion !== 'current') {
          // Redirect to tag-specific documentation
          window.location.href = `https://nujitu.github.io/openapi-doc/${selectedVersion}/`;
        }
      };
      

      const ui = SwaggerUIBundle({
        urls: [
  {
    "url": "https://raw.githubusercontent.com/Nujitu/openapi-doc/gh-pages/assessment-domain.openapi.yaml",
    "name": "assessment-domain.openapi"
  },
  {
    "url": "https://raw.githubusercontent.com/Nujitu/openapi-doc/gh-pages/authentication-domain.openapi.yaml",
    "name": "authentication-domain.openapi"
  },
  {
    "url": "https://raw.githubusercontent.com/Nujitu/openapi-doc/gh-pages/mail-domain.openapi.yaml",
    "name": "mail-domain.openapi"
  },
  {
    "url": "https://raw.githubusercontent.com/Nujitu/openapi-doc/gh-pages/material-domain.openapi.yaml",
    "name": "material-domain.openapi"
  },
  {
    "url": "https://raw.githubusercontent.com/Nujitu/openapi-doc/gh-pages/notification-domain.openapi.yaml",
    "name": "notification-domain.openapi"
  },
  {
    "url": "https://raw.githubusercontent.com/Nujitu/openapi-doc/gh-pages/report-domain.openapi.yaml",
    "name": "report-domain.openapi"
  },
  {
    "url": "https://raw.githubusercontent.com/Nujitu/openapi-doc/gh-pages/schedule-domain.openapi.yaml",
    "name": "schedule-domain.openapi"
  },
  {
    "url": "https://raw.githubusercontent.com/Nujitu/openapi-doc/gh-pages/teaching_module-domain.openapi.yaml",
    "name": "teaching_module-domain.openapi"
  },
  {
    "url": "https://raw.githubusercontent.com/Nujitu/openapi-doc/gh-pages/user-domain.openapi.yaml",
    "name": "user-domain.openapi"
  }
],
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
  