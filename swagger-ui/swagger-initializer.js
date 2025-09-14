
    window.onload = function() {
      // Add version selector if tags are available
      
      const versionSelector = document.createElement('div');
      versionSelector.innerHTML = `
        <div style="padding: 15px; background: #f8f9fa; border-bottom: 2px solid #e9ecef; margin-bottom: 20px;">
          <h3 style="margin: 0 0 10px 0; color: #333;">API Documentation Versions</h3>
          <select id="version-selector" style="padding: 8px 12px; border: 1px solid #ddd; border-radius: 4px; background: white; font-size: 14px; min-width: 200px;">
            <option value="current">Current (Main Branch)</option>
            <option value="v1.2.0-alpha.11">v1.2.0-alpha.11</option><option value="v1.2.0-alpha">v1.2.0-alpha</option>
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
    "url": "https://nujitu.github.io/openapi-doc/assessment-domain.openapi.yaml",
    "name": "assessment-domain.openapi"
  },
  {
    "url": "https://nujitu.github.io/openapi-doc/authentication-domain.openapi.yaml",
    "name": "authentication-domain.openapi"
  },
  {
    "url": "https://nujitu.github.io/openapi-doc/mail-domain.openapi.yaml",
    "name": "mail-domain.openapi"
  },
  {
    "url": "https://nujitu.github.io/openapi-doc/material-domain.openapi.yaml",
    "name": "material-domain.openapi"
  },
  {
    "url": "https://nujitu.github.io/openapi-doc/notification-domain.openapi.yaml",
    "name": "notification-domain.openapi"
  },
  {
    "url": "https://nujitu.github.io/openapi-doc/report-domain.openapi.yaml",
    "name": "report-domain.openapi"
  },
  {
    "url": "https://nujitu.github.io/openapi-doc/schedule-domain.openapi.yaml",
    "name": "schedule-domain.openapi"
  },
  {
    "url": "https://nujitu.github.io/openapi-doc/teaching_module-domain.openapi.yaml",
    "name": "teaching_module-domain.openapi"
  },
  {
    "url": "https://nujitu.github.io/openapi-doc/user-domain.openapi.yaml",
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
  