const ynab = require("ynab");
const config = require("./config.json");

const ynabAPI = new ynab.API(config.ynab.accessToken);

(() => {
  update();
})();

async function update() {
  const accountsResponse = await ynabAPI.accounts.getAccounts(config.ynab.budgetId);
  const accounts = accountsResponse.data.accounts;
  let accountNames = [];
  let balances = [];

  for(let account of accounts) {
    console.log(`Account Name: ${account.name}`);
    if (!account.closed && !account.deleted) {
      accountNames.push(account.name);
      balances.push((account.balance / 1000).toFixed(2));
    }
  }

  console.log(accountNames);
  $(`#ynab-accounts`).html(accountNames.join("<br/>"));
  $(`#ynab-balances`).html(balances.join("<br/>"));
}
