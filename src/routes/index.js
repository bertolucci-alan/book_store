const express = require("express");

const OwnerController = require("../controller/OwnerController");
const Address_OwnerController = require("../controller/Address_OwnerController");

const ClientController = require("../controller/Client");
const Address_ClientController = require("../controller/Address_ClientController");

const BookController = require("../controller/BookController");

const PurchaseController = require("../controller/Purchase");

const ReportController = require("../controller/ReportController");

const routes = express.Router();

routes.get("/", (req, res) => {
  return res.json({ hello: "world" });
});

//---------------OWNER------------------//
routes.post("/owner", OwnerController.store);
routes.put("/owner/:owner_id", OwnerController.update);
routes.get("/owner", OwnerController.index);
routes.get("/owner/:owner_id", OwnerController.detail);
routes.delete("/owner/:owner_id", OwnerController.destroy);

//---------------ADDRESSES_OWNER------------------//
routes.post("/owner/:owner_id/addresses", Address_OwnerController.store);

routes.put(
  "/owner/:owner_id/addresses/:addresses_owner_id",
  Address_OwnerController.update
);

routes.get("/owner/:owner_id/addresses", Address_OwnerController.index);

routes.get(
  "/owner/:owner_id/addresses/:addresses_owner_id",
  Address_OwnerController.detail
);

routes.delete(
  "/owner/:owner_id/addresses/:addresses_owner_id",
  Address_OwnerController.destroy
);

//---------------BOOKS OF OWNER------------------//
routes.post("/owner/:owner_id/books", BookController.store);
routes.put("/owner/:owner_id/books/:books_id", BookController.update);
routes.get("/owner/:owner_id/books", BookController.index);
routes.get("/owner/:owner_id/books/:books_id", BookController.detail);
routes.delete("/owner/:owner_id/books/:books_id", BookController.destroy);

//---------------CLIENT------------------//
routes.post("/client", ClientController.store);
routes.put("/client/:client_id", ClientController.update);
routes.get("/client", ClientController.index);
routes.get("/client/:client_id", ClientController.detail);
routes.delete("/client/:client_id", ClientController.destroy);

//---------------ADDRESSES_CLIENT------------------//
routes.post("/client/:client_id/addresses", Address_ClientController.store);

routes.put(
  "/client/:client_id/addresses/:addresses_client_id",
  Address_ClientController.update
);

routes.get("/client/:client_id/addresses", Address_ClientController.index);

routes.get(
  "/client/:client_id/addresses/:addresses_client_id",
  Address_ClientController.detail
);

routes.delete(
  "/client/:client_id/addresses/:addresses_client_id",
  Address_ClientController.destroy
);

//---------------PURCHASE------------------//
routes.post("/purchase", PurchaseController.store);
routes.get("/purchase/:purchases_id", PurchaseController.detail);
routes.get("/purchase", PurchaseController.index);
routes.delete("/purchase/:purchases_id", PurchaseController.destroy);

//---------------REPORT------------------//
routes.get("/report", ReportController.show);

module.exports = routes;
