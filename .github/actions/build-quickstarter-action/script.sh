#!/bin/bash

DIRECTORY=`dirname $0`
INPUT_PROJECT=$1
INPUT_TAG=$2

if [ -z $INPUT_PROJECT ] 
then
  echo "<project> missing"
  echo "Usage: ${0} <project> <tag>"
  exit 1
fi

if [ -z $INPUT_TAG ] 
then
  echo "<tag> missing"
  echo "Usage: ${0} <project> <tag>"
  exit 1
fi

ARCHIVE=quickstarter-${INPUT_PROJECT}-${INPUT_TAG}.zip

echo "::group::building ${ARCHIVE}"
echo "::debug::${ARCHIVE}"

# disable VueroDocumentation
sed -i "s#import { VitePluginVueroDoc } from './vite-plugin-vuero-doc'#// eslint-disable-next-line @typescript-eslint/no-unused-vars\nconst VitePluginVueroDoc = (options: any) => {}#g" vite.config.ts

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

# remove unncecessary scripts
rm -rf \
  scripts/convert-screenshot-webp.sh \
  scripts/create-screenshot-data.ts \
  scripts/generate-screenhots.sh \
  scripts/optimize-images.sh

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

# remove unncecessary composable for the quickstart
find src/composable -type f -not \( \
  -name 'useFetch.ts' \
  -or -name 'useDropdown.ts' \
  -or -name 'useCreditcardMask.ts' \
  -or -name 'useNotyf.ts' \
  -or -name 'useThemeColors.ts' \
  -or -name 'useVFieldContext.ts' \
  \) -delete

# remove unncecessary stores for the quickstart
find src/stores -type f -not \( \
  -name 'darkmode.ts' \
  -or -name 'panels.ts' \
  -or -name 'sidebar.ts' \
  -or -name 'userSession.ts' \
  -or -name 'viewWrapper.ts' \
  \) -delete

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

# src/assets/illustrations/apps/vuero-banking-light.webp
# src/assets/illustrations/apps/vuero-banking-dark.webp
# src/assets/illustrations/landing/app-1.webp
# src/assets/illustrations/landing/app-1-dark.webp
# src/assets/illustrations/landing/app-2.png
# src/assets/illustrations/landing/app-2-dark.png
# src/assets/illustrations/landing/feature-1.webp
# src/assets/illustrations/landing/feature-1-dark.webp
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
  -or -name 'app-1.webp' \
  -or -name 'app-1-dark.webp' \
  -or -name 'app-2.png' \
  -or -name 'app-2-dark.png' \
  -or -name 'feature-1.webp' \
  -or -name 'feature-1-dark.webp' \
  -or -name 'feature-2.svg' \
  -or -name 'feature-2-dark.svg' \
  -or -name 'feature-3.svg' \
  -or -name 'feature-3-dark.svg' \
  -or -name 'languages.svg' \
  -or -name 'languages-dark.svg' \
  -or -name 'vuero-banking-light.webp' \
  -or -name 'vuero-banking-dark.webp' \
  \) -delete

find src/assets -type d -empty -delete

# ## build without artifacts and with quickstarter content
# yarn build

# top level zip release-${INPUT_PROJECT}-${INPUT_TAG}.zip 
zip -r $ARCHIVE . \
  -x "*.zip" \
  -x "node_modules/*" \
  -x "vite-plugin-vuero-doc/*" \
  -x ".git/*" \
  -x ".github/*" \
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

echo "$PWD"
echo "$DIRECTORY"
echo "$GITHUB_WORKSPACE"

ls -lh $ARCHIVE

echo "::endgroup::"

echo "- ${INPUT_PROJECT^} ${INPUT_TAG} quickstarter built :rocket:" >> $GITHUB_STEP_SUMMARY

# echo "::set-output name=filepath::${ARCHIVE}"
echo "filepath=${ARCHIVE}" >> "$GITHUB_OUTPUT"