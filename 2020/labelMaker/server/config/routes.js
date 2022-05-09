const projects = require("./../controllers/project_controller");

module.exports = (app) => {
  app.get("/api/projects", projects.getAllProjects);
  app.post("/api/projects/create", projects.createProject);
};
