'use strict';

var Finances = {
  template: `
	<form-field :name="assetAccountType1" label="Account Type"></form-field>
	<form-field :name="assetAmount1" label="Asset 1 (Dollar value)"></form-field>
	<form-field :name="extraIncomeAmount1" label="Extra Income ($)"></form-field>
	<form-field :name="extraIncomeFrequency1" label="per"></form-field>
	<form-field :name="memberGrossAnnualIncome1" label="Gross Annual Income"></form-field>
	<form-field :name="totalHouseholdAnnualIncome" label="Total Household Annual Income"></form-field>
    `
}