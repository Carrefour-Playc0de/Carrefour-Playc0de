import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBazarTextilAccesoriosFerreteria extends BasePage {

    readonly ACCESORIOS_FERRETERIA: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.ACCESORIOS_FERRETERIA = this.page.locator('//a [@id="menu-item-category-acesorios-ferreteria"]')
    }

    async clickBazarTextilAccesoriosFerreteria(): Promise<void> {
        await this.click(this.ACCESORIOS_FERRETERIA)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBazarTextilAccesoriosFerreteria(): Promise<void> {
        await this.clickBazarTextilAccesoriosFerreteria()
    }
}
