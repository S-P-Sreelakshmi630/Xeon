const express = require("express");
const { route, plaidclient } = require("./tokens");
const router = express.Router();
const UserTransaction = require("../models/transaction");

router.post("/sync", async (req, res) => {
  let cursor = null;
  let accessToken = req.body.accessToken;
  // New transaction updates since "cursor"
  if (!accessToken) {
    return res.status(400).send("Access token is required");
  }
  let added = [];
  let modified = [];
  // Removed transaction ids
  let removed = [];
  let accounts = [];
  let hasMore = true;

  try {
    // Iterate through each page of new transaction updates for item
    while (hasMore) {
      const request = {
        access_token: accessToken,
        cursor: cursor,
      };
      const response = await plaidclient.transactionsSync(request);
      const data = response.data;
      // Add this page of results
      accounts = accounts.concat(data.accounts);
      added = added.concat(data.added);
      modified = modified.concat(data.modified);
      removed = removed.concat(data.removed);

      hasMore = data.has_more;
      cursor = data.next_cursor;
    }
    /* 
    console.log("Preparing to create UserTransaction with:", {
      accessToken,
      accounts,
      added,
      modified,
      removed,
    });
 */
    let check = await UserTransaction.findOne({ accessToken: accessToken });
    if (check) {
      res.send("Data is already avaliable");
    } else {
      const trans = await UserTransaction.create({
        accessToken,
        accounts,
        added,
        modified,
        removed,
      });

      console.log("UserTransaction created successfully:", trans);
      res.send("Success");
    }
  } catch (err) {
    console.error("Error creating UserTransaction:", err);
    res.status(500).json(err);
  }

});

module.exports = router;
