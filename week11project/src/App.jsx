import Header from "./components/Header.jsx";
import FeaturedItem from "./components/FeaturedItem.jsx";
import ItemList from "./components/ItemList.jsx";
import FunFact from "./components/FunFact.jsx";
import Footer from "./components/Footer.jsx";

const root = document.getElementById("app");
root.innerHTML = `
${Header()}
${FeaturedItem()}
${ItemList()}
${FunFact()}
${Footer()}
`;