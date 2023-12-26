import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBazarTextilAccesoriosLibreria extends BasePage {

    readonly ACCESORIOS_LIBRERIA: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.ACCESORIOS_LIBRERIA = this.page.locator('//a [@id="menu-item-category-accesorios"]')
    }

    async clickBazarTextilAccesoriosLibreria(): Promise<void> {
        await this.click(this.ACCESORIOS_LIBRERIA)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBazarTextilAccesoriosLibreria(): Promise<void> {
        await this.clickBazarTextilAccesoriosLibreria()
    }
}
