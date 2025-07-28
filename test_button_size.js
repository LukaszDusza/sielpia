const fs = require('fs');
const path = require('path');

// Test script to verify submit button size reduction
console.log('🔍 Testing Submit Button Size Reduction...\n');

const contactFormPath = path.join(__dirname, 'src/components/ContactForm.jsx');
const contactFormContent = fs.readFileSync(contactFormPath, 'utf8');

// Test cases for button size reduction
const tests = [
    {
        name: 'Reduced padding',
        check: () => contactFormContent.includes('py-2 px-6') && !contactFormContent.includes('py-3 px-8'),
        description: 'Button should have smaller padding (py-2 px-6 instead of py-3 px-8)'
    },
    {
        name: 'Reduced font weight',
        check: () => {
            const buttonLine = contactFormContent.split('\n').find(line => 
                line.includes('className=') && line.includes('bg-purple-600') && line.includes('font-medium')
            );
            return buttonLine !== undefined;
        },
        description: 'Button should have medium font weight instead of semibold'
    },
    {
        name: 'Reduced letter spacing',
        check: () => contactFormContent.includes('tracking-wide') && !contactFormContent.includes('tracking-widest'),
        description: 'Button should have normal letter spacing instead of widest'
    },
    {
        name: 'Maintained functionality',
        check: () => contactFormContent.includes('type="submit"') && contactFormContent.includes('disabled={loading}'),
        description: 'Button should maintain submit functionality and loading state'
    },
    {
        name: 'Maintained styling',
        check: () => contactFormContent.includes('bg-purple-600 hover:bg-purple-700') && contactFormContent.includes('rounded-full'),
        description: 'Button should maintain purple colors and rounded styling'
    },
    {
        name: 'Maintained accessibility',
        check: () => contactFormContent.includes('transition-colors') && contactFormContent.includes('disabled:opacity-60'),
        description: 'Button should maintain transitions and disabled state styling'
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
    console.log('\n🎉 All tests passed! Submit button has been successfully reduced in size.');
} else {
    console.log('\n⚠️  Some tests failed. Button may need additional adjustments.');
}

// Check button text content
console.log('\n🔍 Button Content Check:');
const hasCorrectText = contactFormContent.includes('{loading ? "Wysyłanie..." : "Wyślij"}');
console.log(`✅ Button text: ${hasCorrectText ? 'Correct (Wyślij/Wysyłanie...)' : 'Missing or incorrect'}`);

console.log('\n✨ Submit button size reduction test completed!');