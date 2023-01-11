<script>
  import Second from "../components/second/second.svelte";
  import First from "../components/first/first.svelte";
</script>

<main>
  <h1>AdventJS</h1>
  <p>Challenges</p>
  <First />
  <Second />
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 100px;
    margin: 0 auto;
    width: 700px;
  }
</style>
