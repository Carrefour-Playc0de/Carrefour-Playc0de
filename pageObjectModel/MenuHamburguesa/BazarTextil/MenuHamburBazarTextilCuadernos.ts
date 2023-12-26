import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBazarTextilCuadernos extends BasePage {

    readonly CUADERNOS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.CUADERNOS = this.page.locator('//a [@id="menu-item-category-cuadernos"]')
    }

    async clickBazarTextilCuadernos(): Promise<void> {
        await this.click(this.CUADERNOS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBazarTextilCuadernos(): Promise<void> {
        await this.clickBazarTextilCuadernos()
    }
}
