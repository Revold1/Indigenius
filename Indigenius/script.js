// Vue Model
var vm = new Vue({
	el: '#app',
	data: {
		email: 'example@example.com',
		submitted: false,
		words: words
	},
	methods: {
		process: function() {
			this.submitted = true // vm.submitted
		}
	}
});

var words = ["hi","hi2","hi3","hi4"]