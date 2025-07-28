// Simple test to verify the navigation implementation
const fs = require('fs');
const path = require('path');

// Check if the main page file exists and has correct Link import
const mainPagePath = path.join(__dirname, 'src/app/page.jsx');
const urodzinyPagePath = path.join(__dirname, 'src/app/urodziny/page.jsx');

console.log('Testing navigation implementation...\n');

// Test 1: Check if main page exists
if (fs.existsSync(mainPagePath)) {
    console.log('✓ Main page exists');
    
    const mainPageContent = fs.readFileSync(mainPagePath, 'utf8');
    
    // Test 2: Check if Link is imported
    if (mainPageContent.includes('import Link from "next/link"')) {
        console.log('✓ Link component is imported');
    } else {
        console.log('✗ Link component is not imported');
    }
    
    // Test 3: Check if Link wraps the birthday image
    if (mainPageContent.includes('<Link href="/urodziny"') && 
        mainPageContent.includes('oferta-urodzinowa.jpg')) {
        console.log('✓ Birthday image is wrapped with Link to /urodziny');
    } else {
        console.log('✗ Birthday image is not properly linked');
    }
    
    // Test 4: Check if cursor-pointer class is added
    if (mainPageContent.includes('cursor-pointer')) {
        console.log('✓ Cursor pointer styling is added');
    } else {
        console.log('✗ Cursor pointer styling is missing');
    }
    
} else {
    console.log('✗ Main page does not exist');
}

// Test 5: Check if target page exists
if (fs.existsSync(urodzinyPagePath)) {
    console.log('✓ Urodziny page exists at correct path');
} else {
    console.log('✗ Urodziny page does not exist');
}

console.log('\nNavigation implementation test completed.');