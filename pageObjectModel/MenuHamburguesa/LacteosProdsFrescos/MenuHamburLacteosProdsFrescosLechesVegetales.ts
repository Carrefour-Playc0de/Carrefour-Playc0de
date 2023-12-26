import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburLacteosProdsFrescosLechesVegetales extends BasePage {

    readonly LECHES_VEGETALES: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.LECHES_VEGETALES = this.page.locator('//a [@id="menu-item-category-leches-vegetales"]')
    }

    async clickLacteosProdsFrescosLechesVegetales(): Promise<void> {
        await this.click(this.LECHES_VEGETALES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburLacteosProdsFrescosLechesVegetales(): Promise<void> {
        await this.clickLacteosProdsFrescosLechesVegetales()
    }
}
