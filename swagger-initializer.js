
    window.onload = function() {
      const ui = SwaggerUIBundle({
        urls: [
  {
    "url": "/assignment-domain.openapi.yaml",
    "name": "assignment-domain.openapi"
  },
  {
    "url": "/authentication-domain.openapi.yaml",
    "name": "authentication-domain.openapi"
  },
  {
    "url": "/material-domain.openapi.yaml",
    "name": "material-domain.openapi"
  },
  {
    "url": "/teaching_module-domain.openapi.yaml",
    "name": "teaching_module-domain.openapi"
  },
  {
    "url": "/user-domain.openapi.yaml",
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
  