'use strict';

const {saveDataToPriorityLines} = require(`./utils`);

const nodes = require(`./json/nodes.json`);
const backboneNetRaw = require(`./json/fiber-lines-backbone.json`);
const cityNet = require(`./json/fiber-lines-city-net.json`);
const jkhNet = require(`./json/fiber-lines-jkh-net.json`);
const fvfData = require(`./json/fvf.json`);
const fvfPlaces = require(`./json/fvf-places.json`);
const fvfLinesPriorityOneRaw = require(`./json/fvf-lines-priority-1.json`);
const fvfLinesPriorityTwoRaw = require(`./json/fvf-lines-priority-2.json`);
const fvfLinesPriorityThreeRaw = require(`./json/fvf-lines-priority-3.json`);
const fvfLinesPriorityFourRaw = require(`./json/fvf-lines-priority-4.json`);

const backboneNetLineStrings = backboneNetRaw[`features`].filter((item) => item[`geometry`][`type`] === `LineString`);

const backboneNet = {
  type: backboneNetRaw[`type`],
  metadata: backboneNetRaw[`metadata`],
  features: backboneNetLineStrings,
};

const fvfLines = {
  priorityOne: saveDataToPriorityLines(fvfPlaces, fvfLinesPriorityOneRaw[`features`]),
  priorityTwo: saveDataToPriorityLines(fvfPlaces, fvfLinesPriorityTwoRaw[`features`]),
  priorityThree: saveDataToPriorityLines(fvfPlaces, fvfLinesPriorityThreeRaw[`features`]),
  priorityFour: saveDataToPriorityLines(fvfPlaces, fvfLinesPriorityFourRaw[`features`]),
};

module.exports = {
  nodes,
  backboneNet,
  cityNet,
  jkhNet,
  fvfData,
  fvfLines,
};
