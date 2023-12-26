import test from '../../config/testManager'

// We can use steps like this to reproduce Cucumber formatting
test.beforeEach(async ({ mainPageAndAcceptCookies }) => {
    await test.step('Navigate to Carrefour page and Accept Cookies', async () => {
        await mainPageAndAcceptCookies.navigateToMainPageAndAcceptCookies()
    })
})

test('@Smoke @Regression @Login (B2CPROY-TC-1) Navigate to Carrefour page and login with valid credentials', async ({loginPage}) => {

    await test.step('Enter to login page', async () => {
        await loginPage.navigateToLoginPage();
    })
    await test.step('Login using mail and password', async () => {
        await loginPage.loginMailPassword();
    })
    await test.step('Write the username and password', async () => {
        await loginPage.fillCredentials();
    })
    await test.step('Finish the login process', async () => {
        await loginPage.endLoginProcess();
    })

})