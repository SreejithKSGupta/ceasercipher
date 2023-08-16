<script>

import {wmode} from './store.js';

function changeencode(){
        wmode.set('encode'); 
    }
function changedecode(){
        wmode.set('decode');
    }    
</script>

<div class="sidebar">
<h2>Caesar Cipher options</h2>
<button on:click={changeencode}>Encode</button>
<button on:click={changedecode}>Decode</button>
</div>

<style lang="scss">
.sidebar {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #073f4d6c;
    color: white;
    height:80%;
    width: clamp(250px, 20vw, 350px);
    user-select: none;
    border-radius: 20px;
    text-align: center;
}
h2{
    font-size: 2rem;
    color: #00daf7;
}
button{
    font-size: 1.5rem;
    color: #fd00d3;
    background-color: #000220;
    border-radius: 20px;
    width: 80%;
    text-align: center;
    line-height: 5vh;
    margin-top: 5vh;
    outline: none;
    border: none;
}
button:hover{
    background-color: #fd00d3b2;
    color: #000220;
    scale: 1.1;
    cursor: pointer;
    animation: slowly 1s linear;
    outline: none;
    border: none;
}
@keyframes slowly{
    0%{

        transform: scale(1);
    }
    50%{
        transform: scale(1.2);
        background-color: #fd00d37a;
        color: #000220;
    }
    100%{
        transform: scale(1);
        background-color: #fd00d37c;
        color: #000220;
    }
}
@media only screen and (max-width: 600px) {
    .sidebar {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        flex-direction: row;
        flex-wrap: wrap;
        width: 95%;
        height: 20%;
    }
    h2{
        width: 80%;
    }
   button{
         width: 40%;
         margin: 0;
         margin-top: 0px;
   }
}
</style>
