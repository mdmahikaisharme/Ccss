class Tool {
    constructor() {}

    // create Element
    createElement(tagName, templateString, ...templateObject) {
        const $ele = document.createElement(tagName);
        const styles = this.generateCss(templateString, ...templateObject);

        // add style
        for (let key in styles) {
            $ele.style[key] = styles[key];
        }

        return $ele;
    }

    // Generate
    generateCss(templateString, ...templateObject) {
        let string = "";

        templateString.forEach((value, i) => {
            string += value + (templateObject[i] || "");
        });

        const realCss = this.stringToCss(string);

        return realCss;
    }

    // String To Css
    stringToCss(string) {
        let object = {};
        let convertedString = string.replace(/[\n\s]+/g, "").split(";");

        convertedString.forEach((i) => {
            if (!i) return;

            let [key, value] = i.split(":");
            key = this.formatKey(key);
            object[key] = value;
        });

        return object;
    }

    // Format Key
    formatKey(key) {
        let head, tail;
        let convertedKey = key.split("-").map((value, i) => {
            if (i === 0) return value;

            // format
            head = value[0].toUpperCase();
            tail = value.slice(1);

            return head + tail;
        });

        return convertedKey.join("");
    }
}

export default Tool;
