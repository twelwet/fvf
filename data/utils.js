'use strict';

const saveDataToPriorityLines = (fvfData, priorityLinesData) => {
  for (const line of priorityLinesData) {
    line[`data`] = fvfData.find((item) => item[`id`] === line[`properties`][`description`]);
  }
  return priorityLinesData;
};

module.exports = {saveDataToPriorityLines};
