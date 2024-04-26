
export type ColorFn =
  | 'rgba'
  | 'adjusthue'
  | 'saturate'
  | 'desaturate'
  | 'lighten'
  | 'darken'
  | 'color-invert'
  | 'dark-color'
  | 'light-color'

export interface ColorFnCall {
  fn: ColorFn
  fnArg: string | null
  composeArg: ColorFnCall | null
}

export interface ColorCallSet {
  [color: string]: {
    calls: ColorFnCall[],
  }
}
export const bulmaCssVariablesDefs: ColorCallSet = {
  "danger": {
    "calls": [
      {
        "fn": "color-invert",
        "fnArg": null,
        "composeArg": null
      },
      {
        "fn": "dark-color",
        "fnArg": null,
        "composeArg": null
      },
      {
        "fn": "light-color",
        "fnArg": null,
        "composeArg": null
      }
    ]
  },
  "dark": {
    "calls": [
      {
        "fn": "lighten",
        "fnArg": "800",
        "composeArg": null
      },
      {
        "fn": "color-invert",
        "fnArg": null,
        "composeArg": null
      }
    ]
  },
  "info": {
    "calls": [
      {
        "fn": "color-invert",
        "fnArg": null,
        "composeArg": null
      },
      {
        "fn": "dark-color",
        "fnArg": null,
        "composeArg": null
      },
      {
        "fn": "light-color",
        "fnArg": null,
        "composeArg": null
      }
    ]
  },
  "link": {
    "calls": [
      {
        "fn": "color-invert",
        "fnArg": null,
        "composeArg": null
      },
      {
        "fn": "dark-color",
        "fnArg": null,
        "composeArg": null
      },
      {
        "fn": "light-color",
        "fnArg": null,
        "composeArg": null
      }
    ]
  },
  "primary": {
    "calls": [
      {
        "fn": "color-invert",
        "fnArg": null,
        "composeArg": null
      },
      {
        "fn": "dark-color",
        "fnArg": null,
        "composeArg": null
      },
      {
        "fn": "light-color",
        "fnArg": null,
        "composeArg": null
      }
    ]
  },
  "success": {
    "calls": [
      {
        "fn": "color-invert",
        "fnArg": null,
        "composeArg": null
      },
      {
        "fn": "dark-color",
        "fnArg": null,
        "composeArg": null
      },
      {
        "fn": "light-color",
        "fnArg": null,
        "composeArg": null
      }
    ]
  },
  "warning": {
    "calls": [
      {
        "fn": "color-invert",
        "fnArg": null,
        "composeArg": null
      },
      {
        "fn": "dark-color",
        "fnArg": null,
        "composeArg": null
      },
      {
        "fn": "light-color",
        "fnArg": null,
        "composeArg": null
      }
    ]
  },
  "white": {
    "calls": [
      {
        "fn": "lighten",
        "fnArg": "800",
        "composeArg": null
      }
    ]
  }
}
