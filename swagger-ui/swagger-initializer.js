
    window.onload = function() {
      const ui = SwaggerUIBundle({
        urls: [
  {
    "url": "https://nujitu.github.io/openapi-doc/swagger-ui/assessment-domain.openapi.yaml",
    "name": "assessment"
  },
  {
    "url": "https://nujitu.github.io/openapi-doc/swagger-ui/authentication-domain.openapi.yaml",
    "name": "authentication"
  },
  {
    "url": "https://nujitu.github.io/openapi-doc/swagger-ui/mail-domain.openapi.yaml",
    "name": "mail"
  },
  {
    "url": "https://nujitu.github.io/openapi-doc/swagger-ui/material-domain.openapi.yaml",
    "name": "material"
  },
  {
    "url": "https://nujitu.github.io/openapi-doc/swagger-ui/notification-domain.openapi.yaml",
    "name": "notification"
  },
  {
    "url": "https://nujitu.github.io/openapi-doc/swagger-ui/report-domain.openapi.yaml",
    "name": "report"
  },
  {
    "url": "https://nujitu.github.io/openapi-doc/swagger-ui/schedule-domain.openapi.yaml",
    "name": "schedule"
  },
  {
    "url": "https://nujitu.github.io/openapi-doc/swagger-ui/teaching_module-domain.openapi.yaml",
    "name": "teaching_module"
  },
  {
    "url": "https://nujitu.github.io/openapi-doc/swagger-ui/user-domain.openapi.yaml",
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
  