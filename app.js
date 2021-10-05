import ccss from "./index.js";

const div = ccss.div`
    padding: 20px;
    background-color: teal;
    font-family: sans-serif;

`;
const p = ccss.p`
    margin: 0;
    font-size: 5rem;
    font-weight:700
`;
p.innerText = "Hello";

div.append(p);

document.getElementsByTagName("body")[0].append(div);
