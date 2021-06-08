<script setup lang="ts">
import { useHead } from '@vueuse/head'

import { pageTitle } from '/@src/state/sidebarLayoutState'

pageTitle.value = 'Line Icons Regular Icons'
useHead({
  title: 'Line Icons Regular Icons - Elements - Vuero',
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
          label: 'Line Icons Regular',
          to: { name: 'elements-icons-line-icons-regular' },
        },
      ]"
    />

    <div class="columns">
      <div class="column is-12">
        <!--Line Icons-->
        <IconsLineRegularDocumentation />

        <div class="demo-card mt-4">
          <div class="card-inner">
            <ul class="demo-icon-list">
              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-air-flow"></i>
                <p class="textFilter-match">lnil-air-flow</p>
                <em>\ea02</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-air"></i>
                <p class="textFilter-match">lnil-air</p>
                <em>\ea03</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-cloud-moon"></i>
                <p class="textFilter-match">lnil-cloud-moon</p>
                <em>\ea04</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-cloud-sun"></i>
                <p class="textFilter-match">lnil-cloud-sun</p>
                <em>\ea05</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-cloud-alt"></i>
                <p class="textFilter-match">lnil-cloud-alt</p>
                <em>\ea06</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-cloudy-sun"></i>
                <p class="textFilter-match">lnil-cloudy-sun</p>
                <em>\ea07</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-cloud-alt-2"></i>
                <p class="textFilter-match">lnil-cloud-alt-2</p>
                <em>\ea08</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-drop"></i>
                <p class="textFilter-match">lnil-drop</p>
                <em>\ea09</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-farenheit"></i>
                <p class="textFilter-match">lnil-farenheit</p>
                <em>\ea0a</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-moon-star"></i>
                <p class="textFilter-match">lnil-moon-star</p>
                <em>\ea0b</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-cloud"></i>
                <p class="textFilter-match">lnil-cloud</p>
                <em>\ea0c</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-night-thunder"></i>
                <p class="textFilter-match">lnil-night-thunder</p>
                <em>\ea0d</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-drop-alt"></i>
                <p class="textFilter-match">lnil-drop-alt</p>
                <em>\ea0e</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-night"></i>
                <p class="textFilter-match">lnil-night</p>
                <em>\ea0f</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-rain"></i>
                <p class="textFilter-match">lnil-rain</p>
                <em>\ea10</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-snowfall"></i>
                <p class="textFilter-match">lnil-snowfall</p>
                <em>\ea11</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-sun-rain"></i>
                <p class="textFilter-match">lnil-sun-rain</p>
                <em>\ea12</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-sun"></i>
                <p class="textFilter-match">lnil-sun</p>
                <em>\ea13</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-thunder-alt"></i>
                <p class="textFilter-match">lnil-thunder-alt</p>
                <em>\ea14</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-thunder"></i>
                <p class="textFilter-match">lnil-thunder</p>
                <em>\ea15</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-umbrella-alt"></i>
                <p class="textFilter-match">lnil-umbrella-alt</p>
                <em>\ea16</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-umbrella-rain-alt"></i>
                <p class="textFilter-match">lnil-umbrella-rain-alt</p>
                <em>\ea17</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-umbrella-rain"></i>
                <p class="textFilter-match">lnil-umbrella-rain</p>
                <em>\ea18</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-umbrella"></i>
                <p class="textFilter-match">lnil-umbrella</p>
                <em>\ea19</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-water-drops"></i>
                <p class="textFilter-match">lnil-water-drops</p>
                <em>\ea1a</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-wind-cloud"></i>
                <p class="textFilter-match">lnil-wind-cloud</p>
                <em>\ea1b</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-wind-sun"></i>
                <p class="textFilter-match">lnil-wind-sun</p>
                <em>\ea1c</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-cloud-alt-1"></i>
                <p class="textFilter-match">lnil-cloud-alt-1</p>
                <em>\ea1d</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-night-wind"></i>
                <p class="textFilter-match">lnil-night-wind</p>
                <em>\ea1e</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-moon"></i>
                <p class="textFilter-match">lnil-moon</p>
                <em>\ea1f</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-beach-chair"></i>
                <p class="textFilter-match">lnil-beach-chair</p>
                <em>\ea20</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-beach"></i>
                <p class="textFilter-match">lnil-beach</p>
                <em>\ea21</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-hot-air-baloon"></i>
                <p class="textFilter-match">lnil-hot-air-baloon</p>
                <em>\ea22</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-cable-car"></i>
                <p class="textFilter-match">lnil-cable-car</p>
                <em>\ea23</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-suitcase-alt"></i>
                <p class="textFilter-match">lnil-suitcase-alt</p>
                <em>\ea24</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-suitcase"></i>
                <p class="textFilter-match">lnil-suitcase</p>
                <em>\ea25</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-surf-board"></i>
                <p class="textFilter-match">lnil-surf-board</p>
                <em>\ea26</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-tent-alt"></i>
                <p class="textFilter-match">lnil-tent-alt</p>
                <em>\ea27</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-tent"></i>
                <p class="textFilter-match">lnil-tent</p>
                <em>\ea28</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-travel"></i>
                <p class="textFilter-match">lnil-travel</p>
                <em>\ea29</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-pyramids"></i>
                <p class="textFilter-match">lnil-pyramids</p>
                <em>\ea2a</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-flight-search"></i>
                <p class="textFilter-match">lnil-flight-search</p>
                <em>\ea2b</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-beachball"></i>
                <p class="textFilter-match">lnil-beachball</p>
                <em>\ea2c</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-3d"></i>
                <p class="textFilter-match">lnil-3d</p>
                <em>\ea2d</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-Mobile"></i>
                <p class="textFilter-match">lnil-Mobile</p>
                <em>\ea2e</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-alarm-2"></i>
                <p class="textFilter-match">lnil-alarm-2</p>
                <em>\ea2f</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-alarm-3"></i>
                <p class="textFilter-match">lnil-alarm-3</p>
                <em>\ea30</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-alarm-4"></i>
                <p class="textFilter-match">lnil-alarm-4</p>
                <em>\ea31</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-alarm-clock-alt"></i>
                <p class="textFilter-match">lnil-alarm-clock-alt</p>
                <em>\ea32</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-add-files"></i>
                <p class="textFilter-match">lnil-add-files</p>
                <em>\ea33</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-ai"></i>
                <p class="textFilter-match">lnil-ai</p>
                <em>\ea34</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-alarm-clock"></i>
                <p class="textFilter-match">lnil-alarm-clock</p>
                <em>\ea35</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-archive"></i>
                <p class="textFilter-match">lnil-archive</p>
                <em>\ea36</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-backspace"></i>
                <p class="textFilter-match">lnil-backspace</p>
                <em>\ea37</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-ban"></i>
                <p class="textFilter-match">lnil-ban</p>
                <em>\ea38</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-battery"></i>
                <p class="textFilter-match">lnil-battery</p>
                <em>\ea39</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-block-user"></i>
                <p class="textFilter-match">lnil-block-user</p>
                <em>\ea3a</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-bluetooth"></i>
                <p class="textFilter-match">lnil-bluetooth</p>
                <em>\ea3b</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-bookmark-alt"></i>
                <p class="textFilter-match">lnil-bookmark-alt</p>
                <em>\ea3c</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-bookmark"></i>
                <p class="textFilter-match">lnil-bookmark</p>
                <em>\ea3d</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-brightness"></i>
                <p class="textFilter-match">lnil-brightness</p>
                <em>\ea3e</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-bulb-alt"></i>
                <p class="textFilter-match">lnil-bulb-alt</p>
                <em>\ea3f</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-bulb"></i>
                <p class="textFilter-match">lnil-bulb</p>
                <em>\ea40</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-calendar"></i>
                <p class="textFilter-match">lnil-calendar</p>
                <em>\ea41</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-calender-alt-1"></i>
                <p class="textFilter-match">lnil-calender-alt-1</p>
                <em>\ea42</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-calender-alt-2"></i>
                <p class="textFilter-match">lnil-calender-alt-2</p>
                <em>\ea43</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-calender-alt-3"></i>
                <p class="textFilter-match">lnil-calender-alt-3</p>
                <em>\ea44</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-calender-alt-4"></i>
                <p class="textFilter-match">lnil-calender-alt-4</p>
                <em>\ea45</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-calender-alt"></i>
                <p class="textFilter-match">lnil-calender-alt</p>
                <em>\ea46</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-camera-alt-1"></i>
                <p class="textFilter-match">lnil-camera-alt-1</p>
                <em>\ea47</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-camera-alt"></i>
                <p class="textFilter-match">lnil-camera-alt</p>
                <em>\ea48</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-camera"></i>
                <p class="textFilter-match">lnil-camera</p>
                <em>\ea49</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-change"></i>
                <p class="textFilter-match">lnil-change</p>
                <em>\ea4a</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-charging"></i>
                <p class="textFilter-match">lnil-charging</p>
                <em>\ea4b</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-cloud-check-alt"></i>
                <p class="textFilter-match">lnil-cloud-check-alt</p>
                <em>\ea4c</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-cloud-check"></i>
                <p class="textFilter-match">lnil-cloud-check</p>
                <em>\ea4d</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-cloud-computing-alt"></i>
                <p class="textFilter-match">lnil-cloud-computing-alt</p>
                <em>\ea4e</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-cloud-computing"></i>
                <p class="textFilter-match">lnil-cloud-computing</p>
                <em>\ea4f</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-Website"></i>
                <p class="textFilter-match">lnil-Website</p>
                <em>\ea50</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-alarm"></i>
                <p class="textFilter-match">lnil-alarm</p>
                <em>\ea51</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-cloud-network-alt"></i>
                <p class="textFilter-match">lnil-cloud-network-alt</p>
                <em>\ea52</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-cloud-network"></i>
                <p class="textFilter-match">lnil-cloud-network</p>
                <em>\ea53</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-cloud-search-1"></i>
                <p class="textFilter-match">lnil-cloud-search-1</p>
                <em>\ea54</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-cloud-search-2"></i>
                <p class="textFilter-match">lnil-cloud-search-2</p>
                <em>\ea55</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-cloud-search"></i>
                <p class="textFilter-match">lnil-cloud-search</p>
                <em>\ea56</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-cloud-sync-alt"></i>
                <p class="textFilter-match">lnil-cloud-sync-alt</p>
                <em>\ea57</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-cloud-sync"></i>
                <p class="textFilter-match">lnil-cloud-sync</p>
                <em>\ea58</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-cloud-download-alt"></i>
                <p class="textFilter-match">lnil-cloud-download-alt</p>
                <em>\ea59</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-cloud-download"></i>
                <p class="textFilter-match">lnil-cloud-download</p>
                <em>\ea5a</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-appointment"></i>
                <p class="textFilter-match">lnil-appointment</p>
                <em>\ea5b</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-cloud-upload-alt"></i>
                <p class="textFilter-match">lnil-cloud-upload-alt</p>
                <em>\ea5c</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-cloud-upload"></i>
                <p class="textFilter-match">lnil-cloud-upload</p>
                <em>\ea5d</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-code-alt"></i>
                <p class="textFilter-match">lnil-code-alt</p>
                <em>\ea5e</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-code"></i>
                <p class="textFilter-match">lnil-code</p>
                <em>\ea5f</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-cog"></i>
                <p class="textFilter-match">lnil-cog</p>
                <em>\ea60</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-cogs"></i>
                <p class="textFilter-match">lnil-cogs</p>
                <em>\ea61</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-control-panel"></i>
                <p class="textFilter-match">lnil-control-panel</p>
                <em>\ea62</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-copy"></i>
                <p class="textFilter-match">lnil-copy</p>
                <em>\ea63</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-cut"></i>
                <p class="textFilter-match">lnil-cut</p>
                <em>\ea64</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-dashboard"></i>
                <p class="textFilter-match">lnil-dashboard</p>
                <em>\ea65</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-database"></i>
                <p class="textFilter-match">lnil-database</p>
                <em>\ea66</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-display-alt"></i>
                <p class="textFilter-match">lnil-display-alt</p>
                <em>\ea67</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-display"></i>
                <p class="textFilter-match">lnil-display</p>
                <em>\ea68</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-domain"></i>
                <p class="textFilter-match">lnil-domain</p>
                <em>\ea69</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-download"></i>
                <p class="textFilter-match">lnil-download</p>
                <em>\ea6a</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-empty-battery"></i>
                <p class="textFilter-match">lnil-empty-battery</p>
                <em>\ea6b</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-empty-file"></i>
                <p class="textFilter-match">lnil-empty-file</p>
                <em>\ea6c</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-file-download"></i>
                <p class="textFilter-match">lnil-file-download</p>
                <em>\ea6d</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-file-lock"></i>
                <p class="textFilter-match">lnil-file-lock</p>
                <em>\ea6e</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-file-name"></i>
                <p class="textFilter-match">lnil-file-name</p>
                <em>\ea6f</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-file-protection"></i>
                <p class="textFilter-match">lnil-file-protection</p>
                <em>\ea70</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-file-upload"></i>
                <p class="textFilter-match">lnil-file-upload</p>
                <em>\ea71</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-files-alt"></i>
                <p class="textFilter-match">lnil-files-alt</p>
                <em>\ea72</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-files"></i>
                <p class="textFilter-match">lnil-files</p>
                <em>\ea73</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-folder-alt-1"></i>
                <p class="textFilter-match">lnil-folder-alt-1</p>
                <em>\ea74</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-folder-alt"></i>
                <p class="textFilter-match">lnil-folder-alt</p>
                <em>\ea75</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-folder"></i>
                <p class="textFilter-match">lnil-folder</p>
                <em>\ea76</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-full-battery"></i>
                <p class="textFilter-match">lnil-full-battery</p>
                <em>\ea77</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-game"></i>
                <p class="textFilter-match">lnil-game</p>
                <em>\ea78</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-half-battery"></i>
                <p class="textFilter-match">lnil-half-battery</p>
                <em>\ea79</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-harddrive"></i>
                <p class="textFilter-match">lnil-harddrive</p>
                <em>\ea7a</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-headphone-alt"></i>
                <p class="textFilter-match">lnil-headphone-alt</p>
                <em>\ea7b</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-headphone"></i>
                <p class="textFilter-match">lnil-headphone</p>
                <em>\ea7c</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-laptop-alt-switch"></i>
                <p class="textFilter-match">lnil-laptop-alt-switch</p>
                <em>\ea7d</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-laptop-alt"></i>
                <p class="textFilter-match">lnil-laptop-alt</p>
                <em>\ea7e</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-laptop-phone"></i>
                <p class="textFilter-match">lnil-laptop-phone</p>
                <em>\ea7f</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-laptop"></i>
                <p class="textFilter-match">lnil-laptop</p>
                <em>\ea80</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-link-alt-1"></i>
                <p class="textFilter-match">lnil-link-alt-1</p>
                <em>\ea81</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-link-alt"></i>
                <p class="textFilter-match">lnil-link-alt</p>
                <em>\ea82</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-link"></i>
                <p class="textFilter-match">lnil-link</p>
                <em>\ea83</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-low-battery"></i>
                <p class="textFilter-match">lnil-low-battery</p>
                <em>\ea84</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-magnet"></i>
                <p class="textFilter-match">lnil-magnet</p>
                <em>\ea85</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-magnifier"></i>
                <p class="textFilter-match">lnil-magnifier</p>
                <em>\ea86</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-map-marker"></i>
                <p class="textFilter-match">lnil-map-marker</p>
                <em>\ea87</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-map"></i>
                <p class="textFilter-match">lnil-map</p>
                <em>\ea88</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-menu-alt-1"></i>
                <p class="textFilter-match">lnil-menu-alt-1</p>
                <em>\ea89</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-menu-alt-2"></i>
                <p class="textFilter-match">lnil-menu-alt-2</p>
                <em>\ea8a</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-menu-alt-3"></i>
                <p class="textFilter-match">lnil-menu-alt-3</p>
                <em>\ea8b</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-menu-alt-4"></i>
                <p class="textFilter-match">lnil-menu-alt-4</p>
                <em>\ea8c</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-menu-alt-5"></i>
                <p class="textFilter-match">lnil-menu-alt-5</p>
                <em>\ea8d</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-menu-alt"></i>
                <p class="textFilter-match">lnil-menu-alt</p>
                <em>\ea8e</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-menu-circle"></i>
                <p class="textFilter-match">lnil-menu-circle</p>
                <em>\ea8f</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-menu"></i>
                <p class="textFilter-match">lnil-menu</p>
                <em>\ea90</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-mic"></i>
                <p class="textFilter-match">lnil-mic</p>
                <em>\ea91</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-microphone-alt-1"></i>
                <p class="textFilter-match">lnil-microphone-alt-1</p>
                <em>\ea92</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-microphone-alt"></i>
                <p class="textFilter-match">lnil-microphone-alt</p>
                <em>\ea93</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-microphone"></i>
                <p class="textFilter-match">lnil-microphone</p>
                <em>\ea94</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-mobile-alt-1"></i>
                <p class="textFilter-match">lnil-mobile-alt-1</p>
                <em>\ea95</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-mobile-alt-2"></i>
                <p class="textFilter-match">lnil-mobile-alt-2</p>
                <em>\ea96</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-mobile-alt-button"></i>
                <p class="textFilter-match">lnil-mobile-alt-button</p>
                <em>\ea97</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-mouse"></i>
                <p class="textFilter-match">lnil-mouse</p>
                <em>\ea98</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-no-charge-battery"></i>
                <p class="textFilter-match">lnil-no-charge-battery</p>
                <em>\ea99</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-package"></i>
                <p class="textFilter-match">lnil-package</p>
                <em>\ea9a</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-plug"></i>
                <p class="textFilter-match">lnil-plug</p>
                <em>\ea9b</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-presentation"></i>
                <p class="textFilter-match">lnil-presentation</p>
                <em>\ea9c</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-printer"></i>
                <p class="textFilter-match">lnil-printer</p>
                <em>\ea9d</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-ps"></i>
                <p class="textFilter-match">lnil-ps</p>
                <em>\ea9e</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-recycle-alt"></i>
                <p class="textFilter-match">lnil-recycle-alt</p>
                <em>\ea9f</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-image"></i>
                <p class="textFilter-match">lnil-image</p>
                <em>\eaa0</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-reload-alt-box"></i>
                <p class="textFilter-match">lnil-reload-alt-box</p>
                <em>\eaa1</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-reload-alt"></i>
                <p class="textFilter-match">lnil-reload-alt</p>
                <em>\eaa2</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-reload"></i>
                <p class="textFilter-match">lnil-reload</p>
                <em>\eaa3</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-recycle"></i>
                <p class="textFilter-match">lnil-recycle</p>
                <em>\eaa4</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-rocket"></i>
                <p class="textFilter-match">lnil-rocket</p>
                <em>\eaa5</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-rss-feed"></i>
                <p class="textFilter-match">lnil-rss-feed</p>
                <em>\eaa6</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-save-alt"></i>
                <p class="textFilter-match">lnil-save-alt</p>
                <em>\eaa7</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-save"></i>
                <p class="textFilter-match">lnil-save</p>
                <em>\eaa8</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-scan"></i>
                <p class="textFilter-match">lnil-scan</p>
                <em>\eaa9</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-scroll-down"></i>
                <p class="textFilter-match">lnil-scroll-down</p>
                <em>\eaaa</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-search-alt"></i>
                <p class="textFilter-match">lnil-search-alt</p>
                <em>\eaab</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-search"></i>
                <p class="textFilter-match">lnil-search</p>
                <em>\eaac</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-share-alt"></i>
                <p class="textFilter-match">lnil-share-alt</p>
                <em>\eaad</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-share"></i>
                <p class="textFilter-match">lnil-share</p>
                <em>\eaae</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-shopping-basket"></i>
                <p class="textFilter-match">lnil-shopping-basket</p>
                <em>\eaaf</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-shortcode"></i>
                <p class="textFilter-match">lnil-shortcode</p>
                <em>\eab0</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-signal"></i>
                <p class="textFilter-match">lnil-signal</p>
                <em>\eab1</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-laptop-alt-keyboard"></i>
                <p class="textFilter-match">lnil-laptop-alt-keyboard</p>
                <em>\eab2</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-star-fill"></i>
                <p class="textFilter-match">lnil-star-fill</p>
                <em>\eab3</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-star-half"></i>
                <p class="textFilter-match">lnil-star-half</p>
                <em>\eab4</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-star"></i>
                <p class="textFilter-match">lnil-star</p>
                <em>\eab5</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-tab"></i>
                <p class="textFilter-match">lnil-tab</p>
                <em>\eab6</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-tap"></i>
                <p class="textFilter-match">lnil-tap</p>
                <em>\eab7</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-thumbnail"></i>
                <p class="textFilter-match">lnil-thumbnail</p>
                <em>\eab8</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-timer"></i>
                <p class="textFilter-match">lnil-timer</p>
                <em>\eab9</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-trash-can-alt-1"></i>
                <p class="textFilter-match">lnil-trash-can-alt-1</p>
                <em>\eaba</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-trash-can-alt"></i>
                <p class="textFilter-match">lnil-trash-can-alt</p>
                <em>\eabb</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-trash-can"></i>
                <p class="textFilter-match">lnil-trash-can</p>
                <em>\eabc</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-trash"></i>
                <p class="textFilter-match">lnil-trash</p>
                <em>\eabd</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-unlink"></i>
                <p class="textFilter-match">lnil-unlink</p>
                <em>\eabe</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-upload"></i>
                <p class="textFilter-match">lnil-upload</p>
                <em>\eabf</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-user-alt-1"></i>
                <p class="textFilter-match">lnil-user-alt-1</p>
                <em>\eac0</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-user-alt-2"></i>
                <p class="textFilter-match">lnil-user-alt-2</p>
                <em>\eac1</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-user-alt"></i>
                <p class="textFilter-match">lnil-user-alt</p>
                <em>\eac2</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-user"></i>
                <p class="textFilter-match">lnil-user</p>
                <em>\eac3</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-users-alt"></i>
                <p class="textFilter-match">lnil-users-alt</p>
                <em>\eac4</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-users"></i>
                <p class="textFilter-match">lnil-users</p>
                <em>\eac5</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-website-alt"></i>
                <p class="textFilter-match">lnil-website-alt</p>
                <em>\eac6</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-zip"></i>
                <p class="textFilter-match">lnil-zip</p>
                <em>\eac7</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-zoom-in"></i>
                <p class="textFilter-match">lnil-zoom-in</p>
                <em>\eac8</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-zoom-out"></i>
                <p class="textFilter-match">lnil-zoom-out</p>
                <em>\eac9</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-star-empty"></i>
                <p class="textFilter-match">lnil-star-empty</p>
                <em>\eaca</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-remove-file"></i>
                <p class="textFilter-match">lnil-remove-file</p>
                <em>\eacb</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-keyboard"></i>
                <p class="textFilter-match">lnil-keyboard</p>
                <em>\eacc</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-hourglass"></i>
                <p class="textFilter-match">lnil-hourglass</p>
                <em>\eacd</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-spinner-1"></i>
                <p class="textFilter-match">lnil-spinner-1</p>
                <em>\eace</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-spinner-10"></i>
                <p class="textFilter-match">lnil-spinner-10</p>
                <em>\eacf</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-spinner-11"></i>
                <p class="textFilter-match">lnil-spinner-11</p>
                <em>\ead0</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-spinner-2"></i>
                <p class="textFilter-match">lnil-spinner-2</p>
                <em>\ead1</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-spinner-3"></i>
                <p class="textFilter-match">lnil-spinner-3</p>
                <em>\ead2</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-spinner-4"></i>
                <p class="textFilter-match">lnil-spinner-4</p>
                <em>\ead3</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-spinner-5"></i>
                <p class="textFilter-match">lnil-spinner-5</p>
                <em>\ead4</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-spinner-9"></i>
                <p class="textFilter-match">lnil-spinner-9</p>
                <em>\ead5</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-spinner-7"></i>
                <p class="textFilter-match">lnil-spinner-7</p>
                <em>\ead6</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-spinner-8"></i>
                <p class="textFilter-match">lnil-spinner-8</p>
                <em>\ead7</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-spinner-6"></i>
                <p class="textFilter-match">lnil-spinner-6</p>
                <em>\ead8</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-angry"></i>
                <p class="textFilter-match">lnil-angry</p>
                <em>\ead9</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-bored"></i>
                <p class="textFilter-match">lnil-bored</p>
                <em>\eada</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-cry"></i>
                <p class="textFilter-match">lnil-cry</p>
                <em>\eadb</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-cute"></i>
                <p class="textFilter-match">lnil-cute</p>
                <em>\eadc</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-dead"></i>
                <p class="textFilter-match">lnil-dead</p>
                <em>\eadd</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-emoji-cool"></i>
                <p class="textFilter-match">lnil-emoji-cool</p>
                <em>\eade</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-emoji-friendly"></i>
                <p class="textFilter-match">lnil-emoji-friendly</p>
                <em>\eadf</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-emoji-happy"></i>
                <p class="textFilter-match">lnil-emoji-happy</p>
                <em>\eae0</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-emoji-sad"></i>
                <p class="textFilter-match">lnil-emoji-sad</p>
                <em>\eae1</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-emoji-smile"></i>
                <p class="textFilter-match">lnil-emoji-smile</p>
                <em>\eae2</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-emoji-speechless"></i>
                <p class="textFilter-match">lnil-emoji-speechless</p>
                <em>\eae3</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-emoji-suspect"></i>
                <p class="textFilter-match">lnil-emoji-suspect</p>
                <em>\eae4</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-emoji-tounge"></i>
                <p class="textFilter-match">lnil-emoji-tounge</p>
                <em>\eae5</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-happy-1"></i>
                <p class="textFilter-match">lnil-happy-1</p>
                <em>\eae6</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-happy-2"></i>
                <p class="textFilter-match">lnil-happy-2</p>
                <em>\eae7</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-happy-smile"></i>
                <p class="textFilter-match">lnil-happy-smile</p>
                <em>\eae8</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-kiss-2"></i>
                <p class="textFilter-match">lnil-kiss-2</p>
                <em>\eae9</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-kiss"></i>
                <p class="textFilter-match">lnil-kiss</p>
                <em>\eaea</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-love"></i>
                <p class="textFilter-match">lnil-love</p>
                <em>\eaeb</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-loved-surprise"></i>
                <p class="textFilter-match">lnil-loved-surprise</p>
                <em>\eaec</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-mute"></i>
                <p class="textFilter-match">lnil-mute</p>
                <em>\eaed</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-piss"></i>
                <p class="textFilter-match">lnil-piss</p>
                <em>\eaee</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-sick-1"></i>
                <p class="textFilter-match">lnil-sick-1</p>
                <em>\eaef</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-sick"></i>
                <p class="textFilter-match">lnil-sick</p>
                <em>\eaf0</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-sleep"></i>
                <p class="textFilter-match">lnil-sleep</p>
                <em>\eaf1</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-super-cool"></i>
                <p class="textFilter-match">lnil-super-cool</p>
                <em>\eaf2</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-super-happy"></i>
                <p class="textFilter-match">lnil-super-happy</p>
                <em>\eaf3</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-wink"></i>
                <p class="textFilter-match">lnil-wink</p>
                <em>\eaf4</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-wow"></i>
                <p class="textFilter-match">lnil-wow</p>
                <em>\eaf5</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-yawn"></i>
                <p class="textFilter-match">lnil-yawn</p>
                <em>\eaf6</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-cool-1"></i>
                <p class="textFilter-match">lnil-cool-1</p>
                <em>\eaf7</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-cool-3"></i>
                <p class="textFilter-match">lnil-cool-3</p>
                <em>\eaf8</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-cool-kiss"></i>
                <p class="textFilter-match">lnil-cool-kiss</p>
                <em>\eaf9</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-cotton-bud"></i>
                <p class="textFilter-match">lnil-cotton-bud</p>
                <em>\eafa</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-crown"></i>
                <p class="textFilter-match">lnil-crown</p>
                <em>\eafb</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-cup-alt"></i>
                <p class="textFilter-match">lnil-cup-alt</p>
                <em>\eafc</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-crown-alt"></i>
                <p class="textFilter-match">lnil-crown-alt</p>
                <em>\eafd</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-gift-alt-1"></i>
                <p class="textFilter-match">lnil-gift-alt-1</p>
                <em>\eafe</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-crown-alt-2"></i>
                <p class="textFilter-match">lnil-crown-alt-2</p>
                <em>\eaff</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-cup"></i>
                <p class="textFilter-match">lnil-cup</p>
                <em>\eb00</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-gift-bag"></i>
                <p class="textFilter-match">lnil-gift-bag</p>
                <em>\eb01</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-gift"></i>
                <p class="textFilter-match">lnil-gift</p>
                <em>\eb02</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-gift-alt"></i>
                <p class="textFilter-match">lnil-gift-alt</p>
                <em>\eb03</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-ladies-tshirt"></i>
                <p class="textFilter-match">lnil-ladies-tshirt</p>
                <em>\eb04</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-crown-alt-1"></i>
                <p class="textFilter-match">lnil-crown-alt-1</p>
                <em>\eb05</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-sunglass"></i>
                <p class="textFilter-match">lnil-sunglass</p>
                <em>\eb06</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-thought"></i>
                <p class="textFilter-match">lnil-thought</p>
                <em>\eb07</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-tshirt-alt-1"></i>
                <p class="textFilter-match">lnil-tshirt-alt-1</p>
                <em>\eb08</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-tshirt-alt"></i>
                <p class="textFilter-match">lnil-tshirt-alt</p>
                <em>\eb09</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-home"></i>
                <p class="textFilter-match">lnil-home</p>
                <em>\eb0a</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-glasses"></i>
                <p class="textFilter-match">lnil-glasses</p>
                <em>\eb0b</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-tshirt"></i>
                <p class="textFilter-match">lnil-tshirt</p>
                <em>\eb0c</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-baloon-alt-1"></i>
                <p class="textFilter-match">lnil-baloon-alt-1</p>
                <em>\eb0d</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-baloon-alt"></i>
                <p class="textFilter-match">lnil-baloon-alt</p>
                <em>\eb0e</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-baloon"></i>
                <p class="textFilter-match">lnil-baloon</p>
                <em>\eb0f</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-candle-alt"></i>
                <p class="textFilter-match">lnil-candle-alt</p>
                <em>\eb10</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-candy-cane"></i>
                <p class="textFilter-match">lnil-candy-cane</p>
                <em>\eb11</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-candy"></i>
                <p class="textFilter-match">lnil-candy</p>
                <em>\eb12</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-confetti"></i>
                <p class="textFilter-match">lnil-confetti</p>
                <em>\eb13</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-firecracker"></i>
                <p class="textFilter-match">lnil-firecracker</p>
                <em>\eb14</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-fireworks"></i>
                <p class="textFilter-match">lnil-fireworks</p>
                <em>\eb15</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-flags"></i>
                <p class="textFilter-match">lnil-flags</p>
                <em>\eb16</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-mask"></i>
                <p class="textFilter-match">lnil-mask</p>
                <em>\eb17</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-spray"></i>
                <p class="textFilter-match">lnil-spray</p>
                <em>\eb18</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-wand"></i>
                <p class="textFilter-match">lnil-wand</p>
                <em>\eb19</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-birthday-hat"></i>
                <p class="textFilter-match">lnil-birthday-hat</p>
                <em>\eb1a</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-candle"></i>
                <p class="textFilter-match">lnil-candle</p>
                <em>\eb1b</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-cake"></i>
                <p class="textFilter-match">lnil-cake</p>
                <em>\eb1c</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-bug-alt"></i>
                <p class="textFilter-match">lnil-bug-alt</p>
                <em>\eb1d</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-bug"></i>
                <p class="textFilter-match">lnil-bug</p>
                <em>\eb1e</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-flower"></i>
                <p class="textFilter-match">lnil-flower</p>
                <em>\eb1f</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-island"></i>
                <p class="textFilter-match">lnil-island</p>
                <em>\eb20</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-leaf-alt-1"></i>
                <p class="textFilter-match">lnil-leaf-alt-1</p>
                <em>\eb21</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-leaf-alt"></i>
                <p class="textFilter-match">lnil-leaf-alt</p>
                <em>\eb22</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-leaf"></i>
                <p class="textFilter-match">lnil-leaf</p>
                <em>\eb23</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-leaves"></i>
                <p class="textFilter-match">lnil-leaves</p>
                <em>\eb24</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-mashroom"></i>
                <p class="textFilter-match">lnil-mashroom</p>
                <em>\eb25</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-mountain"></i>
                <p class="textFilter-match">lnil-mountain</p>
                <em>\eb26</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-mushroom-alt"></i>
                <p class="textFilter-match">lnil-mushroom-alt</p>
                <em>\eb27</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-mushrooms"></i>
                <p class="textFilter-match">lnil-mushrooms</p>
                <em>\eb28</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-plant-pot"></i>
                <p class="textFilter-match">lnil-plant-pot</p>
                <em>\eb29</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-plant"></i>
                <p class="textFilter-match">lnil-plant</p>
                <em>\eb2a</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-sprout-alt"></i>
                <p class="textFilter-match">lnil-sprout-alt</p>
                <em>\eb2b</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-sprout"></i>
                <p class="textFilter-match">lnil-sprout</p>
                <em>\eb2c</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-tornado"></i>
                <p class="textFilter-match">lnil-tornado</p>
                <em>\eb2d</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-tree-alt-1"></i>
                <p class="textFilter-match">lnil-tree-alt-1</p>
                <em>\eb2e</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-tree-alt"></i>
                <p class="textFilter-match">lnil-tree-alt</p>
                <em>\eb2f</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-tree"></i>
                <p class="textFilter-match">lnil-tree</p>
                <em>\eb30</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-trees-alt-1"></i>
                <p class="textFilter-match">lnil-trees-alt-1</p>
                <em>\eb31</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-trees-alt"></i>
                <p class="textFilter-match">lnil-trees-alt</p>
                <em>\eb32</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-trees"></i>
                <p class="textFilter-match">lnil-trees</p>
                <em>\eb33</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-flower-alt"></i>
                <p class="textFilter-match">lnil-flower-alt</p>
                <em>\eb34</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-cactus-alt"></i>
                <p class="textFilter-match">lnil-cactus-alt</p>
                <em>\eb35</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-cactus"></i>
                <p class="textFilter-match">lnil-cactus</p>
                <em>\eb36</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-bank"></i>
                <p class="textFilter-match">lnil-bank</p>
                <em>\eb37</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-calculator-alt"></i>
                <p class="textFilter-match">lnil-calculator-alt</p>
                <em>\eb38</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-calculator"></i>
                <p class="textFilter-match">lnil-calculator</p>
                <em>\eb39</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-coin"></i>
                <p class="textFilter-match">lnil-coin</p>
                <em>\eb3a</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-diamond-alt"></i>
                <p class="textFilter-match">lnil-diamond-alt</p>
                <em>\eb3b</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-diamond"></i>
                <p class="textFilter-match">lnil-diamond</p>
                <em>\eb3c</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-dollar-card"></i>
                <p class="textFilter-match">lnil-dollar-card</p>
                <em>\eb3d</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-credit-cards"></i>
                <p class="textFilter-match">lnil-credit-cards</p>
                <em>\eb3e</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-dollar-down"></i>
                <p class="textFilter-match">lnil-dollar-down</p>
                <em>\eb3f</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-dollar-up"></i>
                <p class="textFilter-match">lnil-dollar-up</p>
                <em>\eb40</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-euro-card"></i>
                <p class="textFilter-match">lnil-euro-card</p>
                <em>\eb41</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-dollar"></i>
                <p class="textFilter-match">lnil-dollar</p>
                <em>\eb42</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-euro-coin"></i>
                <p class="textFilter-match">lnil-euro-coin</p>
                <em>\eb43</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-euro-down"></i>
                <p class="textFilter-match">lnil-euro-down</p>
                <em>\eb44</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-euro-up"></i>
                <p class="textFilter-match">lnil-euro-up</p>
                <em>\eb45</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-euro"></i>
                <p class="textFilter-match">lnil-euro</p>
                <em>\eb46</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-gold-bar"></i>
                <p class="textFilter-match">lnil-gold-bar</p>
                <em>\eb47</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-mobile-coin-taka"></i>
                <p class="textFilter-match">lnil-mobile-coin-taka</p>
                <em>\eb48</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-mobile-coin"></i>
                <p class="textFilter-match">lnil-mobile-coin</p>
                <em>\eb49</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-money-bag"></i>
                <p class="textFilter-match">lnil-money-bag</p>
                <em>\eb4a</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-money-location"></i>
                <p class="textFilter-match">lnil-money-location</p>
                <em>\eb4b</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-money-protection"></i>
                <p class="textFilter-match">lnil-money-protection</p>
                <em>\eb4c</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-pound-card"></i>
                <p class="textFilter-match">lnil-pound-card</p>
                <em>\eb4d</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-pound-coin"></i>
                <p class="textFilter-match">lnil-pound-coin</p>
                <em>\eb4e</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-pound-down"></i>
                <p class="textFilter-match">lnil-pound-down</p>
                <em>\eb4f</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-pound-up"></i>
                <p class="textFilter-match">lnil-pound-up</p>
                <em>\eb50</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-pound"></i>
                <p class="textFilter-match">lnil-pound</p>
                <em>\eb51</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-rupee-card"></i>
                <p class="textFilter-match">lnil-rupee-card</p>
                <em>\eb52</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-rupee-coin"></i>
                <p class="textFilter-match">lnil-rupee-coin</p>
                <em>\eb53</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-rupee-down"></i>
                <p class="textFilter-match">lnil-rupee-down</p>
                <em>\eb54</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-rupee-up"></i>
                <p class="textFilter-match">lnil-rupee-up</p>
                <em>\eb55</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-rupee"></i>
                <p class="textFilter-match">lnil-rupee</p>
                <em>\eb56</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-taka-card"></i>
                <p class="textFilter-match">lnil-taka-card</p>
                <em>\eb57</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-taka-coin"></i>
                <p class="textFilter-match">lnil-taka-coin</p>
                <em>\eb58</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-taka-down"></i>
                <p class="textFilter-match">lnil-taka-down</p>
                <em>\eb59</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-taka-up"></i>
                <p class="textFilter-match">lnil-taka-up</p>
                <em>\eb5a</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-taka"></i>
                <p class="textFilter-match">lnil-taka</p>
                <em>\eb5b</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-wallet-alt-1"></i>
                <p class="textFilter-match">lnil-wallet-alt-1</p>
                <em>\eb5c</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-wallet"></i>
                <p class="textFilter-match">lnil-wallet</p>
                <em>\eb5d</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-yen-card"></i>
                <p class="textFilter-match">lnil-yen-card</p>
                <em>\eb5e</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-yen-coin"></i>
                <p class="textFilter-match">lnil-yen-coin</p>
                <em>\eb5f</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-yen-down"></i>
                <p class="textFilter-match">lnil-yen-down</p>
                <em>\eb60</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-yen-up"></i>
                <p class="textFilter-match">lnil-yen-up</p>
                <em>\eb61</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-yen"></i>
                <p class="textFilter-match">lnil-yen</p>
                <em>\eb62</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-coins"></i>
                <p class="textFilter-match">lnil-coins</p>
                <em>\eb63</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-credit-card"></i>
                <p class="textFilter-match">lnil-credit-card</p>
                <em>\eb64</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-backward-alt"></i>
                <p class="textFilter-match">lnil-backward-alt</p>
                <em>\eb65</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-backward"></i>
                <p class="textFilter-match">lnil-backward</p>
                <em>\eb66</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-forward"></i>
                <p class="textFilter-match">lnil-forward</p>
                <em>\eb67</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-frame-expand"></i>
                <p class="textFilter-match">lnil-frame-expand</p>
                <em>\eb68</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-film"></i>
                <p class="textFilter-match">lnil-film</p>
                <em>\eb69</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-gallery"></i>
                <p class="textFilter-match">lnil-gallery</p>
                <em>\eb6a</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-next"></i>
                <p class="textFilter-match">lnil-next</p>
                <em>\eb6b</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-pause"></i>
                <p class="textFilter-match">lnil-pause</p>
                <em>\eb6c</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-play"></i>
                <p class="textFilter-match">lnil-play</p>
                <em>\eb6d</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-previous"></i>
                <p class="textFilter-match">lnil-previous</p>
                <em>\eb6e</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-repeat-one"></i>
                <p class="textFilter-match">lnil-repeat-one</p>
                <em>\eb6f</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-shuffle"></i>
                <p class="textFilter-match">lnil-shuffle</p>
                <em>\eb70</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-slideshow"></i>
                <p class="textFilter-match">lnil-slideshow</p>
                <em>\eb71</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-stop"></i>
                <p class="textFilter-match">lnil-stop</p>
                <em>\eb72</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-video-alt-1"></i>
                <p class="textFilter-match">lnil-video-alt-1</p>
                <em>\eb73</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-video-alt"></i>
                <p class="textFilter-match">lnil-video-alt</p>
                <em>\eb74</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-video-camera-alt-1"></i>
                <p class="textFilter-match">lnil-video-camera-alt-1</p>
                <em>\eb75</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-video-camera-alt-2"></i>
                <p class="textFilter-match">lnil-video-camera-alt-2</p>
                <em>\eb76</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-video-camera-alt"></i>
                <p class="textFilter-match">lnil-video-camera-alt</p>
                <em>\eb77</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-video-cut"></i>
                <p class="textFilter-match">lnil-video-cut</p>
                <em>\eb78</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-video"></i>
                <p class="textFilter-match">lnil-video</p>
                <em>\eb79</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-volume-high"></i>
                <p class="textFilter-match">lnil-volume-high</p>
                <em>\eb7a</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-volume-low"></i>
                <p class="textFilter-match">lnil-volume-low</p>
                <em>\eb7b</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-volume-medium"></i>
                <p class="textFilter-match">lnil-volume-medium</p>
                <em>\eb7c</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-volume-mute"></i>
                <p class="textFilter-match">lnil-volume-mute</p>
                <em>\eb7d</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-volume"></i>
                <p class="textFilter-match">lnil-volume</p>
                <em>\eb7e</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-full-screen"></i>
                <p class="textFilter-match">lnil-full-screen</p>
                <em>\eb7f</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-expand-alt-1"></i>
                <p class="textFilter-match">lnil-expand-alt-1</p>
                <em>\eb80</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-fast-forward"></i>
                <p class="textFilter-match">lnil-fast-forward</p>
                <em>\eb81</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-analytics"></i>
                <p class="textFilter-match">lnil-analytics</p>
                <em>\eb82</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-bar-chart"></i>
                <p class="textFilter-match">lnil-bar-chart</p>
                <em>\eb83</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-graph-alt-1"></i>
                <p class="textFilter-match">lnil-graph-alt-1</p>
                <em>\eb84</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-graph-alt-2"></i>
                <p class="textFilter-match">lnil-graph-alt-2</p>
                <em>\eb85</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-graph-alt-3"></i>
                <p class="textFilter-match">lnil-graph-alt-3</p>
                <em>\eb86</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-graph-alt-4"></i>
                <p class="textFilter-match">lnil-graph-alt-4</p>
                <em>\eb87</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-graph-alt"></i>
                <p class="textFilter-match">lnil-graph-alt</p>
                <em>\eb88</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-graph-decrease"></i>
                <p class="textFilter-match">lnil-graph-decrease</p>
                <em>\eb89</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-graph-increase"></i>
                <p class="textFilter-match">lnil-graph-increase</p>
                <em>\eb8a</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-invest-monitor"></i>
                <p class="textFilter-match">lnil-invest-monitor</p>
                <em>\eb8b</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-keyword-research"></i>
                <p class="textFilter-match">lnil-keyword-research</p>
                <em>\eb8c</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-network-alt"></i>
                <p class="textFilter-match">lnil-network-alt</p>
                <em>\eb8d</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-network"></i>
                <p class="textFilter-match">lnil-network</p>
                <em>\eb8e</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-pyramid-decrease"></i>
                <p class="textFilter-match">lnil-pyramid-decrease</p>
                <em>\eb8f</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-pyramid-increase"></i>
                <p class="textFilter-match">lnil-pyramid-increase</p>
                <em>\eb90</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-pyramid"></i>
                <p class="textFilter-match">lnil-pyramid</p>
                <em>\eb91</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-rook"></i>
                <p class="textFilter-match">lnil-rook</p>
                <em>\eb92</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-seo"></i>
                <p class="textFilter-match">lnil-seo</p>
                <em>\eb93</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-strategy"></i>
                <p class="textFilter-match">lnil-strategy</p>
                <em>\eb94</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-target-audience-alt"></i>
                <p class="textFilter-match">lnil-target-audience-alt</p>
                <em>\eb95</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-target-customer"></i>
                <p class="textFilter-match">lnil-target-customer</p>
                <em>\eb96</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-website-rank"></i>
                <p class="textFilter-match">lnil-website-rank</p>
                <em>\eb97</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-bar-check"></i>
                <p class="textFilter-match">lnil-bar-check</p>
                <em>\eb98</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-billboard-alt"></i>
                <p class="textFilter-match">lnil-billboard-alt</p>
                <em>\eb99</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-billboard"></i>
                <p class="textFilter-match">lnil-billboard</p>
                <em>\eb9a</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-barrier"></i>
                <p class="textFilter-match">lnil-barrier</p>
                <em>\eb9b</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-bolt-alt"></i>
                <p class="textFilter-match">lnil-bolt-alt</p>
                <em>\eb9c</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-checkmark"></i>
                <p class="textFilter-match">lnil-checkmark</p>
                <em>\eb9d</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-check-box"></i>
                <p class="textFilter-match">lnil-check-box</p>
                <em>\eb9e</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-circle-plus"></i>
                <p class="textFilter-match">lnil-circle-plus</p>
                <em>\eb9f</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-circle-minus"></i>
                <p class="textFilter-match">lnil-circle-minus</p>
                <em>\eba0</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-cross-circle"></i>
                <p class="textFilter-match">lnil-cross-circle</p>
                <em>\eba1</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-electricity"></i>
                <p class="textFilter-match">lnil-electricity</p>
                <em>\eba2</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-eye-alt"></i>
                <p class="textFilter-match">lnil-eye-alt</p>
                <em>\eba3</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-eye"></i>
                <p class="textFilter-match">lnil-eye</p>
                <em>\eba4</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-find"></i>
                <p class="textFilter-match">lnil-find</p>
                <em>\eba5</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-flag-alt"></i>
                <p class="textFilter-match">lnil-flag-alt</p>
                <em>\eba6</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-flag"></i>
                <p class="textFilter-match">lnil-flag</p>
                <em>\eba7</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-funnel-alt-1"></i>
                <p class="textFilter-match">lnil-funnel-alt-1</p>
                <em>\eba8</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-funnel-alt"></i>
                <p class="textFilter-match">lnil-funnel-alt</p>
                <em>\eba9</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-funnel"></i>
                <p class="textFilter-match">lnil-funnel</p>
                <em>\ebaa</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-hand"></i>
                <p class="textFilter-match">lnil-hand</p>
                <em>\ebab</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-heart-filled"></i>
                <p class="textFilter-match">lnil-heart-filled</p>
                <em>\ebac</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-heart-plus"></i>
                <p class="textFilter-match">lnil-heart-plus</p>
                <em>\ebad</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-heart"></i>
                <p class="textFilter-match">lnil-heart</p>
                <em>\ebae</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-help"></i>
                <p class="textFilter-match">lnil-help</p>
                <em>\ebaf</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-hotel-sign"></i>
                <p class="textFilter-match">lnil-hotel-sign</p>
                <em>\ebb0</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-idea-alt"></i>
                <p class="textFilter-match">lnil-idea-alt</p>
                <em>\ebb1</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-identity"></i>
                <p class="textFilter-match">lnil-identity</p>
                <em>\ebb2</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-infinite"></i>
                <p class="textFilter-match">lnil-infinite</p>
                <em>\ebb3</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-information"></i>
                <p class="textFilter-match">lnil-information</p>
                <em>\ebb4</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-invention"></i>
                <p class="textFilter-match">lnil-invention</p>
                <em>\ebb5</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-key-alt-1"></i>
                <p class="textFilter-match">lnil-key-alt-1</p>
                <em>\ebb6</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-key-alt-2"></i>
                <p class="textFilter-match">lnil-key-alt-2</p>
                <em>\ebb7</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-key-alt-3"></i>
                <p class="textFilter-match">lnil-key-alt-3</p>
                <em>\ebb8</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-key-alt"></i>
                <p class="textFilter-match">lnil-key-alt</p>
                <em>\ebb9</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-key"></i>
                <p class="textFilter-match">lnil-key</p>
                <em>\ebba</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-life-ring"></i>
                <p class="textFilter-match">lnil-life-ring</p>
                <em>\ebbb</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-list-alt-1"></i>
                <p class="textFilter-match">lnil-list-alt-1</p>
                <em>\ebbc</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-list-alt"></i>
                <p class="textFilter-match">lnil-list-alt</p>
                <em>\ebbd</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-list"></i>
                <p class="textFilter-match">lnil-list</p>
                <em>\ebbe</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-lock-alt-1"></i>
                <p class="textFilter-match">lnil-lock-alt-1</p>
                <em>\ebbf</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-lock-alt-2"></i>
                <p class="textFilter-match">lnil-lock-alt-2</p>
                <em>\ebc0</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-lock-alt"></i>
                <p class="textFilter-match">lnil-lock-alt</p>
                <em>\ebc1</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-lock"></i>
                <p class="textFilter-match">lnil-lock</p>
                <em>\ebc2</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-minus"></i>
                <p class="textFilter-match">lnil-minus</p>
                <em>\ebc3</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-more-alt-1"></i>
                <p class="textFilter-match">lnil-more-alt-1</p>
                <em>\ebc4</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-more-alt"></i>
                <p class="textFilter-match">lnil-more-alt</p>
                <em>\ebc5</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-more"></i>
                <p class="textFilter-match">lnil-more</p>
                <em>\ebc6</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-music-note"></i>
                <p class="textFilter-match">lnil-music-note</p>
                <em>\ebc7</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-music"></i>
                <p class="textFilter-match">lnil-music</p>
                <em>\ebc8</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-notification"></i>
                <p class="textFilter-match">lnil-notification</p>
                <em>\ebc9</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-passport-alt"></i>
                <p class="textFilter-match">lnil-passport-alt</p>
                <em>\ebca</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-passport"></i>
                <p class="textFilter-match">lnil-passport</p>
                <em>\ebcb</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-playlist-alt"></i>
                <p class="textFilter-match">lnil-playlist-alt</p>
                <em>\ebcc</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-playlist"></i>
                <p class="textFilter-match">lnil-playlist</p>
                <em>\ebcd</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-plus"></i>
                <p class="textFilter-match">lnil-plus</p>
                <em>\ebce</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-pointer"></i>
                <p class="textFilter-match">lnil-pointer</p>
                <em>\ebcf</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-power-switch"></i>
                <p class="textFilter-match">lnil-power-switch</p>
                <em>\ebd0</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-protection"></i>
                <p class="textFilter-match">lnil-protection</p>
                <em>\ebd1</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-question-circle"></i>
                <p class="textFilter-match">lnil-question-circle</p>
                <em>\ebd2</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-radio-button"></i>
                <p class="textFilter-match">lnil-radio-button</p>
                <em>\ebd3</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-record"></i>
                <p class="textFilter-match">lnil-record</p>
                <em>\ebd4</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-round-box-check"></i>
                <p class="textFilter-match">lnil-round-box-check</p>
                <em>\ebd5</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-round-box-cross"></i>
                <p class="textFilter-match">lnil-round-box-cross</p>
                <em>\ebd6</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-round-box-minus"></i>
                <p class="textFilter-match">lnil-round-box-minus</p>
                <em>\ebd7</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-round-box-plus"></i>
                <p class="textFilter-match">lnil-round-box-plus</p>
                <em>\ebd8</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-shield"></i>
                <p class="textFilter-match">lnil-shield</p>
                <em>\ebd9</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-sort"></i>
                <p class="textFilter-match">lnil-sort</p>
                <em>\ebda</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-switch"></i>
                <p class="textFilter-match">lnil-switch</p>
                <em>\ebdb</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-teabag"></i>
                <p class="textFilter-match">lnil-teabag</p>
                <em>\ebdc</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-thumbs-down-alt"></i>
                <p class="textFilter-match">lnil-thumbs-down-alt</p>
                <em>\ebdd</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-thumbs-down"></i>
                <p class="textFilter-match">lnil-thumbs-down</p>
                <em>\ebde</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-thumbs-up-alt"></i>
                <p class="textFilter-match">lnil-thumbs-up-alt</p>
                <em>\ebdf</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-thumbs-up"></i>
                <p class="textFilter-match">lnil-thumbs-up</p>
                <em>\ebe0</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-thunderbolt"></i>
                <p class="textFilter-match">lnil-thunderbolt</p>
                <em>\ebe1</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-ticket-alt-1"></i>
                <p class="textFilter-match">lnil-ticket-alt-1</p>
                <em>\ebe2</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-ticket-alt-2"></i>
                <p class="textFilter-match">lnil-ticket-alt-2</p>
                <em>\ebe3</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-ticket-alt-3"></i>
                <p class="textFilter-match">lnil-ticket-alt-3</p>
                <em>\ebe4</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-ticket-alt"></i>
                <p class="textFilter-match">lnil-ticket-alt</p>
                <em>\ebe5</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-ticket"></i>
                <p class="textFilter-match">lnil-ticket</p>
                <em>\ebe6</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-unlock"></i>
                <p class="textFilter-match">lnil-unlock</p>
                <em>\ebe7</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-warning"></i>
                <p class="textFilter-match">lnil-warning</p>
                <em>\ebe8</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-checkmark-circle"></i>
                <p class="textFilter-match">lnil-checkmark-circle</p>
                <em>\ebe9</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-close"></i>
                <p class="textFilter-match">lnil-close</p>
                <em>\ebea</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-bolt"></i>
                <p class="textFilter-match">lnil-bolt</p>
                <em>\ebeb</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-ambulance-alt-1"></i>
                <p class="textFilter-match">lnil-ambulance-alt-1</p>
                <em>\ebec</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-ambulance-alt"></i>
                <p class="textFilter-match">lnil-ambulance-alt</p>
                <em>\ebed</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-brain-alt"></i>
                <p class="textFilter-match">lnil-brain-alt</p>
                <em>\ebee</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-basketball"></i>
                <p class="textFilter-match">lnil-basketball</p>
                <em>\ebef</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-bone"></i>
                <p class="textFilter-match">lnil-bone</p>
                <em>\ebf0</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-ambulance"></i>
                <p class="textFilter-match">lnil-ambulance</p>
                <em>\ebf1</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-broken-bone"></i>
                <p class="textFilter-match">lnil-broken-bone</p>
                <em>\ebf2</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-brain-check"></i>
                <p class="textFilter-match">lnil-brain-check</p>
                <em>\ebf3</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-brain"></i>
                <p class="textFilter-match">lnil-brain</p>
                <em>\ebf4</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-capsule"></i>
                <p class="textFilter-match">lnil-capsule</p>
                <em>\ebf5</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-capsules"></i>
                <p class="textFilter-match">lnil-capsules</p>
                <em>\ebf6</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-cardiology"></i>
                <p class="textFilter-match">lnil-cardiology</p>
                <em>\ebf7</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-diagnosis-alt"></i>
                <p class="textFilter-match">lnil-diagnosis-alt</p>
                <em>\ebf8</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-diagnosis"></i>
                <p class="textFilter-match">lnil-diagnosis</p>
                <em>\ebf9</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-dna"></i>
                <p class="textFilter-match">lnil-dna</p>
                <em>\ebfa</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-dropper-alt-1"></i>
                <p class="textFilter-match">lnil-dropper-alt-1</p>
                <em>\ebfb</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-dropper-alt-2"></i>
                <p class="textFilter-match">lnil-dropper-alt-2</p>
                <em>\ebfc</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-dropper-alt"></i>
                <p class="textFilter-match">lnil-dropper-alt</p>
                <em>\ebfd</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-dropper"></i>
                <p class="textFilter-match">lnil-dropper</p>
                <em>\ebfe</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-dumbbell"></i>
                <p class="textFilter-match">lnil-dumbbell</p>
                <em>\ebff</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-eye-test"></i>
                <p class="textFilter-match">lnil-eye-test</p>
                <em>\ec00</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-female"></i>
                <p class="textFilter-match">lnil-female</p>
                <em>\ec01</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-first-aid"></i>
                <p class="textFilter-match">lnil-first-aid</p>
                <em>\ec02</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-gluten-free"></i>
                <p class="textFilter-match">lnil-gluten-free</p>
                <em>\ec03</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-heart-check"></i>
                <p class="textFilter-match">lnil-heart-check</p>
                <em>\ec04</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-heart-monitor"></i>
                <p class="textFilter-match">lnil-heart-monitor</p>
                <em>\ec05</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-heartrate-monitor"></i>
                <p class="textFilter-match">lnil-heartrate-monitor</p>
                <em>\ec06</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-hospital-alt-1"></i>
                <p class="textFilter-match">lnil-hospital-alt-1</p>
                <em>\ec07</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-hospital-alt-2"></i>
                <p class="textFilter-match">lnil-hospital-alt-2</p>
                <em>\ec08</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-hospital-alt-3"></i>
                <p class="textFilter-match">lnil-hospital-alt-3</p>
                <em>\ec09</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-hospital-alt-4"></i>
                <p class="textFilter-match">lnil-hospital-alt-4</p>
                <em>\ec0a</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-hospital-alt"></i>
                <p class="textFilter-match">lnil-hospital-alt</p>
                <em>\ec0b</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-hospital-bed-alt-1"></i>
                <p class="textFilter-match">lnil-hospital-bed-alt-1</p>
                <em>\ec0c</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-hospital-bed-alt-2"></i>
                <p class="textFilter-match">lnil-hospital-bed-alt-2</p>
                <em>\ec0d</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-hospital-bed-alt"></i>
                <p class="textFilter-match">lnil-hospital-bed-alt</p>
                <em>\ec0e</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-hospital-bed"></i>
                <p class="textFilter-match">lnil-hospital-bed</p>
                <em>\ec0f</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-hospital-location"></i>
                <p class="textFilter-match">lnil-hospital-location</p>
                <em>\ec10</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-hospital-sign"></i>
                <p class="textFilter-match">lnil-hospital-sign</p>
                <em>\ec11</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-hospital"></i>
                <p class="textFilter-match">lnil-hospital</p>
                <em>\ec12</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-kettlebell"></i>
                <p class="textFilter-match">lnil-kettlebell</p>
                <em>\ec13</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-lungs"></i>
                <p class="textFilter-match">lnil-lungs</p>
                <em>\ec14</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-male"></i>
                <p class="textFilter-match">lnil-male</p>
                <em>\ec15</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="lnir lnir-medical-briefcase-alt"
                ></i>
                <p class="textFilter-match">lnil-medical-briefcase-alt</p>
                <em>\ec16</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-medical-briefcase"></i>
                <p class="textFilter-match">lnil-medical-briefcase</p>
                <em>\ec17</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-medical-protection"></i>
                <p class="textFilter-match">lnil-medical-protection</p>
                <em>\ec18</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-medical-sign"></i>
                <p class="textFilter-match">lnil-medical-sign</p>
                <em>\ec19</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-medicine-alt"></i>
                <p class="textFilter-match">lnil-medicine-alt</p>
                <em>\ec1a</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-medicine-bottle"></i>
                <p class="textFilter-match">lnil-medicine-bottle</p>
                <em>\ec1b</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-medicine"></i>
                <p class="textFilter-match">lnil-medicine</p>
                <em>\ec1c</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-microscope"></i>
                <p class="textFilter-match">lnil-microscope</p>
                <em>\ec1d</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-pulse"></i>
                <p class="textFilter-match">lnil-pulse</p>
                <em>\ec1e</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-report-laptop"></i>
                <p class="textFilter-match">lnil-report-laptop</p>
                <em>\ec1f</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-saline-alt-1"></i>
                <p class="textFilter-match">lnil-saline-alt-1</p>
                <em>\ec20</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-saline-alt"></i>
                <p class="textFilter-match">lnil-saline-alt</p>
                <em>\ec21</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-saline"></i>
                <p class="textFilter-match">lnil-saline</p>
                <em>\ec22</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-skipping-rope"></i>
                <p class="textFilter-match">lnil-skipping-rope</p>
                <em>\ec23</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-slim"></i>
                <p class="textFilter-match">lnil-slim</p>
                <em>\ec24</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-sthethoscope"></i>
                <p class="textFilter-match">lnil-sthethoscope</p>
                <em>\ec25</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-syringe"></i>
                <p class="textFilter-match">lnil-syringe</p>
                <em>\ec26</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-test-tube-alt"></i>
                <p class="textFilter-match">lnil-test-tube-alt</p>
                <em>\ec27</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-test-tube"></i>
                <p class="textFilter-match">lnil-test-tube</p>
                <em>\ec28</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-thermometer-alt"></i>
                <p class="textFilter-match">lnil-thermometer-alt</p>
                <em>\ec29</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-thermometer"></i>
                <p class="textFilter-match">lnil-thermometer</p>
                <em>\ec2a</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-tooth"></i>
                <p class="textFilter-match">lnil-tooth</p>
                <em>\ec2b</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-walker"></i>
                <p class="textFilter-match">lnil-walker</p>
                <em>\ec2c</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-weight-machine"></i>
                <p class="textFilter-match">lnil-weight-machine</p>
                <em>\ec2d</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-weight"></i>
                <p class="textFilter-match">lnil-weight</p>
                <em>\ec2e</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-wheelchair"></i>
                <p class="textFilter-match">lnil-wheelchair</p>
                <em>\ec2f</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-yoga-mat"></i>
                <p class="textFilter-match">lnil-yoga-mat</p>
                <em>\ec30</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-capsule-alt-1"></i>
                <p class="textFilter-match">lnil-capsule-alt-1</p>
                <em>\ec31</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-capsule-alt"></i>
                <p class="textFilter-match">lnil-capsule-alt</p>
                <em>\ec32</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-brain-check-alt"></i>
                <p class="textFilter-match">lnil-brain-check-alt</p>
                <em>\ec33</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-apple-alt"></i>
                <p class="textFilter-match">lnil-apple-alt</p>
                <em>\ec34</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-banana"></i>
                <p class="textFilter-match">lnil-banana</p>
                <em>\ec35</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-brocolli"></i>
                <p class="textFilter-match">lnil-brocolli</p>
                <em>\ec36</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-burger-alt-1"></i>
                <p class="textFilter-match">lnil-burger-alt-1</p>
                <em>\ec37</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-burger-alt"></i>
                <p class="textFilter-match">lnil-burger-alt</p>
                <em>\ec38</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-burger"></i>
                <p class="textFilter-match">lnil-burger</p>
                <em>\ec39</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-chef-hat-alt-1"></i>
                <p class="textFilter-match">lnil-chef-hat-alt-1</p>
                <em>\ec3a</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-chef-hat-alt-2"></i>
                <p class="textFilter-match">lnil-chef-hat-alt-2</p>
                <em>\ec3b</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-chef-hat-alt"></i>
                <p class="textFilter-match">lnil-chef-hat-alt</p>
                <em>\ec3c</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-chef-hat"></i>
                <p class="textFilter-match">lnil-chef-hat</p>
                <em>\ec3d</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-chicken"></i>
                <p class="textFilter-match">lnil-chicken</p>
                <em>\ec3e</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-cocktail-alt-1"></i>
                <p class="textFilter-match">lnil-cocktail-alt-1</p>
                <em>\ec3f</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-cocktail-alt"></i>
                <p class="textFilter-match">lnil-cocktail-alt</p>
                <em>\ec40</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-cocktail"></i>
                <p class="textFilter-match">lnil-cocktail</p>
                <em>\ec41</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-coffee-cup-alt"></i>
                <p class="textFilter-match">lnil-coffee-cup-alt</p>
                <em>\ec42</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-coffee-cup"></i>
                <p class="textFilter-match">lnil-coffee-cup</p>
                <em>\ec43</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-cupcake-alt"></i>
                <p class="textFilter-match">lnil-cupcake-alt</p>
                <em>\ec44</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-cupcake"></i>
                <p class="textFilter-match">lnil-cupcake</p>
                <em>\ec45</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-cutlery-alt-1"></i>
                <p class="textFilter-match">lnil-cutlery-alt-1</p>
                <em>\ec46</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-cutlery-alt"></i>
                <p class="textFilter-match">lnil-cutlery-alt</p>
                <em>\ec47</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-cutlery"></i>
                <p class="textFilter-match">lnil-cutlery</p>
                <em>\ec48</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-dinner-table"></i>
                <p class="textFilter-match">lnil-dinner-table</p>
                <em>\ec49</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-dinner"></i>
                <p class="textFilter-match">lnil-dinner</p>
                <em>\ec4a</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-drumstick"></i>
                <p class="textFilter-match">lnil-drumstick</p>
                <em>\ec4b</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-fresh-juice"></i>
                <p class="textFilter-match">lnil-fresh-juice</p>
                <em>\ec4c</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-ice-cream-alt"></i>
                <p class="textFilter-match">lnil-ice-cream-alt</p>
                <em>\ec4d</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-ice-cream"></i>
                <p class="textFilter-match">lnil-ice-cream</p>
                <em>\ec4e</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-juice"></i>
                <p class="textFilter-match">lnil-juice</p>
                <em>\ec4f</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-lolypop"></i>
                <p class="textFilter-match">lnil-lolypop</p>
                <em>\ec50</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-meat"></i>
                <p class="textFilter-match">lnil-meat</p>
                <em>\ec51</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-pizza-alt"></i>
                <p class="textFilter-match">lnil-pizza-alt</p>
                <em>\ec52</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-pizza"></i>
                <p class="textFilter-match">lnil-pizza</p>
                <em>\ec53</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-plate"></i>
                <p class="textFilter-match">lnil-plate</p>
                <em>\ec54</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-popcorn"></i>
                <p class="textFilter-match">lnil-popcorn</p>
                <em>\ec55</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-restaurant"></i>
                <p class="textFilter-match">lnil-restaurant</p>
                <em>\ec56</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-service"></i>
                <p class="textFilter-match">lnil-service</p>
                <em>\ec57</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-silverware"></i>
                <p class="textFilter-match">lnil-silverware</p>
                <em>\ec58</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-spatula"></i>
                <p class="textFilter-match">lnil-spatula</p>
                <em>\ec59</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-bowl-alt"></i>
                <p class="textFilter-match">lnil-bowl-alt</p>
                <em>\ec5a</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-bowl"></i>
                <p class="textFilter-match">lnil-bowl</p>
                <em>\ec5b</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-bowl-alt-1"></i>
                <p class="textFilter-match">lnil-bowl-alt-1</p>
                <em>\ec5c</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-atom"></i>
                <p class="textFilter-match">lnil-atom</p>
                <em>\ec5d</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-backpack-alt"></i>
                <p class="textFilter-match">lnil-backpack-alt</p>
                <em>\ec5e</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-book"></i>
                <p class="textFilter-match">lnil-book</p>
                <em>\ec5f</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-blackboard"></i>
                <p class="textFilter-match">lnil-blackboard</p>
                <em>\ec60</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-books"></i>
                <p class="textFilter-match">lnil-books</p>
                <em>\ec61</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-brakckets"></i>
                <p class="textFilter-match">lnil-brakckets</p>
                <em>\ec62</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-certificate-alt-1"></i>
                <p class="textFilter-match">lnil-certificate-alt-1</p>
                <em>\ec63</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-certificate-alt"></i>
                <p class="textFilter-match">lnil-certificate-alt</p>
                <em>\ec64</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-certificate"></i>
                <p class="textFilter-match">lnil-certificate</p>
                <em>\ec65</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-classroom"></i>
                <p class="textFilter-match">lnil-classroom</p>
                <em>\ec66</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-clipboard"></i>
                <p class="textFilter-match">lnil-clipboard</p>
                <em>\ec67</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-compass"></i>
                <p class="textFilter-match">lnil-compass</p>
                <em>\ec68</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-cubes"></i>
                <p class="textFilter-match">lnil-cubes</p>
                <em>\ec69</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-eraser"></i>
                <p class="textFilter-match">lnil-eraser</p>
                <em>\ec6a</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-flask-alt-1"></i>
                <p class="textFilter-match">lnil-flask-alt-1</p>
                <em>\ec6b</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-flask-alt-2"></i>
                <p class="textFilter-match">lnil-flask-alt-2</p>
                <em>\ec6c</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-flask-alt"></i>
                <p class="textFilter-match">lnil-flask-alt</p>
                <em>\ec6d</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-flask"></i>
                <p class="textFilter-match">lnil-flask</p>
                <em>\ec6e</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-graduate-alt"></i>
                <p class="textFilter-match">lnil-graduate-alt</p>
                <em>\ec6f</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-graduate"></i>
                <p class="textFilter-match">lnil-graduate</p>
                <em>\ec70</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-graduation"></i>
                <p class="textFilter-match">lnil-graduation</p>
                <em>\ec71</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-letterblocks"></i>
                <p class="textFilter-match">lnil-letterblocks</p>
                <em>\ec72</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-library"></i>
                <p class="textFilter-match">lnil-library</p>
                <em>\ec73</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-medal-alt"></i>
                <p class="textFilter-match">lnil-medal-alt</p>
                <em>\ec74</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-medal"></i>
                <p class="textFilter-match">lnil-medal</p>
                <em>\ec75</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-molecule-alt"></i>
                <p class="textFilter-match">lnil-molecule-alt</p>
                <em>\ec76</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-molecule"></i>
                <p class="textFilter-match">lnil-molecule</p>
                <em>\ec77</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-pencil-alt"></i>
                <p class="textFilter-match">lnil-pencil-alt</p>
                <em>\ec78</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-pencil"></i>
                <p class="textFilter-match">lnil-pencil</p>
                <em>\ec79</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-quill"></i>
                <p class="textFilter-match">lnil-quill</p>
                <em>\ec7a</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-school-bench-alt"></i>
                <p class="textFilter-match">lnil-school-bench-alt</p>
                <em>\ec7b</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-school-bench"></i>
                <p class="textFilter-match">lnil-school-bench</p>
                <em>\ec7c</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-sketchbook"></i>
                <p class="textFilter-match">lnil-sketchbook</p>
                <em>\ec7d</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-whiteboard-alt-1"></i>
                <p class="textFilter-match">lnil-whiteboard-alt-1</p>
                <em>\ec7e</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-whiteboard-alt-2"></i>
                <p class="textFilter-match">lnil-whiteboard-alt-2</p>
                <em>\ec7f</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-whiteboard-alt"></i>
                <p class="textFilter-match">lnil-whiteboard-alt</p>
                <em>\ec80</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-whiteboard"></i>
                <p class="textFilter-match">lnil-whiteboard</p>
                <em>\ec81</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-world-2"></i>
                <p class="textFilter-match">lnil-world-2</p>
                <em>\ec82</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-world-alt"></i>
                <p class="textFilter-match">lnil-world-alt</p>
                <em>\ec83</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-world"></i>
                <p class="textFilter-match">lnil-world</p>
                <em>\ec84</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-book-alt"></i>
                <p class="textFilter-match">lnil-book-alt</p>
                <em>\ec85</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-write"></i>
                <p class="textFilter-match">lnil-write</p>
                <em>\ec86</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-backpack"></i>
                <p class="textFilter-match">lnil-backpack</p>
                <em>\ec87</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-books-alt"></i>
                <p class="textFilter-match">lnil-books-alt</p>
                <em>\ec88</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-Italic"></i>
                <p class="textFilter-match">lnil-Italic</p>
                <em>\ec89</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-bold"></i>
                <p class="textFilter-match">lnil-bold</p>
                <em>\ec8a</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-indent-decrease"></i>
                <p class="textFilter-match">lnil-indent-decrease</p>
                <em>\ec8b</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-font"></i>
                <p class="textFilter-match">lnil-font</p>
                <em>\ec8c</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-line-dashed"></i>
                <p class="textFilter-match">lnil-line-dashed</p>
                <em>\ec8d</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-line-dotted"></i>
                <p class="textFilter-match">lnil-line-dotted</p>
                <em>\ec8e</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-line-double"></i>
                <p class="textFilter-match">lnil-line-double</p>
                <em>\ec8f</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-line-spacing"></i>
                <p class="textFilter-match">lnil-line-spacing</p>
                <em>\ec90</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-page-break"></i>
                <p class="textFilter-match">lnil-page-break</p>
                <em>\ec91</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-pagination"></i>
                <p class="textFilter-match">lnil-pagination</p>
                <em>\ec92</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-pilcrow"></i>
                <p class="textFilter-match">lnil-pilcrow</p>
                <em>\ec93</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-redo"></i>
                <p class="textFilter-match">lnil-redo</p>
                <em>\ec94</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-reflect"></i>
                <p class="textFilter-match">lnil-reflect</p>
                <em>\ec95</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-sort-alpha-asc"></i>
                <p class="textFilter-match">lnil-sort-alpha-asc</p>
                <em>\ec96</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-sort-amount-asc"></i>
                <p class="textFilter-match">lnil-sort-amount-asc</p>
                <em>\ec97</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-sort-amount-dsc"></i>
                <p class="textFilter-match">lnil-sort-amount-dsc</p>
                <em>\ec98</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-spellcheck"></i>
                <p class="textFilter-match">lnil-spellcheck</p>
                <em>\ec99</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-strikethrough"></i>
                <p class="textFilter-match">lnil-strikethrough</p>
                <em>\ec9a</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-text-align-center"></i>
                <p class="textFilter-match">lnil-text-align-center</p>
                <em>\ec9b</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-text-align-justify"></i>
                <p class="textFilter-match">lnil-text-align-justify</p>
                <em>\ec9c</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-text-align-left"></i>
                <p class="textFilter-match">lnil-text-align-left</p>
                <em>\ec9d</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-text-align-right"></i>
                <p class="textFilter-match">lnil-text-align-right</p>
                <em>\ec9e</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-text-format-remove"></i>
                <p class="textFilter-match">lnil-text-format-remove</p>
                <em>\ec9f</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-text-format"></i>
                <p class="textFilter-match">lnil-text-format</p>
                <em>\eca0</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-text"></i>
                <p class="textFilter-match">lnil-text</p>
                <em>\eca1</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-underline"></i>
                <p class="textFilter-match">lnil-underline</p>
                <em>\eca2</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-undo"></i>
                <p class="textFilter-match">lnil-undo</p>
                <em>\eca3</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-vertical-line"></i>
                <p class="textFilter-match">lnil-vertical-line</p>
                <em>\eca4</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-height"></i>
                <p class="textFilter-match">lnil-height</p>
                <em>\eca5</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-capital-letter"></i>
                <p class="textFilter-match">lnil-capital-letter</p>
                <em>\eca6</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-indent-increase"></i>
                <p class="textFilter-match">lnil-indent-increase</p>
                <em>\eca7</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-angle-double-down"></i>
                <p class="textFilter-match">lnil-angle-double-down</p>
                <em>\eca8</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-angle-double-left"></i>
                <p class="textFilter-match">lnil-angle-double-left</p>
                <em>\eca9</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-angle-double-right"></i>
                <p class="textFilter-match">lnil-angle-double-right</p>
                <em>\ecaa</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-angle-double-up"></i>
                <p class="textFilter-match">lnil-angle-double-up</p>
                <em>\ecab</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-arrow-double-down"></i>
                <p class="textFilter-match">lnil-arrow-double-down</p>
                <em>\ecac</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-arrow-double-right"></i>
                <p class="textFilter-match">lnil-arrow-double-right</p>
                <em>\ecad</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-arrow-double-top"></i>
                <p class="textFilter-match">lnil-arrow-double-top</p>
                <em>\ecae</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-arrow-down-circle"></i>
                <p class="textFilter-match">lnil-arrow-down-circle</p>
                <em>\ecaf</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-arrow-expand-alt"></i>
                <p class="textFilter-match">lnil-arrow-expand-alt</p>
                <em>\ecb0</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-arrow-left-circle"></i>
                <p class="textFilter-match">lnil-arrow-left-circle</p>
                <em>\ecb1</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-arrow-left"></i>
                <p class="textFilter-match">lnil-arrow-left</p>
                <em>\ecb2</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-arrow-minimize-alt"></i>
                <p class="textFilter-match">lnil-arrow-minimize-alt</p>
                <em>\ecb3</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-arrow-minimize"></i>
                <p class="textFilter-match">lnil-arrow-minimize</p>
                <em>\ecb4</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-arrow-right-circle"></i>
                <p class="textFilter-match">lnil-arrow-right-circle</p>
                <em>\ecb5</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-arrow-right"></i>
                <p class="textFilter-match">lnil-arrow-right</p>
                <em>\ecb6</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-arrow-top-left"></i>
                <p class="textFilter-match">lnil-arrow-top-left</p>
                <em>\ecb7</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-arrow-top-right"></i>
                <p class="textFilter-match">lnil-arrow-top-right</p>
                <em>\ecb8</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-arrow-up-circle"></i>
                <p class="textFilter-match">lnil-arrow-up-circle</p>
                <em>\ecb9</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-arrow-expand"></i>
                <p class="textFilter-match">lnil-arrow-expand</p>
                <em>\ecba</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-arrow-double-left"></i>
                <p class="textFilter-match">lnil-arrow-double-left</p>
                <em>\ecbb</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-arrows-vertical"></i>
                <p class="textFilter-match">lnil-arrows-vertical</p>
                <em>\ecbc</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-axis"></i>
                <p class="textFilter-match">lnil-axis</p>
                <em>\ecbd</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-arrow-up"></i>
                <p class="textFilter-match">lnil-arrow-up</p>
                <em>\ecbe</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-chevron-down"></i>
                <p class="textFilter-match">lnil-chevron-down</p>
                <em>\ecbf</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-chevron-left-circle"></i>
                <p class="textFilter-match">lnil-chevron-left-circle</p>
                <em>\ecc0</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-chevron-left"></i>
                <p class="textFilter-match">lnil-chevron-left</p>
                <em>\ecc1</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-chevron-down-circle"></i>
                <p class="textFilter-match">lnil-chevron-down-circle</p>
                <em>\ecc2</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-chevron-right"></i>
                <p class="textFilter-match">lnil-chevron-right</p>
                <em>\ecc3</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-chevron-up-circle"></i>
                <p class="textFilter-match">lnil-chevron-up-circle</p>
                <em>\ecc4</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="lnir lnir-chevron-right-circle"
                ></i>
                <p class="textFilter-match">lnil-chevron-right-circle</p>
                <em>\ecc5</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-arrow-down"></i>
                <p class="textFilter-match">lnil-arrow-down</p>
                <em>\ecc6</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-chevron-up"></i>
                <p class="textFilter-match">lnil-chevron-up</p>
                <em>\ecc7</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-direction-alt"></i>
                <p class="textFilter-match">lnil-direction-alt</p>
                <em>\ecc8</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-direction"></i>
                <p class="textFilter-match">lnil-direction</p>
                <em>\ecc9</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-down-arrow-box"></i>
                <p class="textFilter-match">lnil-down-arrow-box</p>
                <em>\ecca</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-down-left-arrow-box"></i>
                <p class="textFilter-match">lnil-down-left-arrow-box</p>
                <em>\eccb</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i
                  aria-hidden="true"
                  class="lnir lnir-down-right-arrow-box"
                ></i>
                <p class="textFilter-match">lnil-down-right-arrow-box</p>
                <em>\eccc</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-enter"></i>
                <p class="textFilter-match">lnil-enter</p>
                <em>\eccd</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-exit-down"></i>
                <p class="textFilter-match">lnil-exit-down</p>
                <em>\ecce</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-exit-up"></i>
                <p class="textFilter-match">lnil-exit-up</p>
                <em>\eccf</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-arrows-horizontal"></i>
                <p class="textFilter-match">lnil-arrows-horizontal</p>
                <em>\ecd0</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-direction-ltr"></i>
                <p class="textFilter-match">lnil-direction-ltr</p>
                <em>\ecd1</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-direction-rtl"></i>
                <p class="textFilter-match">lnil-direction-rtl</p>
                <em>\ecd2</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-exit"></i>
                <p class="textFilter-match">lnil-exit</p>
                <em>\ecd3</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-left-arrow-box"></i>
                <p class="textFilter-match">lnil-left-arrow-box</p>
                <em>\ecd4</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-pointer-top"></i>
                <p class="textFilter-match">lnil-pointer-top</p>
                <em>\ecd5</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-right-arrow-box"></i>
                <p class="textFilter-match">lnil-right-arrow-box</p>
                <em>\ecd6</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-shift-left"></i>
                <p class="textFilter-match">lnil-shift-left</p>
                <em>\ecd7</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-shift-right"></i>
                <p class="textFilter-match">lnil-shift-right</p>
                <em>\ecd8</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-top-arrow-box"></i>
                <p class="textFilter-match">lnil-top-arrow-box</p>
                <em>\ecd9</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-top-left-arrow-box"></i>
                <p class="textFilter-match">lnil-top-left-arrow-box</p>
                <em>\ecda</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-top-right-arrow-box"></i>
                <p class="textFilter-match">lnil-top-right-arrow-box</p>
                <em>\ecdb</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-pointer-down"></i>
                <p class="textFilter-match">lnil-pointer-down</p>
                <em>\ecdc</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-pointer-left"></i>
                <p class="textFilter-match">lnil-pointer-left</p>
                <em>\ecdd</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-pointer-right"></i>
                <p class="textFilter-match">lnil-pointer-right</p>
                <em>\ecde</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-brush-alt"></i>
                <p class="textFilter-match">lnil-brush-alt</p>
                <em>\ecdf</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-brush"></i>
                <p class="textFilter-match">lnil-brush</p>
                <em>\ece0</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-grid-alt"></i>
                <p class="textFilter-match">lnil-grid-alt</p>
                <em>\ece1</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-grid"></i>
                <p class="textFilter-match">lnil-grid</p>
                <em>\ece2</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-highlight-alt"></i>
                <p class="textFilter-match">lnil-highlight-alt</p>
                <em>\ece3</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-highlight"></i>
                <p class="textFilter-match">lnil-highlight</p>
                <em>\ece4</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-image-crop"></i>
                <p class="textFilter-match">lnil-image-crop</p>
                <em>\ece5</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-layers-alt-"></i>
                <p class="textFilter-match">lnil-layers-alt-</p>
                <em>\ece6</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-layers-alt-1"></i>
                <p class="textFilter-match">lnil-layers-alt-1</p>
                <em>\ece7</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-layers"></i>
                <p class="textFilter-match">lnil-layers</p>
                <em>\ece8</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-layout-alt-1"></i>
                <p class="textFilter-match">lnil-layout-alt-1</p>
                <em>\ece9</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-layout-alt-2"></i>
                <p class="textFilter-match">lnil-layout-alt-2</p>
                <em>\ecea</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-layout-alt"></i>
                <p class="textFilter-match">lnil-layout-alt</p>
                <em>\eceb</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-layout"></i>
                <p class="textFilter-match">lnil-layout</p>
                <em>\ecec</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-magic-wand"></i>
                <p class="textFilter-match">lnil-magic-wand</p>
                <em>\eced</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-margin"></i>
                <p class="textFilter-match">lnil-margin</p>
                <em>\ecee</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-move"></i>
                <p class="textFilter-match">lnil-move</p>
                <em>\ecef</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-pallet"></i>
                <p class="textFilter-match">lnil-pallet</p>
                <em>\ecf0</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-rotate"></i>
                <p class="textFilter-match">lnil-rotate</p>
                <em>\ecf1</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-scaling"></i>
                <p class="textFilter-match">lnil-scaling</p>
                <em>\ecf2</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-select"></i>
                <p class="textFilter-match">lnil-select</p>
                <em>\ecf3</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-size"></i>
                <p class="textFilter-match">lnil-size</p>
                <em>\ecf4</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-slice"></i>
                <p class="textFilter-match">lnil-slice</p>
                <em>\ecf5</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-transform"></i>
                <p class="textFilter-match">lnil-transform</p>
                <em>\ecf6</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-ux"></i>
                <p class="textFilter-match">lnil-ux</p>
                <em>\ecf7</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-vector-alt"></i>
                <p class="textFilter-match">lnil-vector-alt</p>
                <em>\ecf8</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-vector-pen"></i>
                <p class="textFilter-match">lnil-vector-pen</p>
                <em>\ecf9</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-vector"></i>
                <p class="textFilter-match">lnil-vector</p>
                <em>\ecfa</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-crop"></i>
                <p class="textFilter-match">lnil-crop</p>
                <em>\ecfb</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-color-palette"></i>
                <p class="textFilter-match">lnil-color-palette</p>
                <em>\ecfc</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-crop-alt"></i>
                <p class="textFilter-match">lnil-crop-alt</p>
                <em>\ecfd</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-boundary"></i>
                <p class="textFilter-match">lnil-boundary</p>
                <em>\ecfe</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-bricks-alt"></i>
                <p class="textFilter-match">lnil-bricks-alt</p>
                <em>\ecff</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-construction-hammer"></i>
                <p class="textFilter-match">lnil-construction-hammer</p>
                <em>\ed00</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-construction-rular"></i>
                <p class="textFilter-match">lnil-construction-rular</p>
                <em>\ed01</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-construction"></i>
                <p class="textFilter-match">lnil-construction</p>
                <em>\ed02</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-door-alt"></i>
                <p class="textFilter-match">lnil-door-alt</p>
                <em>\ed03</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-door"></i>
                <p class="textFilter-match">lnil-door</p>
                <em>\ed04</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-drill"></i>
                <p class="textFilter-match">lnil-drill</p>
                <em>\ed05</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-fence"></i>
                <p class="textFilter-match">lnil-fence</p>
                <em>\ed06</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-hammer-alt"></i>
                <p class="textFilter-match">lnil-hammer-alt</p>
                <em>\ed07</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-hammer"></i>
                <p class="textFilter-match">lnil-hammer</p>
                <em>\ed08</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-helmet-alt"></i>
                <p class="textFilter-match">lnil-helmet-alt</p>
                <em>\ed09</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-helmet"></i>
                <p class="textFilter-match">lnil-helmet</p>
                <em>\ed0a</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-hook"></i>
                <p class="textFilter-match">lnil-hook</p>
                <em>\ed0b</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-house-alt-1"></i>
                <p class="textFilter-match">lnil-house-alt-1</p>
                <em>\ed0c</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-house-alt"></i>
                <p class="textFilter-match">lnil-house-alt</p>
                <em>\ed0d</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-house-heart"></i>
                <p class="textFilter-match">lnil-house-heart</p>
                <em>\ed0e</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-house-plan"></i>
                <p class="textFilter-match">lnil-house-plan</p>
                <em>\ed0f</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-house"></i>
                <p class="textFilter-match">lnil-house</p>
                <em>\ed10</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-measuring-tape"></i>
                <p class="textFilter-match">lnil-measuring-tape</p>
                <em>\ed11</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-paint-bucket"></i>
                <p class="textFilter-match">lnil-paint-bucket</p>
                <em>\ed12</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-paint-roller-alt-1"></i>
                <p class="textFilter-match">lnil-paint-roller-alt-1</p>
                <em>\ed13</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-paint-roller-alt"></i>
                <p class="textFilter-match">lnil-paint-roller-alt</p>
                <em>\ed14</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-paint-roller"></i>
                <p class="textFilter-match">lnil-paint-roller</p>
                <em>\ed15</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-pipe"></i>
                <p class="textFilter-match">lnil-pipe</p>
                <em>\ed16</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-ruler-alt"></i>
                <p class="textFilter-match">lnil-ruler-alt</p>
                <em>\ed17</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-ruler-pencil"></i>
                <p class="textFilter-match">lnil-ruler-pencil</p>
                <em>\ed18</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-ruler"></i>
                <p class="textFilter-match">lnil-ruler</p>
                <em>\ed19</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-saw-alt"></i>
                <p class="textFilter-match">lnil-saw-alt</p>
                <em>\ed1a</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-saw"></i>
                <p class="textFilter-match">lnil-saw</p>
                <em>\ed1b</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-screw"></i>
                <p class="textFilter-match">lnil-screw</p>
                <em>\ed1c</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-screwdriver"></i>
                <p class="textFilter-match">lnil-screwdriver</p>
                <em>\ed1d</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-shovel"></i>
                <p class="textFilter-match">lnil-shovel</p>
                <em>\ed1e</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-toolbox"></i>
                <p class="textFilter-match">lnil-toolbox</p>
                <em>\ed1f</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-triangle-ruler-1"></i>
                <p class="textFilter-match">lnil-triangle-ruler-1</p>
                <em>\ed20</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-triangle-ruler"></i>
                <p class="textFilter-match">lnil-triangle-ruler</p>
                <em>\ed21</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-trowel-alt"></i>
                <p class="textFilter-match">lnil-trowel-alt</p>
                <em>\ed22</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-trowel"></i>
                <p class="textFilter-match">lnil-trowel</p>
                <em>\ed23</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-wheelbarrow"></i>
                <p class="textFilter-match">lnil-wheelbarrow</p>
                <em>\ed24</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-wrench"></i>
                <p class="textFilter-match">lnil-wrench</p>
                <em>\ed25</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-cone"></i>
                <p class="textFilter-match">lnil-cone</p>
                <em>\ed26</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-bricks"></i>
                <p class="textFilter-match">lnil-bricks</p>
                <em>\ed27</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-bulldozer"></i>
                <p class="textFilter-match">lnil-bulldozer</p>
                <em>\ed28</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-anchor"></i>
                <p class="textFilter-match">lnil-anchor</p>
                <em>\ed29</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-bi-cycle"></i>
                <p class="textFilter-match">lnil-bi-cycle</p>
                <em>\ed2a</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-bubble"></i>
                <p class="textFilter-match">lnil-bubble</p>
                <em>\ed2b</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-boarding-pass"></i>
                <p class="textFilter-match">lnil-boarding-pass</p>
                <em>\ed2c</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-bridge"></i>
                <p class="textFilter-match">lnil-bridge</p>
                <em>\ed2d</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-car-alt"></i>
                <p class="textFilter-match">lnil-car-alt</p>
                <em>\ed2e</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-car"></i>
                <p class="textFilter-match">lnil-car</p>
                <em>\ed2f</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-caravan"></i>
                <p class="textFilter-match">lnil-caravan</p>
                <em>\ed30</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-chat-add"></i>
                <p class="textFilter-match">lnil-chat-add</p>
                <em>\ed31</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-chat-minus"></i>
                <p class="textFilter-match">lnil-chat-minus</p>
                <em>\ed32</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-comments-alt"></i>
                <p class="textFilter-match">lnil-comments-alt</p>
                <em>\ed33</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-comments-reply"></i>
                <p class="textFilter-match">lnil-comments-reply</p>
                <em>\ed34</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-comments"></i>
                <p class="textFilter-match">lnil-comments</p>
                <em>\ed35</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-envelope-alt"></i>
                <p class="textFilter-match">lnil-envelope-alt</p>
                <em>\ed36</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-envelope"></i>
                <p class="textFilter-match">lnil-envelope</p>
                <em>\ed37</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-helicopter"></i>
                <p class="textFilter-match">lnil-helicopter</p>
                <em>\ed38</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-inbox"></i>
                <p class="textFilter-match">lnil-inbox</p>
                <em>\ed39</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-megaphone"></i>
                <p class="textFilter-match">lnil-megaphone</p>
                <em>\ed3a</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-message-attachement"></i>
                <p class="textFilter-match">lnil-message-attachement</p>
                <em>\ed3b</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-message-block"></i>
                <p class="textFilter-match">lnil-message-block</p>
                <em>\ed3c</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-message-check"></i>
                <p class="textFilter-match">lnil-message-check</p>
                <em>\ed3d</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-message-cross"></i>
                <p class="textFilter-match">lnil-message-cross</p>
                <em>\ed3e</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-message-desktop"></i>
                <p class="textFilter-match">lnil-message-desktop</p>
                <em>\ed3f</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-message-edit"></i>
                <p class="textFilter-match">lnil-message-edit</p>
                <em>\ed40</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-message-forward"></i>
                <p class="textFilter-match">lnil-message-forward</p>
                <em>\ed41</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-message-incoming"></i>
                <p class="textFilter-match">lnil-message-incoming</p>
                <em>\ed42</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-message-laptop"></i>
                <p class="textFilter-match">lnil-message-laptop</p>
                <em>\ed43</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-message-lock"></i>
                <p class="textFilter-match">lnil-message-lock</p>
                <em>\ed44</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-message-love"></i>
                <p class="textFilter-match">lnil-message-love</p>
                <em>\ed45</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-message-minus"></i>
                <p class="textFilter-match">lnil-message-minus</p>
                <em>\ed46</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-message-outgoing"></i>
                <p class="textFilter-match">lnil-message-outgoing</p>
                <em>\ed47</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-message-plus"></i>
                <p class="textFilter-match">lnil-message-plus</p>
                <em>\ed48</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-message-reply"></i>
                <p class="textFilter-match">lnil-message-reply</p>
                <em>\ed49</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-message-search"></i>
                <p class="textFilter-match">lnil-message-search</p>
                <em>\ed4a</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-message-share"></i>
                <p class="textFilter-match">lnil-message-share</p>
                <em>\ed4b</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-mobile-chat"></i>
                <p class="textFilter-match">lnil-mobile-chat</p>
                <em>\ed4c</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-page"></i>
                <p class="textFilter-match">lnil-page</p>
                <em>\ed4d</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-phone-block"></i>
                <p class="textFilter-match">lnil-phone-block</p>
                <em>\ed4e</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-phone-caling"></i>
                <p class="textFilter-match">lnil-phone-caling</p>
                <em>\ed4f</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-phone-conference"></i>
                <p class="textFilter-match">lnil-phone-conference</p>
                <em>\ed50</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-phone-cut"></i>
                <p class="textFilter-match">lnil-phone-cut</p>
                <em>\ed51</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-phone-forward"></i>
                <p class="textFilter-match">lnil-phone-forward</p>
                <em>\ed52</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-phone-incoming"></i>
                <p class="textFilter-match">lnil-phone-incoming</p>
                <em>\ed53</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-phone-misscall"></i>
                <p class="textFilter-match">lnil-phone-misscall</p>
                <em>\ed54</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-phone-outgoing"></i>
                <p class="textFilter-match">lnil-phone-outgoing</p>
                <em>\ed55</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-phone-pause"></i>
                <p class="textFilter-match">lnil-phone-pause</p>
                <em>\ed56</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-phone-redial"></i>
                <p class="textFilter-match">lnil-phone-redial</p>
                <em>\ed57</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-phone-ring"></i>
                <p class="textFilter-match">lnil-phone-ring</p>
                <em>\ed58</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-phone-set"></i>
                <p class="textFilter-match">lnil-phone-set</p>
                <em>\ed59</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-phone"></i>
                <p class="textFilter-match">lnil-phone</p>
                <em>\ed5a</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-plane-alt"></i>
                <p class="textFilter-match">lnil-plane-alt</p>
                <em>\ed5b</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-plane"></i>
                <p class="textFilter-match">lnil-plane</p>
                <em>\ed5c</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-popup"></i>
                <p class="textFilter-match">lnil-popup</p>
                <em>\ed5d</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-postcard-alt"></i>
                <p class="textFilter-match">lnil-postcard-alt</p>
                <em>\ed5e</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-postcard"></i>
                <p class="textFilter-match">lnil-postcard</p>
                <em>\ed5f</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-reply"></i>
                <p class="textFilter-match">lnil-reply</p>
                <em>\ed60</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-road"></i>
                <p class="textFilter-match">lnil-road</p>
                <em>\ed61</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-scooter"></i>
                <p class="textFilter-match">lnil-scooter</p>
                <em>\ed62</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-ship"></i>
                <p class="textFilter-match">lnil-ship</p>
                <em>\ed63</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-support"></i>
                <p class="textFilter-match">lnil-support</p>
                <em>\ed64</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-target-mail"></i>
                <p class="textFilter-match">lnil-target-mail</p>
                <em>\ed65</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-taxi"></i>
                <p class="textFilter-match">lnil-taxi</p>
                <em>\ed66</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-train-alt"></i>
                <p class="textFilter-match">lnil-train-alt</p>
                <em>\ed67</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-train"></i>
                <p class="textFilter-match">lnil-train</p>
                <em>\ed68</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-bullhorn"></i>
                <p class="textFilter-match">lnil-bullhorn</p>
                <em>\ed69</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-bus"></i>
                <p class="textFilter-match">lnil-bus</p>
                <em>\ed6a</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-boarding-pass-alt"></i>
                <p class="textFilter-match">lnil-boarding-pass-alt</p>
                <em>\ed6b</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-achievement"></i>
                <p class="textFilter-match">lnil-achievement</p>
                <em>\ed6c</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-agenda"></i>
                <p class="textFilter-match">lnil-agenda</p>
                <em>\ed6d</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-briefcase-alt"></i>
                <p class="textFilter-match">lnil-briefcase-alt</p>
                <em>\ed6e</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-apartment-alt"></i>
                <p class="textFilter-match">lnil-apartment-alt</p>
                <em>\ed6f</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-apartment"></i>
                <p class="textFilter-match">lnil-apartment</p>
                <em>\ed70</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-analytics-alt-1"></i>
                <p class="textFilter-match">lnil-analytics-alt-1</p>
                <em>\ed71</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-briefcase"></i>
                <p class="textFilter-match">lnil-briefcase</p>
                <em>\ed72</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-cart-alt"></i>
                <p class="textFilter-match">lnil-cart-alt</p>
                <em>\ed73</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-cart-down"></i>
                <p class="textFilter-match">lnil-cart-down</p>
                <em>\ed74</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-cart-empty"></i>
                <p class="textFilter-match">lnil-cart-empty</p>
                <em>\ed75</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-cart-full"></i>
                <p class="textFilter-match">lnil-cart-full</p>
                <em>\ed76</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-delivery"></i>
                <p class="textFilter-match">lnil-delivery</p>
                <em>\ed77</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-desk"></i>
                <p class="textFilter-match">lnil-desk</p>
                <em>\ed78</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-customer"></i>
                <p class="textFilter-match">lnil-customer</p>
                <em>\ed79</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-graph"></i>
                <p class="textFilter-match">lnil-graph</p>
                <em>\ed7a</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-grow"></i>
                <p class="textFilter-match">lnil-grow</p>
                <em>\ed7b</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-hierchy-alt"></i>
                <p class="textFilter-match">lnil-hierchy-alt</p>
                <em>\ed7c</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-global"></i>
                <p class="textFilter-match">lnil-global</p>
                <em>\ed7d</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-hierchy"></i>
                <p class="textFilter-match">lnil-hierchy</p>
                <em>\ed7e</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-investment"></i>
                <p class="textFilter-match">lnil-investment</p>
                <em>\ed7f</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-notepad"></i>
                <p class="textFilter-match">lnil-notepad</p>
                <em>\ed80</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-consulting"></i>
                <p class="textFilter-match">lnil-consulting</p>
                <em>\ed81</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-office-plan"></i>
                <p class="textFilter-match">lnil-office-plan</p>
                <em>\ed82</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-paperclip"></i>
                <p class="textFilter-match">lnil-paperclip</p>
                <em>\ed83</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-cart"></i>
                <p class="textFilter-match">lnil-cart</p>
                <em>\ed84</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-offer"></i>
                <p class="textFilter-match">lnil-offer</p>
                <em>\ed85</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-pie-chart-alt"></i>
                <p class="textFilter-match">lnil-pie-chart-alt</p>
                <em>\ed86</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-pie-chart-dollar"></i>
                <p class="textFilter-match">lnil-pie-chart-dollar</p>
                <em>\ed87</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-pie-chart"></i>
                <p class="textFilter-match">lnil-pie-chart</p>
                <em>\ed88</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-pie-report"></i>
                <p class="textFilter-match">lnil-pie-report</p>
                <em>\ed89</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-handshake"></i>
                <p class="textFilter-match">lnil-handshake</p>
                <em>\ed8a</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-pin-alt"></i>
                <p class="textFilter-match">lnil-pin-alt</p>
                <em>\ed8b</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-pin"></i>
                <p class="textFilter-match">lnil-pin</p>
                <em>\ed8c</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-quotation"></i>
                <p class="textFilter-match">lnil-quotation</p>
                <em>\ed8d</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-revenue"></i>
                <p class="textFilter-match">lnil-revenue</p>
                <em>\ed8e</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-stamp"></i>
                <p class="textFilter-match">lnil-stamp</p>
                <em>\ed8f</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-tablet-alt"></i>
                <p class="textFilter-match">lnil-tablet-alt</p>
                <em>\ed90</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-tag"></i>
                <p class="textFilter-match">lnil-tag</p>
                <em>\ed91</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-target-achievement"></i>
                <p class="textFilter-match">lnil-target-achievement</p>
                <em>\ed92</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-table"></i>
                <p class="textFilter-match">lnil-table</p>
                <em>\ed93</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-target-alt"></i>
                <p class="textFilter-match">lnil-target-alt</p>
                <em>\ed94</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-target-alt-1"></i>
                <p class="textFilter-match">lnil-target-alt-1</p>
                <em>\ed95</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-swatches"></i>
                <p class="textFilter-match">lnil-swatches</p>
                <em>\ed96</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-stats-down"></i>
                <p class="textFilter-match">lnil-stats-down</p>
                <em>\ed97</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-stats-up"></i>
                <p class="textFilter-match">lnil-stats-up</p>
                <em>\ed98</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-target-revenue"></i>
                <p class="textFilter-match">lnil-target-revenue</p>
                <em>\ed99</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-tie"></i>
                <p class="textFilter-match">lnil-tie</p>
                <em>\ed9a</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-target"></i>
                <p class="textFilter-match">lnil-target</p>
                <em>\ed9b</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-licencse"></i>
                <p class="textFilter-match">lnil-licencse</p>
                <em>\ed9c</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-target-remove"></i>
                <p class="textFilter-match">lnil-target-remove</p>
                <em>\ed9d</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-sales-report"></i>
                <p class="textFilter-match">lnil-sales-report</p>
                <em>\ed9e</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-Instagram"></i>
                <p class="textFilter-match">lnil-Instagram</p>
                <em>\ed9f</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-amazon"></i>
                <p class="textFilter-match">lnil-amazon</p>
                <em>\eda0</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-amex"></i>
                <p class="textFilter-match">lnil-amex</p>
                <em>\eda1</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-bitbucket"></i>
                <p class="textFilter-match">lnil-bitbucket</p>
                <em>\eda2</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-bitcoin"></i>
                <p class="textFilter-match">lnil-bitcoin</p>
                <em>\eda3</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-chrome"></i>
                <p class="textFilter-match">lnil-chrome</p>
                <em>\eda4</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-css3"></i>
                <p class="textFilter-match">lnil-css3</p>
                <em>\eda5</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-dribbble"></i>
                <p class="textFilter-match">lnil-dribbble</p>
                <em>\eda6</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-dropbox"></i>
                <p class="textFilter-match">lnil-dropbox</p>
                <em>\eda7</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-drupal"></i>
                <p class="textFilter-match">lnil-drupal</p>
                <em>\eda8</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-facebook"></i>
                <p class="textFilter-match">lnil-facebook</p>
                <em>\eda9</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-firefox"></i>
                <p class="textFilter-match">lnil-firefox</p>
                <em>\edaa</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-github"></i>
                <p class="textFilter-match">lnil-github</p>
                <em>\edab</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-html5"></i>
                <p class="textFilter-match">lnil-html5</p>
                <em>\edac</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-mastercard"></i>
                <p class="textFilter-match">lnil-mastercard</p>
                <em>\edad</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-paypal"></i>
                <p class="textFilter-match">lnil-paypal</p>
                <em>\edae</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-play-store"></i>
                <p class="textFilter-match">lnil-play-store</p>
                <em>\edaf</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-slack"></i>
                <p class="textFilter-match">lnil-slack</p>
                <em>\edb0</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-quora"></i>
                <p class="textFilter-match">lnil-quora</p>
                <em>\edb1</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-soundcloud"></i>
                <p class="textFilter-match">lnil-soundcloud</p>
                <em>\edb2</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-spotify"></i>
                <p class="textFilter-match">lnil-spotify</p>
                <em>\edb3</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-twitter"></i>
                <p class="textFilter-match">lnil-twitter</p>
                <em>\edb4</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-visa"></i>
                <p class="textFilter-match">lnil-visa</p>
                <em>\edb5</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-android"></i>
                <p class="textFilter-match">lnil-android</p>
                <em>\edb6</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-apple"></i>
                <p class="textFilter-match">lnil-apple</p>
                <em>\edb7</em>
                <input type="text" maxlength="1" readonly value="" />
              </li>

              <li class="textFilter-target">
                <i aria-hidden="true" class="lnir lnir-behance"></i>
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
