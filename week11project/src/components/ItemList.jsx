import ItemCard from "./ItemCard.jsx";
export default function ItemList(){
  const items =[
    {title: "love.", desc: "korean song that u can vibe to"},
    {title: "seasons", desc: "well known song of theirs for good reason"},
    {title: "bad", desc: "for when ur in a sad mood"},
    {title: "homesick", desc: "slow song but very good"},
    {title: "light", desc: "a happy song about ur lover"},
  ];
  
  return `
    <section class= "items">
      <h2>Song List</h2>
      <div class= "grid">
        ${items.map((song) => ItemCard(song)).join("")}
      </div>
    </section>
  `;
}
