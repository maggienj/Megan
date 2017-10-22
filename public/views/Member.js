'use strict';

var Finances = {
  template: `
	<form-field :name="member1" label="Household member's name"></form-field>
	<form-field :name="memberDOB1" label="Date of Birth"></form-field>
	<form-field :name="memberEmployer1" label="Employer"></form-field>
	<form-field :name="memberEmploymentDuration1" label="Employment Duration"></form-field>
	<form-field :name="memberGrossAnnualIncome1" label="Gross Annual Income"></form-field>
	<form-field :name="memberName1" label="Household member's name"></form-field>
	<form-field :name="memberRelationship1" label="Relationship to head of household"></form-field>
	<form-field :name="memberSex1" label="Sex (M/F)"></form-field>
	<form-field :name="memberSSN1" label="Social Security Number"></form-field>
    `
}

