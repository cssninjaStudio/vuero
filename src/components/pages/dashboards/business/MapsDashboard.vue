<script setup lang="ts">
import { onMounted, ref, watch, watchPostEffect } from 'vue'
import mapboxgl from 'mapbox-gl'
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.min.js'
import 'mapbox-gl/src/css/mapbox-gl.css'
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css'
import { themeColors } from '/@src/utils/themeColors'
import { isDark } from '/@src/state/darkModeState'

// You can set the VITE_MAPBOX_ACCESS_TOKEN inside .env file
mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN as string

const props = defineProps<{
  reversed?: boolean
}>()

const mapElement = ref<HTMLElement>()
const geocoderElement = ref<HTMLElement>()
const popupElement = ref<HTMLElement>()
const selectedFeature = ref()
const selectedFeatureLatLng = ref()
const selectedFeatureName = ref('')
let map: mapboxgl.Map | undefined
let popup: mapboxgl.Popup | undefined
let geocoder: any

const locations = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: {
        name: 'Fast Pizza',
        logo: '/images/icons/logos/fastpizza.svg',
        distance: 0.3,
        openingCount: '6pm',
        phone: '+1 555 456-5659',
        website: 'https://huro.cssninja.io',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Memini me adesse meam.',
      },
      geometry: {
        type: 'Point',
        coordinates: [-77.038659, 38.931567],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Envato',
        logo: '/images/icons/logos/envato.svg',
        distance: 0.8,
        openingCount: '5pm',
        phone: '+1 555 154-4568',
        website: 'https://huro.cssninja.io',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Memini me adesse meam.',
      },
      geometry: {
        type: 'Point',
        coordinates: [-77.003168, 38.894651],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Lipflow',
        logo: '/images/icons/logos/lipflow.svg',
        distance: 1.2,
        openingCount: '8pm',
        phone: '+1 555 456-7897',
        website: 'https://huro.cssninja.io',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Memini me adesse meam.',
      },
      geometry: {
        type: 'Point',
        coordinates: [-77.090372, 38.881189],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Metamovies',
        logo: '/images/icons/logos/metamovies.svg',
        distance: 0.5,
        openingCount: '11pm',
        phone: '+1 555 456-5659',
        website: 'https://huro.cssninja.io',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Memini me adesse meam.',
      },
      geometry: {
        type: 'Point',
        coordinates: [-77.111561, 38.882342],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Slicer',
        logo: '/images/icons/logos/slicer.svg',
        distance: 0.2,
        openingCount: '4:30pm',
        phone: '+1 555 456-7568',
        website: 'https://huro.cssninja.io',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Memini me adesse meam.',
      },
      geometry: {
        type: 'Point',
        coordinates: [-77.052477, 38.943951],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Drop',
        logo: '/images/icons/logos/drop.svg',
        distance: 2.1,
        openingCount: '7pm',
        phone: '+1 555 456-5659',
        website: 'https://huro.cssninja.io',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Memini me adesse meam.',
      },
      geometry: {
        type: 'Point',
        coordinates: [-77.043444, 38.909664],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Fresco',
        logo: '/images/icons/logos/fresco.svg',
        distance: 0.6,
        openingCount: '6pm',
        phone: '+1 555 456-5659',
        website: 'https://huro.cssninja.io',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Memini me adesse meam.',
      },
      geometry: {
        type: 'Point',
        coordinates: [-77.031706, 38.914581],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Hairz',
        logo: '/images/icons/logos/hairz.svg',
        distance: 0.3,
        openingCount: '6pm',
        phone: '+1 555 755-3382',
        website: 'https://huro.cssninja.io',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Memini me adesse meam.',
      },
      geometry: {
        type: 'Point',
        coordinates: [-77.020945, 38.878241],
      },
    },
    {
      type: 'Feature',
      properties: {
        name: 'Vego LLC',
        logo: '/images/icons/logos/vego.svg',
        distance: 0.3,
        openingCount: '9pm',
        phone: '+1 555 456-8984',
        website: 'https://huro.cssninja.io',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Memini me adesse meam.',
      },
      geometry: {
        type: 'Point',
        coordinates: [-77.007481, 38.876516],
      },
    },
  ],
}

function loadLayers() {
  if (!map) {
    return
  }

  // Do nothing if source already added
  if (map.getSource('places')) {
    return
  }

  map.addSource('places', {
    type: 'geojson',
    data: locations as any,
  })

  // Add a layer showing the places.
  map.addLayer({
    id: 'places',
    type: 'circle',
    source: 'places',
    paint: {
      'circle-color': isDark.value ? themeColors.accent : themeColors.primary,
      'circle-radius': 6,
      'circle-stroke-width': 2,
      'circle-stroke-color': isDark.value
        ? themeColors.accentLight
        : themeColors.primaryMedium,
    },
  })

  map.on('click', 'places', (e: any) => {
    selectedFeature.value = e.features[0]
    selectedFeatureLatLng.value = e.lngLat
  })

  // Change the cursor to a pointer when the mouse is over the places layer.
  map.on('mouseenter', 'places', () => {
    if (!map) {
      return
    }

    map.getCanvas().style.cursor = 'pointer'
  })

  // Change it back to a pointer when it leaves.
  map.on('mouseleave', 'places', () => {
    if (!map) {
      return
    }

    map.getCanvas().style.cursor = ''
  })
}

function selectFeature(feature: any) {
  selectedFeature.value = undefined
  selectedFeature.value = feature
}

onMounted(() => {
  if (!mapElement.value || !geocoderElement.value) {
    return
  }

  map = new mapboxgl.Map({
    container: mapElement.value,
    style: isDark.value
      ? 'mapbox://styles/mapbox/dark-v10'
      : 'mapbox://styles/mapbox/light-v10',
    center: [-77.04, 38.907],
    zoom: 12,
  })

  geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl,
    marker: true,
  })

  map.on('styledata', () => {
    const loadingStyles = () => {
      if (!map?.isStyleLoaded()) {
        setTimeout(loadingStyles, 1500)
        return
      }

      loadLayers()
    }
    loadingStyles()
  })

  geocoderElement.value.appendChild(geocoder.onAdd(map))
})

watchPostEffect(() => {
  if (!selectedFeature.value || !popupElement.value || !map) {
    return
  }

  const coordinates = selectedFeature.value.geometry.coordinates.slice()
  const name = selectedFeature.value.properties.name
  const logo = selectedFeature.value.properties.logo
  const openingCount = selectedFeature.value.properties.openingCount
  const description = selectedFeature.value.properties.description

  // Ensure that if the map is zoomed out such that multiple
  // copies of the feature are visible, the popup appears
  // over the copy being pointed to.
  if (selectedFeatureLatLng.value) {
    while (Math.abs(selectedFeatureLatLng.value.lng - coordinates[0]) > 180) {
      coordinates[0] +=
        selectedFeatureLatLng.value.lng > coordinates[0] ? 360 : -360
    }
  }

  map.flyTo({
    center: coordinates,
    zoom: 15,
    bearing: 0,
    essential: true, // this animation is considered essential with respect to prefers-reduced-motion
  })

  if (popup) {
    popup.remove()
  }

  popup = new mapboxgl.Popup()
    .on('open', () => {
      selectedFeatureName.value = name
    })
    .on('close', () => {
      selectedFeatureName.value = ''
    })
    .setLngLat(coordinates)
    .setHTML(popupElement.value.innerHTML)
    .addTo(map)
})

watch(isDark, () => {
  if (!map) {
    return
  }

  if (isDark.value) {
    map.setStyle('mapbox://styles/mapbox/dark-v10')
  } else {
    map.setStyle('mapbox://styles/mapbox/light-v10')
  }
})
</script>

<template>
  <div class="dashboard-map-wrapper">
    <div
      class="dashboard-map-wrapper-inner"
      :class="[props.reversed && 'is-reversed']"
    >
      <div ref="mapElement" class="map-section">
        <div ref="geocoderElement" class="geocoder"></div>
        <div ref="popupElement" style="display: none; visibility: hidden">
          <MapMarker
            v-if="selectedFeature"
            :logo="selectedFeature.properties.logo"
            :name="selectedFeature.properties.name"
            :opening-count="selectedFeature.properties.openingCount"
            :description="selectedFeature.properties.description"
          />
        </div>
      </div>
      <div class="content-section">
        <slot name="header"></slot>
        <div class="content-section-body" data-simplebar>
          <!--Title-->
          <h4 class="content-section-title">Recent Locations</h4>

          <!--Map Box-->
          <div
            v-for="(feature, key) in locations.features"
            :key="key"
            class="box map-box"
            :class="[
              selectedFeatureName === feature.properties.name && 'is-active',
            ]"
            @click="selectFeature(feature)"
          >
            <div class="map-box-place">
              <div class="map-box-header">
                <VBlock
                  :title="feature.properties.name"
                  :subtitle="`Open until ${feature.properties.openingCount}`"
                  center
                >
                  <template #icon>
                    <VAvatar size="small" :picture="feature.properties.logo" />
                  </template>
                </VBlock>
              </div>
              <div class="map-box-body">
                <p>
                  {{ feature.properties.description }}
                </p>
              </div>
              <div class="map-box-actions">
                <div class="rating">
                  <i aria-hidden="true" class="fas fa-star highlighted"></i>
                  <i aria-hidden="true" class="fas fa-star highlighted"></i>
                  <i aria-hidden="true" class="fas fa-star highlighted"></i>
                  <i aria-hidden="true" class="fas fa-star highlighted"></i>
                  <i aria-hidden="true" class="fas fa-star highlighted"></i>
                </div>
                <div class="actions">
                  <div class="action">
                    <i
                      aria-hidden="true"
                      class="iconify"
                      data-icon="feather:flag"
                    ></i>
                    <span class="dark-inverted">
                      {{ feature.properties.distance }} mile
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '../../../../scss/abstracts/_mixins.scss';
@import '../../../../scss/pages/dashboards/_maps.scss';
</style>
