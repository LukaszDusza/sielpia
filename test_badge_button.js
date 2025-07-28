const fs = require('fs');
const path = require('path');

// Test script to verify submit button badge styling
console.log('🔍 Testing Submit Button Badge Styling...\n');

const contactFormPath = path.join(__dirname, 'src/components/ContactForm.jsx');
const contactFormContent = fs.readFileSync(contactFormPath, 'utf8');

// Test cases for badge styling
const tests = [
    {
        name: 'Gradient background with transparency',
        check: () => contactFormContent.includes('bg-gradient-to-r from-purple-500/20 to-pink-500/20'),
        description: 'Button should have gradient background with transparency like the badge'
    },
    {
        name: 'Backdrop blur effect',
        check: () => contactFormContent.includes('backdrop-blur-sm'),
        description: 'Button should have backdrop blur effect'
    },
    {
        name: 'Border with transparency',
        check: () => contactFormContent.includes('border border-purple-400/30'),
        description: 'Button should have border with purple color and transparency'
    },
    {
        name: 'Light purple text color',
        check: () => contactFormContent.includes('text-purple-200'),
        description: 'Button should have light purple text color instead of white'
    },
    {
        name: 'Uppercase text',
        check: () => contactFormContent.includes('uppercase') && contactFormContent.includes('"WYŚLIJ"'),
        description: 'Button should have uppercase styling and uppercase text'
    },
    {
        name: 'Small text size',
        check: () => contactFormContent.includes('text-sm'),
        description: 'Button should have small text size'
    },
    {
        name: 'Correct padding',
        check: () => contactFormContent.includes('px-4 py-2'),
        description: 'Button should have correct padding (px-4 py-2)'
    },
    {
        name: 'Wider letter spacing',
        check: () => contactFormContent.includes('tracking-wider'),
        description: 'Button should have wider letter spacing'
    },
    {
        name: 'Rounded full styling',
        check: () => contactFormContent.includes('rounded-full'),
        description: 'Button should maintain rounded full styling'
    },
    {
        name: 'Enhanced hover effects',
        check: () => contactFormContent.includes('hover:from-purple-500/30 hover:to-pink-500/30'),
        description: 'Button should have enhanced hover effects for gradient'
    },
    {
        name: 'Maintained functionality',
        check: () => contactFormContent.includes('type="submit"') && contactFormContent.includes('disabled={loading}'),
        description: 'Button should maintain submit functionality and loading state'
    },
    {
        name: 'Disabled state styling',
        check: () => contactFormContent.includes('disabled:opacity-60'),
        description: 'Button should maintain disabled state styling'
    }
];

// Run tests
let passedTests = 0;
let totalTests = tests.length;

tests.forEach((test, index) => {
    const passed = test.check();
    const status = passed ? '✅' : '❌';
    console.log(`${status} Test ${index + 1}: ${test.name}`);
    console.log(`   ${test.description}`);
    
    if (passed) {
        passedTests++;
    } else {
        console.log('   ⚠️  This test failed');
    }
    console.log('');
});

// Summary
console.log('📊 Test Summary:');
console.log(`   Passed: ${passedTests}/${totalTests} tests`);
console.log(`   Success Rate: ${Math.round((passedTests/totalTests) * 100)}%`);

if (passedTests === totalTests) {
    console.log('\n🎉 All tests passed! Submit button successfully matches badge styling.');
} else {
    console.log('\n⚠️  Some tests failed. Button may need additional adjustments.');
}

// Check button text content
console.log('\n🔍 Button Content Check:');
const hasCorrectText = contactFormContent.includes('{loading ? "WYSYŁANIE..." : "WYŚLIJ"}');
console.log(`✅ Button text: ${hasCorrectText ? 'Correct (WYŚLIJ/WYSYŁANIE... in uppercase)' : 'Missing or incorrect'}`);

// Check for inline-block display
const hasInlineBlock = contactFormContent.includes('inline-block');
console.log(`✅ Display type: ${hasInlineBlock ? 'inline-block (matches badge)' : 'Missing inline-block'}`);

console.log('\n✨ Submit button badge styling test completed!');