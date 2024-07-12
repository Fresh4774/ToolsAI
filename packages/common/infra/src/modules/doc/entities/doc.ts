import { Entity } from '../../../framework';
import type { DocScope } from '../scopes/doc';
import type { DocMode } from './record';

export class Doc extends Entity {
  constructor(public readonly scope: DocScope) {
    super();
  }

  get id() {
    return this.scope.props.docId;
  }

  public readonly blockSuiteDoc = this.scope.props.blockSuiteDoc;
  public readonly record = this.scope.props.record;

  readonly meta$ = this.record.meta$;
  readonly mode$ = this.record.mode$;
  readonly title$ = this.record.title$;
  readonly trash$ = this.record.trash$;

  setMode(mode: DocMode) {
    return this.record.setMode(mode);
  }

  getMode() {
    return this.record.getMode();
  }

  toggleMode() {
    return this.record.toggleMode();
  }

  observeMode() {
    return this.record.observeMode();
  }

  moveToTrash() {
    return this.record.moveToTrash();
  }

  restoreFromTrash() {
    return this.record.restoreFromTrash();
  }
}
