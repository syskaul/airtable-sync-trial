
new Vue({
    el: '#stats_component',
    data () {
      return {
        stats: []
      }
    },
    mounted () {
        fetch("https://api.airtable.com/v0/appbdoqkO8dQ7MX7z/Table%201?api_key=keyrtoiXkFEaxuUxN")
        .then(r => r.json())
        .then(json => {
          console.log(json.records)
          this.stats=json.records;
          console.log(this.stats)
        },
        response => {
        console.log('Error loading json:', response)
        });
    }
  })
