const express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
mongoose.set('useFindAndModify', false);
const Invoice = mongoose.model("Invoice");
const Customer = mongoose.model("Customer");
const helpers = require("handlebars-helpers")();
const middleware = require("../middlewares/login");

router.get("/",(req,res)=>{
    // console.log(email);
    res.redirect("/user/all");
});

router.get("/unpaid",middleware,(req,res)=>{

        Invoice.find({
            invoice_customer: req.session.email}).then(invoices => {
                res.render("user/unpaid", {
                    list:invoices,
                    layout: 'userLayout.hbs'
                });
        });
});

router.get("/paid",(req,res)=>{
        Invoice.find({
            invoice_customer: req.session.email
        }).then(invoices => {
            res.render("user/paid", {
                list: invoices,
                layout: 'userLayout.hbs'
            });
        });
});


router.get("/all",(req,res)=>{
            Invoice.find({
                invoice_customer: req.session.email
            }).then(invoices => {
                res.render("user/all", {
                    list: invoices,
                    layout: 'userLayout.hbs'
                });
            });
});

router.get("/changepass",(req,res)=>{
    res.render("changepassword",{layout:"userLayout.hbs"});
});

module.exports = router;