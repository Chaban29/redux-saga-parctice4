export function* popularPostsWorker() {}

export function* popularPostsWatcher() {}

export function* popularPostsSaga() {
  yield popularPostsWatcher();
}
