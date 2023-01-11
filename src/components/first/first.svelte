<script>
  import { contarOvejas } from "./first";
</script>

<h3>First challenge</h3>
<div>
  <pre>
    <code class="language-js">
      {contarOvejas}
    </code>
  </pre>
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h3 {
    padding-left: 1rem;
  }

  pre {
    background-color: #27272a;
    padding: 1rem;
    border-radius: 12px;
    width: 600px;
    font-size: 0.7rem;
    overflow: scroll;
  }

  @media (max-width: 1200px) {
    code {
      width: 300px;
    }
  }
</style>
