#!/usr/bin/env node

// Simple script to reproduce the next/font error
console.log('Testing next/font import...');

try {
    // This should trigger the same error as in layout.js
    const { Poppins } = require('next/font/google');
    console.log('✅ next/font import successful');
} catch (error) {
    console.log('❌ Error occurred:');
    console.log(error.message);
    console.log('\nFull error stack:');
    console.log(error.stack);
}