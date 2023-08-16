<script lang='ts'>
    import logo from '$lib/assets/logo.webp';
    let name = 'Ceaser Cipher Toolkit';
    let desc = 'i';
</script>


<header class="header">
        <img class="header_logo" src={logo} alt="logo" />
        <h1 class="header_title">{name}</h1>
        <p>{desc}</p>
</header>

<style lang="scss">
    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: row;
        background-color: #282c34;
        color: white;
        height: 10vh;
    }

    .header *{
        padding:10px;
    }

    .header_logo {
        width: 100px;
        height: 100px;
        pointer-events: none;
        animation: App-logo-spin infinite 20s linear;

    }
    
 

    @keyframes App-logo-spin {
        from {

            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
</style>