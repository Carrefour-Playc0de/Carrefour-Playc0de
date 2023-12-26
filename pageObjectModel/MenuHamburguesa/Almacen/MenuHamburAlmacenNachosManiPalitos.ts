import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburAlmacenNachosManiPalitos extends BasePage {

    readonly NACHOS_MANI_PALITOS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.NACHOS_MANI_PALITOS = this.page.locator('//a [@id="menu-item-category-nachos-mani-palitos"]')
    }

    async clickAlmacenNachosManiPalitos(): Promise<void> {
        await this.click(this.NACHOS_MANI_PALITOS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburAlmacenNachosManiPalitos(): Promise<void> {
        await this.clickAlmacenNachosManiPalitos()
    }
}
