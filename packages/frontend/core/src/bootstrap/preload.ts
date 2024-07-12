import '@affine/env/constant';
import './register-blocksuite-components';
import './edgeless-template';

import { setupGlobal } from '@affine/env/global';
import { ResizeObserver } from '@juggle/resize-observer';

setupGlobal();

window.ResizeObserver = ResizeObserver;
