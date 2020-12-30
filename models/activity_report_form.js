'use strict';
const {DataTypes, DATE} = require('sequelize');
const connection = require('../dbconnection');

const ActivityReportForm = connection.sequelize.define('activity_report_form', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.BIGINT
  },
  document_id: DataTypes.BIGINT,
  council_id: DataTypes.BIGINT,
  activity_request_form_id: DataTypes.BIGINT,
  output: DataTypes.TEXT,
  narrative_report: DataTypes.TEXT,
  resource_person_invited: DataTypes.STRING,
  cyc_representative_id: DataTypes.BIGINT,
  no_of_recipients: DataTypes.INTEGER,
  no_of_participants: DataTypes.INTEGER,
  received_by: DataTypes.BIGINT,
  date_time: DataTypes.DATE,
  submitted_by: DataTypes.BIGINT,
  noted_by: DataTypes.BIGINT,
  council_pres_sig: DataTypes.BOOLEAN,
  council_adv_sig: DataTypes.BOOLEAN,
  received_by_sig: DataTypes.BOOLEAN
});

exports.model = ActivityReportForm;