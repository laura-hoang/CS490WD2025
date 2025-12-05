export default function FunFact() {
  return `
  <section class="funfact">
  <button onclick="
  const fact = document.getElementById('fact');
  fact.classList.toggle('show');
  ">Show Fun Fact</button>
  
  <p id="fact" class="hidden">
  Wave to Earth started in Seoul in 2019!
  </p>
  </section>
  `;
}
