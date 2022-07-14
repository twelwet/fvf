'use strict';

const MapSetting = {
  CENTER: [54.190051, 45.181145],
  ZOOM: 13,
  ID: `mapbox/streets-v11`,
  TILE_SIZE: 512,
  ACCESS_TOKEN: `your.mapbox.access.token`,
  ZOOM_OFFSET: -1,
  MAX_ZOOM: 18,
  LAYER_URL: `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
  ATTRIBUTION: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`,
};

const Icon = {
  Path: {
    VOKORD: `images/vokord.svg`,
    FORSAZH: `images/forsazh.svg`,
    POTOK: `images/potok.svg`,
    PEREKRESTOK: `images/perekrestok.svg`,
    RADAR: `images/radar.svg`,
    STRELKA: `images/strelka.svg`,
    STRELKA_DAMAGED: `images/strelka-damaged.svg`,
    FVF_PLACES: `images/fvf-places.svg`,
    FVF_CHECKED_PLACES: `images/star-blue.svg`,
  },
};

module.exports = {MapSetting, Icon};
