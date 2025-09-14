
  window.onload = function() {
    // Add version info for tag
    const versionInfo = document.createElement('div');
    versionInfo.innerHTML = '<div style="padding: 15px; background: #f8f9fa; border-bottom: 2px solid #e9ecef; margin-bottom: 20px;"><h3 style="margin: 0; color: #333;">Version: v0.2.71-alpha.165-202509141049</h3><a href="../" style="color: #007bff; text-decoration: none;">← Back to Main Documentation</a></div>';
    document.body.insertBefore(versionInfo, document.getElementById('swagger-ui'));
    
    const ui = SwaggerUIBundle({
      urls: [
  {
    "url": "./assessment-domain.openapi.yaml",
    "name": "assessment"
  },
  {
    "url": "./authentication-domain.openapi.yaml",
    "name": "authentication"
  },
  {
    "url": "./mail-domain.openapi.yaml",
    "name": "mail"
  },
  {
    "url": "./material-domain.openapi.yaml",
    "name": "material"
  },
  {
    "url": "./notification-domain.openapi.yaml",
    "name": "notification"
  },
  {
    "url": "./report-domain.openapi.yaml",
    "name": "report"
  },
  {
    "url": "./schedule-domain.openapi.yaml",
    "name": "schedule"
  },
  {
    "url": "./teaching_module-domain.openapi.yaml",
    "name": "teaching_module"
  },
  {
    "url": "./user-domain.openapi.yaml",
    "name": "user"
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
