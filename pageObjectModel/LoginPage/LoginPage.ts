import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../config/configLoader'

export class LoginPage extends BasePage {
    readonly USERNAME_INPUT: Locator
    readonly PASSWORD_INPUT: Locator
    readonly LOGIN_FINISH_BUTTON: Locator
    readonly INGRESAR_ICON: Locator
    readonly LOGIN_MAIL_PASSWORD_BUTTON: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.USERNAME_INPUT = this.page.getByPlaceholder('Ej.: ejemplo@mail.com')
        this.PASSWORD_INPUT = this.page.getByPlaceholder('Ingrese su contraseña ')
        this.LOGIN_FINISH_BUTTON = this.page.locator('//span [contains(text(), \'Entrar\')]')
        this.INGRESAR_ICON = this.page.getByText('Ingresar');
        this.LOGIN_MAIL_PASSWORD_BUTTON = this.page.locator('//div [@class="vtex-login-2-x-button vtex-login-2-x-emailPasswordOptionBtn"]')
    }

    async navigateToLoginPage(): Promise<void> {
        await this.click(this.INGRESAR_ICON)
    }
    async loginMailPassword(): Promise<void> {
        await this.click(this.LOGIN_MAIL_PASSWORD_BUTTON)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        // await this.page.waitForTimeout(3000)
    }
    async fillCredentials(): Promise<void> {
        await this.fill(this.USERNAME_INPUT, this.env.username)
        await this.fill(this.PASSWORD_INPUT, this.env.password)
    }

    async endLoginProcess(): Promise<void> {
        await this.click(this.LOGIN_FINISH_BUTTON)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }


    async navigateToUrlAndLogin(): Promise<void> {
        await this.navigateToLoginPage()
        await this.loginMailPassword()
        await this.fillCredentials()
        await this.endLoginProcess()
    }
}
