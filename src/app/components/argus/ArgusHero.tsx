'use client'

import ArgusPlayer, { type SceneDef } from './ArgusPlayer'
import { CheckScene, LoadScene, ResultScene } from './ArgusHeroScenes'

/** Simplified three-scene walkthrough for the home page hero. */
const SCENES: SceneDef[] = [
  {
    key: 'load',
    name: 'Load',
    stage: 'Load run',
    address: 'Argus · Load run',
    caption: 'The method is already on file. Argus loads the raw data file and the ELN bench sheet for one run.',
    Component: LoadScene,
  },
  {
    key: 'check',
    name: 'Check',
    stage: 'Checks',
    address: 'Argus · Checks',
    caption: 'Every recorded value is checked against the method, and the two records against each other.',
    Component: CheckScene,
  },
  {
    key: 'result',
    name: 'Result',
    stage: 'Result',
    address: 'Argus · Result',
    caption: 'Argus flags. Your reviewer decides.',
    Component: ResultScene,
  },
]

export default function ArgusHero() {
  return <ArgusPlayer scenes={SCENES} still={2} label="Argus product walkthrough" />
}
