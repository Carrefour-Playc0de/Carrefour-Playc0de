import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburLacteosProdsFrescosLechesSaborizadas extends BasePage {

    readonly LECHES_SABORIZADAS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.LECHES_SABORIZADAS = this.page.locator('//a [@id="menu-item-category-leches-saborizadas"]')
    }

    async clickLacteosProdsFrescosLechesSaborizadas(): Promise<void> {
        await this.click(this.LECHES_SABORIZADAS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburLacteosProdsFrescosLechesSaborizadas(): Promise<void> {
        await this.clickLacteosProdsFrescosLechesSaborizadas()
    }
}
