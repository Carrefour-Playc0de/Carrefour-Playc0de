import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBazarTextilOllasSartenesFuentes extends BasePage {

    readonly OLLAS_SARTENES_FUENTES: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.OLLAS_SARTENES_FUENTES = this.page.locator('//a [@id="menu-item-category-ollas-sartenes-fuentes"]')
    }

    async clickBazarTextilOllasSartenesFuentes(): Promise<void> {
        await this.click(this.OLLAS_SARTENES_FUENTES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBazarTextilOllasSartenesFuentes(): Promise<void> {
        await this.clickBazarTextilOllasSartenesFuentes()
    }
}
