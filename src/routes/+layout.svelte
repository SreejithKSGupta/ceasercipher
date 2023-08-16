<script lang='ts'>
    import Header from './components/header.svelte';
    import Footer from './components/footer.svelte';
</script>
<Header/>
<slot/>
<Footer/>

<style>
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        user-select: none;
    }
</style>