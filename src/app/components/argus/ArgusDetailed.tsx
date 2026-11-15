'use client'

import ArgusPlayer, { type SceneDef } from './ArgusPlayer'
import { FlagsScene, IngestScene, ReconcileScene, ReviewScene } from './ArgusScenes'

/** Detailed four-scene walkthrough, used on the Services page. */
const SCENES: SceneDef[] = [
  {
    key: 'ingest',
    name: 'Ingest',
    stage: 'Run intake',
    address: 'Argus · Run intake',
    caption: 'Argus ingests the method, the raw plate reader file and the ELN bench sheet for one run.',
    Component: IngestScene,
  },
  {
    key: 'reconcile',
    name: 'Reconcile',
    stage: 'Reconciliation',
    address: 'Argus · Run reconciliation',
    caption: 'Matching fields are reconciled across all three sources of truth.',
    Component: ReconcileScene,
  },
  {
    key: 'flags',
    name: 'Flags',
    stage: 'Flags',
    address: 'Argus · Flags',
    caption: 'Every disagreement is flagged, with both sources side by side.',
    Component: FlagsScene,
  },
  {
    key: 'review',
    name: 'Review',
    stage: 'Reviewer summary',
    address: 'Argus · Reviewer summary',
    caption: 'Argus flags. Your reviewer decides.',
    Component: ReviewScene,
  },
]

export default function ArgusDetailed() {
  return <ArgusPlayer scenes={SCENES} still={2} label="How Argus works: detailed walkthrough" />
}
