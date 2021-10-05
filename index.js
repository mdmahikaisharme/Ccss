import Tool from "./tool.js";

// CSS
class Ccss {
    constructor() {
        this.tool = new Tool();
    }

    // Div
    div(templateString, ...templateObject) {
        return this.tool.createElement(
            "div",
            templateString,
            ...templateObject
        );
    }

    // P
    p(templateString, ...templateObject) {
        return this.tool.createElement("p", templateString, ...templateObject);
    }
}

// export
function ccss(templateString, ...templateObject) {
    return new Ccss();
}
export default ccss();
