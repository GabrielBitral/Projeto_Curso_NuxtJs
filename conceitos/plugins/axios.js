export default function ({ $axios, redirect }) {
  $axios.onRequest(config => {
    console.log('Making request to ' + config.url)
  })

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.statusCode, 10)
    if (code === 400) {
      redirect('/400')
    }
  })
}
