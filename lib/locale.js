/**
* The Locale Module reads the locale settings and provides
* this information to the other modules
*/

exports.localization = {
  // global
  "difficulty": "Difficulty",
  "network": "Network",
  "masternodecount": "Masternodes",
  "height": "Height",
  "timestamp": "Timestamp",
  "size": "Size",
  "transactions": "Transactions",
  "total_sent": "Total Sent",
  "total_received": "Total Received",
  "confirmations": "Confirmations",
  "total": "Total",
  "total_top_100": "Top 1-100 Total",
  "bits": "Bits",
  "nonce": "Nonce",
  "new_coins": "New Coins",
  "proof_of_stake": "PoS",
  "hidden_address": "Hidden Address",
  "hidden_sender": "Hidden Sender",
  "hidden_recipient": "Hidden Recipient",
  "unknown_address": "Unknown Address",
  "unknown_sender": "Unknown Sender",
  "unknown_recipient": "Unknown Recipient",
  "last_updated": "Last Updated",
  "initial_index_alert": "Blockchain data is currently being synchronized. You may browse the site during this time, but keep in mind that data may not yet be fully accurate and some functionality may not work until synchronization is complete.",
  "please_wait": "Please wait",
  "creating_initial_entry": "Creating initial {1} entry",
  "entry_created_successfully": "Initial {1} entry for {2} created successfully",
  "method_disabled": "This method is disabled",
  "compiling_css": "Compiling CSS",
  "installing_module": "Installing {1} module",
  "restoring_backup": "Restoring backup",
  "extracting_backup_files": "Extracting backup files",
  "explorer_shutting_down": "Explorer shutting down",
  "initializing_database": "Initializing database",
  "downloading_newest_explorer_code": "Downloading newest explorer code",
  "check_outdated_packages": "Checking for outdated packages",
  "updating_explorer_packages": "Updating out-of-date explorer packages",
  "checking_webserver_running": "Checking if webserver is running",
  "reloading_explorer": "Reloading the explorer",
  "email_sent_successfully": "Email sent successfully",
  "check_console": "Check your console",
  "process_aborted": "Process aborted",
  "nothing_was_deleted": "Nothing was deleted",
  "nothing_was_restored": "Nothing was restored",

  // prompts
  "are_you_sure": "Are you sure you want to do this? [y/n]",
  "short_yes": "y",
  "long_yes": "yes",

  // menu items
  "menu_explorer": "Explorer",
  "menu_api": "API",
  "menu_markets": "Markets",
  "menu_richlist": "Rich List",
  "menu_reward": "Reward",
  "menu_movement": "Movement",
  "menu_node": "Nodes",
  "menu_network": "Network",
  "menu_claim_address": "Claim Address",
  "menu_orphans": "Orphaned Blocks",

  // explorer view
  "ex_title": "{1} Block Explorer",
  "ex_description": "A listing of all verified {1} transactions",
  "ex_search_title": "Search",
  "ex_search_button": "Search",
  "ex_search_message": "Search by block height, block hash, tx hash or address",
  "ex_error": "Error",
  "ex_warning": "Warning",
  "ex_search_error": "Search found no results.",
  "ex_latest_transactions": "Latest Transactions",
  "ex_summary": "Block Summary",
  "ex_supply": "Coin Supply",
  "ex_block": "Block",

  // transaction view
  "tx_title": "{1} Transaction Details",
  "tx_description": "Viewing tx data from {1} block # {2}",
  "tx_block_hash": "Block Hash",
  "tx_recipients": "Recipients",
  "tx_contributors": "Contributor(s)",
  "tx_hash": "Tx Hash",
  "tx_address": "Address",
  "tx_nonstandard": "NONSTANDARD TX",
  "view_raw_tx_data": "View Raw Transaction Data",
  "view_block": "View Block",
  "tx_ting_size": "Ring Size",

  // block view
  "block_title": "{1} Block Details",
  "block_description": "Viewing block data from {1} block # {2}",
  "block_previous": "Previous Block",
  "block_next": "Next Block",
  "block_genesis": "GENESIS",
  "view_raw_block_data": "View Raw Block Data",
  "view_tx": "View Transaction",

  // error view
  "error_title": "{1} Block Explorer Error",
  "error_description": "The page you are looking for cannot be found",
  "error_description_alt": "An error occurred which prevented the page from loading correctly",
  "error_not_found": "Not Found",

  // address view
  "a_title": "{1} Wallet Address Details",
  "a_description": "Viewing balance and transaction data from {1} address {2}",
  "a_menu_showing": "Showing",
  "a_menu_txs": "transactions",
  "a_menu_all": "All",
  "a_qr": "QR Code",

  // masternode view
  "mn_title": "{1} Masternodes",
  "mn_description": "A listing of all masternodes known to be active on the {1} network",
  "mn_masternode_list": "Masternode List",

  // movement view
  "move_title": "{1} Coin Movements",
  "move_description": "A listing of larger movements where {1} or more {2} coins were sent in a single transaction",

  // richlist view
  "rl_title": "Top {1} Coin Holders",
  "rl_description": "A listing of the richest {1} wallet addresses and breakdown of the current coin distribution",
  "rl_received_coins": "Top 100 - Received Coins",
  "rl_current_balance": "Top 100 - Current Balance",
  "rl_received": "Received",
  "rl_balance": "Balance",
  "rl_wealth": "Wealth Distribution",
  "rl_top25": "Top 1-25",
  "rl_top50": "Top 26-50",
  "rl_top75": "Top 51-75",
  "rl_top100": "Top 76-100",
  "rl_hundredplus": "101+",

  // network view
  "net_title": "{1} Network Peers",
  "net_description": "A listing of {1} network peers that have connected to the explorer node in the last 24 hours",
  "net_addnodes": "Add Nodes",
  "net_connections": "Connections",
  "net_address": "Address",
  "net_protocol": "Protocol",
  "net_subversion": "Sub-version",
  "net_country": "Country",

  // api view
  "api_title": "{1} Public API",
  "api_description": "A listing of public API endpoints for retrieving {1} coin data from the network without the need for a local wallet",
  "api_documentation": "API Documentation",
  "api_calls": "API Calls",
  "api_getnetworkhashps": "Returns the current network hashrate. (hash/s)",
  "api_getdifficulty": "Returns the current difficulty.",
  "api_getconnectioncount": "Returns the number of connections the block explorer has to other nodes.",
  "api_getmasternodelist": "Returns the complete list of masternodes on the network.",
  "api_getmasternodecount": "Returns the total number of masternodes on the network.",
  "api_getvotelist": "Returns the current vote list.",
  "api_getblockcount": "Returns the number of blocks currently in the block chain.",
  "api_getblockhash": "Returns the hash of the block at [index]; index 0 is the genesis block.",
  "api_getblock": "Returns information about the block with the given hash.",
  "api_getrawtransaction": "Returns raw transaction representation for given transaction id. decrypt can be set to 0(false) or 1(true).",
  "api_getmaxmoney": 'Returns the maximum possible money supply.',
  "api_getmaxvote": 'Returns the maximum allowed vote for the current phase of voting.',
  "api_getvote": 'Returns the current block reward vote setting.',
  "api_getphase": 'Returns the current voting phase (\'Mint\', \'Limit\' or \'Sustain\').',
  "api_getreward": 'Returns the current block reward, which has been decided democratically in the previous round of block reward voting.',
  "api_getsupply": 'Returns the current money supply.',
  "api_getmaxsupply": 'Returns the max money supply.',
  "api_getnextrewardestimate": 'Returns an estimate for the next block reward based on the current state of decentralized voting.',
  "api_getnextrewardwhenstr":  'Returns a string describing how long until the votes are tallied and the next block reward is computed.',

  // markets view
  "mkt_title": "{1} Market Details",
  "mkt_description": "Viewing {1} market data for the {2} exchange",
  "mkt_hours": "24 hours",
  "mkt_view_chart": "View 24 hour summary",
  "mkt_view_summary": "View 24 hour chart",
  "mkt_no_chart": "Chart data is not available via markets API",
  "mkt_high": "High",
  "mkt_low": "Low",
  "mkt_volume": "Volume",
  "mkt_top_bid": "Top Bid",
  "mkt_top_ask": "Top Ask",
  "mkt_last": "Last Price",
  "mkt_yesterday": "Yesterday",
  "mkt_change": "Change",
  "mkt_sell_orders": "Sell Orders",
  "mkt_buy_orders": "Buy Orders",
  "mkt_price": "Price",
  "mkt_amount": "Amount",
  "mkt_total": "Total",
  "mkt_trade_history": "Trade History",
  "mkt_type": "Type",
  "mkt_time_stamp": "Time Stamp",
  "mkt_select": "Market Select",
  "mkt_unexpected_api_data": "Received unexpected API data response",

  // claim address view
  "claim_title": "{1} Wallet Address Claim",
  "claim_description": "Verify ownership of your {1} wallet address and set a custom display name in the explorer",

  // orphans view
  "orphan_title": "{1} Orphaned Blocks",
  "orphan_description": "A listing of valid blocks that have been orphaned and do not belong to the main blockchain",
  "orphan_block_list": "Orphaned Block List",
  "orphan_block_hash": "Orphaned Block Hash",
  "orphan_actual_block": "Actual Block",
  "orphan_prev_block": "Previous Block",
  "orphan_next_block": "Next Block",
  "view_orphan": "View Orphaned Block",

  // heavycoin rewards view
  "heavy_title": "{1} Reward/Voting Details",
  "heavy_description": "Viewing {1} voting data and coin reward change details",
  "heavy_reward_voting_info": "Reward/voting information",
  "heavy_vote": "Vote",
  "heavy_cap": "Coin Cap",
  "heavy_phase": "Phase",
  "heavy_maxvote": "Max Vote",
  "heavy_reward": "Reward",
  "heavy_current": "Current Reward",
  "heavy_estnext": "Est. Next",
  "heavy_changein": "Reward change in approximately",
  "heavy_key": "Key",
  "heavy_lastxvotes": "Last 20 votes",

  // sync
  "script_launched": "Script launched with pid",
  "stopping_sync_process": "Stopping sync process",
  "finding_earliest_orphan": "Finding the earliest orphaned blockindex",
  "calculating_market_price": "Calculating market price",
  "syncing_blocks": "Syncing blocks",
  "syncing_peers": "Syncing peers",
  "syncing_masternodes": "Syncing masternodes",
  "syncing_markets": "Syncing markets",
  "checking_blocks": "Checking blocks",
  "calculating_tx_count": "Calculating tx count",
  "finding_last_blockindex": "Finding last blockindex",
  "path_cannot_be_found": "'{1}' cannot be found",

  // settings
  "deprecated_setting": "Deprecated setting '{1}' has been mapped to the new location '{2}'. Be sure to make this change in settings.json as the old setting will be removed in a future release",
  "unknown_setting": "Unknown setting '{1}' has been ignored",
  "missing_setting": "Setting '{1}' is missing. Loading default value",
  "continuing_using_defaults": "Continuing using defaults",
  "missing_settings_file": "The {1} file is missing",
  "error_processing_settings": "There was an error processing the {1} file",

  // locale
  "locale_lowercase_req": "Locale strings must start with a lowercase character",
  "locale_unknown_string": "Unknown Locale String",
  "locale_not_exists": "This setting doesn't exist or was removed"
};

exports.reloadLocale = function reloadLocale(locale) {
  const fs = require('fs');
  const jsonminify = require('jsonminify');
  const localeFilename = './' + locale;
  let localeStr;

  try {
    // read the settings sync
    localeStr = fs.readFileSync(localeFilename).toString();
  } catch(e) {
    console.warn(`${exports.localization.missing_settings_file.replace('{1}', locale.split('/')[1])}. ${exports.localization.continuing_using_defaults}`);
  }

  var lsettings;

  // try to parse the settings
  try {
    if (localeStr) {
      localeStr = jsonminify(localeStr).replace(",]","]").replace(",}","}");
      lsettings = JSON.parse(localeStr);
    }
  } catch(e) {
    console.error(`${exports.localization.error_processing_settings.replace('{1}', locale.split('/')[1])}: ${e.message}`);
    process.exit(1);
  }

  // loop through the settings
  for (var i in lsettings) {
    // test if the setting start with a low character
    if (i.charAt(0).search("[a-z]") !== 0)
      console.warn(`${lsettings.locale_lowercase_req}: '${i}'`);

    if (exports.localization[i] !== undefined) {
      // we know this setting, so we overwrite it
      exports.localization[i] = lsettings[i];
    } else {
      // this setting is unknown. output a warning and discard it
      console.warn(`${lsettings.locale_unknown_string}: '${i}'. ${lsettings.locale_not_exists}`);
    }
  }

  return exports.localization;
};
