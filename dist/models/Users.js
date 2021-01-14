"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = function (sequelize, dataTypes) {
    return sequelize.define("users", {
        user_id: {
            type: dataTypes.STRING,
            primaryKey: true,
        },
        balance: {
            type: dataTypes.INTEGER,
            defaultValue: 0,
        },
        bank: {
            type: dataTypes.INTEGER,
            defaultValue: 0,
        },
        max_bank: {
            type: dataTypes.INTEGER,
            defaultValue: 250,
        },
        passive: {
            type: dataTypes.BOOLEAN,
            defaultValue: false,
        },
        multiplier: {
            type: dataTypes.DECIMAL,
            defaultValue: 1,
        },
        level: {
            type: dataTypes.INTEGER,
            defaultValue: 0,
        },
        exp: {
            type: dataTypes.INTEGER,
            defaultValue: 0,
        },
        occupation: {
            type: dataTypes.STRING,
            defaultValue: "unemployed",
        },
    });
};
