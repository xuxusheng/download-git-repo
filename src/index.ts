/**
 * Add protocol to url
 * @param origin
 * @param clone
 */
function addProtocol(origin: string, clone: boolean): string {
  if (!/^(f|ht)tps?:\/\//i.test(origin)) {
    if (clone) {
      origin = 'git@' + origin
    } else {
      origin = 'https://' + origin
    }
  }

  return origin
}

function getUrl(repo, clone: boolean) {
  let url

  // Get origin with protocol and add trailing slash or colon (for ssh)
  let origin = addProtocol(repo.origin, clone)

  if (/^git@/i.test(origin)) {
    origin = origin + ':'
  } else {
    origin = origin + '/'
  }
}
