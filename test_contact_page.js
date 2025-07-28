const fs = require('fs');
const path = require('path');

// Test script to verify contact page visual consistency
console.log('🔍 Testing Contact Page Visual Consistency...\n');

const contactPagePath = path.join(__dirname, 'src/app/kontakt/page.jsx');
const contactPageContent = fs.readFileSync(contactPagePath, 'utf8');

// Test cases for visual consistency
const tests = [
    {
        name: 'Enhanced gradient overlay',
        check: () => contactPageContent.includes('bg-gradient-to-br from-[#110713]/60 via-[#110713]/50 to-purple-900/40'),
        description: 'Should use consistent gradient overlay like other pages'
    },
    {
        name: 'Animated background elements',
        check: () => contactPageContent.includes('bg-purple-400/10 rounded-full blur-xl animate-pulse'),
        description: 'Should have animated background elements like HeroSection'
    },
    {
        name: 'Badge styling',
        check: () => contactPageContent.includes('bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-full'),
        description: 'Should have consistent badge styling'
    },
    {
        name: 'Consistent purple color',
        check: () => contactPageContent.includes('#9b51e0') && !contactPageContent.includes('#9333ea'),
        description: 'Should use #9b51e0 instead of #9333ea for consistency'
    },
    {
        name: 'Purple separator lines',
        check: () => contactPageContent.includes('bg-purple-300'),
        description: 'Should have purple separator lines like other pages'
    },
    {
        name: 'Card styling with shadows',
        check: () => contactPageContent.includes('bg-white rounded-lg shadow-lg border border-gray-200'),
        description: 'Should use consistent card styling with shadows'
    },
    {
        name: 'Section title with badge',
        check: () => contactPageContent.includes('bg-purple-100 text-purple-700 text-sm font-medium rounded-full'),
        description: 'Should have section title with badge styling'
    },
    {
        name: 'Consistent max-width container',
        check: () => contactPageContent.includes('max-w-6xl mx-auto'),
        description: 'Should use consistent container width'
    },
    {
        name: 'Hover effects',
        check: () => contactPageContent.includes('hover:shadow-xl transition-shadow'),
        description: 'Should have hover effects on cards'
    },
    {
        name: 'Icon background styling',
        check: () => contactPageContent.includes('bg-purple-100 rounded-full'),
        description: 'Should have consistent icon background styling'
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
        console.log('   ⚠️  This test failed - visual inconsistency detected');
    }
    console.log('');
});

// Summary
console.log('📊 Test Summary:');
console.log(`   Passed: ${passedTests}/${totalTests} tests`);
console.log(`   Success Rate: ${Math.round((passedTests/totalTests) * 100)}%`);

if (passedTests === totalTests) {
    console.log('\n🎉 All tests passed! Contact page is visually consistent with the project.');
} else {
    console.log('\n⚠️  Some tests failed. Contact page may need additional adjustments.');
}

// Additional check for overall structure
console.log('\n🔍 Additional Structure Check:');
const hasHeroSection = contactPageContent.includes('section') && contactPageContent.includes('backgroundImage');
const hasContactCards = contactPageContent.includes('Numer telefonu') && contactPageContent.includes('Adres') && contactPageContent.includes('Email');
const hasMapAndForm = contactPageContent.includes('MapEmbed') && contactPageContent.includes('ContactForm');

console.log(`✅ Hero section with background: ${hasHeroSection ? 'Present' : 'Missing'}`);
console.log(`✅ Contact information cards: ${hasContactCards ? 'Present' : 'Missing'}`);
console.log(`✅ Map and contact form: ${hasMapAndForm ? 'Present' : 'Missing'}`);

console.log('\n✨ Contact page visual consistency test completed!');