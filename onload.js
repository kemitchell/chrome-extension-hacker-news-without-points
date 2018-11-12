/* eslint-env browser */

document.addEventListener('DOMContentLoaded', function () {
  console.log('removing points')
  var style = document.createElement('style')
  style.appendChild(document.createTextNode(
    '.score { display: none !important; }'
  ))
  document.head.appendChild(style)
  removePoints()
})

function removePoints () {
  var me = document.getElementById('me')
  if (!me) return
  var points = me.nextSibling
  if (!points) return
  if (points.nodeType !== Node.TEXT_NODE) return
  points.parentNode.replaceChild(
    document.createTextNode(' '),
    points
  )
}
