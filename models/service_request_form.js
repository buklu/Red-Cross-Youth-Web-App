'use strict';
const {DataTypes, DATE} = require('sequelize');
const connection = require('../dbconnection');

const serviceRequestForm = connection.sequelize.define('service_request_form', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.BIGINT
  },
  document_id: DataTypes.BIGINT,
  receiver: DataTypes.STRING,
  name_of_activity: DataTypes.STRING,
  council_id: DataTypes.BIGINT,
  requesting_person: DataTypes.BIGINT,
  position: DataTypes.STRING,
  requesting_for: DataTypes.STRING,
  purposes: DataTypes.STRING,
  date_and_time: DataTypes.DATE,
  venue: DataTypes.STRING,
  submitted_by_pres: DataTypes.BIGINT,
  submitted_by_advisor: DataTypes.BIGINT,
  noted_by_cyc1: DataTypes.BIGINT,
  noted_by_cyc2: DataTypes.BIGINT,
  received_by: DataTypes.BIGINT,
  date_received: DataTypes.DATE,
  council_pres_sig: DataTypes.BOOLEAN,
  cyc_chairperson_sig: DataTypes.BOOLEAN,
  council_adv_sig: DataTypes.BOOLEAN,
  cyc_pres_sig: DataTypes.BOOLEAN,
  chapter_service_rep_sig: DataTypes.BOOLEAN,
  chapter_admin_sig: DataTypes.BOOLEAN
});

exports.model = serviceRequestForm;