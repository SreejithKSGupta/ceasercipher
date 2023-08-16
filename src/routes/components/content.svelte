<script>
	import { wmode } from './store.js';
	let encoderval = '';
	let decoderval = '';
	let encodedmsg = '';
	let decodedmsg = '';
	let enkeyval = 0;
	let dekeyval = 0;
	let mode_value = 'decode';

	wmode.subscribe((value) => {
		mode_value = value;
	});

	function encode() {
		encodedmsg = '';
		let key = enkeyval;
		let newchar = 0;
		for (let i = 0; i < encoderval.length; i++) {
			let char = encoderval.charCodeAt(i);
			newchar = char + key;
			if (newchar > 122) newchar = newchar - 26;
			else if (newchar > 90 && newchar < 97) newchar = newchar - 26;
			encodedmsg += String.fromCharCode(newchar);
		}
	}

	function decode() {
		decodedmsg = '';
		let key = dekeyval;
		let newchar = 0;
		for (let i = 0; i < decoderval.length; i++) {
			let char = decoderval.charCodeAt(i);
			newchar = char - key;
			if (newchar < 65) newchar = newchar + 26;
			else if (newchar > 90 && newchar < 97) newchar = newchar + 26;
			decodedmsg += String.fromCharCode(newchar);
		}
	}
</script>

<div class="content">
	{#if (mode_value == 'encode')}
		<div id="encoder">
			<h3>Encoder</h3>
			<input
				type="text"
				id="encoderInput"
				bind:value={encoderval}
				placeholder="message to encode"
			/>
			<input type="number" id="encoderkey" bind:value={enkeyval} placeholder="Key" />
			<button type="button" class="btn btn-primary" id="encoderButton" on:click={encode}
				>Encode</button
			>
			<input type="text" id="encoderResult" bind:value={encodedmsg} placeholder="Result" readonly />
		</div>
	{/if}
	{#if (mode_value == 'decode')}
		<div id="decoder">
			<h3>Decoder</h3>
			<input type="text" id="decoderInput" bind:value={decoderval} placeholder="encoded message" />
			<input type="text" id="encoderOutput" bind:value={dekeyval} placeholder="key" />
			<button type="button" class="btn btn-primary" id="deencoderButton" on:click={decode}
				>Decode</button
			>
			<input type="text" id="decoderResult" bind:value={decodedmsg} placeholder="Result" readonly />
		</div>
	{/if}
</div>

<style lang="scss">
	.content {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		background-color: #05473946;
		color: white;
		height: 80%;
		width:clamp(400px, 60%, 1500px);
		border-radius: 20px;
		user-select: none;
	}
	#encoder,
	#decoder {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		width: 100%;
		height: 50%;
	}
	h3 {
		color: rgba(157, 255, 0, 0.822);
		font-size: 8vh;
		font-family: Impact, sans-serif;
		font-stretch: expanded;
	}
	#encoderResult,
	#decoderResult {
		background-color: rgba(150, 9, 155, 0.342);
	}

	input {
		margin: 10px;
		width: clamp(350px, 50%, 600px);
		padding: 20px;
		border-radius: 10px;
		border: none;
		font-size: 150%;
		font-family: 'Courier New', Courier, monospace;
		background-color: #05472646;
		color: white;
		font-weight: bold;
	}
	input:active,
	input:focus {
		outline: none;
	}

	button {
		margin: 10px;
		width: clamp(150px, 25%, 300px);
		padding: 20px;
		border-radius: 10px;
		border: none;
		font-size: 150%;
		font-family: 'Courier New', Courier, monospace;
		background-color: #006e37;
		color: white;
		font-weight: bold;
	}
	button:hover {
		background-color: #003514e3;
		color: #ffffff;
		animation: slowly 300ms;
	}

	@keyframes slowly {
		0% {
			background-color: #006e37;
		}
		50% {
			background-color: #06ffac7a;
		}
		100% {
			background-color: #003514e3;
			color: #ffffff;
		}
	}
	@media only screen and (max-width: 600px) {
		.content {
			height: 70%;
			width: 95%;
		}
	}
</style>
