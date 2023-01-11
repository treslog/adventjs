<script>
  import { listGifts } from "./second";
</script>

<h3>Second challenge</h3>
<div>
  <pre>{listGifts}</pre>
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  pre {
    background-color: #27272a;
    color: #e3a008;
    padding: 1rem;
    border-radius: 12px;
    width: 600px;
    font-size: 0.7rem;
    overflow: scroll;
  }

  @media (max-width: 1200px) {
    pre {
      width: 300px;
      overflow: scroll;
    }
  }
</style>
