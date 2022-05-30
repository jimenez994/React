const projects = require("./../controllers/project_controller");
const tr = require("./../controllers/tr_controller");

module.exports = (app) => {

  // project routes
  app.get("/api/get/projects", projects.getAll);
  app.get("/api/get/project/:code", projects.findByCode);
  app.post("/api/create/project", projects.create);
  app.put("/api/update/project/:code", projects.update);
  app.delete("/api/delete/project/:id", projects.deleteById);

  // TR routes
  app.get("/api/get/trs", tr.getAll);
  app.get("/api/get/tr/:location", tr.findById);
  app.post("/api/create/tr", tr.create);
  app.put("/api/update/tr/:id", tr.update);
  app.delete("/api/delete/tr/:id_tr/:id_project", tr.deleteById);

  // port routes

};
