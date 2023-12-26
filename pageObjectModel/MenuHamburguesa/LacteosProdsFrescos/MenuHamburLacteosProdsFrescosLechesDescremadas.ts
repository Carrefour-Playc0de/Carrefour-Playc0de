import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburLacteosProdsFrescosLechesDescremadas extends BasePage {

    readonly LECHES_DESCREMADAS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.LECHES_DESCREMADAS = this.page.locator('//a [@id="menu-item-category-leches-descremadas"]')
    }

    async clickLacteosProdsFrescosLechesDescremadas(): Promise<void> {
        await this.click(this.LECHES_DESCREMADAS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburLacteosProdsFrescosLechesDescremadas(): Promise<void> {
        await this.clickLacteosProdsFrescosLechesDescremadas()
    }
}
