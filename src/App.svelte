<script>
	import { logIn, query } from './js/mongo';
	import { get, set } from './js/getSet';

	let credentials = logIn();
	console.log('credentials are: ', credentials);

	function handleCourse(){
		let dropdown = document.getElementById('courseSelect');
		set('selectedCourse', dropdown.value);
		query(get('selectedCourse'));
	}
</script>

<select id="courseSelect" on:change={handleCourse}>
	<option slected=true>Choose Course</option>
	<option value="Glendarin Hills">Glendarin Hills</option>
	<option value="Bella Vista">Bella Vista</option>
</select>