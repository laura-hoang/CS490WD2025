import Header from "./src/components/Header.jsx";
import FeaturedItem from "./src/components/FeaturedItem.jsx";
import ItemList from "./src/components/ItemList.jsx";
import FunFact from "./src/components/FunFact.jsx";
import Footer from "./src/components/Footer.jsx";

document.getElementById("app").innerHTML = `
${Header()}
${FeaturedItem()}
${ItemList()}
${FunFact()}
${Footer()}
`;