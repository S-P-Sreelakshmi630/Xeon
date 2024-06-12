const express = require('express')

const route = express.Router();

const fetchNewSyncData = async function (
    accessToken,
    initialCursor,
    retriesLeft = 3
  ) {
    const allData = {
      added: [],
      removed: [],
      modified: [],
      nextCursor: initialCursor,
    };
    if (retriesLeft <= 0) {
      console.error("Too many retries!");
      // We're just going to return no data and keep our original cursor. We can try again later.
      return allData;
    }
    try {
      let keepGoing = false;
      do {
        const results = await plaidClient.transactionsSync({
          access_token: accessToken,
          options: {
            include_personal_finance_category: true,
          },
          cursor: allData.nextCursor,
        });
        const newData = results.data;
        allData.added = allData.added.concat(newData.added);
        allData.modified = allData.modified.concat(newData.modified);
        allData.removed = allData.removed.concat(newData.removed);
        allData.nextCursor = newData.next_cursor;
        keepGoing = newData.has_more;
        console.log(
          `Added: ${newData.added.length} Modified: ${newData.modified.length} Removed: ${newData.removed.length} `
        );
  
        // if (Math.random() < 0.5) {
        //   throw new Error("SIMULATED PLAID SYNC ERROR");
        // }
      } while (keepGoing === true);
      return allData;
    } catch (error) {
      // If you want to see if this is a sync mutation error, you can look at
      // error?.response?.data?.error_code
      console.log(
        `Oh no! Error! ${JSON.stringify(
          error
        )} Let's try again from the beginning!`
      );
      await setTimeout(1000);
      return fetchNewSyncData(accessToken, initialCursor, retriesLeft - 1);
    }
  };