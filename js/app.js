// ==============================
// 1. Parse .strings file
// ==============================

// Convert .strings text to JS object
function parseStrings(content) {

    // Store the parsing results
    const result = {};

    const regex = /^"([^"]+)"\s*=\s*"((?:\\"|[^"])*)";$/gm;

    let match;

    while ((match = regex.exec(content)) !== null) {
        const key = match[1];
        const value = match[2];
        result[key] = value;
    }

    return result;
}

// ==============================
// 2. Test
// ==============================

// Simulate .strings content
const testData = `
"accept_chat" = "Unlock <2>chat</2>?";
"accept_addfriend" = "Become friends with this player?";
`;

// Parse
const parsed = parseStrings(testData);

// Output result
console.log(parsed);
console.log(parsed["accept_chat"]);
