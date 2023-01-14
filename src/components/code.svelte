<script>
  export let code;
  export let number;
</script>

<h3>{number} challenge</h3>
<div>
  <pre>
      <code class="language-js">
        {code}
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
    overflow: auto;
  }

  @media (max-width: 1200px) {
    code {
      width: 300px;
    }
  }

  pre::after{
    content: "\a";
    white-space: pre;
    display: inline;
}
</style>
