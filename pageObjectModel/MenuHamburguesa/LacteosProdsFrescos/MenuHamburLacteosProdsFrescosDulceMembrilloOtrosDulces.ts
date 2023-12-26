import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburLacteosProdsFrescosDulceMembrilloOtrosDulces extends BasePage {

    readonly DULCE_MEMBRILLO_OTROS_DULCES: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.DULCE_MEMBRILLO_OTROS_DULCES = this.page.locator('//a [@id="menu-item-category-dulce-membrillo-otros"]')
    }

    async clickLacteosProdsFrescosDulceMembrilloOtrosDulces(): Promise<void> {
        await this.click(this.DULCE_MEMBRILLO_OTROS_DULCES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburLacteosProdsFrescosDulceMembrilloOtrosDulces(): Promise<void> {
        await this.clickLacteosProdsFrescosDulceMembrilloOtrosDulces()
    }
}
