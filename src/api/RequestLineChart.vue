<script>
import axios from 'axios'
export default {
  props: ['postUrl', 'form'],
  name: 'RequestLineChart',
  watch: {
    form: function (postUrl, form) {
      axios({
        url: postUrl,
        method: 'post',
        baseUrl: '/',
        data: form,
        timeout: 2000,
        transformRequest: [function (data) {
          return data
        }],
        transformResponse: [function (data) {
          return data
        }]
      }).then(function (response) {
        console.log(response.data)
      })
    }
  }
}
</script>
