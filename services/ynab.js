const ynab = require("ynab");

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
    if (!account.closed && !account.deleted) {
      accountNames.push(account.name);
      balances.push((account.balance / 1000).toFixed(2));
    }
  }

  $(`#ynab-accounts`).html(accountNames.join("<br/>"));
  $(`#ynab-balances`).html(balances.join("<br/>"));
}
