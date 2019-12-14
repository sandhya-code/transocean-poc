export const alphaCount = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

export const TBT = [
  {
    text: 'Centralizer monitoring plan:',
    subText: [
      { text: 'Going through rotary', isCheckbox: false, isChecked: false },
      { text: 'Hanging up on SJEs', isCheckbox: false, isChecked: false },
      {
        text: 'Passing through PCM tail in arm',
        isCheckbox: false,
        isChecked: false
      },
      {
        text: 'Passing through HR arms',
        isCheckbox: false,
        isChecked: false
      },
      {
        text: 'Stacking weight downhole (BOP, casing window, etc.)',
        isCheckbox: false,
        isChecked: false
      }
    ],
    isCheckbox: false,
    isChecked: false
  },
  {
    text:
      'Raising casing joint off of skate without capturing it in the PCM tail in arm',
    isCheckbox: false,
    isChecked: false
  },
  {
    text:
      'Slings / handling gear of the SJEs getting caught while lifting and lowering  theTD (skate tracks, slips, etc.)',
    isCheckbox: false,
    isChecked: false
  },
  {
    text:
      'Communication protocols for opening / closing of slips / elevators and the transferring of weight',
    isCheckbox: false,
    isChecked: false
  },
  {
    text: 'Internals of casing elevators hanging up on box end of casing',
    isCheckbox: false,
    isChecked: false
  },
  {
    text:
      'Collision point between casing in PRS and casing elevators while hoisting / lowering TDS',
    isCheckbox: false,
    isChecked: false
  },
  {
    text: 'Service loop monitoring plan',
    isCheckbox: false,
    isChecked: false
  }
];

export const PreRunningShoeTrack = [
  {
    text: 'Verify pipe wiper / C-plate removed',
    isCheckbox: true,
    isChecked: false
  },
  {
    text: 'Verify floats are clear of debris',
    isCheckbox: true,
    isChecked: false
  },
  { text: 'Casing count on deck', isCheckbox: true, isChecked: false },
  {
    text: 'Verify elevator ID versus lift nubbin OD with calipers',
    isCheckbox: true,
    isChecked: false
  },
  {
    text: 'Verify interlocks between elevators and slips if applicable',
    isCheckbox: true,
    isChecked: false
  },
  {
    text: 'Verify slips / inserts / dies correct size for tubular',
    isCheckbox: true,
    isChecked: false
  },
  {
    text: 'Verify correct casing swedge is available',
    isCheckbox: true,
    isChecked: false
  },
  {
    text: 'Verify air is reduced to 30 psi for cleaning',
    isCheckbox: true,
    isChecked: false
  },
  {
    text: 'Verify swab / surge model available',
    isCheckbox: true,
    isChecked: false
  },
  {
    text: 'Tally Milestones are marked for:',
    isCheckbox: false,
    isChecked: false,
    subText: [
      { text: 'Bakerlok joints', isCheckbox: true, isChecked: false },
      { text: 'Safety clamp off', isCheckbox: true, isChecked: false },
      {
        text: 'Enter BOP (spaced out for one stand)',
        isCheckbox: true,
        isChecked: false
      },
      {
        text: 'Enter Open Hole (spaced out for one stand)',
        isCheckbox: true,
        isChecked: false
      }
    ]
  }
];

export const ShoeTrackSteps = [
  {
    title: 'Capture joint from skate into elevators',
    steps: [
      {
        role: 'Assistant Driller',
        text: 'Confirm lift nubbin installed and fully shouldered',
        isCheckbox: true
      },
      {
        role: 'Driller',
        text: 'Lower SJEs to pick up height',
        isCheckbox: true
      },
      {
        role: 'Assistant Driller',
        text:
          'Confirm the locking pins on the SJE are locked in place. Attempt to pull locking pin without pressing release',
        isCheckbox: true
      }
    ]
  },
  {
    title: 'Pick up casing joint and run in hole',
    steps: [
      {
        role: 'Driller',
        text:
          'Raise top drive and pick up casing joint to allow tail in arm to capture',
        isCheckbox: true
      },
      {
        role: 'Driller',
        text: 'Lower 3 ft into rotary and stop',
        isCheckbox: true
      },
      {
        role: 'Driller',
        text: 'Lower string and stop 4 ft from rotary ',
        isCheckbox: true
      },
      {
        role: 'Driller',
        text: 'Lower casing joint until stopped by the Casing Operator',
        isCheckbox: true
      }
    ]
  },
  {
    title: 'Capture joint from skate into elevators',
    steps: [
      {
        role: 'Assistant Driller',
        text: 'Confirm lift nubbin installed and fully shouldered',
        isCheckbox: true
      },
      {
        role: 'Driller',
        text: 'Lower SJEs to pick up height',
        isCheckbox: true
      },
      {
        role: 'Assistant Driller',
        text: 'Confirm the locking pins on the SJE are locked in place',
        isCheckbox: true
      }
    ]
  },
  {
    title: 'Raise top drive, pick up casing joint and make up to stump',
    steps: [
      {
        role: 'Driller',
        text: 'Raise top drive as Floorhand captures in PCM tail in arm',
        isCheckbox: true
      },
      {
        role: 'Driller',
        text: 'Lower TDS and stab casing joint into the box.',
        isCheckbox: true
      },
      {
        role: 'Driller',
        text: 'Slowly lower TDS elevators to latch position',
        isCheckbox: true
      }
    ]
  },
  {
    title: 'Run string in hole and set slips',
    steps: [
      {
        role: 'Driller',
        text: 'Transfer weight from slips to elevators',
        isCheckbox: true
      },
      {
        role: 'Driller',
        text: 'Lower string slowly until Floorhands can unlatch the SJEs',
        isCheckbox: true
      },
      {
        role: 'Driller',
        text: 'Continue to lower TDS to stump height',
        isCheckbox: true
      },
      {
        role: 'Driller',
        text: 'Lower TDS until weight transferred to slips',
        isCheckbox: true
      },
      {
        role: 'Driller',
        text: 'Lower TDS until die segments disengage',
        isCheckbox: true
      },
      {
        role: 'Driller',
        text: 'Raise TDS to position for the next joint',
        isCheckbox: true
      }
    ]
  }
];
