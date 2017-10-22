'use strict';

var Contact = {
  template: `
    <form-field :name="name" label="Name"></form-field>
    <form-field :name="name"> label="Name"></form-field>
    <form-field :name="address" label="Address"></form-field>
    <form-field :name="state" label="State"></form-field>
    <form-field :name="city" label="City"></form-field>
    <form-field :name="zip" label="Zip"></form-field>
    <form-field :name="home" label="Home phone"></form-field>
    <form-field :name="work" label="Work phone"></form-field>
    <form-field :name="cell" label="Cell phone"></form-field>
    <form-field :name="email" label="Email"></form-field>
    `
}
