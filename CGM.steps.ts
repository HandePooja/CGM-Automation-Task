import {Given, When, Then} from '@cucumber/cucumber'

Given(/^I open the browser and load the url (.+)$/, async function (urlname:string) {
    await browser.url(urlname)
    await browser.maximizeWindow()
  });

  When(/^I click on cookies accept button$/,async function () {
    const accept_btn=$('#btn btn-primary agree-consent agree-consent--all')
    await (await accept_btn).click()
  });

  When(/^I click on doctor search button$/,async function () {
    const search_btn=$('#menu-text ng-tns-c75-1')
    await (await search_btn).click()
  });
  
  When(/^I enter doctor's name (.+) in search field$/,async function (doctorname) {
    const doctor = await $('#input-element ng-valid ng-touched ng-dirty input-padding') 
    await doctor.setValue(doctorname)
  });

  When(/^I click on search button$/,async function () {
    const submit_button=await $('#btn btn-primary btn-block') 
    await (submit_button).click()
  });

  Then(/^I validate Title (.+)$/,async function (title) {
    const check_title=await $("//h1")
    expect (check_title).toHaveText(title)
});