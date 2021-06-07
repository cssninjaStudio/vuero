<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/sidebarLayoutState'

pageTitle.value = 'Line Icons Icons'
useHead({
  title: 'Line Icons Icons - Elements - Vuero',
})
</script>

<template>
  <div class="page-content-inner">
    <V-Breadcrumb
      with-icons
      separator="bullet"
      :items="[
        {
          label: 'Vuero',
          hideLabel: true,
          icon: 'feather:home',
          to: { name: 'index' },
        },
        {
          label: 'Elements',
          to: { name: 'elements' },
        },
        {
          label: 'Icons',
        },
        {
          label: 'Line Icons',
          to: { name: 'elements-icons-line-icons' },
        },
      ]"
    />

    <div class="columns">
      <div class="column is-12">
        <!--Line Icons-->
        <IconsLineLightDocumentation />

        <div class="demo-card mt-4">
          <div class="card-inner">
            <ul class="demo-icon-list">
              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-air-flow"></i>
                <p class="textFilter-match">lnil-air-flow</p>
                <em>\ea02</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-air"></i>
                <p class="textFilter-match">lnil-air</p>
                <em>\ea03</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-cloud-moon"></i>
                <p class="textFilter-match">lnil-cloud-moon</p>
                <em>\ea04</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-cloud-sun"></i>
                <p class="textFilter-match">lnil-cloud-sun</p>
                <em>\ea05</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-cloud-alt"></i>
                <p class="textFilter-match">lnil-cloud-alt</p>
                <em>\ea06</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-cloudy-sun"></i>
                <p class="textFilter-match">lnil-cloudy-sun</p>
                <em>\ea07</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-cloud-alt-2"></i>
                <p class="textFilter-match">lnil-cloud-alt-2</p>
                <em>\ea08</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-drop"></i>
                <p class="textFilter-match">lnil-drop</p>
                <em>\ea09</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-farenheit"></i>
                <p class="textFilter-match">lnil-farenheit</p>
                <em>\ea0a</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-moon-star"></i>
                <p class="textFilter-match">lnil-moon-star</p>
                <em>\ea0b</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-cloud"></i>
                <p class="textFilter-match">lnil-cloud</p>
                <em>\ea0c</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-night-thunder"></i>
                <p class="textFilter-match">lnil-night-thunder</p>
                <em>\ea0d</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-drop-alt"></i>
                <p class="textFilter-match">lnil-drop-alt</p>
                <em>\ea0e</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-night"></i>
                <p class="textFilter-match">lnil-night</p>
                <em>\ea0f</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-rain"></i>
                <p class="textFilter-match">lnil-rain</p>
                <em>\ea10</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-snowfall"></i>
                <p class="textFilter-match">lnil-snowfall</p>
                <em>\ea11</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-sun-rain"></i>
                <p class="textFilter-match">lnil-sun-rain</p>
                <em>\ea12</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-sun"></i>
                <p class="textFilter-match">lnil-sun</p>
                <em>\ea13</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-thunder-alt"></i>
                <p class="textFilter-match">lnil-thunder-alt</p>
                <em>\ea14</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-thunder"></i>
                <p class="textFilter-match">lnil-thunder</p>
                <em>\ea15</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-umbrella-alt"></i>
                <p class="textFilter-match">lnil-umbrella-alt</p>
                <em>\ea16</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-umbrella-rain-alt"></i>
                <p class="textFilter-match">lnil-umbrella-rain-alt</p>
                <em>\ea17</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-umbrella-rain"></i>
                <p class="textFilter-match">lnil-umbrella-rain</p>
                <em>\ea18</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-umbrella"></i>
                <p class="textFilter-match">lnil-umbrella</p>
                <em>\ea19</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-water-drops"></i>
                <p class="textFilter-match">lnil-water-drops</p>
                <em>\ea1a</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-wind-cloud"></i>
                <p class="textFilter-match">lnil-wind-cloud</p>
                <em>\ea1b</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-wind-sun"></i>
                <p class="textFilter-match">lnil-wind-sun</p>
                <em>\ea1c</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-cloud-alt-1"></i>
                <p class="textFilter-match">lnil-cloud-alt-1</p>
                <em>\ea1d</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-night-wind"></i>
                <p class="textFilter-match">lnil-night-wind</p>
                <em>\ea1e</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-moon"></i>
                <p class="textFilter-match">lnil-moon</p>
                <em>\ea1f</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-beach-chair"></i>
                <p class="textFilter-match">lnil-beach-chair</p>
                <em>\ea20</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-beach"></i>
                <p class="textFilter-match">lnil-beach</p>
                <em>\ea21</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-hot-air-baloon"></i>
                <p class="textFilter-match">lnil-hot-air-baloon</p>
                <em>\ea22</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-cable-car"></i>
                <p class="textFilter-match">lnil-cable-car</p>
                <em>\ea23</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-suitcase-alt"></i>
                <p class="textFilter-match">lnil-suitcase-alt</p>
                <em>\ea24</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-suitcase"></i>
                <p class="textFilter-match">lnil-suitcase</p>
                <em>\ea25</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-surf-board"></i>
                <p class="textFilter-match">lnil-surf-board</p>
                <em>\ea26</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-tent-alt"></i>
                <p class="textFilter-match">lnil-tent-alt</p>
                <em>\ea27</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-tent"></i>
                <p class="textFilter-match">lnil-tent</p>
                <em>\ea28</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-travel"></i>
                <p class="textFilter-match">lnil-travel</p>
                <em>\ea29</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-pyramids"></i>
                <p class="textFilter-match">lnil-pyramids</p>
                <em>\ea2a</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-flight-search"></i>
                <p class="textFilter-match">lnil-flight-search</p>
                <em>\ea2b</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-beachball"></i>
                <p class="textFilter-match">lnil-beachball</p>
                <em>\ea2c</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-3d"></i>
                <p class="textFilter-match">lnil-3d</p>
                <em>\ea2d</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-Mobile"></i>
                <p class="textFilter-match">lnil-Mobile</p>
                <em>\ea2e</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-alarm-2"></i>
                <p class="textFilter-match">lnil-alarm-2</p>
                <em>\ea2f</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-alarm-3"></i>
                <p class="textFilter-match">lnil-alarm-3</p>
                <em>\ea30</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-alarm-4"></i>
                <p class="textFilter-match">lnil-alarm-4</p>
                <em>\ea31</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-alarm-clock-alt"></i>
                <p class="textFilter-match">lnil-alarm-clock-alt</p>
                <em>\ea32</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-add-files"></i>
                <p class="textFilter-match">lnil-add-files</p>
                <em>\ea33</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-ai"></i>
                <p class="textFilter-match">lnil-ai</p>
                <em>\ea34</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-alarm-clock"></i>
                <p class="textFilter-match">lnil-alarm-clock</p>
                <em>\ea35</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-archive"></i>
                <p class="textFilter-match">lnil-archive</p>
                <em>\ea36</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-backspace"></i>
                <p class="textFilter-match">lnil-backspace</p>
                <em>\ea37</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-ban"></i>
                <p class="textFilter-match">lnil-ban</p>
                <em>\ea38</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-battery"></i>
                <p class="textFilter-match">lnil-battery</p>
                <em>\ea39</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-block-user"></i>
                <p class="textFilter-match">lnil-block-user</p>
                <em>\ea3a</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-bluetooth"></i>
                <p class="textFilter-match">lnil-bluetooth</p>
                <em>\ea3b</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-bookmark-alt"></i>
                <p class="textFilter-match">lnil-bookmark-alt</p>
                <em>\ea3c</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-bookmark"></i>
                <p class="textFilter-match">lnil-bookmark</p>
                <em>\ea3d</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-brightness"></i>
                <p class="textFilter-match">lnil-brightness</p>
                <em>\ea3e</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-bulb-alt"></i>
                <p class="textFilter-match">lnil-bulb-alt</p>
                <em>\ea3f</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-bulb"></i>
                <p class="textFilter-match">lnil-bulb</p>
                <em>\ea40</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-calendar"></i>
                <p class="textFilter-match">lnil-calendar</p>
                <em>\ea41</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-calender-alt-1"></i>
                <p class="textFilter-match">lnil-calender-alt-1</p>
                <em>\ea42</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-calender-alt-2"></i>
                <p class="textFilter-match">lnil-calender-alt-2</p>
                <em>\ea43</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-calender-alt-3"></i>
                <p class="textFilter-match">lnil-calender-alt-3</p>
                <em>\ea44</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-calender-alt-4"></i>
                <p class="textFilter-match">lnil-calender-alt-4</p>
                <em>\ea45</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-calender-alt"></i>
                <p class="textFilter-match">lnil-calender-alt</p>
                <em>\ea46</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-camera-alt-1"></i>
                <p class="textFilter-match">lnil-camera-alt-1</p>
                <em>\ea47</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-camera-alt"></i>
                <p class="textFilter-match">lnil-camera-alt</p>
                <em>\ea48</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-camera"></i>
                <p class="textFilter-match">lnil-camera</p>
                <em>\ea49</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-change"></i>
                <p class="textFilter-match">lnil-change</p>
                <em>\ea4a</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-charging"></i>
                <p class="textFilter-match">lnil-charging</p>
                <em>\ea4b</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-cloud-check-alt"></i>
                <p class="textFilter-match">lnil-cloud-check-alt</p>
                <em>\ea4c</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-cloud-check"></i>
                <p class="textFilter-match">lnil-cloud-check</p>
                <em>\ea4d</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-cloud-computing-alt"></i>
                <p class="textFilter-match">lnil-cloud-computing-alt</p>
                <em>\ea4e</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-cloud-computing"></i>
                <p class="textFilter-match">lnil-cloud-computing</p>
                <em>\ea4f</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-Website"></i>
                <p class="textFilter-match">lnil-Website</p>
                <em>\ea50</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-alarm"></i>
                <p class="textFilter-match">lnil-alarm</p>
                <em>\ea51</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-cloud-network-alt"></i>
                <p class="textFilter-match">lnil-cloud-network-alt</p>
                <em>\ea52</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-cloud-network"></i>
                <p class="textFilter-match">lnil-cloud-network</p>
                <em>\ea53</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-cloud-search-1"></i>
                <p class="textFilter-match">lnil-cloud-search-1</p>
                <em>\ea54</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-cloud-search-2"></i>
                <p class="textFilter-match">lnil-cloud-search-2</p>
                <em>\ea55</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-cloud-search"></i>
                <p class="textFilter-match">lnil-cloud-search</p>
                <em>\ea56</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-cloud-sync-alt"></i>
                <p class="textFilter-match">lnil-cloud-sync-alt</p>
                <em>\ea57</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-cloud-sync"></i>
                <p class="textFilter-match">lnil-cloud-sync</p>
                <em>\ea58</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-cloud-download-alt"></i>
                <p class="textFilter-match">lnil-cloud-download-alt</p>
                <em>\ea59</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-cloud-download"></i>
                <p class="textFilter-match">lnil-cloud-download</p>
                <em>\ea5a</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-appointment"></i>
                <p class="textFilter-match">lnil-appointment</p>
                <em>\ea5b</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-cloud-upload-alt"></i>
                <p class="textFilter-match">lnil-cloud-upload-alt</p>
                <em>\ea5c</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-cloud-upload"></i>
                <p class="textFilter-match">lnil-cloud-upload</p>
                <em>\ea5d</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-code-alt"></i>
                <p class="textFilter-match">lnil-code-alt</p>
                <em>\ea5e</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-code"></i>
                <p class="textFilter-match">lnil-code</p>
                <em>\ea5f</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-cog"></i>
                <p class="textFilter-match">lnil-cog</p>
                <em>\ea60</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-cogs"></i>
                <p class="textFilter-match">lnil-cogs</p>
                <em>\ea61</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-control-panel"></i>
                <p class="textFilter-match">lnil-control-panel</p>
                <em>\ea62</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-copy"></i>
                <p class="textFilter-match">lnil-copy</p>
                <em>\ea63</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-cut"></i>
                <p class="textFilter-match">lnil-cut</p>
                <em>\ea64</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-dashboard"></i>
                <p class="textFilter-match">lnil-dashboard</p>
                <em>\ea65</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-database"></i>
                <p class="textFilter-match">lnil-database</p>
                <em>\ea66</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-display-alt"></i>
                <p class="textFilter-match">lnil-display-alt</p>
                <em>\ea67</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-display"></i>
                <p class="textFilter-match">lnil-display</p>
                <em>\ea68</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-domain"></i>
                <p class="textFilter-match">lnil-domain</p>
                <em>\ea69</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-download"></i>
                <p class="textFilter-match">lnil-download</p>
                <em>\ea6a</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-empty-battery"></i>
                <p class="textFilter-match">lnil-empty-battery</p>
                <em>\ea6b</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-empty-file"></i>
                <p class="textFilter-match">lnil-empty-file</p>
                <em>\ea6c</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-file-download"></i>
                <p class="textFilter-match">lnil-file-download</p>
                <em>\ea6d</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-file-lock"></i>
                <p class="textFilter-match">lnil-file-lock</p>
                <em>\ea6e</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-file-name"></i>
                <p class="textFilter-match">lnil-file-name</p>
                <em>\ea6f</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-file-protection"></i>
                <p class="textFilter-match">lnil-file-protection</p>
                <em>\ea70</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-file-upload"></i>
                <p class="textFilter-match">lnil-file-upload</p>
                <em>\ea71</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-files-alt"></i>
                <p class="textFilter-match">lnil-files-alt</p>
                <em>\ea72</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-files"></i>
                <p class="textFilter-match">lnil-files</p>
                <em>\ea73</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-folder-alt-1"></i>
                <p class="textFilter-match">lnil-folder-alt-1</p>
                <em>\ea74</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-folder-alt"></i>
                <p class="textFilter-match">lnil-folder-alt</p>
                <em>\ea75</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-folder"></i>
                <p class="textFilter-match">lnil-folder</p>
                <em>\ea76</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-full-battery"></i>
                <p class="textFilter-match">lnil-full-battery</p>
                <em>\ea77</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-game"></i>
                <p class="textFilter-match">lnil-game</p>
                <em>\ea78</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-half-battery"></i>
                <p class="textFilter-match">lnil-half-battery</p>
                <em>\ea79</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-harddrive"></i>
                <p class="textFilter-match">lnil-harddrive</p>
                <em>\ea7a</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-headphone-alt"></i>
                <p class="textFilter-match">lnil-headphone-alt</p>
                <em>\ea7b</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-headphone"></i>
                <p class="textFilter-match">lnil-headphone</p>
                <em>\ea7c</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-laptop-alt-switch"></i>
                <p class="textFilter-match">lnil-laptop-alt-switch</p>
                <em>\ea7d</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-laptop-alt"></i>
                <p class="textFilter-match">lnil-laptop-alt</p>
                <em>\ea7e</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-laptop-phone"></i>
                <p class="textFilter-match">lnil-laptop-phone</p>
                <em>\ea7f</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-laptop"></i>
                <p class="textFilter-match">lnil-laptop</p>
                <em>\ea80</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-link-alt-1"></i>
                <p class="textFilter-match">lnil-link-alt-1</p>
                <em>\ea81</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-link-alt"></i>
                <p class="textFilter-match">lnil-link-alt</p>
                <em>\ea82</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-link"></i>
                <p class="textFilter-match">lnil-link</p>
                <em>\ea83</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-low-battery"></i>
                <p class="textFilter-match">lnil-low-battery</p>
                <em>\ea84</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-magnet"></i>
                <p class="textFilter-match">lnil-magnet</p>
                <em>\ea85</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-magnifier"></i>
                <p class="textFilter-match">lnil-magnifier</p>
                <em>\ea86</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-map-marker"></i>
                <p class="textFilter-match">lnil-map-marker</p>
                <em>\ea87</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-map"></i>
                <p class="textFilter-match">lnil-map</p>
                <em>\ea88</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-menu-alt-1"></i>
                <p class="textFilter-match">lnil-menu-alt-1</p>
                <em>\ea89</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-menu-alt-2"></i>
                <p class="textFilter-match">lnil-menu-alt-2</p>
                <em>\ea8a</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-menu-alt-3"></i>
                <p class="textFilter-match">lnil-menu-alt-3</p>
                <em>\ea8b</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-menu-alt-4"></i>
                <p class="textFilter-match">lnil-menu-alt-4</p>
                <em>\ea8c</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-menu-alt-5"></i>
                <p class="textFilter-match">lnil-menu-alt-5</p>
                <em>\ea8d</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-menu-alt"></i>
                <p class="textFilter-match">lnil-menu-alt</p>
                <em>\ea8e</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-menu-circle"></i>
                <p class="textFilter-match">lnil-menu-circle</p>
                <em>\ea8f</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-menu"></i>
                <p class="textFilter-match">lnil-menu</p>
                <em>\ea90</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-mic"></i>
                <p class="textFilter-match">lnil-mic</p>
                <em>\ea91</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-microphone-alt-1"></i>
                <p class="textFilter-match">lnil-microphone-alt-1</p>
                <em>\ea92</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-microphone-alt"></i>
                <p class="textFilter-match">lnil-microphone-alt</p>
                <em>\ea93</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-microphone"></i>
                <p class="textFilter-match">lnil-microphone</p>
                <em>\ea94</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-mobile-alt-1"></i>
                <p class="textFilter-match">lnil-mobile-alt-1</p>
                <em>\ea95</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-mobile-alt-2"></i>
                <p class="textFilter-match">lnil-mobile-alt-2</p>
                <em>\ea96</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-mobile-alt-button"></i>
                <p class="textFilter-match">lnil-mobile-alt-button</p>
                <em>\ea97</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-mouse"></i>
                <p class="textFilter-match">lnil-mouse</p>
                <em>\ea98</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-no-charge-battery"></i>
                <p class="textFilter-match">lnil-no-charge-battery</p>
                <em>\ea99</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-package"></i>
                <p class="textFilter-match">lnil-package</p>
                <em>\ea9a</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-plug"></i>
                <p class="textFilter-match">lnil-plug</p>
                <em>\ea9b</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-presentation"></i>
                <p class="textFilter-match">lnil-presentation</p>
                <em>\ea9c</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-printer"></i>
                <p class="textFilter-match">lnil-printer</p>
                <em>\ea9d</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-ps"></i>
                <p class="textFilter-match">lnil-ps</p>
                <em>\ea9e</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-recycle-alt"></i>
                <p class="textFilter-match">lnil-recycle-alt</p>
                <em>\ea9f</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-image"></i>
                <p class="textFilter-match">lnil-image</p>
                <em>\eaa0</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-reload-alt-box"></i>
                <p class="textFilter-match">lnil-reload-alt-box</p>
                <em>\eaa1</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-reload-alt"></i>
                <p class="textFilter-match">lnil-reload-alt</p>
                <em>\eaa2</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-reload"></i>
                <p class="textFilter-match">lnil-reload</p>
                <em>\eaa3</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-recycle"></i>
                <p class="textFilter-match">lnil-recycle</p>
                <em>\eaa4</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-rocket"></i>
                <p class="textFilter-match">lnil-rocket</p>
                <em>\eaa5</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-rss-feed"></i>
                <p class="textFilter-match">lnil-rss-feed</p>
                <em>\eaa6</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-save-alt"></i>
                <p class="textFilter-match">lnil-save-alt</p>
                <em>\eaa7</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-save"></i>
                <p class="textFilter-match">lnil-save</p>
                <em>\eaa8</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-scan"></i>
                <p class="textFilter-match">lnil-scan</p>
                <em>\eaa9</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-scroll-down"></i>
                <p class="textFilter-match">lnil-scroll-down</p>
                <em>\eaaa</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-search-alt"></i>
                <p class="textFilter-match">lnil-search-alt</p>
                <em>\eaab</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-search"></i>
                <p class="textFilter-match">lnil-search</p>
                <em>\eaac</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-share-alt"></i>
                <p class="textFilter-match">lnil-share-alt</p>
                <em>\eaad</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-share"></i>
                <p class="textFilter-match">lnil-share</p>
                <em>\eaae</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-shopping-basket"></i>
                <p class="textFilter-match">lnil-shopping-basket</p>
                <em>\eaaf</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-shortcode"></i>
                <p class="textFilter-match">lnil-shortcode</p>
                <em>\eab0</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-signal"></i>
                <p class="textFilter-match">lnil-signal</p>
                <em>\eab1</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-laptop-alt-keyboard"></i>
                <p class="textFilter-match">lnil-laptop-alt-keyboard</p>
                <em>\eab2</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-star-fill"></i>
                <p class="textFilter-match">lnil-star-fill</p>
                <em>\eab3</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-star-half"></i>
                <p class="textFilter-match">lnil-star-half</p>
                <em>\eab4</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-star"></i>
                <p class="textFilter-match">lnil-star</p>
                <em>\eab5</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-tab"></i>
                <p class="textFilter-match">lnil-tab</p>
                <em>\eab6</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-tap"></i>
                <p class="textFilter-match">lnil-tap</p>
                <em>\eab7</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-thumbnail"></i>
                <p class="textFilter-match">lnil-thumbnail</p>
                <em>\eab8</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-timer"></i>
                <p class="textFilter-match">lnil-timer</p>
                <em>\eab9</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-trash-can-alt-1"></i>
                <p class="textFilter-match">lnil-trash-can-alt-1</p>
                <em>\eaba</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-trash-can-alt"></i>
                <p class="textFilter-match">lnil-trash-can-alt</p>
                <em>\eabb</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-trash-can"></i>
                <p class="textFilter-match">lnil-trash-can</p>
                <em>\eabc</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-trash"></i>
                <p class="textFilter-match">lnil-trash</p>
                <em>\eabd</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-unlink"></i>
                <p class="textFilter-match">lnil-unlink</p>
                <em>\eabe</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-upload"></i>
                <p class="textFilter-match">lnil-upload</p>
                <em>\eabf</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-user-alt-1"></i>
                <p class="textFilter-match">lnil-user-alt-1</p>
                <em>\eac0</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-user-alt-2"></i>
                <p class="textFilter-match">lnil-user-alt-2</p>
                <em>\eac1</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-user-alt"></i>
                <p class="textFilter-match">lnil-user-alt</p>
                <em>\eac2</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-user"></i>
                <p class="textFilter-match">lnil-user</p>
                <em>\eac3</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-users-alt"></i>
                <p class="textFilter-match">lnil-users-alt</p>
                <em>\eac4</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-users"></i>
                <p class="textFilter-match">lnil-users</p>
                <em>\eac5</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-website-alt"></i>
                <p class="textFilter-match">lnil-website-alt</p>
                <em>\eac6</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-zip"></i>
                <p class="textFilter-match">lnil-zip</p>
                <em>\eac7</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-zoom-in"></i>
                <p class="textFilter-match">lnil-zoom-in</p>
                <em>\eac8</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-zoom-out"></i>
                <p class="textFilter-match">lnil-zoom-out</p>
                <em>\eac9</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-star-empty"></i>
                <p class="textFilter-match">lnil-star-empty</p>
                <em>\eaca</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-remove-file"></i>
                <p class="textFilter-match">lnil-remove-file</p>
                <em>\eacb</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-keyboard"></i>
                <p class="textFilter-match">lnil-keyboard</p>
                <em>\eacc</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-hourglass"></i>
                <p class="textFilter-match">lnil-hourglass</p>
                <em>\eacd</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-spinner-1"></i>
                <p class="textFilter-match">lnil-spinner-1</p>
                <em>\eace</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-spinner-10"></i>
                <p class="textFilter-match">lnil-spinner-10</p>
                <em>\eacf</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-spinner-11"></i>
                <p class="textFilter-match">lnil-spinner-11</p>
                <em>\ead0</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-spinner-2"></i>
                <p class="textFilter-match">lnil-spinner-2</p>
                <em>\ead1</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-spinner-3"></i>
                <p class="textFilter-match">lnil-spinner-3</p>
                <em>\ead2</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-spinner-4"></i>
                <p class="textFilter-match">lnil-spinner-4</p>
                <em>\ead3</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-spinner-5"></i>
                <p class="textFilter-match">lnil-spinner-5</p>
                <em>\ead4</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-spinner-9"></i>
                <p class="textFilter-match">lnil-spinner-9</p>
                <em>\ead5</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-spinner-7"></i>
                <p class="textFilter-match">lnil-spinner-7</p>
                <em>\ead6</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-spinner-8"></i>
                <p class="textFilter-match">lnil-spinner-8</p>
                <em>\ead7</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-spinner-6"></i>
                <p class="textFilter-match">lnil-spinner-6</p>
                <em>\ead8</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-angry"></i>
                <p class="textFilter-match">lnil-angry</p>
                <em>\ead9</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-bored"></i>
                <p class="textFilter-match">lnil-bored</p>
                <em>\eada</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-cry"></i>
                <p class="textFilter-match">lnil-cry</p>
                <em>\eadb</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-cute"></i>
                <p class="textFilter-match">lnil-cute</p>
                <em>\eadc</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-dead"></i>
                <p class="textFilter-match">lnil-dead</p>
                <em>\eadd</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-emoji-cool"></i>
                <p class="textFilter-match">lnil-emoji-cool</p>
                <em>\eade</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-emoji-friendly"></i>
                <p class="textFilter-match">lnil-emoji-friendly</p>
                <em>\eadf</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-emoji-happy"></i>
                <p class="textFilter-match">lnil-emoji-happy</p>
                <em>\eae0</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-emoji-sad"></i>
                <p class="textFilter-match">lnil-emoji-sad</p>
                <em>\eae1</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-emoji-smile"></i>
                <p class="textFilter-match">lnil-emoji-smile</p>
                <em>\eae2</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-emoji-speechless"></i>
                <p class="textFilter-match">lnil-emoji-speechless</p>
                <em>\eae3</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-emoji-suspect"></i>
                <p class="textFilter-match">lnil-emoji-suspect</p>
                <em>\eae4</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-emoji-tounge"></i>
                <p class="textFilter-match">lnil-emoji-tounge</p>
                <em>\eae5</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-happy-1"></i>
                <p class="textFilter-match">lnil-happy-1</p>
                <em>\eae6</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-happy-2"></i>
                <p class="textFilter-match">lnil-happy-2</p>
                <em>\eae7</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-happy-smile"></i>
                <p class="textFilter-match">lnil-happy-smile</p>
                <em>\eae8</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-kiss-2"></i>
                <p class="textFilter-match">lnil-kiss-2</p>
                <em>\eae9</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-kiss"></i>
                <p class="textFilter-match">lnil-kiss</p>
                <em>\eaea</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-love"></i>
                <p class="textFilter-match">lnil-love</p>
                <em>\eaeb</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-loved-surprise"></i>
                <p class="textFilter-match">lnil-loved-surprise</p>
                <em>\eaec</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-mute"></i>
                <p class="textFilter-match">lnil-mute</p>
                <em>\eaed</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-piss"></i>
                <p class="textFilter-match">lnil-piss</p>
                <em>\eaee</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-sick-1"></i>
                <p class="textFilter-match">lnil-sick-1</p>
                <em>\eaef</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-sick"></i>
                <p class="textFilter-match">lnil-sick</p>
                <em>\eaf0</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-sleep"></i>
                <p class="textFilter-match">lnil-sleep</p>
                <em>\eaf1</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-super-cool"></i>
                <p class="textFilter-match">lnil-super-cool</p>
                <em>\eaf2</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-super-happy"></i>
                <p class="textFilter-match">lnil-super-happy</p>
                <em>\eaf3</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-wink"></i>
                <p class="textFilter-match">lnil-wink</p>
                <em>\eaf4</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-wow"></i>
                <p class="textFilter-match">lnil-wow</p>
                <em>\eaf5</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-yawn"></i>
                <p class="textFilter-match">lnil-yawn</p>
                <em>\eaf6</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-cool-1"></i>
                <p class="textFilter-match">lnil-cool-1</p>
                <em>\eaf7</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-cool-3"></i>
                <p class="textFilter-match">lnil-cool-3</p>
                <em>\eaf8</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-cool-kiss"></i>
                <p class="textFilter-match">lnil-cool-kiss</p>
                <em>\eaf9</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-cotton-bud"></i>
                <p class="textFilter-match">lnil-cotton-bud</p>
                <em>\eafa</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-crown"></i>
                <p class="textFilter-match">lnil-crown</p>
                <em>\eafb</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-cup-alt"></i>
                <p class="textFilter-match">lnil-cup-alt</p>
                <em>\eafc</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-crown-alt"></i>
                <p class="textFilter-match">lnil-crown-alt</p>
                <em>\eafd</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-gift-alt-1"></i>
                <p class="textFilter-match">lnil-gift-alt-1</p>
                <em>\eafe</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-crown-alt-2"></i>
                <p class="textFilter-match">lnil-crown-alt-2</p>
                <em>\eaff</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-cup"></i>
                <p class="textFilter-match">lnil-cup</p>
                <em>\eb00</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-gift-bag"></i>
                <p class="textFilter-match">lnil-gift-bag</p>
                <em>\eb01</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-gift"></i>
                <p class="textFilter-match">lnil-gift</p>
                <em>\eb02</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-gift-alt"></i>
                <p class="textFilter-match">lnil-gift-alt</p>
                <em>\eb03</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-ladies-tshirt"></i>
                <p class="textFilter-match">lnil-ladies-tshirt</p>
                <em>\eb04</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-crown-alt-1"></i>
                <p class="textFilter-match">lnil-crown-alt-1</p>
                <em>\eb05</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-sunglass"></i>
                <p class="textFilter-match">lnil-sunglass</p>
                <em>\eb06</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-thought"></i>
                <p class="textFilter-match">lnil-thought</p>
                <em>\eb07</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-tshirt-alt-1"></i>
                <p class="textFilter-match">lnil-tshirt-alt-1</p>
                <em>\eb08</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-tshirt-alt"></i>
                <p class="textFilter-match">lnil-tshirt-alt</p>
                <em>\eb09</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-home"></i>
                <p class="textFilter-match">lnil-home</p>
                <em>\eb0a</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-glasses"></i>
                <p class="textFilter-match">lnil-glasses</p>
                <em>\eb0b</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-tshirt"></i>
                <p class="textFilter-match">lnil-tshirt</p>
                <em>\eb0c</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-baloon-alt-1"></i>
                <p class="textFilter-match">lnil-baloon-alt-1</p>
                <em>\eb0d</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-baloon-alt"></i>
                <p class="textFilter-match">lnil-baloon-alt</p>
                <em>\eb0e</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-baloon"></i>
                <p class="textFilter-match">lnil-baloon</p>
                <em>\eb0f</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-candle-alt"></i>
                <p class="textFilter-match">lnil-candle-alt</p>
                <em>\eb10</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-candy-cane"></i>
                <p class="textFilter-match">lnil-candy-cane</p>
                <em>\eb11</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-candy"></i>
                <p class="textFilter-match">lnil-candy</p>
                <em>\eb12</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-confetti"></i>
                <p class="textFilter-match">lnil-confetti</p>
                <em>\eb13</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-firecracker"></i>
                <p class="textFilter-match">lnil-firecracker</p>
                <em>\eb14</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-fireworks"></i>
                <p class="textFilter-match">lnil-fireworks</p>
                <em>\eb15</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-flags"></i>
                <p class="textFilter-match">lnil-flags</p>
                <em>\eb16</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-mask"></i>
                <p class="textFilter-match">lnil-mask</p>
                <em>\eb17</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-spray"></i>
                <p class="textFilter-match">lnil-spray</p>
                <em>\eb18</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-wand"></i>
                <p class="textFilter-match">lnil-wand</p>
                <em>\eb19</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-birthday-hat"></i>
                <p class="textFilter-match">lnil-birthday-hat</p>
                <em>\eb1a</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-candle"></i>
                <p class="textFilter-match">lnil-candle</p>
                <em>\eb1b</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-cake"></i>
                <p class="textFilter-match">lnil-cake</p>
                <em>\eb1c</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-bug-alt"></i>
                <p class="textFilter-match">lnil-bug-alt</p>
                <em>\eb1d</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-bug"></i>
                <p class="textFilter-match">lnil-bug</p>
                <em>\eb1e</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-flower"></i>
                <p class="textFilter-match">lnil-flower</p>
                <em>\eb1f</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-island"></i>
                <p class="textFilter-match">lnil-island</p>
                <em>\eb20</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-leaf-alt-1"></i>
                <p class="textFilter-match">lnil-leaf-alt-1</p>
                <em>\eb21</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-leaf-alt"></i>
                <p class="textFilter-match">lnil-leaf-alt</p>
                <em>\eb22</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-leaf"></i>
                <p class="textFilter-match">lnil-leaf</p>
                <em>\eb23</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-leaves"></i>
                <p class="textFilter-match">lnil-leaves</p>
                <em>\eb24</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-mashroom"></i>
                <p class="textFilter-match">lnil-mashroom</p>
                <em>\eb25</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-mountain"></i>
                <p class="textFilter-match">lnil-mountain</p>
                <em>\eb26</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-mushroom-alt"></i>
                <p class="textFilter-match">lnil-mushroom-alt</p>
                <em>\eb27</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-mushrooms"></i>
                <p class="textFilter-match">lnil-mushrooms</p>
                <em>\eb28</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-plant-pot"></i>
                <p class="textFilter-match">lnil-plant-pot</p>
                <em>\eb29</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-plant"></i>
                <p class="textFilter-match">lnil-plant</p>
                <em>\eb2a</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-sprout-alt"></i>
                <p class="textFilter-match">lnil-sprout-alt</p>
                <em>\eb2b</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-sprout"></i>
                <p class="textFilter-match">lnil-sprout</p>
                <em>\eb2c</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-tornado"></i>
                <p class="textFilter-match">lnil-tornado</p>
                <em>\eb2d</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-tree-alt-1"></i>
                <p class="textFilter-match">lnil-tree-alt-1</p>
                <em>\eb2e</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-tree-alt"></i>
                <p class="textFilter-match">lnil-tree-alt</p>
                <em>\eb2f</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-tree"></i>
                <p class="textFilter-match">lnil-tree</p>
                <em>\eb30</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-trees-alt-1"></i>
                <p class="textFilter-match">lnil-trees-alt-1</p>
                <em>\eb31</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-trees-alt"></i>
                <p class="textFilter-match">lnil-trees-alt</p>
                <em>\eb32</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-trees"></i>
                <p class="textFilter-match">lnil-trees</p>
                <em>\eb33</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-flower-alt"></i>
                <p class="textFilter-match">lnil-flower-alt</p>
                <em>\eb34</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-cactus-alt"></i>
                <p class="textFilter-match">lnil-cactus-alt</p>
                <em>\eb35</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-cactus"></i>
                <p class="textFilter-match">lnil-cactus</p>
                <em>\eb36</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-bank"></i>
                <p class="textFilter-match">lnil-bank</p>
                <em>\eb37</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-calculator-alt"></i>
                <p class="textFilter-match">lnil-calculator-alt</p>
                <em>\eb38</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-calculator"></i>
                <p class="textFilter-match">lnil-calculator</p>
                <em>\eb39</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-coin"></i>
                <p class="textFilter-match">lnil-coin</p>
                <em>\eb3a</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-diamond-alt"></i>
                <p class="textFilter-match">lnil-diamond-alt</p>
                <em>\eb3b</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-diamond"></i>
                <p class="textFilter-match">lnil-diamond</p>
                <em>\eb3c</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-dollar-card"></i>
                <p class="textFilter-match">lnil-dollar-card</p>
                <em>\eb3d</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-credit-cards"></i>
                <p class="textFilter-match">lnil-credit-cards</p>
                <em>\eb3e</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-dollar-down"></i>
                <p class="textFilter-match">lnil-dollar-down</p>
                <em>\eb3f</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-dollar-up"></i>
                <p class="textFilter-match">lnil-dollar-up</p>
                <em>\eb40</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-euro-card"></i>
                <p class="textFilter-match">lnil-euro-card</p>
                <em>\eb41</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-dollar"></i>
                <p class="textFilter-match">lnil-dollar</p>
                <em>\eb42</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-euro-coin"></i>
                <p class="textFilter-match">lnil-euro-coin</p>
                <em>\eb43</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-euro-down"></i>
                <p class="textFilter-match">lnil-euro-down</p>
                <em>\eb44</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-euro-up"></i>
                <p class="textFilter-match">lnil-euro-up</p>
                <em>\eb45</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-euro"></i>
                <p class="textFilter-match">lnil-euro</p>
                <em>\eb46</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-gold-bar"></i>
                <p class="textFilter-match">lnil-gold-bar</p>
                <em>\eb47</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-mobile-coin-taka"></i>
                <p class="textFilter-match">lnil-mobile-coin-taka</p>
                <em>\eb48</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-mobile-coin"></i>
                <p class="textFilter-match">lnil-mobile-coin</p>
                <em>\eb49</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-money-bag"></i>
                <p class="textFilter-match">lnil-money-bag</p>
                <em>\eb4a</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-money-location"></i>
                <p class="textFilter-match">lnil-money-location</p>
                <em>\eb4b</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-money-protection"></i>
                <p class="textFilter-match">lnil-money-protection</p>
                <em>\eb4c</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-pound-card"></i>
                <p class="textFilter-match">lnil-pound-card</p>
                <em>\eb4d</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-pound-coin"></i>
                <p class="textFilter-match">lnil-pound-coin</p>
                <em>\eb4e</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-pound-down"></i>
                <p class="textFilter-match">lnil-pound-down</p>
                <em>\eb4f</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-pound-up"></i>
                <p class="textFilter-match">lnil-pound-up</p>
                <em>\eb50</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-pound"></i>
                <p class="textFilter-match">lnil-pound</p>
                <em>\eb51</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-rupee-card"></i>
                <p class="textFilter-match">lnil-rupee-card</p>
                <em>\eb52</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-rupee-coin"></i>
                <p class="textFilter-match">lnil-rupee-coin</p>
                <em>\eb53</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-rupee-down"></i>
                <p class="textFilter-match">lnil-rupee-down</p>
                <em>\eb54</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-rupee-up"></i>
                <p class="textFilter-match">lnil-rupee-up</p>
                <em>\eb55</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-rupee"></i>
                <p class="textFilter-match">lnil-rupee</p>
                <em>\eb56</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-taka-card"></i>
                <p class="textFilter-match">lnil-taka-card</p>
                <em>\eb57</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-taka-coin"></i>
                <p class="textFilter-match">lnil-taka-coin</p>
                <em>\eb58</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-taka-down"></i>
                <p class="textFilter-match">lnil-taka-down</p>
                <em>\eb59</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-taka-up"></i>
                <p class="textFilter-match">lnil-taka-up</p>
                <em>\eb5a</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-taka"></i>
                <p class="textFilter-match">lnil-taka</p>
                <em>\eb5b</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-wallet-alt-1"></i>
                <p class="textFilter-match">lnil-wallet-alt-1</p>
                <em>\eb5c</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-wallet"></i>
                <p class="textFilter-match">lnil-wallet</p>
                <em>\eb5d</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-yen-card"></i>
                <p class="textFilter-match">lnil-yen-card</p>
                <em>\eb5e</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-yen-coin"></i>
                <p class="textFilter-match">lnil-yen-coin</p>
                <em>\eb5f</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-yen-down"></i>
                <p class="textFilter-match">lnil-yen-down</p>
                <em>\eb60</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-yen-up"></i>
                <p class="textFilter-match">lnil-yen-up</p>
                <em>\eb61</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-yen"></i>
                <p class="textFilter-match">lnil-yen</p>
                <em>\eb62</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-coins"></i>
                <p class="textFilter-match">lnil-coins</p>
                <em>\eb63</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-credit-card"></i>
                <p class="textFilter-match">lnil-credit-card</p>
                <em>\eb64</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-backward-alt"></i>
                <p class="textFilter-match">lnil-backward-alt</p>
                <em>\eb65</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-backward"></i>
                <p class="textFilter-match">lnil-backward</p>
                <em>\eb66</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-forward"></i>
                <p class="textFilter-match">lnil-forward</p>
                <em>\eb67</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-frame-expand"></i>
                <p class="textFilter-match">lnil-frame-expand</p>
                <em>\eb68</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-film"></i>
                <p class="textFilter-match">lnil-film</p>
                <em>\eb69</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-gallery"></i>
                <p class="textFilter-match">lnil-gallery</p>
                <em>\eb6a</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-next"></i>
                <p class="textFilter-match">lnil-next</p>
                <em>\eb6b</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-pause"></i>
                <p class="textFilter-match">lnil-pause</p>
                <em>\eb6c</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-play"></i>
                <p class="textFilter-match">lnil-play</p>
                <em>\eb6d</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-previous"></i>
                <p class="textFilter-match">lnil-previous</p>
                <em>\eb6e</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-repeat-one"></i>
                <p class="textFilter-match">lnil-repeat-one</p>
                <em>\eb6f</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-shuffle"></i>
                <p class="textFilter-match">lnil-shuffle</p>
                <em>\eb70</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-slideshow"></i>
                <p class="textFilter-match">lnil-slideshow</p>
                <em>\eb71</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-stop"></i>
                <p class="textFilter-match">lnil-stop</p>
                <em>\eb72</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-video-alt-1"></i>
                <p class="textFilter-match">lnil-video-alt-1</p>
                <em>\eb73</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-video-alt"></i>
                <p class="textFilter-match">lnil-video-alt</p>
                <em>\eb74</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-video-camera-alt-1"></i>
                <p class="textFilter-match">lnil-video-camera-alt-1</p>
                <em>\eb75</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-video-camera-alt-2"></i>
                <p class="textFilter-match">lnil-video-camera-alt-2</p>
                <em>\eb76</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-video-camera-alt"></i>
                <p class="textFilter-match">lnil-video-camera-alt</p>
                <em>\eb77</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-video-cut"></i>
                <p class="textFilter-match">lnil-video-cut</p>
                <em>\eb78</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-video"></i>
                <p class="textFilter-match">lnil-video</p>
                <em>\eb79</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-volume-high"></i>
                <p class="textFilter-match">lnil-volume-high</p>
                <em>\eb7a</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-volume-low"></i>
                <p class="textFilter-match">lnil-volume-low</p>
                <em>\eb7b</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-volume-medium"></i>
                <p class="textFilter-match">lnil-volume-medium</p>
                <em>\eb7c</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-volume-mute"></i>
                <p class="textFilter-match">lnil-volume-mute</p>
                <em>\eb7d</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-volume"></i>
                <p class="textFilter-match">lnil-volume</p>
                <em>\eb7e</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-full-screen"></i>
                <p class="textFilter-match">lnil-full-screen</p>
                <em>\eb7f</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-expand-alt-1"></i>
                <p class="textFilter-match">lnil-expand-alt-1</p>
                <em>\eb80</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-fast-forward"></i>
                <p class="textFilter-match">lnil-fast-forward</p>
                <em>\eb81</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-analytics"></i>
                <p class="textFilter-match">lnil-analytics</p>
                <em>\eb82</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-bar-chart"></i>
                <p class="textFilter-match">lnil-bar-chart</p>
                <em>\eb83</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-graph-alt-1"></i>
                <p class="textFilter-match">lnil-graph-alt-1</p>
                <em>\eb84</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-graph-alt-2"></i>
                <p class="textFilter-match">lnil-graph-alt-2</p>
                <em>\eb85</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-graph-alt-3"></i>
                <p class="textFilter-match">lnil-graph-alt-3</p>
                <em>\eb86</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-graph-alt-4"></i>
                <p class="textFilter-match">lnil-graph-alt-4</p>
                <em>\eb87</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-graph-alt"></i>
                <p class="textFilter-match">lnil-graph-alt</p>
                <em>\eb88</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-graph-decrease"></i>
                <p class="textFilter-match">lnil-graph-decrease</p>
                <em>\eb89</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-graph-increase"></i>
                <p class="textFilter-match">lnil-graph-increase</p>
                <em>\eb8a</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-invest-monitor"></i>
                <p class="textFilter-match">lnil-invest-monitor</p>
                <em>\eb8b</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-keyword-research"></i>
                <p class="textFilter-match">lnil-keyword-research</p>
                <em>\eb8c</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-network-alt"></i>
                <p class="textFilter-match">lnil-network-alt</p>
                <em>\eb8d</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-network"></i>
                <p class="textFilter-match">lnil-network</p>
                <em>\eb8e</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-pyramid-decrease"></i>
                <p class="textFilter-match">lnil-pyramid-decrease</p>
                <em>\eb8f</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-pyramid-increase"></i>
                <p class="textFilter-match">lnil-pyramid-increase</p>
                <em>\eb90</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-pyramid"></i>
                <p class="textFilter-match">lnil-pyramid</p>
                <em>\eb91</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-rook"></i>
                <p class="textFilter-match">lnil-rook</p>
                <em>\eb92</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-seo"></i>
                <p class="textFilter-match">lnil-seo</p>
                <em>\eb93</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-strategy"></i>
                <p class="textFilter-match">lnil-strategy</p>
                <em>\eb94</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-target-audience-alt"></i>
                <p class="textFilter-match">lnil-target-audience-alt</p>
                <em>\eb95</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-target-customer"></i>
                <p class="textFilter-match">lnil-target-customer</p>
                <em>\eb96</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-website-rank"></i>
                <p class="textFilter-match">lnil-website-rank</p>
                <em>\eb97</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-bar-check"></i>
                <p class="textFilter-match">lnil-bar-check</p>
                <em>\eb98</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-billboard-alt"></i>
                <p class="textFilter-match">lnil-billboard-alt</p>
                <em>\eb99</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-billboard"></i>
                <p class="textFilter-match">lnil-billboard</p>
                <em>\eb9a</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-barrier"></i>
                <p class="textFilter-match">lnil-barrier</p>
                <em>\eb9b</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-bolt-alt"></i>
                <p class="textFilter-match">lnil-bolt-alt</p>
                <em>\eb9c</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-checkmark"></i>
                <p class="textFilter-match">lnil-checkmark</p>
                <em>\eb9d</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-check-box"></i>
                <p class="textFilter-match">lnil-check-box</p>
                <em>\eb9e</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-circle-plus"></i>
                <p class="textFilter-match">lnil-circle-plus</p>
                <em>\eb9f</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-circle-minus"></i>
                <p class="textFilter-match">lnil-circle-minus</p>
                <em>\eba0</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-cross-circle"></i>
                <p class="textFilter-match">lnil-cross-circle</p>
                <em>\eba1</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-electricity"></i>
                <p class="textFilter-match">lnil-electricity</p>
                <em>\eba2</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-eye-alt"></i>
                <p class="textFilter-match">lnil-eye-alt</p>
                <em>\eba3</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-eye"></i>
                <p class="textFilter-match">lnil-eye</p>
                <em>\eba4</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-find"></i>
                <p class="textFilter-match">lnil-find</p>
                <em>\eba5</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-flag-alt"></i>
                <p class="textFilter-match">lnil-flag-alt</p>
                <em>\eba6</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-flag"></i>
                <p class="textFilter-match">lnil-flag</p>
                <em>\eba7</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-funnel-alt-1"></i>
                <p class="textFilter-match">lnil-funnel-alt-1</p>
                <em>\eba8</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-funnel-alt"></i>
                <p class="textFilter-match">lnil-funnel-alt</p>
                <em>\eba9</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-funnel"></i>
                <p class="textFilter-match">lnil-funnel</p>
                <em>\ebaa</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-hand"></i>
                <p class="textFilter-match">lnil-hand</p>
                <em>\ebab</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-heart-filled"></i>
                <p class="textFilter-match">lnil-heart-filled</p>
                <em>\ebac</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-heart-plus"></i>
                <p class="textFilter-match">lnil-heart-plus</p>
                <em>\ebad</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-heart"></i>
                <p class="textFilter-match">lnil-heart</p>
                <em>\ebae</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-help"></i>
                <p class="textFilter-match">lnil-help</p>
                <em>\ebaf</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-hotel-sign"></i>
                <p class="textFilter-match">lnil-hotel-sign</p>
                <em>\ebb0</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-idea-alt"></i>
                <p class="textFilter-match">lnil-idea-alt</p>
                <em>\ebb1</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-identity"></i>
                <p class="textFilter-match">lnil-identity</p>
                <em>\ebb2</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-infinite"></i>
                <p class="textFilter-match">lnil-infinite</p>
                <em>\ebb3</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-information"></i>
                <p class="textFilter-match">lnil-information</p>
                <em>\ebb4</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-invention"></i>
                <p class="textFilter-match">lnil-invention</p>
                <em>\ebb5</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-key-alt-1"></i>
                <p class="textFilter-match">lnil-key-alt-1</p>
                <em>\ebb6</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-key-alt-2"></i>
                <p class="textFilter-match">lnil-key-alt-2</p>
                <em>\ebb7</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-key-alt-3"></i>
                <p class="textFilter-match">lnil-key-alt-3</p>
                <em>\ebb8</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-key-alt"></i>
                <p class="textFilter-match">lnil-key-alt</p>
                <em>\ebb9</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-key"></i>
                <p class="textFilter-match">lnil-key</p>
                <em>\ebba</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-life-ring"></i>
                <p class="textFilter-match">lnil-life-ring</p>
                <em>\ebbb</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-list-alt-1"></i>
                <p class="textFilter-match">lnil-list-alt-1</p>
                <em>\ebbc</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-list-alt"></i>
                <p class="textFilter-match">lnil-list-alt</p>
                <em>\ebbd</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-list"></i>
                <p class="textFilter-match">lnil-list</p>
                <em>\ebbe</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-lock-alt-1"></i>
                <p class="textFilter-match">lnil-lock-alt-1</p>
                <em>\ebbf</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-lock-alt-2"></i>
                <p class="textFilter-match">lnil-lock-alt-2</p>
                <em>\ebc0</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-lock-alt"></i>
                <p class="textFilter-match">lnil-lock-alt</p>
                <em>\ebc1</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-lock"></i>
                <p class="textFilter-match">lnil-lock</p>
                <em>\ebc2</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-minus"></i>
                <p class="textFilter-match">lnil-minus</p>
                <em>\ebc3</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-more-alt-1"></i>
                <p class="textFilter-match">lnil-more-alt-1</p>
                <em>\ebc4</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-more-alt"></i>
                <p class="textFilter-match">lnil-more-alt</p>
                <em>\ebc5</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-more"></i>
                <p class="textFilter-match">lnil-more</p>
                <em>\ebc6</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-music-note"></i>
                <p class="textFilter-match">lnil-music-note</p>
                <em>\ebc7</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-music"></i>
                <p class="textFilter-match">lnil-music</p>
                <em>\ebc8</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-notification"></i>
                <p class="textFilter-match">lnil-notification</p>
                <em>\ebc9</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-passport-alt"></i>
                <p class="textFilter-match">lnil-passport-alt</p>
                <em>\ebca</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-passport"></i>
                <p class="textFilter-match">lnil-passport</p>
                <em>\ebcb</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-playlist-alt"></i>
                <p class="textFilter-match">lnil-playlist-alt</p>
                <em>\ebcc</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-playlist"></i>
                <p class="textFilter-match">lnil-playlist</p>
                <em>\ebcd</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-plus"></i>
                <p class="textFilter-match">lnil-plus</p>
                <em>\ebce</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-pointer"></i>
                <p class="textFilter-match">lnil-pointer</p>
                <em>\ebcf</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-power-switch"></i>
                <p class="textFilter-match">lnil-power-switch</p>
                <em>\ebd0</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-protection"></i>
                <p class="textFilter-match">lnil-protection</p>
                <em>\ebd1</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-question-circle"></i>
                <p class="textFilter-match">lnil-question-circle</p>
                <em>\ebd2</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-radio-button"></i>
                <p class="textFilter-match">lnil-radio-button</p>
                <em>\ebd3</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-record"></i>
                <p class="textFilter-match">lnil-record</p>
                <em>\ebd4</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-round-box-check"></i>
                <p class="textFilter-match">lnil-round-box-check</p>
                <em>\ebd5</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-round-box-cross"></i>
                <p class="textFilter-match">lnil-round-box-cross</p>
                <em>\ebd6</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-round-box-minus"></i>
                <p class="textFilter-match">lnil-round-box-minus</p>
                <em>\ebd7</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-round-box-plus"></i>
                <p class="textFilter-match">lnil-round-box-plus</p>
                <em>\ebd8</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-shield"></i>
                <p class="textFilter-match">lnil-shield</p>
                <em>\ebd9</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-sort"></i>
                <p class="textFilter-match">lnil-sort</p>
                <em>\ebda</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-switch"></i>
                <p class="textFilter-match">lnil-switch</p>
                <em>\ebdb</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-teabag"></i>
                <p class="textFilter-match">lnil-teabag</p>
                <em>\ebdc</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-thumbs-down-alt"></i>
                <p class="textFilter-match">lnil-thumbs-down-alt</p>
                <em>\ebdd</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-thumbs-down"></i>
                <p class="textFilter-match">lnil-thumbs-down</p>
                <em>\ebde</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-thumbs-up-alt"></i>
                <p class="textFilter-match">lnil-thumbs-up-alt</p>
                <em>\ebdf</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-thumbs-up"></i>
                <p class="textFilter-match">lnil-thumbs-up</p>
                <em>\ebe0</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-thunderbolt"></i>
                <p class="textFilter-match">lnil-thunderbolt</p>
                <em>\ebe1</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-ticket-alt-1"></i>
                <p class="textFilter-match">lnil-ticket-alt-1</p>
                <em>\ebe2</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-ticket-alt-2"></i>
                <p class="textFilter-match">lnil-ticket-alt-2</p>
                <em>\ebe3</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-ticket-alt-3"></i>
                <p class="textFilter-match">lnil-ticket-alt-3</p>
                <em>\ebe4</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-ticket-alt"></i>
                <p class="textFilter-match">lnil-ticket-alt</p>
                <em>\ebe5</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-ticket"></i>
                <p class="textFilter-match">lnil-ticket</p>
                <em>\ebe6</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-unlock"></i>
                <p class="textFilter-match">lnil-unlock</p>
                <em>\ebe7</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-warning"></i>
                <p class="textFilter-match">lnil-warning</p>
                <em>\ebe8</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-checkmark-circle"></i>
                <p class="textFilter-match">lnil-checkmark-circle</p>
                <em>\ebe9</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-close"></i>
                <p class="textFilter-match">lnil-close</p>
                <em>\ebea</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-bolt"></i>
                <p class="textFilter-match">lnil-bolt</p>
                <em>\ebeb</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-ambulance-alt-1"></i>
                <p class="textFilter-match">lnil-ambulance-alt-1</p>
                <em>\ebec</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-ambulance-alt"></i>
                <p class="textFilter-match">lnil-ambulance-alt</p>
                <em>\ebed</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-brain-alt"></i>
                <p class="textFilter-match">lnil-brain-alt</p>
                <em>\ebee</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-basketball"></i>
                <p class="textFilter-match">lnil-basketball</p>
                <em>\ebef</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-bone"></i>
                <p class="textFilter-match">lnil-bone</p>
                <em>\ebf0</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-ambulance"></i>
                <p class="textFilter-match">lnil-ambulance</p>
                <em>\ebf1</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-broken-bone"></i>
                <p class="textFilter-match">lnil-broken-bone</p>
                <em>\ebf2</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-brain-check"></i>
                <p class="textFilter-match">lnil-brain-check</p>
                <em>\ebf3</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-brain"></i>
                <p class="textFilter-match">lnil-brain</p>
                <em>\ebf4</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-capsule"></i>
                <p class="textFilter-match">lnil-capsule</p>
                <em>\ebf5</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-capsules"></i>
                <p class="textFilter-match">lnil-capsules</p>
                <em>\ebf6</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-cardiology"></i>
                <p class="textFilter-match">lnil-cardiology</p>
                <em>\ebf7</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-diagnosis-alt"></i>
                <p class="textFilter-match">lnil-diagnosis-alt</p>
                <em>\ebf8</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-diagnosis"></i>
                <p class="textFilter-match">lnil-diagnosis</p>
                <em>\ebf9</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-dna"></i>
                <p class="textFilter-match">lnil-dna</p>
                <em>\ebfa</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-dropper-alt-1"></i>
                <p class="textFilter-match">lnil-dropper-alt-1</p>
                <em>\ebfb</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-dropper-alt-2"></i>
                <p class="textFilter-match">lnil-dropper-alt-2</p>
                <em>\ebfc</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-dropper-alt"></i>
                <p class="textFilter-match">lnil-dropper-alt</p>
                <em>\ebfd</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-dropper"></i>
                <p class="textFilter-match">lnil-dropper</p>
                <em>\ebfe</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-dumbbell"></i>
                <p class="textFilter-match">lnil-dumbbell</p>
                <em>\ebff</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-eye-test"></i>
                <p class="textFilter-match">lnil-eye-test</p>
                <em>\ec00</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-female"></i>
                <p class="textFilter-match">lnil-female</p>
                <em>\ec01</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-first-aid"></i>
                <p class="textFilter-match">lnil-first-aid</p>
                <em>\ec02</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-gluten-free"></i>
                <p class="textFilter-match">lnil-gluten-free</p>
                <em>\ec03</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-heart-check"></i>
                <p class="textFilter-match">lnil-heart-check</p>
                <em>\ec04</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-heart-monitor"></i>
                <p class="textFilter-match">lnil-heart-monitor</p>
                <em>\ec05</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-heartrate-monitor"></i>
                <p class="textFilter-match">lnil-heartrate-monitor</p>
                <em>\ec06</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-hospital-alt-1"></i>
                <p class="textFilter-match">lnil-hospital-alt-1</p>
                <em>\ec07</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-hospital-alt-2"></i>
                <p class="textFilter-match">lnil-hospital-alt-2</p>
                <em>\ec08</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-hospital-alt-3"></i>
                <p class="textFilter-match">lnil-hospital-alt-3</p>
                <em>\ec09</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-hospital-alt-4"></i>
                <p class="textFilter-match">lnil-hospital-alt-4</p>
                <em>\ec0a</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-hospital-alt"></i>
                <p class="textFilter-match">lnil-hospital-alt</p>
                <em>\ec0b</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-hospital-bed-alt-1"></i>
                <p class="textFilter-match">lnil-hospital-bed-alt-1</p>
                <em>\ec0c</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-hospital-bed-alt-2"></i>
                <p class="textFilter-match">lnil-hospital-bed-alt-2</p>
                <em>\ec0d</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-hospital-bed-alt"></i>
                <p class="textFilter-match">lnil-hospital-bed-alt</p>
                <em>\ec0e</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-hospital-bed"></i>
                <p class="textFilter-match">lnil-hospital-bed</p>
                <em>\ec0f</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-hospital-location"></i>
                <p class="textFilter-match">lnil-hospital-location</p>
                <em>\ec10</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-hospital-sign"></i>
                <p class="textFilter-match">lnil-hospital-sign</p>
                <em>\ec11</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-hospital"></i>
                <p class="textFilter-match">lnil-hospital</p>
                <em>\ec12</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-kettlebell"></i>
                <p class="textFilter-match">lnil-kettlebell</p>
                <em>\ec13</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-lungs"></i>
                <p class="textFilter-match">lnil-lungs</p>
                <em>\ec14</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-male"></i>
                <p class="textFilter-match">lnil-male</p>
                <em>\ec15</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="lnil lnil-medical-briefcase-alt"
                ></i>
                <p class="textFilter-match">lnil-medical-briefcase-alt</p>
                <em>\ec16</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-medical-briefcase"></i>
                <p class="textFilter-match">lnil-medical-briefcase</p>
                <em>\ec17</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-medical-protection"></i>
                <p class="textFilter-match">lnil-medical-protection</p>
                <em>\ec18</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-medical-sign"></i>
                <p class="textFilter-match">lnil-medical-sign</p>
                <em>\ec19</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-medicine-alt"></i>
                <p class="textFilter-match">lnil-medicine-alt</p>
                <em>\ec1a</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-medicine-bottle"></i>
                <p class="textFilter-match">lnil-medicine-bottle</p>
                <em>\ec1b</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-medicine"></i>
                <p class="textFilter-match">lnil-medicine</p>
                <em>\ec1c</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-microscope"></i>
                <p class="textFilter-match">lnil-microscope</p>
                <em>\ec1d</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-pulse"></i>
                <p class="textFilter-match">lnil-pulse</p>
                <em>\ec1e</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-report-laptop"></i>
                <p class="textFilter-match">lnil-report-laptop</p>
                <em>\ec1f</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-saline-alt-1"></i>
                <p class="textFilter-match">lnil-saline-alt-1</p>
                <em>\ec20</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-saline-alt"></i>
                <p class="textFilter-match">lnil-saline-alt</p>
                <em>\ec21</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-saline"></i>
                <p class="textFilter-match">lnil-saline</p>
                <em>\ec22</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-skipping-rope"></i>
                <p class="textFilter-match">lnil-skipping-rope</p>
                <em>\ec23</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-slim"></i>
                <p class="textFilter-match">lnil-slim</p>
                <em>\ec24</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-sthethoscope"></i>
                <p class="textFilter-match">lnil-sthethoscope</p>
                <em>\ec25</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-syringe"></i>
                <p class="textFilter-match">lnil-syringe</p>
                <em>\ec26</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-test-tube-alt"></i>
                <p class="textFilter-match">lnil-test-tube-alt</p>
                <em>\ec27</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-test-tube"></i>
                <p class="textFilter-match">lnil-test-tube</p>
                <em>\ec28</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-thermometer-alt"></i>
                <p class="textFilter-match">lnil-thermometer-alt</p>
                <em>\ec29</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-thermometer"></i>
                <p class="textFilter-match">lnil-thermometer</p>
                <em>\ec2a</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-tooth"></i>
                <p class="textFilter-match">lnil-tooth</p>
                <em>\ec2b</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-walker"></i>
                <p class="textFilter-match">lnil-walker</p>
                <em>\ec2c</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-weight-machine"></i>
                <p class="textFilter-match">lnil-weight-machine</p>
                <em>\ec2d</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-weight"></i>
                <p class="textFilter-match">lnil-weight</p>
                <em>\ec2e</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-wheelchair"></i>
                <p class="textFilter-match">lnil-wheelchair</p>
                <em>\ec2f</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-yoga-mat"></i>
                <p class="textFilter-match">lnil-yoga-mat</p>
                <em>\ec30</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-capsule-alt-1"></i>
                <p class="textFilter-match">lnil-capsule-alt-1</p>
                <em>\ec31</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-capsule-alt"></i>
                <p class="textFilter-match">lnil-capsule-alt</p>
                <em>\ec32</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-brain-check-alt"></i>
                <p class="textFilter-match">lnil-brain-check-alt</p>
                <em>\ec33</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-apple-alt"></i>
                <p class="textFilter-match">lnil-apple-alt</p>
                <em>\ec34</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-banana"></i>
                <p class="textFilter-match">lnil-banana</p>
                <em>\ec35</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-brocolli"></i>
                <p class="textFilter-match">lnil-brocolli</p>
                <em>\ec36</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-burger-alt-1"></i>
                <p class="textFilter-match">lnil-burger-alt-1</p>
                <em>\ec37</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-burger-alt"></i>
                <p class="textFilter-match">lnil-burger-alt</p>
                <em>\ec38</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-burger"></i>
                <p class="textFilter-match">lnil-burger</p>
                <em>\ec39</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-chef-hat-alt-1"></i>
                <p class="textFilter-match">lnil-chef-hat-alt-1</p>
                <em>\ec3a</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-chef-hat-alt-2"></i>
                <p class="textFilter-match">lnil-chef-hat-alt-2</p>
                <em>\ec3b</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-chef-hat-alt"></i>
                <p class="textFilter-match">lnil-chef-hat-alt</p>
                <em>\ec3c</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-chef-hat"></i>
                <p class="textFilter-match">lnil-chef-hat</p>
                <em>\ec3d</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-chicken"></i>
                <p class="textFilter-match">lnil-chicken</p>
                <em>\ec3e</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-cocktail-alt-1"></i>
                <p class="textFilter-match">lnil-cocktail-alt-1</p>
                <em>\ec3f</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-cocktail-alt"></i>
                <p class="textFilter-match">lnil-cocktail-alt</p>
                <em>\ec40</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-cocktail"></i>
                <p class="textFilter-match">lnil-cocktail</p>
                <em>\ec41</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-coffee-cup-alt"></i>
                <p class="textFilter-match">lnil-coffee-cup-alt</p>
                <em>\ec42</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-coffee-cup"></i>
                <p class="textFilter-match">lnil-coffee-cup</p>
                <em>\ec43</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-cupcake-alt"></i>
                <p class="textFilter-match">lnil-cupcake-alt</p>
                <em>\ec44</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-cupcake"></i>
                <p class="textFilter-match">lnil-cupcake</p>
                <em>\ec45</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-cutlery-alt-1"></i>
                <p class="textFilter-match">lnil-cutlery-alt-1</p>
                <em>\ec46</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-cutlery-alt"></i>
                <p class="textFilter-match">lnil-cutlery-alt</p>
                <em>\ec47</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-cutlery"></i>
                <p class="textFilter-match">lnil-cutlery</p>
                <em>\ec48</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-dinner-table"></i>
                <p class="textFilter-match">lnil-dinner-table</p>
                <em>\ec49</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-dinner"></i>
                <p class="textFilter-match">lnil-dinner</p>
                <em>\ec4a</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-drumstick"></i>
                <p class="textFilter-match">lnil-drumstick</p>
                <em>\ec4b</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-fresh-juice"></i>
                <p class="textFilter-match">lnil-fresh-juice</p>
                <em>\ec4c</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-ice-cream-alt"></i>
                <p class="textFilter-match">lnil-ice-cream-alt</p>
                <em>\ec4d</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-ice-cream"></i>
                <p class="textFilter-match">lnil-ice-cream</p>
                <em>\ec4e</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-juice"></i>
                <p class="textFilter-match">lnil-juice</p>
                <em>\ec4f</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-lolypop"></i>
                <p class="textFilter-match">lnil-lolypop</p>
                <em>\ec50</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-meat"></i>
                <p class="textFilter-match">lnil-meat</p>
                <em>\ec51</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-pizza-alt"></i>
                <p class="textFilter-match">lnil-pizza-alt</p>
                <em>\ec52</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-pizza"></i>
                <p class="textFilter-match">lnil-pizza</p>
                <em>\ec53</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-plate"></i>
                <p class="textFilter-match">lnil-plate</p>
                <em>\ec54</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-popcorn"></i>
                <p class="textFilter-match">lnil-popcorn</p>
                <em>\ec55</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-restaurant"></i>
                <p class="textFilter-match">lnil-restaurant</p>
                <em>\ec56</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-service"></i>
                <p class="textFilter-match">lnil-service</p>
                <em>\ec57</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-silverware"></i>
                <p class="textFilter-match">lnil-silverware</p>
                <em>\ec58</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-spatula"></i>
                <p class="textFilter-match">lnil-spatula</p>
                <em>\ec59</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-bowl-alt"></i>
                <p class="textFilter-match">lnil-bowl-alt</p>
                <em>\ec5a</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-bowl"></i>
                <p class="textFilter-match">lnil-bowl</p>
                <em>\ec5b</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-bowl-alt-1"></i>
                <p class="textFilter-match">lnil-bowl-alt-1</p>
                <em>\ec5c</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-atom"></i>
                <p class="textFilter-match">lnil-atom</p>
                <em>\ec5d</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-backpack-alt"></i>
                <p class="textFilter-match">lnil-backpack-alt</p>
                <em>\ec5e</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-book"></i>
                <p class="textFilter-match">lnil-book</p>
                <em>\ec5f</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-blackboard"></i>
                <p class="textFilter-match">lnil-blackboard</p>
                <em>\ec60</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-books"></i>
                <p class="textFilter-match">lnil-books</p>
                <em>\ec61</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-brakckets"></i>
                <p class="textFilter-match">lnil-brakckets</p>
                <em>\ec62</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-certificate-alt-1"></i>
                <p class="textFilter-match">lnil-certificate-alt-1</p>
                <em>\ec63</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-certificate-alt"></i>
                <p class="textFilter-match">lnil-certificate-alt</p>
                <em>\ec64</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-certificate"></i>
                <p class="textFilter-match">lnil-certificate</p>
                <em>\ec65</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-classroom"></i>
                <p class="textFilter-match">lnil-classroom</p>
                <em>\ec66</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-clipboard"></i>
                <p class="textFilter-match">lnil-clipboard</p>
                <em>\ec67</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-compass"></i>
                <p class="textFilter-match">lnil-compass</p>
                <em>\ec68</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-cubes"></i>
                <p class="textFilter-match">lnil-cubes</p>
                <em>\ec69</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-eraser"></i>
                <p class="textFilter-match">lnil-eraser</p>
                <em>\ec6a</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-flask-alt-1"></i>
                <p class="textFilter-match">lnil-flask-alt-1</p>
                <em>\ec6b</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-flask-alt-2"></i>
                <p class="textFilter-match">lnil-flask-alt-2</p>
                <em>\ec6c</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-flask-alt"></i>
                <p class="textFilter-match">lnil-flask-alt</p>
                <em>\ec6d</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-flask"></i>
                <p class="textFilter-match">lnil-flask</p>
                <em>\ec6e</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-graduate-alt"></i>
                <p class="textFilter-match">lnil-graduate-alt</p>
                <em>\ec6f</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-graduate"></i>
                <p class="textFilter-match">lnil-graduate</p>
                <em>\ec70</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-graduation"></i>
                <p class="textFilter-match">lnil-graduation</p>
                <em>\ec71</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-letterblocks"></i>
                <p class="textFilter-match">lnil-letterblocks</p>
                <em>\ec72</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-library"></i>
                <p class="textFilter-match">lnil-library</p>
                <em>\ec73</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-medal-alt"></i>
                <p class="textFilter-match">lnil-medal-alt</p>
                <em>\ec74</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-medal"></i>
                <p class="textFilter-match">lnil-medal</p>
                <em>\ec75</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-molecule-alt"></i>
                <p class="textFilter-match">lnil-molecule-alt</p>
                <em>\ec76</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-molecule"></i>
                <p class="textFilter-match">lnil-molecule</p>
                <em>\ec77</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-pencil-alt"></i>
                <p class="textFilter-match">lnil-pencil-alt</p>
                <em>\ec78</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-pencil"></i>
                <p class="textFilter-match">lnil-pencil</p>
                <em>\ec79</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-quill"></i>
                <p class="textFilter-match">lnil-quill</p>
                <em>\ec7a</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-school-bench-alt"></i>
                <p class="textFilter-match">lnil-school-bench-alt</p>
                <em>\ec7b</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-school-bench"></i>
                <p class="textFilter-match">lnil-school-bench</p>
                <em>\ec7c</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-sketchbook"></i>
                <p class="textFilter-match">lnil-sketchbook</p>
                <em>\ec7d</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-whiteboard-alt-1"></i>
                <p class="textFilter-match">lnil-whiteboard-alt-1</p>
                <em>\ec7e</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-whiteboard-alt-2"></i>
                <p class="textFilter-match">lnil-whiteboard-alt-2</p>
                <em>\ec7f</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-whiteboard-alt"></i>
                <p class="textFilter-match">lnil-whiteboard-alt</p>
                <em>\ec80</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-whiteboard"></i>
                <p class="textFilter-match">lnil-whiteboard</p>
                <em>\ec81</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-world-2"></i>
                <p class="textFilter-match">lnil-world-2</p>
                <em>\ec82</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-world-alt"></i>
                <p class="textFilter-match">lnil-world-alt</p>
                <em>\ec83</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-world"></i>
                <p class="textFilter-match">lnil-world</p>
                <em>\ec84</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-book-alt"></i>
                <p class="textFilter-match">lnil-book-alt</p>
                <em>\ec85</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-write"></i>
                <p class="textFilter-match">lnil-write</p>
                <em>\ec86</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-backpack"></i>
                <p class="textFilter-match">lnil-backpack</p>
                <em>\ec87</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-books-alt"></i>
                <p class="textFilter-match">lnil-books-alt</p>
                <em>\ec88</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-Italic"></i>
                <p class="textFilter-match">lnil-Italic</p>
                <em>\ec89</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-bold"></i>
                <p class="textFilter-match">lnil-bold</p>
                <em>\ec8a</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-indent-decrease"></i>
                <p class="textFilter-match">lnil-indent-decrease</p>
                <em>\ec8b</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-font"></i>
                <p class="textFilter-match">lnil-font</p>
                <em>\ec8c</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-line-dashed"></i>
                <p class="textFilter-match">lnil-line-dashed</p>
                <em>\ec8d</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-line-dotted"></i>
                <p class="textFilter-match">lnil-line-dotted</p>
                <em>\ec8e</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-line-double"></i>
                <p class="textFilter-match">lnil-line-double</p>
                <em>\ec8f</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-line-spacing"></i>
                <p class="textFilter-match">lnil-line-spacing</p>
                <em>\ec90</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-page-break"></i>
                <p class="textFilter-match">lnil-page-break</p>
                <em>\ec91</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-pagination"></i>
                <p class="textFilter-match">lnil-pagination</p>
                <em>\ec92</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-pilcrow"></i>
                <p class="textFilter-match">lnil-pilcrow</p>
                <em>\ec93</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-redo"></i>
                <p class="textFilter-match">lnil-redo</p>
                <em>\ec94</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-reflect"></i>
                <p class="textFilter-match">lnil-reflect</p>
                <em>\ec95</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-sort-alpha-asc"></i>
                <p class="textFilter-match">lnil-sort-alpha-asc</p>
                <em>\ec96</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-sort-amount-asc"></i>
                <p class="textFilter-match">lnil-sort-amount-asc</p>
                <em>\ec97</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-sort-amount-dsc"></i>
                <p class="textFilter-match">lnil-sort-amount-dsc</p>
                <em>\ec98</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-spellcheck"></i>
                <p class="textFilter-match">lnil-spellcheck</p>
                <em>\ec99</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-strikethrough"></i>
                <p class="textFilter-match">lnil-strikethrough</p>
                <em>\ec9a</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-text-align-center"></i>
                <p class="textFilter-match">lnil-text-align-center</p>
                <em>\ec9b</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-text-align-justify"></i>
                <p class="textFilter-match">lnil-text-align-justify</p>
                <em>\ec9c</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-text-align-left"></i>
                <p class="textFilter-match">lnil-text-align-left</p>
                <em>\ec9d</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-text-align-right"></i>
                <p class="textFilter-match">lnil-text-align-right</p>
                <em>\ec9e</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-text-format-remove"></i>
                <p class="textFilter-match">lnil-text-format-remove</p>
                <em>\ec9f</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-text-format"></i>
                <p class="textFilter-match">lnil-text-format</p>
                <em>\eca0</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-text"></i>
                <p class="textFilter-match">lnil-text</p>
                <em>\eca1</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-underline"></i>
                <p class="textFilter-match">lnil-underline</p>
                <em>\eca2</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-undo"></i>
                <p class="textFilter-match">lnil-undo</p>
                <em>\eca3</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-vertical-line"></i>
                <p class="textFilter-match">lnil-vertical-line</p>
                <em>\eca4</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-height"></i>
                <p class="textFilter-match">lnil-height</p>
                <em>\eca5</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-capital-letter"></i>
                <p class="textFilter-match">lnil-capital-letter</p>
                <em>\eca6</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-indent-increase"></i>
                <p class="textFilter-match">lnil-indent-increase</p>
                <em>\eca7</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-angle-double-down"></i>
                <p class="textFilter-match">lnil-angle-double-down</p>
                <em>\eca8</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-angle-double-left"></i>
                <p class="textFilter-match">lnil-angle-double-left</p>
                <em>\eca9</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-angle-double-right"></i>
                <p class="textFilter-match">lnil-angle-double-right</p>
                <em>\ecaa</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-angle-double-up"></i>
                <p class="textFilter-match">lnil-angle-double-up</p>
                <em>\ecab</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-arrow-double-down"></i>
                <p class="textFilter-match">lnil-arrow-double-down</p>
                <em>\ecac</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-arrow-double-right"></i>
                <p class="textFilter-match">lnil-arrow-double-right</p>
                <em>\ecad</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-arrow-double-top"></i>
                <p class="textFilter-match">lnil-arrow-double-top</p>
                <em>\ecae</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-arrow-down-circle"></i>
                <p class="textFilter-match">lnil-arrow-down-circle</p>
                <em>\ecaf</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-arrow-expand-alt"></i>
                <p class="textFilter-match">lnil-arrow-expand-alt</p>
                <em>\ecb0</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-arrow-left-circle"></i>
                <p class="textFilter-match">lnil-arrow-left-circle</p>
                <em>\ecb1</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-arrow-left"></i>
                <p class="textFilter-match">lnil-arrow-left</p>
                <em>\ecb2</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-arrow-minimize-alt"></i>
                <p class="textFilter-match">lnil-arrow-minimize-alt</p>
                <em>\ecb3</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-arrow-minimize"></i>
                <p class="textFilter-match">lnil-arrow-minimize</p>
                <em>\ecb4</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-arrow-right-circle"></i>
                <p class="textFilter-match">lnil-arrow-right-circle</p>
                <em>\ecb5</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-arrow-right"></i>
                <p class="textFilter-match">lnil-arrow-right</p>
                <em>\ecb6</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-arrow-top-left"></i>
                <p class="textFilter-match">lnil-arrow-top-left</p>
                <em>\ecb7</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-arrow-top-right"></i>
                <p class="textFilter-match">lnil-arrow-top-right</p>
                <em>\ecb8</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-arrow-up-circle"></i>
                <p class="textFilter-match">lnil-arrow-up-circle</p>
                <em>\ecb9</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-arrow-expand"></i>
                <p class="textFilter-match">lnil-arrow-expand</p>
                <em>\ecba</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-arrow-double-left"></i>
                <p class="textFilter-match">lnil-arrow-double-left</p>
                <em>\ecbb</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-arrows-vertical"></i>
                <p class="textFilter-match">lnil-arrows-vertical</p>
                <em>\ecbc</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-axis"></i>
                <p class="textFilter-match">lnil-axis</p>
                <em>\ecbd</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-arrow-up"></i>
                <p class="textFilter-match">lnil-arrow-up</p>
                <em>\ecbe</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-chevron-down"></i>
                <p class="textFilter-match">lnil-chevron-down</p>
                <em>\ecbf</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-chevron-left-circle"></i>
                <p class="textFilter-match">lnil-chevron-left-circle</p>
                <em>\ecc0</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-chevron-left"></i>
                <p class="textFilter-match">lnil-chevron-left</p>
                <em>\ecc1</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-chevron-down-circle"></i>
                <p class="textFilter-match">lnil-chevron-down-circle</p>
                <em>\ecc2</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-chevron-right"></i>
                <p class="textFilter-match">lnil-chevron-right</p>
                <em>\ecc3</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-chevron-up-circle"></i>
                <p class="textFilter-match">lnil-chevron-up-circle</p>
                <em>\ecc4</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="lnil lnil-chevron-right-circle"
                ></i>
                <p class="textFilter-match">lnil-chevron-right-circle</p>
                <em>\ecc5</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-arrow-down"></i>
                <p class="textFilter-match">lnil-arrow-down</p>
                <em>\ecc6</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-chevron-up"></i>
                <p class="textFilter-match">lnil-chevron-up</p>
                <em>\ecc7</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-direction-alt"></i>
                <p class="textFilter-match">lnil-direction-alt</p>
                <em>\ecc8</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-direction"></i>
                <p class="textFilter-match">lnil-direction</p>
                <em>\ecc9</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-down-arrow-box"></i>
                <p class="textFilter-match">lnil-down-arrow-box</p>
                <em>\ecca</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-down-left-arrow-box"></i>
                <p class="textFilter-match">lnil-down-left-arrow-box</p>
                <em>\eccb</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="lnil lnil-down-right-arrow-box"
                ></i>
                <p class="textFilter-match">lnil-down-right-arrow-box</p>
                <em>\eccc</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-enter"></i>
                <p class="textFilter-match">lnil-enter</p>
                <em>\eccd</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-exit-down"></i>
                <p class="textFilter-match">lnil-exit-down</p>
                <em>\ecce</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-exit-up"></i>
                <p class="textFilter-match">lnil-exit-up</p>
                <em>\eccf</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-arrows-horizontal"></i>
                <p class="textFilter-match">lnil-arrows-horizontal</p>
                <em>\ecd0</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-direction-ltr"></i>
                <p class="textFilter-match">lnil-direction-ltr</p>
                <em>\ecd1</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-direction-rtl"></i>
                <p class="textFilter-match">lnil-direction-rtl</p>
                <em>\ecd2</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-exit"></i>
                <p class="textFilter-match">lnil-exit</p>
                <em>\ecd3</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-left-arrow-box"></i>
                <p class="textFilter-match">lnil-left-arrow-box</p>
                <em>\ecd4</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-pointer-top"></i>
                <p class="textFilter-match">lnil-pointer-top</p>
                <em>\ecd5</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-right-arrow-box"></i>
                <p class="textFilter-match">lnil-right-arrow-box</p>
                <em>\ecd6</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-shift-left"></i>
                <p class="textFilter-match">lnil-shift-left</p>
                <em>\ecd7</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-shift-right"></i>
                <p class="textFilter-match">lnil-shift-right</p>
                <em>\ecd8</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-top-arrow-box"></i>
                <p class="textFilter-match">lnil-top-arrow-box</p>
                <em>\ecd9</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-top-left-arrow-box"></i>
                <p class="textFilter-match">lnil-top-left-arrow-box</p>
                <em>\ecda</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-top-right-arrow-box"></i>
                <p class="textFilter-match">lnil-top-right-arrow-box</p>
                <em>\ecdb</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-pointer-down"></i>
                <p class="textFilter-match">lnil-pointer-down</p>
                <em>\ecdc</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-pointer-left"></i>
                <p class="textFilter-match">lnil-pointer-left</p>
                <em>\ecdd</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-pointer-right"></i>
                <p class="textFilter-match">lnil-pointer-right</p>
                <em>\ecde</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-brush-alt"></i>
                <p class="textFilter-match">lnil-brush-alt</p>
                <em>\ecdf</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-brush"></i>
                <p class="textFilter-match">lnil-brush</p>
                <em>\ece0</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-grid-alt"></i>
                <p class="textFilter-match">lnil-grid-alt</p>
                <em>\ece1</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-grid"></i>
                <p class="textFilter-match">lnil-grid</p>
                <em>\ece2</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-highlight-alt"></i>
                <p class="textFilter-match">lnil-highlight-alt</p>
                <em>\ece3</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-highlight"></i>
                <p class="textFilter-match">lnil-highlight</p>
                <em>\ece4</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-image-crop"></i>
                <p class="textFilter-match">lnil-image-crop</p>
                <em>\ece5</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-layers-alt-"></i>
                <p class="textFilter-match">lnil-layers-alt-</p>
                <em>\ece6</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-layers-alt-1"></i>
                <p class="textFilter-match">lnil-layers-alt-1</p>
                <em>\ece7</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-layers"></i>
                <p class="textFilter-match">lnil-layers</p>
                <em>\ece8</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-layout-alt-1"></i>
                <p class="textFilter-match">lnil-layout-alt-1</p>
                <em>\ece9</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-layout-alt-2"></i>
                <p class="textFilter-match">lnil-layout-alt-2</p>
                <em>\ecea</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-layout-alt"></i>
                <p class="textFilter-match">lnil-layout-alt</p>
                <em>\eceb</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-layout"></i>
                <p class="textFilter-match">lnil-layout</p>
                <em>\ecec</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-magic-wand"></i>
                <p class="textFilter-match">lnil-magic-wand</p>
                <em>\eced</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-margin"></i>
                <p class="textFilter-match">lnil-margin</p>
                <em>\ecee</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-move"></i>
                <p class="textFilter-match">lnil-move</p>
                <em>\ecef</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-pallet"></i>
                <p class="textFilter-match">lnil-pallet</p>
                <em>\ecf0</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-rotate"></i>
                <p class="textFilter-match">lnil-rotate</p>
                <em>\ecf1</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-scaling"></i>
                <p class="textFilter-match">lnil-scaling</p>
                <em>\ecf2</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-select"></i>
                <p class="textFilter-match">lnil-select</p>
                <em>\ecf3</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-size"></i>
                <p class="textFilter-match">lnil-size</p>
                <em>\ecf4</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-slice"></i>
                <p class="textFilter-match">lnil-slice</p>
                <em>\ecf5</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-transform"></i>
                <p class="textFilter-match">lnil-transform</p>
                <em>\ecf6</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-ux"></i>
                <p class="textFilter-match">lnil-ux</p>
                <em>\ecf7</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-vector-alt"></i>
                <p class="textFilter-match">lnil-vector-alt</p>
                <em>\ecf8</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-vector-pen"></i>
                <p class="textFilter-match">lnil-vector-pen</p>
                <em>\ecf9</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-vector"></i>
                <p class="textFilter-match">lnil-vector</p>
                <em>\ecfa</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-crop"></i>
                <p class="textFilter-match">lnil-crop</p>
                <em>\ecfb</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-color-palette"></i>
                <p class="textFilter-match">lnil-color-palette</p>
                <em>\ecfc</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-crop-alt"></i>
                <p class="textFilter-match">lnil-crop-alt</p>
                <em>\ecfd</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-boundary"></i>
                <p class="textFilter-match">lnil-boundary</p>
                <em>\ecfe</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-bricks-alt"></i>
                <p class="textFilter-match">lnil-bricks-alt</p>
                <em>\ecff</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-construction-hammer"></i>
                <p class="textFilter-match">lnil-construction-hammer</p>
                <em>\ed00</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-construction-rular"></i>
                <p class="textFilter-match">lnil-construction-rular</p>
                <em>\ed01</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-construction"></i>
                <p class="textFilter-match">lnil-construction</p>
                <em>\ed02</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-door-alt"></i>
                <p class="textFilter-match">lnil-door-alt</p>
                <em>\ed03</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-door"></i>
                <p class="textFilter-match">lnil-door</p>
                <em>\ed04</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-drill"></i>
                <p class="textFilter-match">lnil-drill</p>
                <em>\ed05</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-fence"></i>
                <p class="textFilter-match">lnil-fence</p>
                <em>\ed06</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-hammer-alt"></i>
                <p class="textFilter-match">lnil-hammer-alt</p>
                <em>\ed07</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-hammer"></i>
                <p class="textFilter-match">lnil-hammer</p>
                <em>\ed08</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-helmet-alt"></i>
                <p class="textFilter-match">lnil-helmet-alt</p>
                <em>\ed09</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-helmet"></i>
                <p class="textFilter-match">lnil-helmet</p>
                <em>\ed0a</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-hook"></i>
                <p class="textFilter-match">lnil-hook</p>
                <em>\ed0b</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-house-alt-1"></i>
                <p class="textFilter-match">lnil-house-alt-1</p>
                <em>\ed0c</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-house-alt"></i>
                <p class="textFilter-match">lnil-house-alt</p>
                <em>\ed0d</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-house-heart"></i>
                <p class="textFilter-match">lnil-house-heart</p>
                <em>\ed0e</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-house-plan"></i>
                <p class="textFilter-match">lnil-house-plan</p>
                <em>\ed0f</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-house"></i>
                <p class="textFilter-match">lnil-house</p>
                <em>\ed10</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-measuring-tape"></i>
                <p class="textFilter-match">lnil-measuring-tape</p>
                <em>\ed11</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-paint-bucket"></i>
                <p class="textFilter-match">lnil-paint-bucket</p>
                <em>\ed12</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-paint-roller-alt-1"></i>
                <p class="textFilter-match">lnil-paint-roller-alt-1</p>
                <em>\ed13</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-paint-roller-alt"></i>
                <p class="textFilter-match">lnil-paint-roller-alt</p>
                <em>\ed14</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-paint-roller"></i>
                <p class="textFilter-match">lnil-paint-roller</p>
                <em>\ed15</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-pipe"></i>
                <p class="textFilter-match">lnil-pipe</p>
                <em>\ed16</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-ruler-alt"></i>
                <p class="textFilter-match">lnil-ruler-alt</p>
                <em>\ed17</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-ruler-pencil"></i>
                <p class="textFilter-match">lnil-ruler-pencil</p>
                <em>\ed18</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-ruler"></i>
                <p class="textFilter-match">lnil-ruler</p>
                <em>\ed19</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-saw-alt"></i>
                <p class="textFilter-match">lnil-saw-alt</p>
                <em>\ed1a</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-saw"></i>
                <p class="textFilter-match">lnil-saw</p>
                <em>\ed1b</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-screw"></i>
                <p class="textFilter-match">lnil-screw</p>
                <em>\ed1c</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-screwdriver"></i>
                <p class="textFilter-match">lnil-screwdriver</p>
                <em>\ed1d</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-shovel"></i>
                <p class="textFilter-match">lnil-shovel</p>
                <em>\ed1e</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-toolbox"></i>
                <p class="textFilter-match">lnil-toolbox</p>
                <em>\ed1f</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-triangle-ruler-1"></i>
                <p class="textFilter-match">lnil-triangle-ruler-1</p>
                <em>\ed20</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-triangle-ruler"></i>
                <p class="textFilter-match">lnil-triangle-ruler</p>
                <em>\ed21</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-trowel-alt"></i>
                <p class="textFilter-match">lnil-trowel-alt</p>
                <em>\ed22</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-trowel"></i>
                <p class="textFilter-match">lnil-trowel</p>
                <em>\ed23</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-wheelbarrow"></i>
                <p class="textFilter-match">lnil-wheelbarrow</p>
                <em>\ed24</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-wrench"></i>
                <p class="textFilter-match">lnil-wrench</p>
                <em>\ed25</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-cone"></i>
                <p class="textFilter-match">lnil-cone</p>
                <em>\ed26</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-bricks"></i>
                <p class="textFilter-match">lnil-bricks</p>
                <em>\ed27</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-bulldozer"></i>
                <p class="textFilter-match">lnil-bulldozer</p>
                <em>\ed28</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-anchor"></i>
                <p class="textFilter-match">lnil-anchor</p>
                <em>\ed29</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-bi-cycle"></i>
                <p class="textFilter-match">lnil-bi-cycle</p>
                <em>\ed2a</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-bubble"></i>
                <p class="textFilter-match">lnil-bubble</p>
                <em>\ed2b</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-boarding-pass"></i>
                <p class="textFilter-match">lnil-boarding-pass</p>
                <em>\ed2c</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-bridge"></i>
                <p class="textFilter-match">lnil-bridge</p>
                <em>\ed2d</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-car-alt"></i>
                <p class="textFilter-match">lnil-car-alt</p>
                <em>\ed2e</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-car"></i>
                <p class="textFilter-match">lnil-car</p>
                <em>\ed2f</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-caravan"></i>
                <p class="textFilter-match">lnil-caravan</p>
                <em>\ed30</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-chat-add"></i>
                <p class="textFilter-match">lnil-chat-add</p>
                <em>\ed31</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-chat-minus"></i>
                <p class="textFilter-match">lnil-chat-minus</p>
                <em>\ed32</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-comments-alt"></i>
                <p class="textFilter-match">lnil-comments-alt</p>
                <em>\ed33</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-comments-reply"></i>
                <p class="textFilter-match">lnil-comments-reply</p>
                <em>\ed34</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-comments"></i>
                <p class="textFilter-match">lnil-comments</p>
                <em>\ed35</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-envelope-alt"></i>
                <p class="textFilter-match">lnil-envelope-alt</p>
                <em>\ed36</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-envelope"></i>
                <p class="textFilter-match">lnil-envelope</p>
                <em>\ed37</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-helicopter"></i>
                <p class="textFilter-match">lnil-helicopter</p>
                <em>\ed38</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-inbox"></i>
                <p class="textFilter-match">lnil-inbox</p>
                <em>\ed39</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-megaphone"></i>
                <p class="textFilter-match">lnil-megaphone</p>
                <em>\ed3a</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-message-attachement"></i>
                <p class="textFilter-match">lnil-message-attachement</p>
                <em>\ed3b</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-message-block"></i>
                <p class="textFilter-match">lnil-message-block</p>
                <em>\ed3c</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-message-check"></i>
                <p class="textFilter-match">lnil-message-check</p>
                <em>\ed3d</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-message-cross"></i>
                <p class="textFilter-match">lnil-message-cross</p>
                <em>\ed3e</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-message-desktop"></i>
                <p class="textFilter-match">lnil-message-desktop</p>
                <em>\ed3f</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-message-edit"></i>
                <p class="textFilter-match">lnil-message-edit</p>
                <em>\ed40</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-message-forward"></i>
                <p class="textFilter-match">lnil-message-forward</p>
                <em>\ed41</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-message-incoming"></i>
                <p class="textFilter-match">lnil-message-incoming</p>
                <em>\ed42</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-message-laptop"></i>
                <p class="textFilter-match">lnil-message-laptop</p>
                <em>\ed43</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-message-lock"></i>
                <p class="textFilter-match">lnil-message-lock</p>
                <em>\ed44</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-message-love"></i>
                <p class="textFilter-match">lnil-message-love</p>
                <em>\ed45</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-message-minus"></i>
                <p class="textFilter-match">lnil-message-minus</p>
                <em>\ed46</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-message-outgoing"></i>
                <p class="textFilter-match">lnil-message-outgoing</p>
                <em>\ed47</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-message-plus"></i>
                <p class="textFilter-match">lnil-message-plus</p>
                <em>\ed48</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-message-reply"></i>
                <p class="textFilter-match">lnil-message-reply</p>
                <em>\ed49</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-message-search"></i>
                <p class="textFilter-match">lnil-message-search</p>
                <em>\ed4a</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-message-share"></i>
                <p class="textFilter-match">lnil-message-share</p>
                <em>\ed4b</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-mobile-chat"></i>
                <p class="textFilter-match">lnil-mobile-chat</p>
                <em>\ed4c</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-page"></i>
                <p class="textFilter-match">lnil-page</p>
                <em>\ed4d</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-phone-block"></i>
                <p class="textFilter-match">lnil-phone-block</p>
                <em>\ed4e</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-phone-caling"></i>
                <p class="textFilter-match">lnil-phone-caling</p>
                <em>\ed4f</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-phone-conference"></i>
                <p class="textFilter-match">lnil-phone-conference</p>
                <em>\ed50</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-phone-cut"></i>
                <p class="textFilter-match">lnil-phone-cut</p>
                <em>\ed51</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-phone-forward"></i>
                <p class="textFilter-match">lnil-phone-forward</p>
                <em>\ed52</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-phone-incoming"></i>
                <p class="textFilter-match">lnil-phone-incoming</p>
                <em>\ed53</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-phone-misscall"></i>
                <p class="textFilter-match">lnil-phone-misscall</p>
                <em>\ed54</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-phone-outgoing"></i>
                <p class="textFilter-match">lnil-phone-outgoing</p>
                <em>\ed55</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-phone-pause"></i>
                <p class="textFilter-match">lnil-phone-pause</p>
                <em>\ed56</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-phone-redial"></i>
                <p class="textFilter-match">lnil-phone-redial</p>
                <em>\ed57</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-phone-ring"></i>
                <p class="textFilter-match">lnil-phone-ring</p>
                <em>\ed58</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-phone-set"></i>
                <p class="textFilter-match">lnil-phone-set</p>
                <em>\ed59</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-phone"></i>
                <p class="textFilter-match">lnil-phone</p>
                <em>\ed5a</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-plane-alt"></i>
                <p class="textFilter-match">lnil-plane-alt</p>
                <em>\ed5b</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-plane"></i>
                <p class="textFilter-match">lnil-plane</p>
                <em>\ed5c</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-popup"></i>
                <p class="textFilter-match">lnil-popup</p>
                <em>\ed5d</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-postcard-alt"></i>
                <p class="textFilter-match">lnil-postcard-alt</p>
                <em>\ed5e</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-postcard"></i>
                <p class="textFilter-match">lnil-postcard</p>
                <em>\ed5f</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-reply"></i>
                <p class="textFilter-match">lnil-reply</p>
                <em>\ed60</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-road"></i>
                <p class="textFilter-match">lnil-road</p>
                <em>\ed61</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-scooter"></i>
                <p class="textFilter-match">lnil-scooter</p>
                <em>\ed62</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-ship"></i>
                <p class="textFilter-match">lnil-ship</p>
                <em>\ed63</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-support"></i>
                <p class="textFilter-match">lnil-support</p>
                <em>\ed64</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-target-mail"></i>
                <p class="textFilter-match">lnil-target-mail</p>
                <em>\ed65</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-taxi"></i>
                <p class="textFilter-match">lnil-taxi</p>
                <em>\ed66</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-train-alt"></i>
                <p class="textFilter-match">lnil-train-alt</p>
                <em>\ed67</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-train"></i>
                <p class="textFilter-match">lnil-train</p>
                <em>\ed68</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-bullhorn"></i>
                <p class="textFilter-match">lnil-bullhorn</p>
                <em>\ed69</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-bus"></i>
                <p class="textFilter-match">lnil-bus</p>
                <em>\ed6a</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-boarding-pass-alt"></i>
                <p class="textFilter-match">lnil-boarding-pass-alt</p>
                <em>\ed6b</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-achievement"></i>
                <p class="textFilter-match">lnil-achievement</p>
                <em>\ed6c</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-agenda"></i>
                <p class="textFilter-match">lnil-agenda</p>
                <em>\ed6d</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-briefcase-alt"></i>
                <p class="textFilter-match">lnil-briefcase-alt</p>
                <em>\ed6e</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-apartment-alt"></i>
                <p class="textFilter-match">lnil-apartment-alt</p>
                <em>\ed6f</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-apartment"></i>
                <p class="textFilter-match">lnil-apartment</p>
                <em>\ed70</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-analytics-alt-1"></i>
                <p class="textFilter-match">lnil-analytics-alt-1</p>
                <em>\ed71</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-briefcase"></i>
                <p class="textFilter-match">lnil-briefcase</p>
                <em>\ed72</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-cart-alt"></i>
                <p class="textFilter-match">lnil-cart-alt</p>
                <em>\ed73</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-cart-down"></i>
                <p class="textFilter-match">lnil-cart-down</p>
                <em>\ed74</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-cart-empty"></i>
                <p class="textFilter-match">lnil-cart-empty</p>
                <em>\ed75</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-cart-full"></i>
                <p class="textFilter-match">lnil-cart-full</p>
                <em>\ed76</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-delivery"></i>
                <p class="textFilter-match">lnil-delivery</p>
                <em>\ed77</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-desk"></i>
                <p class="textFilter-match">lnil-desk</p>
                <em>\ed78</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-customer"></i>
                <p class="textFilter-match">lnil-customer</p>
                <em>\ed79</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-graph"></i>
                <p class="textFilter-match">lnil-graph</p>
                <em>\ed7a</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-grow"></i>
                <p class="textFilter-match">lnil-grow</p>
                <em>\ed7b</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-hierchy-alt"></i>
                <p class="textFilter-match">lnil-hierchy-alt</p>
                <em>\ed7c</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-global"></i>
                <p class="textFilter-match">lnil-global</p>
                <em>\ed7d</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-hierchy"></i>
                <p class="textFilter-match">lnil-hierchy</p>
                <em>\ed7e</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-investment"></i>
                <p class="textFilter-match">lnil-investment</p>
                <em>\ed7f</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-notepad"></i>
                <p class="textFilter-match">lnil-notepad</p>
                <em>\ed80</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-consulting"></i>
                <p class="textFilter-match">lnil-consulting</p>
                <em>\ed81</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-office-plan"></i>
                <p class="textFilter-match">lnil-office-plan</p>
                <em>\ed82</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-paperclip"></i>
                <p class="textFilter-match">lnil-paperclip</p>
                <em>\ed83</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-cart"></i>
                <p class="textFilter-match">lnil-cart</p>
                <em>\ed84</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-offer"></i>
                <p class="textFilter-match">lnil-offer</p>
                <em>\ed85</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-pie-chart-alt"></i>
                <p class="textFilter-match">lnil-pie-chart-alt</p>
                <em>\ed86</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-pie-chart-dollar"></i>
                <p class="textFilter-match">lnil-pie-chart-dollar</p>
                <em>\ed87</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-pie-chart"></i>
                <p class="textFilter-match">lnil-pie-chart</p>
                <em>\ed88</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-pie-report"></i>
                <p class="textFilter-match">lnil-pie-report</p>
                <em>\ed89</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-handshake"></i>
                <p class="textFilter-match">lnil-handshake</p>
                <em>\ed8a</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-pin-alt"></i>
                <p class="textFilter-match">lnil-pin-alt</p>
                <em>\ed8b</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-pin"></i>
                <p class="textFilter-match">lnil-pin</p>
                <em>\ed8c</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-quotation"></i>
                <p class="textFilter-match">lnil-quotation</p>
                <em>\ed8d</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-revenue"></i>
                <p class="textFilter-match">lnil-revenue</p>
                <em>\ed8e</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-stamp"></i>
                <p class="textFilter-match">lnil-stamp</p>
                <em>\ed8f</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-tablet-alt"></i>
                <p class="textFilter-match">lnil-tablet-alt</p>
                <em>\ed90</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-tag"></i>
                <p class="textFilter-match">lnil-tag</p>
                <em>\ed91</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-target-achievement"></i>
                <p class="textFilter-match">lnil-target-achievement</p>
                <em>\ed92</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-table"></i>
                <p class="textFilter-match">lnil-table</p>
                <em>\ed93</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-target-alt"></i>
                <p class="textFilter-match">lnil-target-alt</p>
                <em>\ed94</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-target-alt-1"></i>
                <p class="textFilter-match">lnil-target-alt-1</p>
                <em>\ed95</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-swatches"></i>
                <p class="textFilter-match">lnil-swatches</p>
                <em>\ed96</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-stats-down"></i>
                <p class="textFilter-match">lnil-stats-down</p>
                <em>\ed97</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-stats-up"></i>
                <p class="textFilter-match">lnil-stats-up</p>
                <em>\ed98</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-target-revenue"></i>
                <p class="textFilter-match">lnil-target-revenue</p>
                <em>\ed99</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-tie"></i>
                <p class="textFilter-match">lnil-tie</p>
                <em>\ed9a</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-target"></i>
                <p class="textFilter-match">lnil-target</p>
                <em>\ed9b</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-licencse"></i>
                <p class="textFilter-match">lnil-licencse</p>
                <em>\ed9c</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-target-remove"></i>
                <p class="textFilter-match">lnil-target-remove</p>
                <em>\ed9d</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-sales-report"></i>
                <p class="textFilter-match">lnil-sales-report</p>
                <em>\ed9e</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-Instagram"></i>
                <p class="textFilter-match">lnil-Instagram</p>
                <em>\ed9f</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-amazon"></i>
                <p class="textFilter-match">lnil-amazon</p>
                <em>\eda0</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-amex"></i>
                <p class="textFilter-match">lnil-amex</p>
                <em>\eda1</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-bitbucket"></i>
                <p class="textFilter-match">lnil-bitbucket</p>
                <em>\eda2</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-bitcoin"></i>
                <p class="textFilter-match">lnil-bitcoin</p>
                <em>\eda3</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-chrome"></i>
                <p class="textFilter-match">lnil-chrome</p>
                <em>\eda4</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-css3"></i>
                <p class="textFilter-match">lnil-css3</p>
                <em>\eda5</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-dribbble"></i>
                <p class="textFilter-match">lnil-dribbble</p>
                <em>\eda6</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-dropbox"></i>
                <p class="textFilter-match">lnil-dropbox</p>
                <em>\eda7</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-drupal"></i>
                <p class="textFilter-match">lnil-drupal</p>
                <em>\eda8</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-facebook"></i>
                <p class="textFilter-match">lnil-facebook</p>
                <em>\eda9</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-firefox"></i>
                <p class="textFilter-match">lnil-firefox</p>
                <em>\edaa</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-github"></i>
                <p class="textFilter-match">lnil-github</p>
                <em>\edab</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-html5"></i>
                <p class="textFilter-match">lnil-html5</p>
                <em>\edac</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-mastercard"></i>
                <p class="textFilter-match">lnil-mastercard</p>
                <em>\edad</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-paypal"></i>
                <p class="textFilter-match">lnil-paypal</p>
                <em>\edae</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-play-store"></i>
                <p class="textFilter-match">lnil-play-store</p>
                <em>\edaf</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-slack"></i>
                <p class="textFilter-match">lnil-slack</p>
                <em>\edb0</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-quora"></i>
                <p class="textFilter-match">lnil-quora</p>
                <em>\edb1</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-soundcloud"></i>
                <p class="textFilter-match">lnil-soundcloud</p>
                <em>\edb2</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-spotify"></i>
                <p class="textFilter-match">lnil-spotify</p>
                <em>\edb3</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-twitter"></i>
                <p class="textFilter-match">lnil-twitter</p>
                <em>\edb4</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-visa"></i>
                <p class="textFilter-match">lnil-visa</p>
                <em>\edb5</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-android"></i>
                <p class="textFilter-match">lnil-android</p>
                <em>\edb6</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-apple"></i>
                <p class="textFilter-match">lnil-apple</p>
                <em>\edb7</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnil lnil-behance"></i>
                <p class="textFilter-match">lnil-behance</p>
                <em>\edb8</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <!-- list of icons here with the proper class-->
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
