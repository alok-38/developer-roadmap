const languageSpan = document.getElementById("language");
const languageSelector = document.getElementById("languageSelector");
const themeToggle = document.getElementById("themeToggle");
const codeBlock = document.querySelector("#codeBlock code");
const app = document.getElementById("app");

let userHasInteracted = false;

const languageSyntax = {
    python: {
        emoji: "🐍",
        syntax: 'print("Hello, world!")'
    },
    javascript: {
        emoji: "🌐",
        syntax: 'console.log("Hello, world!");'
    },
    java: {
        emoji: "☕",
        syntax: `public class Main {\n  public static void main(String[] args) {\n    System.out.println("Hello, world!");\n  }\n}`
    },
    csharp: {
        emoji: "🔧",
        syntax: `using System;\nclass Program {\n  static void Main() {\n    Console.WriteLine("Hello, world!");\n  }\n}`
    },
    ruby: {
        emoji: "💎",
        syntax: 'puts "Hello, world!"'
    }
};

window.onload = () => {
    const savedLang = localStorage.getItem("preferredLang") || "python";
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem("preferredTheme") || (prefersDark ? "dark" : "light");

    languageSelector.value = savedLang;
    updateLanguage();

    if (savedTheme === "dark") {
        document.body.classList.add("dark");
        themeToggle.textContent = "Toggle Theme ☀️";
    }
};

document.addEventListener("click", () => {
    userHasInteracted = true;
});

languageSelector.addEventListener("change", updateLanguage);
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    themeToggle.textContent =
        document.body.classList.contains("dark") ? "Toggle Theme ☀️" : "Toggle Theme 🌗";
    saveSettings(languageSelector.value, document.body.classList.contains("dark") ? "dark" : "light");
});

document.getElementById("runCode").addEventListener("click", () => {
    const lang = languageSelector.value;
    const output = document.getElementById("output");
    output.textContent = "";

    if (lang === "javascript") {
        try {
            const rawCode = languageSyntax.javascript.syntax;
            const result = eval(rawCode.replace("console.log", ""));
            output.textContent = result || "✅ Ran successfully!";
        } catch (err) {
            output.textContent = `❌ Error: ${err.message}`;
        }
    } else {
        output.textContent = "Hello, world!";
    }
});

document.getElementById("copyCode").addEventListener("click", () => {
    const selected = languageSelector.value;
    const rawCode = languageSyntax[selected].syntax;
    navigator.clipboard.writeText(rawCode)
        .then(() => alert("Copied to clipboard!"))
        .catch(() => alert("Copy failed"));
});

function saveSettings(lang, theme) {
    localStorage.setItem("preferredLang", lang);
    localStorage.setItem("preferredTheme", theme);
}

async function updateLanguage() {
    const selected = languageSelector.value;
    const { emoji, syntax } = languageSyntax[selected];

    languageSpan.textContent = `${emoji} ${capitalize(selected)}`;
    await typeOutSyntax(syntax, selected);

    if (userHasInteracted) {
        popSound.currentTime = 0;
        popSound.play().catch(() => { });
    }

    if (selected === "javascript") {
        confetti({ particleCount: 150, spread: 60, origin: { y: 0.6 } });
    }

    saveSettings(selected, document.body.classList.contains("dark") ? "dark" : "light");
    document.getElementById("output").textContent = "";
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

async function typeOutSyntax(code, lang) {
    const codeContainer = document.querySelector("#codeBlock code");
    codeContainer.innerHTML = "";
    for (let i = 0; i <= code.length; i++) {
        const partial = code.slice(0, i);
        codeContainer.innerHTML = highlightSyntax(partial, lang);
        await new Promise(r => setTimeout(r, 10));
    }
}

function highlightSyntax(code, lang) {
    if (lang === "python") {
        return code
            .replace(/(print)/g, '<span class="code-keyword">$1</span>')
            .replace(/(".*?")/g, '<span class="code-string">$1</span>');
    }
    if (lang === "javascript") {
        return code
            .replace(/(console)/g, '<span class="code-class">$1</span>')
            .replace(/(log)/g, '<span class="code-method">$1</span>')
            .replace(/(".*?")/g, '<span class="code-string">$1</span>');
    }
    if (lang === "java" || lang === "csharp") {
        return code
            .replace(/(public|class|static|void|using|System|Console)/g, '<span class="code-keyword">$1</span>')
            .replace(/(".*?")/g, '<span class="code-string">$1</span>');
    }
    if (lang === "ruby") {
        return code
            .replace(/(puts)/g, '<span class="code-keyword">$1</span>')
            .replace(/(".*?")/g, '<span class="code-string">$1</span>');
    }
    return code;
}
