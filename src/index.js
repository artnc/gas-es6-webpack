/**
 * This module is the entry point for your GAS code. You can create additional
 * modules and import them here as necessary.
 *
 * Functions exported from this module will appear in the GAS editor's "Run"
 * and "Select function" menus. GAS will also pick up any trigger functions
 * exported from this module. For more details, see
 * https://developers.google.com/apps-script/guides/triggers/
 */

export const helloWorld = () => {
  SpreadsheetApp.getActiveSheet().getRange('A1').setValue('Hello world!');
};
