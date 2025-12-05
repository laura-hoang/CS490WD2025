export default function ItemCard(item){
  return `
  <div class ="card"
  onclick= "alert('You clicked on ${item.title}!')"
  onmouseover= "this.style.border= '2p solid #90bde6'"
  onmouseout= "this.style.border= 'none'">
  <h3>${item.title}</h3>
  <p>${item.desc}</p>
  </div>
  `;
}
