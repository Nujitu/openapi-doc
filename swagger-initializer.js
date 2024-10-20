
    window.onload = function() {
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
    "url": "https://raw.githubusercontent.com/Nujitu/openapi-doc/gh-pages/material-domain.openapi.yaml",
    "name": "material-domain.openapi"
  },
  {
    "url": "https://raw.githubusercontent.com/Nujitu/openapi-doc/gh-pages/report-domain.openapi.yaml",
    "name": "report-domain.openapi"
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
  