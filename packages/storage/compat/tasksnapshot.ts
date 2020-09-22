/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as types from '@firebase/storage-types';
import { ReferenceCompat } from './reference';
import { UploadTaskCompat } from './task';
import { UploadTaskSnapshot } from '../src/tasksnapshot';

export class UploadTaskSnapshotCompat implements types.UploadTaskSnapshot {
  constructor(
    readonly delegate: UploadTaskSnapshot,
    public task: UploadTaskCompat,
    public ref: ReferenceCompat
  ) {}

  bytesTransferred = this.delegate.bytesTransferred;
  metadata = this.delegate.metadata;
  state = this.delegate.state;
  // task = new UploadTaskCompat(this.delegate.task);
  totalBytes = this.delegate.bytesTransferred;
}