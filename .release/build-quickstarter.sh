#!/bin/bash
PROJECT=$1
TAG=$2

if [ -z $PROJECT ] 
then
  echo "<project> missing"
  echo "Usage: ${0} <project> <tag>"
  exit 1
fi

if [ -z $TAG ] 
then
  echo "<tag> missing"
  echo "Usage: ${0} <project> <tag>"
  exit 1
fi

set -xe

# # enable "rollupOptions.external" in vite.config.ts
sed -i "s#import VueroDocumentation from './vite-plugin-vuero-doc/index'#// import VueroDocumentation from './vite-plugin-vuero-doc/index'#g" ./vite.config.ts
sed -i "s#VueroDocumentation()#// VueroDocumentation()#g" ./vite.config.ts

# remove build artifacts and pages/layouts
rm -rf \
  src/pages \
  src/layouts \
  dist
  
# swap quickstart pages
mv \
  src/pages-quickstart \
  src/pages

# swap quickstart layouts
mv \
  src/layouts-quickstart \
  src/layouts

# remove unncecessary markdown files
find documentation -type f -name "*md" -delete
find documentation -type d -empty -delete

# public/images/icons/flags/*
# public/images/icons/stacks/*
# public/images/icons/hexagons/*
# public/fonts/*

# remove unncecessary public assets for the quickstart
rm -rf \
  public/{api,demo} \
  public/images/{illustrations,photos,screenshots} \
  public/icons/{components,cryptocurrencies,dashboards,datatable,files,food,layouts,logos,misc,soccer} \
  src/models \
  src/data
find public -type d -empty -delete

# src/components/pages/dashboards/business/FlightsDashboard.vue
# src/components/partials/dropdowns/FlightResultsDropdown.vue
# src/components/partials/widgets/ui-creative/UIWidget.vue
# src/components/partials/marketing/MarketingFeaturesIcons.vue
# src/components/partials/marketing/MarketingPricings.vue
# src/components/partials/marketing/MarketingMockup.vue
# src/components/partials/marketing/MarketingSideFeatures.vue
# src/components/partials/marketing/MarketingAbout.vue
# src/components/partials/landing/LandingFooter.vue
# src/components/partials/landing/LandingEmptyNavigation.vue
# src/components/navigation/mobile/MobileNavbar.vue
# src/components/navigation/mobile/MobileSidebar.vue
# src/components/navigation/desktop/Sidebar.vue
# src/components/partials/dropdowns/UserProfileDropdown.vue
# src/components/partials/dropdowns/NotificationsMobileDropdown.vue
# src/components/partials/panels/LanguagesPanel.vue
# src/components/partials/toolbars/Toolbar.vue
# src/components/svg/AnimatedLogo.vue

# remove unncecessary components for the quickstart
find src/components/{svg,navigation,pages,partials} -type f -not \( \
  -name 'FlightsDashboard.vue' \
  -or -name 'StackPopoverContent.vue' \
  -or -name 'FlightResultsDropdown.vue' \
  -or -name 'UIWidget.vue' \
  -or -name 'MarketingFeaturesIcons.vue' \
  -or -name 'MarketingPricings.vue' \
  -or -name 'MarketingMockup.vue' \
  -or -name 'MarketingSideFeatures.vue' \
  -or -name 'MarketingAbout.vue' \
  -or -name 'LandingFooter.vue' \
  -or -name 'LandingEmptyNavigation.vue' \
  -or -name 'MobileNavbar.vue' \
  -or -name 'MobileSidebar.vue' \
  -or -name 'Sidebar.vue' \
  -or -name 'UserProfileDropdown.vue' \
  -or -name 'NotificationsMobileDropdown.vue' \
  -or -name 'LanguagesPanel.vue' \
  -or -name 'Toolbar.vue' \
  -or -name 'AnimatedLogo.vue' \
  \) -delete

find src/components/{svg,navigation,pages,partials} -type d -empty -delete

# src/assets/illustrations/apps/vuero-banking-light.png
# src/assets/illustrations/apps/vuero-banking-dark.png
# src/assets/illustrations/landing/app-1.png
# src/assets/illustrations/landing/app-1-dark.png
# src/assets/illustrations/landing/app-2.png
# src/assets/illustrations/landing/app-2-dark.png
# src/assets/illustrations/dashboards/flights/*
# src/assets/illustrations/right-panel/languages.svg
# src/assets/illustrations/right-panel/languages-dark.svg

# remove unncecessary assets for the quickstart
find src/assets -type f -not \( \
  -name 'travel.svg' \
  -or -name 'travel-dark.svg' \
  -or -name 'company1.svg' \
  -or -name 'company2.svg' \
  -or -name 'company3.svg' \
  -or -name 'app-1.png' \
  -or -name 'app-1-dark.png' \
  -or -name 'app-2.png' \
  -or -name 'app-2-dark.png' \
  -or -name 'feature-1.png' \
  -or -name 'feature-1-dark.png' \
  -or -name 'feature-2.svg' \
  -or -name 'feature-2-dark.svg' \
  -or -name 'feature-3.svg' \
  -or -name 'feature-3-dark.svg' \
  -or -name 'languages.svg' \
  -or -name 'languages-dark.svg' \
  -or -name 'vuero-banking-light.png' \
  -or -name 'vuero-banking-dark.png' \
  \) -delete

find src/assets -type d -empty -delete

## build without artifacts and with quickstarter content
yarn build

# zip sources quickstarter-${PROJECT}-${TAG}.zip
zip -r .release/quickstarter-${PROJECT}-${TAG}.zip . \
  -x "*.zip" \
  -x "node_modules/*" \
  -x "vite-plugin-vuero-doc/*" \
  -x ".release/*" \
  -x ".scannerwork/*" \
  -x ".git/*" \
  -x ".github/*" \
  -x "cypress/*" \
  -x "scripts/*" \
  -x "sonar-project.properties" \
  -x "cypress.json" \
  -x "docker-compose.sonarqube.yml"\
  -x "docker-compose.e2e.yml"\
  -x "docker-compose.yml"


# remove build artifacts and pages/layouts
rm -rf \
  src/pages \
  src/layouts \
  dist

# reset index
git checkout \
  src \
  public \
  documentation \
  vite.config.ts