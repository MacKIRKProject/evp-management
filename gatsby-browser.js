/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

exports.onRouteUpdate = () => {
  const [, userId] =
    window.document.cookie
      .split(';')
      .map(item => item.trim().split('='))
      .find(([key]) => key === '_console_uid') || []

  if (window.analytics) {
    setTimeout(() => {
      window.analytics.page({
        page_type: 'Datacenter',
        title: window.document.title,
        userId,
      })
    }, 0)
  }
}
