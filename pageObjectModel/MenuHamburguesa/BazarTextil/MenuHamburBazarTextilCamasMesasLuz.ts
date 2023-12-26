import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBazarTextilCamasMesasLuz extends BasePage {

    readonly CAMAS_MESAS_LUZ: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.CAMAS_MESAS_LUZ = this.page.locator('//a [@id="menu-item-category-camas-mesas-luz"]')
    }

    async clickBazarTextilCamasMesasLuz(): Promise<void> {
        await this.click(this.CAMAS_MESAS_LUZ)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBazarTextilCamasMesasLuz(): Promise<void> {
        await this.clickBazarTextilCamasMesasLuz()
    }
}
