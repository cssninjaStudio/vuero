# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [2.2.0](https://github.com/cssninjaStudio/vuero/compare/v2.1.0...v2.2.0) (2022-01-03)

### Features

- **accessibility:** enable click-events-have-key-events eslint rule ([0d55212](https://github.com/cssninjaStudio/vuero/commit/0d55212e778e8268eeecc855a55ecdaf6ccb7353))
- **accessibility:** improve focus styles and keyboard navigation ([18a62e7](https://github.com/cssninjaStudio/vuero/commit/18a62e7cc973b75e2df49310ce9c88aea8d00846))
- **accessibility:** improve keyboard navigation on form pages ([3868a72](https://github.com/cssninjaStudio/vuero/commit/3868a72b72518dd7078362be6497a07c5321d5ab))
- add useThemeColors composable ([a1f84d8](https://github.com/cssninjaStudio/vuero/commit/a1f84d87d4c6c42ef1898726d9adc7c65249425a))
- **layouts:** add new Sideblock layout ([ff5f774](https://github.com/cssninjaStudio/vuero/commit/ff5f774b070fc6c09f74a712bdfbd03c75226627))
- **linters:** upgrade to stylelint v14 + other linter minor versions ([b5cbd8c](https://github.com/cssninjaStudio/vuero/commit/b5cbd8ce6627114c0a923fd49cc8c469ef10abe0))
- **page-icons:** add copy snippets to clipboard on all icons examples ([271acd9](https://github.com/cssninjaStudio/vuero/commit/271acd9406ea794252184aae8333fb6ff17bb3f0))
- **page-influencer:** split page into smaller and more reusable components ([46307a4](https://github.com/cssninjaStudio/vuero/commit/46307a4503ba352987dda72eb4c4511aad034bd8))
- **page-messaging-v1:** split page into smaller and more reusable components with api call samples ([0bf5d04](https://github.com/cssninjaStudio/vuero/commit/0bf5d04bec5cb0abf2a6ecacee123dc1590f01c5))
- **sidebar-collapsable-links:** replace has-nested-router-link directive with a component ([141311c](https://github.com/cssninjaStudio/vuero/commit/141311c00c73687b5fbac40e88e0fdd565a193d5))
- **stores:** convert activePanelState to pinia ([89c3c6a](https://github.com/cssninjaStudio/vuero/commit/89c3c6ac7166ec383e28f13fc4a02e497ddc90de))
- **stores:** convert activeSidebarState to pinia ([7a71043](https://github.com/cssninjaStudio/vuero/commit/7a7104343345afc1dfd45bc0db43ebe2416e3046))
- **stores:** convert darkModeState to pinia ([352b2ee](https://github.com/cssninjaStudio/vuero/commit/352b2eeca95357bd664a41dd611755095fb534f5))
- **stores:** convert navbarLayoutState and sidebarLayoutState to layoutSwitcher store ([949ed35](https://github.com/cssninjaStudio/vuero/commit/949ed357717d66ae66553d9c7e9aad172a5d516e))
- **stores:** enable hot module replacement on pinia modules ([37690dc](https://github.com/cssninjaStudio/vuero/commit/37690dcf26e3e5839015e78ccc79014b65fac671))
- **stores:** use viewWrapper store to handle pageTitle ([87e2766](https://github.com/cssninjaStudio/vuero/commit/87e2766f30bc954f767d0a9f1898227649946ee7))
- **styles:** Move styles to components to allow reusability ([#126](https://github.com/cssninjaStudio/vuero/issues/126)) ([448b53c](https://github.com/cssninjaStudio/vuero/commit/448b53ce69d97b94ac4054a6bf2b5e8d34f4d862))
- **v-flex-table-wrapper:** add pagination, sort, filter and async data to v-flex-table ([#127](https://github.com/cssninjaStudio/vuero/issues/127)) ([5a24ac2](https://github.com/cssninjaStudio/vuero/commit/5a24ac2b91216a7d29e34959bd54693a0bba27fe))
- **v-flex-table:** improve darkmode and responsive + add separators prop ([6aa8f5a](https://github.com/cssninjaStudio/vuero/commit/6aa8f5ad8049597096d95c8f75f9c892cfc68c8f))
- **v-flex-table:** rewrite component with slots and render functions ([cf67662](https://github.com/cssninjaStudio/vuero/commit/cf67662b0ce26a1618419a87a9d77ff8774986d3))
- **v-page-content-wrapper:** add base layout component ([47c90e2](https://github.com/cssninjaStudio/vuero/commit/47c90e27615eb1559ce8d3a294d21ac94968742c))
- **v-page-content:** add base layout component ([5881d07](https://github.com/cssninjaStudio/vuero/commit/5881d07e664c63f391030b404bce8fcd134dc622))
- **v-placeload:** add mobileWidth and mobileHeight properties ([17050a4](https://github.com/cssninjaStudio/vuero/commit/17050a4e586a113817010adc7227da378972813a))
- **v-view-wrapper:** add base layout component ([4c8384e](https://github.com/cssninjaStudio/vuero/commit/4c8384e5b4aa37c18ea14fe9b9516a8174fe8d6d))
- work on sideblock layout ([4aacc70](https://github.com/cssninjaStudio/vuero/commit/4aacc7010b74eeff670d20a54673ba8b7faff7ba))

### Bug Fixes

- add missing slots to base components ([9a64c83](https://github.com/cssninjaStudio/vuero/commit/9a64c83abe098499e4edfebdbe8535aef879fcb0))
- **composable:** export named composable instead of default ([a911ea4](https://github.com/cssninjaStudio/vuero/commit/a911ea4695a1427a297b0622fb53ac6a97693e1e))
- **composable:** update useApi error message ([9946588](https://github.com/cssninjaStudio/vuero/commit/994658809507a7746c37cf535badec706f3b5bb5))
- **composable:** wrap useNotif with createSharedComposable from vueuse ([d7a59cb](https://github.com/cssninjaStudio/vuero/commit/d7a59cbfcc5f91c07626acb68c23ada54ff0c137))
- **page-signup:** done button now submit the register form ([0ee5486](https://github.com/cssninjaStudio/vuero/commit/0ee5486d37630ac56ad421ef0d4693a1fddf630e)), closes [#124](https://github.com/cssninjaStudio/vuero/issues/124)
- sidebar hover labels ([1d21728](https://github.com/cssninjaStudio/vuero/commit/1d2172850b8ece264a3c0ecc113fe347ca1ba967))
- simplify app.ts + main.ts files and create VueroApp.vue ([e8b1132](https://github.com/cssninjaStudio/vuero/commit/e8b1132f2555a357b121a9253b1b43653f7cbae5))
- update modal form examples ([029dcd2](https://github.com/cssninjaStudio/vuero/commit/029dcd20c84309c2420a4a28c681784a482a7703))
- **useApi:** remove provide/inject + add initial page router guard async example ([b725be2](https://github.com/cssninjaStudio/vuero/commit/b725be2c5bfbca9b47f6e2f7a86349ec574d1956))
- **utils:** rename themeColors to theme-colors ([e6168a3](https://github.com/cssninjaStudio/vuero/commit/e6168a32fe0926a038918278ee60719b06864b2f))
- **v-field:** auto-generate input id binded with label ([bfd7e58](https://github.com/cssninjaStudio/vuero/commit/bfd7e58835ac5b52e1939ba0de90244f54ce2d69))

## [2.1.0](https://github.com/cssninjaStudio/vuero/compare/v2.0.0...v2.1.0) (2021-10-06)

### Features

- **accessibility:** add eslint plugin to check accessibility in vue 3 files ([b4c5774](https://github.com/cssninjaStudio/vuero/commit/b4c577441fb55d9a35b4310b0d6a5c7cae5173d3))
- **build:** add rollup purgecss plugin ([7475783](https://github.com/cssninjaStudio/vuero/commit/747578359031a3e4d30e2ddea3cab1ad58808021))
- **notyf:** improve useNotif to use INotyfNotificationOptions payload ([5968143](https://github.com/cssninjaStudio/vuero/commit/596814364aa4ee275ba2dc6d556469ba42a5ff20))
- **pinia:** replace userSession and wizard states with pinia stores ([5966a86](https://github.com/cssninjaStudio/vuero/commit/5966a861c7ca16180fa4cc1c79468acd9485fa21))
- **v-credit-card:** translate component + set default props values ([198c7cb](https://github.com/cssninjaStudio/vuero/commit/198c7cbf02cb4011b8184fc9a0fef27251b132f5))
- **v-peity:** add peity chart component (close [#100](https://github.com/cssninjaStudio/vuero/issues/100)) ([3e59f07](https://github.com/cssninjaStudio/vuero/commit/3e59f07123ca47d3ba996d98b5bdf6ee2ee61337))

### Bug Fixes

- **datepicker:** use camel-case component name in markdown examples ([998ee61](https://github.com/cssninjaStudio/vuero/commit/998ee61b25df173e8632f5aa86d2e2dcd39a8120))
- delay icon loading and set purgecss safelist ([eb06946](https://github.com/cssninjaStudio/vuero/commit/eb069466b4d32cec6115a93115f861dae1d050b5))
- **homepage:** add discord and github info + version from package.json ([f0d068b](https://github.com/cssninjaStudio/vuero/commit/f0d068bf10fafda43feeb0e5bdb6cbcd5195b668))
- **i18n:** persist selected language when user use the language panel ([8c11b19](https://github.com/cssninjaStudio/vuero/commit/8c11b1932d4d040757fd475a862921b48a00f854))
- **main:** update how userSession and api are provided ([644924c](https://github.com/cssninjaStudio/vuero/commit/644924c3c5fa0300918ba98eb24c8a92342fee78))
- **nabar-divider:** use border cssvar for bg color (close [#109](https://github.com/cssninjaStudio/vuero/issues/109)) ([3e8f330](https://github.com/cssninjaStudio/vuero/commit/3e8f3304d3f63752f2e4db85b0f4f663d51a2bd5))
- **quickstarter:** clean unused files before adding to the release archive ([db65175](https://github.com/cssninjaStudio/vuero/commit/db651752103499e43242790040548011147faa2d))
- **quickstarter:** remove all demo images references ([3cf8fce](https://github.com/cssninjaStudio/vuero/commit/3cf8fce2a99555753dc4366d54fba486ccae958b))
- **quickstart:** use LandingLayout on not found page ([4294eb0](https://github.com/cssninjaStudio/vuero/commit/4294eb0c17c483c6aedf50a608ca5616bc32ccba))
- remove unused images ([c706d43](https://github.com/cssninjaStudio/vuero/commit/c706d43521339f274a9ed4ebdd0f0f18948b0758))
- use regex in hsltohex parser ([948d56d](https://github.com/cssninjaStudio/vuero/commit/948d56d471c17c8c529b7a7310f041e2146c6150))
- **user-grid-v3:** tab slider was missing ([bc49405](https://github.com/cssninjaStudio/vuero/commit/bc49405df2403dfe157acb6430e22c45d351944f))
- **v-avatar:** light/dark image toggle (close [#107](https://github.com/cssninjaStudio/vuero/issues/107)) ([a651520](https://github.com/cssninjaStudio/vuero/commit/a6515200f3cf159f0ac1b4ea755ba9e742211e3f))
- **v-flex-pagination:** last page was missing in some cases ([e5ccd13](https://github.com/cssninjaStudio/vuero/commit/e5ccd13c38f94c5ea057a2e9abecaa57aab2c91e))
- **vscode:** simplify settings and update recommended extensions ([99215e8](https://github.com/cssninjaStudio/vuero/commit/99215e803dc00a8a50f9f2d88506e3a7db82144f))

## [2.0.0](https://github.com/cssninjaStudio/vuero/compare/v1.4.0...v2.0.0) (2021-09-21)

### ⚠ BREAKING CHANGES

- **typescript:** remove dashs `-` from components name to match vue standards
- **typescript:** enable volar and vue-tsc

### Features

- add soccer and jobs dashboards ([386206a](https://github.com/cssninjaStudio/vuero/commit/386206a2cb3b00a769b4bebd8adefaa8f670cca9))
- add VFlex, VFlexItem, VGrid and VGridItem components ([70afa23](https://github.com/cssninjaStudio/vuero/commit/70afa23e39accb4851ad96ce65b3d4126b3b9535))
- add video player on home, fix: multiselect shadow ([d88e0cb](https://github.com/cssninjaStudio/vuero/commit/d88e0cb54f14541d544fa55aa5d6ccfa62837f29))
- **homepage:** add demo search input ([a2c6220](https://github.com/cssninjaStudio/vuero/commit/a2c6220416d7ec47a9d49657b2a7936cee6820dc))
- **i18n:** translate auth/signup-2 page ([7aa6d3f](https://github.com/cssninjaStudio/vuero/commit/7aa6d3f8c6b12319a5ee1c98844401dd82efbab4))
- **typescript:** enable volar and vue-tsc ([869969a](https://github.com/cssninjaStudio/vuero/commit/869969a8dab1578108c5bcd783c36b96a295a17c))
- **typescript:** remove dashs `-` from components name to match vue standards ([a0505c7](https://github.com/cssninjaStudio/vuero/commit/a0505c7c87ef7f3bcc981e143241382b250ced9f))
- **vee-validate:** add form validation example won signup-2 demo page (close [#82](https://github.com/cssninjaStudio/vuero/issues/82)) ([5c2081f](https://github.com/cssninjaStudio/vuero/commit/5c2081ffc0a05cdf68dfbda2b16608e0c1e009f4))

### Bug Fixes

- **cypress:** add new page + fill auth form when required ([be7ab25](https://github.com/cssninjaStudio/vuero/commit/be7ab2570ca9276d03f3f6829c2f4fbc2b7100dd))
- **dark:** change border and red colors in dark mode ([a923e09](https://github.com/cssninjaStudio/vuero/commit/a923e0972b47af72164fdd081deb1acba6c81489))
- **flex-pagination:** aria-current value when empty page ([0d4794e](https://github.com/cssninjaStudio/vuero/commit/0d4794e84989ec064dd31329c0c3a2e2e2798325))
- **form-stepper:** broken dark mode ([353ba4d](https://github.com/cssninjaStudio/vuero/commit/353ba4dfcd3b63a20ec43387a72961449c8237e4))
- **icons:** replace huge html file ([ccfc19f](https://github.com/cssninjaStudio/vuero/commit/ccfc19f7db5f180e27fa7b98689583c1b4062fcf))
- **profile-edit:** edit profile menu item hover color (close [#101](https://github.com/cssninjaStudio/vuero/issues/101)) ([744e7dd](https://github.com/cssninjaStudio/vuero/commit/744e7ddaf55700a1fd2a68590a76546b905bbebb))
- **project-details:** broken tabs (close [#103](https://github.com/cssninjaStudio/vuero/issues/103)) ([f374b23](https://github.com/cssninjaStudio/vuero/commit/f374b23111563663028bec749cf718d808e75620))
- **stylelint:** disable value-keyword-case rule ([8be676f](https://github.com/cssninjaStudio/vuero/commit/8be676f14109cb94796f8cba199d8f19f8b30fde))
- **theme-colors:** use getComputedStyle and map css variable values to themeColors (close [#95](https://github.com/cssninjaStudio/vuero/issues/95)) ([c895d1d](https://github.com/cssninjaStudio/vuero/commit/c895d1d3b3ce04f7bbf69469fc305db083ec8c40))
- **v-avatar-stack:** add limit into props interface (close [#97](https://github.com/cssninjaStudio/vuero/issues/97)) ([efb9cf9](https://github.com/cssninjaStudio/vuero/commit/efb9cf9b2430209a03dee71b636044fbd3f42dd9))
- **v-date-picker:** use kebab case ([a715486](https://github.com/cssninjaStudio/vuero/commit/a715486e22a6db2be58919af44db6bded8598258))
- **v-plyr:** clean iframe source ([0148804](https://github.com/cssninjaStudio/vuero/commit/014880411dcbf4d20095ffbe75803365af6cb580))
- **vaccordion:** use default value when no openItems props is set (close [#93](https://github.com/cssninjaStudio/vuero/issues/93)) ([632fb1e](https://github.com/cssninjaStudio/vuero/commit/632fb1ef6b65a1f6e5908cfab7af57e417277303))
- **vfilepond:** custom file validator to map accepted file props ([eb5bc18](https://github.com/cssninjaStudio/vuero/commit/eb5bc1805221c5ee356aa3c8184a544168386b11))

## [1.4.0](https://github.com/cssninja-digisquad/vuero/compare/v1.3.2...v1.4.0) (2021-09-09)

### Features

- **collapse-model:** add v-collapsemodel component ([2ad9030](https://github.com/cssninja-digisquad/vuero/commit/2ad903010fd6eee21c0f5d2561f391bb35805e85))
- **components:** add v-flex in components, add css vars documentation ([a64cdf5](https://github.com/cssninja-digisquad/vuero/commit/a64cdf5ac39a8bd65fdc9bd1c1e9f77ed8be6104))
- **dev-tools:** add commitlint and standard-version release tool for changelog/version generation ([1f0d473](https://github.com/cssninja-digisquad/vuero/commit/1f0d4739c6bea2a9ffbea32c7a896dab58bef64c))
- **docs:** add color picker on documentation ([4a2a844](https://github.com/cssninja-digisquad/vuero/commit/4a2a844d4df8d8b9b85b445c516fa33ebe3c6911))
- **env:** add .env file with example for mapbox api key) ([7f4ef80](https://github.com/cssninja-digisquad/vuero/commit/7f4ef8057d73a753a8d9920512f045447c38d7b1))
- **flex-pagination:** translate component ([760fd47](https://github.com/cssninja-digisquad/vuero/commit/760fd476e3cbaebad6e28543b7e37191f2e3c0e6))
- **flex:** add v-flex component ([2d39989](https://github.com/cssninja-digisquad/vuero/commit/2d39989471c8c3ad67c5dc2d2c5c40168a569905))
- **modal:** translate component ([4fbb873](https://github.com/cssninja-digisquad/vuero/commit/4fbb873adc4f5de5844201c8bb379967faa06b86))
- **page-404:** translate page ([d4619cf](https://github.com/cssninja-digisquad/vuero/commit/d4619cf3c787b0f24fbfed317933cc2cceb9dc00))
- **reload-promp:** add appName props + translate component ([a4475a4](https://github.com/cssninja-digisquad/vuero/commit/a4475a4a0557202f4d53cda9bd690702d9984dc5))
- **scss:** migrate to native css variables 🌈 ([a680ad6](https://github.com/cssninja-digisquad/vuero/commit/a680ad63910043f39989bebd8ad52e773d5520dc))
- **scss:** replace darken function in components with variables ([d5f72a2](https://github.com/cssninja-digisquad/vuero/commit/d5f72a23217b4de23aca030844d2763f502bb77d))
- **scss:** replace lighten function in components with variables ([970586a](https://github.com/cssninja-digisquad/vuero/commit/970586a99b14a85a855c41576426a69e55f15b4a))
- **scss:** resolve darken/lighten colors ([c17b9f8](https://github.com/cssninja-digisquad/vuero/commit/c17b9f8d7eea2ed57cbde53c443685bfdbd81889))
- **svg:** add vite-svg-loader + use css variables in error-1.svg for demo ([69c1867](https://github.com/cssninja-digisquad/vuero/commit/69c186782a03b7fd4b47a35642084feb63932c81))
- **typings:** migrate all components declaration to typescript with generic type notation ([3e6c654](https://github.com/cssninja-digisquad/vuero/commit/3e6c6546bd0b413f8ddebfc2587f7624b82b01ab))

### Bug Fixes

- **button:** import v-placeload instead of resolving ([c97f1b0](https://github.com/cssninja-digisquad/vuero/commit/c97f1b042b98edab82bf59c02743b99e7984e290))
- collapse icon ([c7d52cc](https://github.com/cssninja-digisquad/vuero/commit/c7d52cc8df70cd594320b55d74a0814d95a95162))
- **dark-mode:** set is-dark class to documentElement (root html) instead of body ([c6c3bf5](https://github.com/cssninja-digisquad/vuero/commit/c6c3bf5e8e6d68aa1a920d9ff6a318ea5df9deb0))
- **svg:** use .svg in html to avoid being imported as component by vite-svg-loader ([f98be7e](https://github.com/cssninja-digisquad/vuero/commit/f98be7edab65421d19db0bd9618ccaea85ef2d07))
- **typings:** remove unecessary declaration + ignore components.d.ts for linter ([46da1bb](https://github.com/cssninja-digisquad/vuero/commit/46da1bb8c7f06682a3fe0550657c29b42048dbdc))

## 1.3.0 (2021-07-17)

- fix: circular menu watcheffect ([85a086e](https://github.com/cssninja-digisquad/vuero/commit/85a086e))
- fix: plyr cover video size ([63e307f](https://github.com/cssninja-digisquad/vuero/commit/63e307f))
- feat: add redirection pages examples in auth and error ([72eed3b](https://github.com/cssninja-digisquad/vuero/commit/72eed3b))
- feat: add simple quickstarter pages and layout ([78d09cd](https://github.com/cssninja-digisquad/vuero/commit/78d09cd))
- feat: add useApi and useUserSession composable + add navigation guard example on dashboards pages ([c90cc4c](https://github.com/cssninja-digisquad/vuero/commit/c90cc4c))
- feat: update to vue 3.2.0 ([a3ecf95](https://github.com/cssninja-digisquad/vuero/commit/a3ecf95))
- feat: add V-Vivus component ([131de2d](https://github.com/cssninja-digisquad/vuero/commit/131de2d))
- chore: add license file and fix minimum node version ([05e59e0](https://github.com/cssninja-digisquad/vuero/commit/05e59e0))
- chore: uniformisation of defineProps usage ([2a26c01](https://github.com/cssninja-digisquad/vuero/commit/2a26c01))
- chore: update documentation link ([1f784a0](https://github.com/cssninja-digisquad/vuero/commit/1f784a0))
- chore: update redirection route in navigation guard to 'auth' instead of 'auth-login-1' ([9a63639](https://github.com/cssninja-digisquad/vuero/commit/9a63639))
- refactor: export function in i18n and router ([a44d8c1](https://github.com/cssninja-digisquad/vuero/commit/a44d8c1))
- refactor(v-button): use render function instead of template ([95ba553](https://github.com/cssninja-digisquad/vuero/commit/95ba553))
- refactor(v-iconbutton): use render function instead of template ([5249d65](https://github.com/cssninja-digisquad/vuero/commit/5249d65))
- dx: improve subdirectory path comments ([7d792fc](https://github.com/cssninja-digisquad/vuero/commit/7d792fc))
- ci: update build script to build without assets + documentation redirect ([cc7058f](https://github.com/cssninja-digisquad/vuero/commit/cc7058f))

## <small>1.2.1 (2021-06-24)</small>

- fix: colored navbar notification (close #83) ([182ef79](https://github.com/cssninja-digisquad/vuero/commit/182ef79)), closes [#83](https://github.com/cssninja-digisquad/vuero/issues/83)
- fix: mobile user dropdown on navbar (close #84) ([c3b5e31](https://github.com/cssninja-digisquad/vuero/commit/c3b5e31)), closes [#84](https://github.com/cssninja-digisquad/vuero/issues/84)
- fix: onboarding page responsive (close #77) ([2d318df](https://github.com/cssninja-digisquad/vuero/commit/2d318df)), closes [#77](https://github.com/cssninja-digisquad/vuero/issues/77)

## 1.2.0 (2021-06-21)

- feat: add maps pages with mapbox ([0bb8c25](https://github.com/cssninja-digisquad/vuero/commit/0bb8c25))
- feat: extract messaging layout ([de96804](https://github.com/cssninja-digisquad/vuero/commit/de96804))
- feat: simplify minimal layout ([a16cb70](https://github.com/cssninja-digisquad/vuero/commit/a16cb70))
- feat: simplify navbar layout ([c24eec2](https://github.com/cssninja-digisquad/vuero/commit/c24eec2))
- feat: simplify sidebar layout ([cc5f665](https://github.com/cssninja-digisquad/vuero/commit/cc5f665))
- feat(v-placeload): add components and layouts ([3aa90c0](https://github.com/cssninja-digisquad/vuero/commit/3aa90c0))
- feat(v-avatar): add pictureDark props and add slots to customize avatars ([9bd1516](https://github.com/cssninja-digisquad/vuero/commit/9bd1516))
- feat(v-button): add icon caret on and expose methods on v-dropdown ([8963df9](https://github.com/cssninja-digisquad/vuero/commit/8963df9))
- chore: update vue to 3.1 and bulma to 0.9.3 ([243afe81](https://github.com/cssninja-digisquad/vuero/commit/243afe81))
- chore: add internal sonarqube config ([e9e78f3](https://github.com/cssninja-digisquad/vuero/commit/e9e78f3))
- chore: reduce code smells and bugs (sonarqube) ([166f44d](https://github.com/cssninja-digisquad/vuero/commit/166f44d))
- chore: update dependencies ([58c8471](https://github.com/cssninja-digisquad/vuero/commit/58c8471))
- chore: update linters dependencies ([c2be764](https://github.com/cssninja-digisquad/vuero/commit/c2be764))
- chore(cypress): add ability to tests url with query arguments ([3d97b27](https://github.com/cssninja-digisquad/vuero/commit/3d97b27))
- refactor: navbar layout and mobile navigation components ([29689f3](https://github.com/cssninja-digisquad/vuero/commit/29689f3))
- refactor: sidebar layout ([062bd59](https://github.com/cssninja-digisquad/vuero/commit/062bd59))
- refactor: useDropdown + improve accessibility ([376f228](https://github.com/cssninja-digisquad/vuero/commit/376f228))
- refactor: useMarkdownToc + improve tables accessibility ([e0a0585](https://github.com/cssninja-digisquad/vuero/commit/e0a0585))
- refactor: extract page title to layouts ([abb2b4c](https://github.com/cssninja-digisquad/vuero/commit/abb2b4c))
- refactor: merge layout switcher + screenshot generation ([53bba1f](https://github.com/cssninja-digisquad/vuero/commit/53bba1f))
- refactor(v-dropdown): use components on partials ([9c862ae](https://github.com/cssninja-digisquad/vuero/commit/9c862ae))
- fix: add missing ref on wizard upload ([0d199b6](https://github.com/cssninja-digisquad/vuero/commit/0d199b6))
- fix: path aliases on windows ([64af8c5](https://github.com/cssninja-digisquad/vuero/commit/64af8c5))
- fix: remove overflow to allow sticky elements (close #76) ([7994087](https://github.com/cssninja-digisquad/vuero/commit/7994087)), closes [#76](https://github.com/cssninja-digisquad/vuero/issues/76)

## 1.1.0 (2021-04-22)

- chore: add comments on main files + update deps ([abdbfa3](https://github.com/cssninja-digisquad/vuero/commit/abdbfa3))
- chore: extract navbar templates ([ea50cdf](https://github.com/cssninja-digisquad/vuero/commit/ea50cdf))
- chore: extract sidebar templates ([7cc988a](https://github.com/cssninja-digisquad/vuero/commit/7cc988a))
- chore: move demo files and update deps ([1f7533a](https://github.com/cssninja-digisquad/vuero/commit/1f7533a))
- chore: update deps, remove top nodes comments ([4cb3fdb](https://github.com/cssninja-digisquad/vuero/commit/4cb3fdb))
- chore: update envato release process ([aab86ce](https://github.com/cssninja-digisquad/vuero/commit/aab86ce))
- chore: update major deps ([66b0ffe](https://github.com/cssninja-digisquad/vuero/commit/66b0ffe))
- chore: update minor deps ([cd79244](https://github.com/cssninja-digisquad/vuero/commit/cd79244))
- chore: update router and i18n comments + update deps packages ([9049b13](https://github.com/cssninja-digisquad/vuero/commit/9049b13))
- feat: add forms component and refactored documentation ([71ddc4d](https://github.com/cssninja-digisquad/vuero/commit/71ddc4d))
- feat: implement form stepper and marketing pages ([3cd0b19](https://github.com/cssninja-digisquad/vuero/commit/3cd0b19))
- feat: import changes from huro ([4c4dda7](https://github.com/cssninja-digisquad/vuero/commit/4c4dda7))
- feat: update dropdown navbar items + add npm and yarn lock files ([ffdb310](https://github.com/cssninja-digisquad/vuero/commit/ffdb310))
- feat(v-accordionimage): emit select event and remove id field from items ([c1d28ee](https://github.com/cssninja-digisquad/vuero/commit/c1d28ee))
- feat(v-buttons): add v-buttons wrapper component ([9314dfd](https://github.com/cssninja-digisquad/vuero/commit/9314dfd))
- feat(v-field): add label and horizontal props ([9a2985d](https://github.com/cssninja-digisquad/vuero/commit/9a2985d))
- feat(v-field): add multiline props ([063c444](https://github.com/cssninja-digisquad/vuero/commit/063c444))
- feat(v-snack): merge v-snackimage and v-snackicon components ([1eeb2e4](https://github.com/cssninja-digisquad/vuero/commit/1eeb2e4))
- feat(v-tabs): add v-tabs component ([02286fb](https://github.com/cssninja-digisquad/vuero/commit/02286fb))
- feat(v-tags): add v-tags wrapper components ([167aafe](https://github.com/cssninja-digisquad/vuero/commit/167aafe))
- dx: add generated CHANGELOG.md file ([06e6410](https://github.com/cssninja-digisquad/vuero/commit/06e6410))
- dx: improve state comments and remove dead code ([5621ddf](https://github.com/cssninja-digisquad/vuero/commit/5621ddf))
- dx: improve templates and main files comments + fix minor integration bugs ([862b69a](https://github.com/cssninja-digisquad/vuero/commit/862b69a))
- dx: update CHANGELOG.md ([6a86ce7](https://github.com/cssninja-digisquad/vuero/commit/6a86ce7))
- workflow: update deps ([d593585](https://github.com/cssninja-digisquad/vuero/commit/d593585))
- ci: add macos/ubuntu/windows test runner with github actions ([5ff820d](https://github.com/cssninja-digisquad/vuero/commit/5ff820d))
- ci: fix github release workflow ([9509538](https://github.com/cssninja-digisquad/vuero/commit/9509538))
- fix: disable layout switcher when not in dynamic layout pages ([7a6d0ec](https://github.com/cssninja-digisquad/vuero/commit/7a6d0ec))
- fix: PropType import type ([e370f6e](https://github.com/cssninja-digisquad/vuero/commit/e370f6e))
- fix(v-breadcrumb): non clickable element hover effect ([3e651db](https://github.com/cssninja-digisquad/vuero/commit/3e651db))
- fix(v-icon): add key to handle icon change ([d3001dc](https://github.com/cssninja-digisquad/vuero/commit/d3001dc))
