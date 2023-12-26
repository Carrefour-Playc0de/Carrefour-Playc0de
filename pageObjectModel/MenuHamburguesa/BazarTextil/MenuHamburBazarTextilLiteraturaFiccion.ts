import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBazarTextilLiteraturaFiccion extends BasePage {

    readonly LITERATURA_FICCION: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.LITERATURA_FICCION = this.page.locator('//a [@id="menu-item-category-literatura-ficcion"]')
    }

    async clickBazarTextilLiteraturaFiccion(): Promise<void> {
        await this.click(this.LITERATURA_FICCION)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBazarTextilLiteraturaFiccion(): Promise<void> {
        await this.clickBazarTextilLiteraturaFiccion()
    }
}
