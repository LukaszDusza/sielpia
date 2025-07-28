#!/usr/bin/env node

/**
 * Comprehensive Responsiveness Test Script
 * Tests the website across different viewport sizes and identifies potential issues
 */

const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

// Define viewport sizes to test
const viewports = [
    { name: 'Mobile Small', width: 320, height: 568 },
    { name: 'Mobile Medium', width: 375, height: 667 },
    { name: 'Mobile Large', width: 414, height: 896 },
    { name: 'Tablet Portrait', width: 768, height: 1024 },
    { name: 'Tablet Landscape', width: 1024, height: 768 },
    { name: 'Desktop Small', width: 1280, height: 720 },
    { name: 'Desktop Medium', width: 1440, height: 900 },
    { name: 'Desktop Large', width: 1920, height: 1080 }
];

// Pages to test
const pagesToTest = [
    { name: 'Home', url: '/' },
    { name: 'Atrakcje', url: '/atrakcje' },
    { name: 'Urodziny', url: '/urodziny' },
    { name: 'Cenniki Bawialnia', url: '/cenniki/bawialnia' },
    { name: 'Kontakt', url: '/kontakt' }
];

// Test results storage
let testResults = {
    timestamp: new Date().toISOString(),
    summary: {
        totalTests: 0,
        passed: 0,
        failed: 0,
        warnings: 0
    },
    details: []
};

async function testResponsiveness() {
    console.log('🚀 Starting Responsiveness Test...\n');
    
    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    try {
        for (const page of pagesToTest) {
            console.log(`📄 Testing page: ${page.name} (${page.url})`);
            
            for (const viewport of viewports) {
                console.log(`  📱 Testing viewport: ${viewport.name} (${viewport.width}x${viewport.height})`);
                
                const pageInstance = await browser.newPage();
                await pageInstance.setViewport({
                    width: viewport.width,
                    height: viewport.height
                });

                const testResult = {
                    page: page.name,
                    viewport: viewport.name,
                    dimensions: `${viewport.width}x${viewport.height}`,
                    tests: [],
                    status: 'passed'
                };

                try {
                    // Navigate to page
                    await pageInstance.goto(`http://localhost:3000${page.url}`, {
                        waitUntil: 'networkidle0',
                        timeout: 30000
                    });

                    // Test 1: Check if page loads without errors
                    const pageErrors = [];
                    pageInstance.on('pageerror', error => pageErrors.push(error.message));
                    
                    testResult.tests.push({
                        name: 'Page Load',
                        status: pageErrors.length === 0 ? 'passed' : 'failed',
                        details: pageErrors.length === 0 ? 'Page loaded successfully' : `Errors: ${pageErrors.join(', ')}`
                    });

                    // Test 2: Check horizontal scrollbar
                    const hasHorizontalScroll = await pageInstance.evaluate(() => {
                        return document.documentElement.scrollWidth > document.documentElement.clientWidth;
                    });
                    
                    testResult.tests.push({
                        name: 'Horizontal Scroll',
                        status: hasHorizontalScroll ? 'warning' : 'passed',
                        details: hasHorizontalScroll ? 'Horizontal scrollbar detected' : 'No horizontal scroll'
                    });

                    // Test 3: Check header visibility and mobile menu
                    const headerTest = await pageInstance.evaluate((viewportWidth) => {
                        const header = document.querySelector('header');
                        const logo = document.querySelector('header img');
                        const desktopMenu = document.querySelector('nav.hidden.md\\:flex');
                        const mobileMenuButton = document.querySelector('button.md\\:hidden');
                        
                        const results = {
                            headerVisible: header && header.offsetHeight > 0,
                            logoVisible: logo && logo.offsetHeight > 0,
                            desktopMenuVisible: desktopMenu && window.getComputedStyle(desktopMenu).display !== 'none',
                            mobileMenuButtonVisible: mobileMenuButton && window.getComputedStyle(mobileMenuButton).display !== 'none'
                        };
                        
                        // Check if correct menu is shown based on viewport
                        if (viewportWidth < 768) {
                            results.correctMenuShown = !results.desktopMenuVisible && results.mobileMenuButtonVisible;
                        } else {
                            results.correctMenuShown = results.desktopMenuVisible && !results.mobileMenuButtonVisible;
                        }
                        
                        return results;
                    }, viewport.width);

                    testResult.tests.push({
                        name: 'Header Navigation',
                        status: headerTest.headerVisible && headerTest.logoVisible && headerTest.correctMenuShown ? 'passed' : 'failed',
                        details: `Header: ${headerTest.headerVisible}, Logo: ${headerTest.logoVisible}, Correct Menu: ${headerTest.correctMenuShown}`
                    });

                    // Test 4: Check footer visibility
                    const footerTest = await pageInstance.evaluate(() => {
                        const footer = document.querySelector('footer');
                        const scrollToTopButton = document.querySelector('button[aria-label="Przewiń do góry"]');
                        
                        return {
                            footerVisible: footer && footer.offsetHeight > 0,
                            scrollButtonVisible: scrollToTopButton && scrollToTopButton.offsetHeight > 0
                        };
                    });

                    testResult.tests.push({
                        name: 'Footer Elements',
                        status: footerTest.footerVisible && footerTest.scrollButtonVisible ? 'passed' : 'warning',
                        details: `Footer: ${footerTest.footerVisible}, Scroll Button: ${footerTest.scrollButtonVisible}`
                    });

                    // Test 5: Check main content sections
                    const contentTest = await pageInstance.evaluate(() => {
                        const heroSection = document.querySelector('section');
                        const images = document.querySelectorAll('img');
                        const buttons = document.querySelectorAll('button, a[class*="bg-purple"]');
                        
                        let visibleImages = 0;
                        images.forEach(img => {
                            if (img.offsetHeight > 0 && img.offsetWidth > 0) visibleImages++;
                        });
                        
                        let visibleButtons = 0;
                        buttons.forEach(btn => {
                            if (btn.offsetHeight > 0 && btn.offsetWidth > 0) visibleButtons++;
                        });
                        
                        return {
                            heroSectionVisible: heroSection && heroSection.offsetHeight > 0,
                            imagesLoaded: visibleImages,
                            buttonsVisible: visibleButtons
                        };
                    });

                    testResult.tests.push({
                        name: 'Content Visibility',
                        status: contentTest.heroSectionVisible && contentTest.imagesLoaded > 0 ? 'passed' : 'warning',
                        details: `Hero: ${contentTest.heroSectionVisible}, Images: ${contentTest.imagesLoaded}, Buttons: ${contentTest.buttonsVisible}`
                    });

                    // Test 6: Check text readability (font sizes)
                    const textTest = await pageInstance.evaluate(() => {
                        const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
                        const paragraphs = document.querySelectorAll('p');
                        
                        let smallHeadings = 0;
                        let smallParagraphs = 0;
                        
                        headings.forEach(h => {
                            const fontSize = parseFloat(window.getComputedStyle(h).fontSize);
                            if (fontSize < 18) smallHeadings++;
                        });
                        
                        paragraphs.forEach(p => {
                            const fontSize = parseFloat(window.getComputedStyle(p).fontSize);
                            if (fontSize < 14) smallParagraphs++;
                        });
                        
                        return {
                            totalHeadings: headings.length,
                            smallHeadings: smallHeadings,
                            totalParagraphs: paragraphs.length,
                            smallParagraphs: smallParagraphs
                        };
                    });

                    const textReadabilityStatus = (textTest.smallHeadings === 0 && textTest.smallParagraphs === 0) ? 'passed' : 'warning';
                    testResult.tests.push({
                        name: 'Text Readability',
                        status: textReadabilityStatus,
                        details: `Small headings: ${textTest.smallHeadings}/${textTest.totalHeadings}, Small paragraphs: ${textTest.smallParagraphs}/${textTest.totalParagraphs}`
                    });

                    // Test 7: Check for overlapping elements
                    const overlapTest = await pageInstance.evaluate(() => {
                        const elements = document.querySelectorAll('*');
                        let overlaps = 0;
                        
                        // Simple overlap detection (this is a basic implementation)
                        for (let i = 0; i < Math.min(elements.length, 50); i++) {
                            const rect1 = elements[i].getBoundingClientRect();
                            if (rect1.width === 0 || rect1.height === 0) continue;
                            
                            for (let j = i + 1; j < Math.min(elements.length, 50); j++) {
                                const rect2 = elements[j].getBoundingClientRect();
                                if (rect2.width === 0 || rect2.height === 0) continue;
                                
                                // Check if elements overlap significantly
                                const overlapX = Math.max(0, Math.min(rect1.right, rect2.right) - Math.max(rect1.left, rect2.left));
                                const overlapY = Math.max(0, Math.min(rect1.bottom, rect2.bottom) - Math.max(rect1.top, rect2.top));
                                
                                if (overlapX > rect1.width * 0.8 && overlapY > rect1.height * 0.8) {
                                    overlaps++;
                                }
                            }
                        }
                        
                        return { overlaps };
                    });

                    testResult.tests.push({
                        name: 'Element Overlap',
                        status: overlapTest.overlaps === 0 ? 'passed' : 'warning',
                        details: `Potential overlaps detected: ${overlapTest.overlaps}`
                    });

                } catch (error) {
                    testResult.tests.push({
                        name: 'Page Access',
                        status: 'failed',
                        details: `Error: ${error.message}`
                    });
                    testResult.status = 'failed';
                }

                // Determine overall test status
                const failedTests = testResult.tests.filter(t => t.status === 'failed').length;
                const warningTests = testResult.tests.filter(t => t.status === 'warning').length;
                
                if (failedTests > 0) {
                    testResult.status = 'failed';
                    testResults.summary.failed++;
                } else if (warningTests > 0) {
                    testResult.status = 'warning';
                    testResults.summary.warnings++;
                } else {
                    testResult.status = 'passed';
                    testResults.summary.passed++;
                }

                testResults.summary.totalTests++;
                testResults.details.push(testResult);

                await pageInstance.close();
                
                // Add small delay between tests
                await new Promise(resolve => setTimeout(resolve, 500));
            }
            console.log('');
        }

    } catch (error) {
        console.error('❌ Test execution error:', error);
    } finally {
        await browser.close();
    }

    // Generate report
    generateReport();
}

function generateReport() {
    console.log('📊 RESPONSIVENESS TEST RESULTS');
    console.log('================================\n');
    
    console.log(`📈 Summary:`);
    console.log(`   Total Tests: ${testResults.summary.totalTests}`);
    console.log(`   ✅ Passed: ${testResults.summary.passed}`);
    console.log(`   ⚠️  Warnings: ${testResults.summary.warnings}`);
    console.log(`   ❌ Failed: ${testResults.summary.failed}\n`);

    // Group results by status
    const failedTests = testResults.details.filter(t => t.status === 'failed');
    const warningTests = testResults.details.filter(t => t.status === 'warning');

    if (failedTests.length > 0) {
        console.log('❌ FAILED TESTS:');
        failedTests.forEach(test => {
            console.log(`   ${test.page} - ${test.viewport} (${test.dimensions})`);
            test.tests.filter(t => t.status === 'failed').forEach(t => {
                console.log(`     • ${t.name}: ${t.details}`);
            });
        });
        console.log('');
    }

    if (warningTests.length > 0) {
        console.log('⚠️  WARNING TESTS:');
        warningTests.forEach(test => {
            console.log(`   ${test.page} - ${test.viewport} (${test.dimensions})`);
            test.tests.filter(t => t.status === 'warning').forEach(t => {
                console.log(`     • ${t.name}: ${t.details}`);
            });
        });
        console.log('');
    }

    // Save detailed report to file
    const reportPath = path.join(__dirname, 'responsiveness-test-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(testResults, null, 2));
    console.log(`📄 Detailed report saved to: ${reportPath}\n`);

    // Recommendations
    console.log('💡 RECOMMENDATIONS:');
    if (testResults.summary.failed > 0) {
        console.log('   • Fix critical issues that prevent proper page loading or navigation');
    }
    if (testResults.summary.warnings > 0) {
        console.log('   • Review warning items for potential UX improvements');
        console.log('   • Consider adjusting font sizes for better mobile readability');
        console.log('   • Check for horizontal scrolling issues on smaller screens');
    }
    if (testResults.summary.failed === 0 && testResults.summary.warnings === 0) {
        console.log('   🎉 Great job! Your website appears to be fully responsive!');
    }
    console.log('');
}

// Check if Next.js dev server is running
async function checkServer() {
    try {
        const response = await fetch('http://localhost:3000');
        return response.ok;
    } catch (error) {
        return false;
    }
}

// Main execution
async function main() {
    console.log('🔍 Checking if Next.js development server is running...');
    
    const serverRunning = await checkServer();
    if (!serverRunning) {
        console.log('❌ Next.js development server is not running on localhost:3000');
        console.log('Please start the server with: npm run dev');
        process.exit(1);
    }
    
    console.log('✅ Server is running, starting tests...\n');
    await testResponsiveness();
}

main().catch(console.error);