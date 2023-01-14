<script>
  import Code from "../components/code.svelte"
  import { contarOvejas } from "../components/first/first"
  import { listGifts } from "../components/second/second"
  import { isValid } from "../components/third/third"
  import { createXmasTree } from "../components/fourth/forth"
</script>

<main>
  <header>
    <h1>advent<span>JS</span></h1>
    <p>
      All solutions for the challenges of the <strong>adventjs</strong> by
      <a
        href="https://github.com/treslog"
        target="_blank"
        rel="noopener noreferrer"><strong>@treslog</strong></a
      >.
    </p>
    <p>Credits to <strong>@midudev</strong>.</p>
  </header>
  <section>
    <h2>adventjs 2021</h2>
    <article>
      <Code code={contarOvejas.toString()} number="First" />
    </article>
    <article>
      <Code code={listGifts.toString()} number="Second" />
    </article>
    <article>
      <Code code={isValid.toString()} number="Third" />
    </article>
    <article>
      <Code code={createXmasTree.toString()} number="Fourth" />
    </article>
    <h2>adventjs 2022</h2>
    <article>First</article>
    <article>Second</article>
  </section>
</main>

<style>
  main {
    width: 1200px;
    margin: 0 auto;
    border: 1px solid #27272a;
    border-top: 0;
    min-height: 100vh;
    background-color: #0a0a0a;
    padding-bottom: 30px;
  }

  header {
    width: 700px;
    margin: 0 auto;
    padding-top: 3rem;
    margin-bottom: 2rem;
  }

  h1 {
    font-weight: 700;
    font-size: 2rem;
  }

  a {
    color: #e3a008;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  span {
    color: #000;
    padding: 2px 5px;
    border-radius: 12px;
    margin-left: 5px;
    background-color: #e3a008;
  }

  section {
    display: grid;
    place-content: center;
    gap: 1rem;
    grid-template-columns: 700px;
  }

  article {
    background-color: #121212;
    padding: 20px;
    border-radius: 12px;
  }

  @media (max-width: 1200px) {
    main {
      width: auto;
      min-height: 100vh;
    }

    section {
      grid-template-columns: 400px;
      padding: 0 2rem;
    }

    header {
      width: 400px;
      padding: 0 2rem;
      padding-top: 3rem;
    }
  }
</style>
