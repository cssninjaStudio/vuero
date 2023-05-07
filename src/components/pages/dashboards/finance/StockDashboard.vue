<template>
  <div class="finance-dashboard stock-dashboard">
    <div class="columns">
      <!--Graph-->
      <div class="column is-4">
        <div class="graph">
          <!--Dropdown-->
          <GraphDropdown />

          <svg id="stock-chart-1" data-vivus viewBox="0 0 250 60" width="250" height="90">
            <path
              d="M 209.328 17.34 C 221.956 17.588 235.264 32.599 250 22.328"
              fill="none"
              vector-effect="non-scaling-stroke"
              stroke-width="2"
              stroke="rgb(243,243,250)"
              stroke-linejoin="miter"
              stroke-linecap="round"
              stroke-miterlimit="3"
            ></path>
            <linearGradient id="_lgradient_1" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop
                offset="0%"
                stop-opacity="1"
                style="stop-color: rgb(65 184 131)"
              ></stop>
              <stop
                offset="100%"
                stop-opacity="1"
                style="stop-color: rgb(182 240 214)"
              ></stop>
            </linearGradient>
            <path
              d=" M 0 43.634 C 5.934 43.634 11.318 51.209 17.462 51.342 C 33.219 51.683 30.603 59.567 39.187 59.868 C 46.963 60.141 50.44 44.192 60.537 43.77 C 69.126 43.77 72.129 52.461 79.739 52.433 C 90.904 52.433 94.93 38.455 106.648 39.78 C 129.082 42.317 124.556 27.606 139.157 27.177 C 153.758 26.747 158.235 44.485 171.96 44.725 C 196.438 45.155 189.782 17.1 208.248 17.1"
              fill="none"
              vector-effect="non-scaling-stroke"
              stroke-width="2"
              stroke="url(#_lgradient_1)"
              stroke-linejoin="miter"
              stroke-linecap="round"
              stroke-miterlimit="3"
            ></path>
            <path
              d="M 206.649 17.218 C 206.649 15.739 207.85 14.538 209.328 14.538 C 210.807 14.538 212.008 15.739 212.008 17.218 C 212.008 18.696 210.807 19.897 209.328 19.897 C 207.85 19.897 206.649 18.696 206.649 17.218 Z"
              fill="rgb(65, 184, 131)"
            ></path>
            <text
              transform="matrix(1,0,0,1,195,5)"
              stroke="none"
              fill="rgb(65, 184, 131)"
            >
              +14%
            </text>
          </svg>
          <div class="stock">
            <div class="stock-logo snapchat">
              <i aria-hidden="true" class="fab fa-inverse fa-snapchat"></i>
            </div>
            <div class="stock-info">
              <div class="stock-name">SPCH</div>
              <div class="stock-fullname">Snapchat</div>
            </div>
          </div>
        </div>
      </div>

      <!--Graph-->
      <div class="column is-4">
        <div class="graph">
          <!--Dropdown-->
          <GraphDropdown />

          <svg id="stock-chart-2" data-vivus viewBox="0 0 250 60" width="250" height="90">
            <path
              vector-effect="non-scaling-stroke"
              d="M209.3,32.3c12.6,0.2,25.9,15.3,40.7,5"
              fill="none"
              stroke-width="2"
              stroke="rgb(243,243,250)"
              stroke-linejoin="miter"
              stroke-linecap="round"
              stroke-miterlimit="3"
            />
            <text transform="matrix(1 0 0 1 195 20)" stroke="none" fill="rgb(51, 51, 51)">
              -5%
            </text>
            <linearGradient id="_lgradient_2" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0" style="stop-color: rgb(51 51 51)" />
              <stop offset="1" style="stop-color: rgb(87 83 83)" />
            </linearGradient>
            <path
              fill="none"
              vector-effect="non-scaling-stroke"
              stroke-width="2"
              stroke="url(#_lgradient_2)"
              stroke-linejoin="miter"
              stroke-linecap="round"
              stroke-miterlimit="3"
              d="M0,20c0,0,13.4,7.4,17.6,20.9S31.8,76,49.8,74.1S83.9,48,100.4,55.2c0,0,27,14.9,38.5,11.9
                                            5-3,4-13.2,13.4-11c9.4,2.3,10.5-18.4,17.1-15.2c6.5,3.1,8.2,12.5,13.4,6.2s6.5-26.1,25.4-14.8"
            />
            <path
              d="M206.6,32.2c0-1.5,1.2-2.7,2.7-2.7c1.5,0,2.7,1.2,2.7,2.7c0,1.5-1.2,2.7-2.7,2.7
                                            C207.9,34.9,206.6,33.7,206.6,32.2z"
              fill="rgb(87, 83, 83)"
            />
          </svg>
          <div class="stock">
            <div class="stock-logo github">
              <i aria-hidden="true" class="fab fa-inverse fa-github"></i>
            </div>
            <div class="stock-info">
              <div class="stock-name">GTHB</div>
              <div class="stock-fullname">Github</div>
            </div>
          </div>
        </div>
      </div>

      <div class="column is-4">
        <div class="graph">
          <!--Dropdown-->
          <GraphDropdown />

          <svg id="stock-chart-3" data-vivus viewBox="0 0 250 60" width="250" height="90">
            <path
              fill="none"
              vector-effect="non-scaling-stroke"
              stroke-width="2"
              stroke="rgb(243, 243, 250)"
              stroke-linejoin="miter"
              stroke-linecap="round"
              stroke-miterlimit="3"
              d="M209.3,32.3c12.6,0.2,25.9,15.3,40.7,5"
            />
            <text
              transform="matrix(1 0 0 1 195 20)"
              stroke="none"
              fill="rgb(255, 51, 102)"
            >
              +8%
            </text>
            <linearGradient id="_lgradient_3" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0" style="stop-color: rgb(255 51 102)" />
              <stop offset="1" style="stop-color: rgb(255 143 171)" />
            </linearGradient>
            <path
              fill="none"
              vector-effect="non-scaling-stroke"
              stroke-width="2"
              stroke="url(#_lgradient_3)"
              stroke-linejoin="miter"
              stroke-linecap="round"
              stroke-miterlimit="3"
              d="M0,57.5c0,0,13-11.3,27.5-7.7s31.7,18.4,45.4,16.4c0,0,43.4-1.7,54.7-39.7c11.3-38,31.5,26.1,45.9,24.7
                                        c14.5-1.4,12.4-25,33.2-19"
            />
            <path
              d="M206.6,32.2c0-1.5,1.2-2.7,2.7-2.7c1.5,0,2.7,1.2,2.7,2.7c0,1.5-1.2,2.7-2.7,2.7
                                        C207.9,34.9,206.6,33.7,206.6,32.2z"
              fill="rgb(255, 51, 102)"
            />
          </svg>
          <div class="stock">
            <div class="stock-logo invision">
              <i aria-hidden="true" class="fab fa-inverse fa-invision"></i>
            </div>
            <div class="stock-info">
              <div class="stock-name">INVS</div>
              <div class="stock-fullname">Invision</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="columns is-multiline">
      <div class="column is-12">
        <div class="asset-category">
          <div class="category">
            <div class="asset">
              <div class="asset-logo">
                <i aria-hidden="true" class="lnil lnil-bolt-alt"></i>
              </div>
            </div>
            <div class="asset-name">Energy</div>
          </div>
          <div class="category">
            <div class="asset">
              <div class="asset-logo">
                <i aria-hidden="true" class="lnil lnil-gold-bar"></i>
              </div>
            </div>
            <div class="asset-name">Gold</div>
          </div>
          <div class="category">
            <div class="asset">
              <div class="asset-logo">
                <i aria-hidden="true" class="lnil lnil-apartment"></i>
              </div>
            </div>
            <div class="asset-name">Real Estate</div>
          </div>
          <div class="category">
            <div class="asset">
              <div class="asset-logo">
                <i aria-hidden="true" class="lnil lnil-leaves"></i>
              </div>
            </div>
            <div class="asset-name">Food</div>
          </div>
          <div class="category">
            <div class="asset">
              <div class="asset-logo">
                <i aria-hidden="true" class="lnil lnil-laptop-alt-switch"></i>
              </div>
            </div>
            <div class="asset-name">Technology</div>
          </div>
          <div class="category">
            <div class="asset">
              <div class="asset-logo">
                <i aria-hidden="true" class="lnil lnil-capsule"></i>
              </div>
            </div>
            <div class="asset-name">Healthcare</div>
          </div>
          <div class="category">
            <div class="asset">
              <div class="asset-logo">
                <i aria-hidden="true" class="lnil lnil-atom"></i>
              </div>
            </div>
            <div class="asset-name">Research</div>
          </div>
          <div class="category">
            <div class="asset">
              <div class="asset-logo">
                <i aria-hidden="true" class="lnil lnil-diamond-alt"></i>
              </div>
            </div>
            <div class="asset-name">Finance</div>
          </div>
        </div>
      </div>

      <div class="column is-6">
        <div class="stock-card">
          <div class="action-bar">
            <h3>Today's Gainers</h3>
            <!--Dropdown-->
            <StockDropdown />
          </div>

          <div class="stock">
            <div class="stock-logo invision">
              <i aria-hidden="true" class="fab fa-inverse fa-invision"></i>
            </div>
            <div class="stock-info">
              <div class="stock-name">INVS</div>
              <div class="stock-fullname">invision Inc.</div>
            </div>
            <div class="stock-value">+14.5%</div>
          </div>
          <div class="stock">
            <div class="stock-logo facebook">
              <i aria-hidden="true" class="fab fa-inverse fa-facebook-f"></i>
            </div>
            <div class="stock-info">
              <div class="stock-name">FB</div>
              <div class="stock-fullname">Facebook, Inc.</div>
            </div>
            <div class="stock-value">+12.9%</div>
          </div>
          <div class="stock">
            <div class="stock-logo amazon">
              <i aria-hidden="true" class="fab fa-inverse fa-amazon"></i>
            </div>
            <div class="stock-info">
              <div class="stock-name">AMZN</div>
              <div class="stock-fullname">Amazon.com, Inc.</div>
            </div>
            <div class="stock-value">+10.2%</div>
          </div>
          <div class="stock">
            <div class="stock-logo snapchat">
              <i aria-hidden="true" class="fab fa-inverse fa-snapchat"></i>
            </div>
            <div class="stock-info">
              <div class="stock-name">SPCH</div>
              <div class="stock-fullname">Snapchat, Inc.</div>
            </div>
            <div class="stock-value">+10.2%</div>
          </div>
        </div>
      </div>

      <div class="column is-6">
        <div class="stock-card">
          <div class="action-bar">
            <h3>Popular this week</h3>
            <!--Dropdown-->
            <StockDropdown />
          </div>

          <div class="stock">
            <div class="stock-logo twitter">
              <i aria-hidden="true" class="fab fa-inverse fa-twitter"></i>
            </div>
            <div class="stock-info">
              <div class="stock-name">TWTR</div>
              <div class="stock-fullname">Twitter Inc.</div>
            </div>
            <div class="stock-value">+14.5%</div>
          </div>
          <div class="stock">
            <div class="stock-logo docker">
              <i aria-hidden="true" class="fab fa-inverse fa-docker"></i>
            </div>
            <div class="stock-info">
              <div class="stock-name">DOCKR</div>
              <div class="stock-fullname">Docker Inc.</div>
            </div>
            <div class="stock-value">+12.9%</div>
          </div>
          <div class="stock">
            <div class="stock-logo algolia">
              <i aria-hidden="true" class="fab fa-inverse fa-algolia"></i>
            </div>
            <div class="stock-info">
              <div class="stock-name">ALGO</div>
              <div class="stock-fullname">Algolia Inc.</div>
            </div>
            <div class="stock-value">+10.2%</div>
          </div>
          <div class="stock">
            <div class="stock-logo github">
              <i aria-hidden="true" class="fab fa-inverse fa-github"></i>
            </div>
            <div class="stock-info">
              <div class="stock-name">GTHB</div>
              <div class="stock-fullname">Github, Inc.</div>
            </div>
            <div class="stock-value">+10.2%</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '/@src/scss/abstracts/all';

.stock-dashboard {
  .stock {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 40px;
    padding: 5px 0;
    margin: 5px 0;

    .stock-logo {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 0;

      &::before {
        content: '';
        width: 36px;
        height: 36px;
        transform: rotate(calc(var(--transform-direction) * 0));
        border-radius: 7px;
      }

      &.github::before,
      &.apple::before {
        background: var(--github);
        box-shadow: var(--github-box-shadow);
      }

      &.invision::before {
        background: var(--invision);
        box-shadow: var(--invision-box-shadow);
      }

      &.facebook::before,
      &.docker::before {
        background: var(--facebook);
        box-shadow: var(--facebook-box-shadow);
      }

      &.amazon::before {
        background: var(--amazon);
        box-shadow: var(--amazon-box-shadow);
      }

      &.twitter::before {
        background: var(--twitter);
        box-shadow: var(--twitter-box-shadow);
      }

      &.algolia::before {
        background: var(--primary);
        box-shadow: var(--primary-box-shadow);
      }

      &.snapchat::before {
        background: var(--primary);
        box-shadow: var(--primary-box-shadow);
      }

      i {
        position: absolute;
        top: 50%;
        inset-inline-start: 50%;
        transform: translate(calc(var(--transform-direction) * -50%), -50%);
      }
    }

    .stock-info {
      margin-inline-start: 10px;
      flex: 1;
      line-height: 1.2;

      .stock-name {
        font-family: var(--font-alt);
        font-weight: 600;
        font-size: 0.9rem;
        color: var(--dark-text);
      }

      .stock-fullname {
        font-family: var(--font);
        color: var(--light-text);
      }
    }

    .stock-value {
      flex: 1;
      font-weight: bold;
      color: var(--light-text);
      text-align: inset-inline-end;
    }
  }

  .graph {
    position: relative;
    display: inline-block;
    width: 100%;
    padding: 20px;
    background: var(--white);
    border-radius: 10px;
    box-shadow: var(--light-box-shadow);
    border: 1px solid var(--fade-grey);

    .dropdown {
      position: absolute;
      top: 10px;
      inset-inline-end: 10px;
    }

    > svg {
      max-width: 100%;
      min-height: 90px;
      margin: 0 auto 16px;
      display: block;

      text {
        font-family: var(--font);
        font-weight: 700;
        font-size: 12px;
        font-style: normal;
      }
    }
  }

  .asset-category {
    display: flex;
    padding: 12px 0;

    .category {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      cursor: pointer;

      &:hover,
      &:focus {
        .asset {
          .asset-logo {
            transform: translateY(-5px);

            &::before {
              border-color: var(--primary);
              box-shadow: var(--light-box-shadow);
            }

            i {
              color: var(--primary);
            }
          }
        }

        .asset-name {
          color: var(--primary);
        }
      }

      .asset {
        position: relative;
        display: flex;
        flex-direction: row;
        margin: 10px 0;

        .asset-logo {
          position: relative;
          display: flex;
          justify-content: center;
          flex: 0;
          transition: all 0.3s; // transition-all test

          &::before {
            content: '';
            width: 46px;
            height: 46px;
            background-color: var(--white);
            border: 1px solid var(--fade-grey);
            transform: rotate(calc(var(--transform-direction) * 45deg));
            border-radius: 10px;
            transition: all 0.3s; // transition-all test
          }

          i {
            position: absolute;
            top: 50%;
            inset-inline-start: 50%;
            transform: translate(calc(var(--transform-direction) * -50%), -50%);
            color: var(--light-text);
            font-size: 18px;
            transition: color 0.3s;
          }
        }
      }

      .asset-name {
        color: var(--dark-text);
        font-size: 0.9rem;
        font-family: var(--font-alt);
        font-weight: 600;
        transition: color 0.3s;
      }
    }
  }

  .stock-card {
    @include vuero-r-card;

    .action-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;

      h3 {
        font-family: var(--font-alt);
        font-size: 1rem;
        font-weight: 600;
        color: var(--dark-text);
      }
    }

    .stock {
      margin: 8px 0;

      .stock-logo {
        i {
          font-size: 14px;
        }
      }
    }
  }
}

.is-dark {
  .stock-dashboard {
    .graph {
      background: var(--dark-sidebar-light-6) !important;
      border-color: var(--dark-sidebar-light-12) !important;
    }

    .stock {
      .stock-info {
        .stock-name {
          color: var(--dark-dark-text);
        }
      }
    }

    .asset-category {
      .category {
        &:hover {
          .asset {
            .asset-logo {
              &::before {
                border-color: var(--primary) !important;
              }

              i {
                color: var(--primary);
              }
            }
          }

          .asset-name {
            color: var(--primary);
          }
        }

        .asset {
          .asset-logo {
            &::before {
              background: var(--dark-sidebar-light-6) !important;
              border-color: var(--dark-sidebar-light-12) !important;
            }
          }
        }

        .asset-name {
          color: var(--dark-dark-text);
        }
      }
    }

    .stock-card {
      @include vuero-card--dark;

      .action-bar {
        h3 {
          color: var(--dark-dark-text);
        }
      }
    }
  }
}

@media only screen and (width <= 767px) {
  .stock-dashboard {
    .asset-category {
      flex-wrap: wrap;

      .category {
        min-width: 25% !important;
        margin-bottom: 12px !important;
      }
    }
  }
}
</style>
