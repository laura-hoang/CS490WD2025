export default function FunFact() {
  return `
    <section class="funfact">
      <h2>Fun Fact</h2>
      <button onclick="
        const fact = document.getElementById('fact');
        fact.classList.toggle('show');
      ">
        Show Fun Fact
      </button>
      
      <p id="fact" class="hidden">
        w2e started in Seoul in 2019
      </p>
    </section>
  `;
}
