const puppeteer = require('puppeteer');
const assert = require( 'chai' ).assert;
const expect = require('chai').expect;
for (i = 0; i < 20; i++) {
    describe('Registro y Login', function () {
        describe('resolve()', function () {
            it('Registro Exitoso', async function () {
                this.timeout(60000)
                // Headfull
                const browser = await puppeteer.launch({headless: false});
                // Headless
                // const browser = await puppeteer.launch({headless: false});
                const page = await browser.newPage();
                await page.goto('https://angular-6-registration-login-example.stackblitz.io/register');

                await page.waitFor('input[formcontrolname=firstName]');
                await page.waitFor('input[formcontrolname=lastName]');
                await page.waitFor('input[formcontrolname=username]');
                await page.waitFor('input[formcontrolname=password]');

                await page.focus('input[formcontrolname=firstName]');
                await page.keyboard.type('testing' + i.toString() + '');
                await page.focus('input[formcontrolname=lastName]');
                await page.keyboard.type('testing' + i.toString() + '');
                await page.focus('input[formcontrolname=username]');
                await page.keyboard.type('testing' + i.toString() + '');
                await page.focus('input[formcontrolname=password]');
                await page.keyboard.type('testing' + i.toString() + '');
                await page.focus('button[class="btn btn-primary"]');

                await page.screenshot({path: 'beforeRegister' + i.toString() + '.png'});

                await page.click('button[class="btn btn-primary"]');

                await delay(2000)
                await page.screenshot({path: 'afterRegister' + i.toString() + '.png'});

                const element1 = await page.$eval('div[class="alert alert-success"]', el => el.textContent);

                await page.focus('input[formcontrolname=username]');
                await page.keyboard.type('testing' + i.toString() + '');
                await page.focus('input[formcontrolname=password]');
                await page.keyboard.type('testing' + i.toString() + '');
                await page.focus('button[class="btn btn-primary"]');

                await page.screenshot({path: 'beforeLogin' + i.toString() + '.png'});

                await page.click('button[class="btn btn-primary"]');


                await delay(2000)
                await page.screenshot({path: 'afterLogin' + i.toString() + '.png'});
                const element2 = await page.$eval('h1', el => el.textContent);

                await browser.close();
                var result = await Promise.resolve(element1);
                expect(result).to.be.equal('Registration successful');
                var result = await Promise.resolve(element2);
                expect(result).to.be.equal('Hi testing' + i.toString() + '!');
            });
        });
    });
}

function delay(time) {
   return new Promise(function(resolve) {
       setTimeout(resolve, time)
   });
}