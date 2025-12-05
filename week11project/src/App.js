import Header from "./src/components/Header.js";
import FeaturedItem from "./src/components/FeaturedItem.js";
import ItemList from "./src/components/ItemList.js";
import FunFact from "./src/components/FunFact.js";
import Footer from "./src/components/Footer.js";

document.getElementById("app").innerHTML = `
${Header()}
${FeaturedItem()}
${ItemList()}
${FunFact()}
${Footer()}
`;