import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburBebidasAguasMineralesMesa extends BasePage {

    readonly AGUAS_MINERALES_MESA: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.AGUAS_MINERALES_MESA = this.page.locator('//a [@id="menu-item-category-aguas-minerales-mesa"]')
    }

    async clickBebidasAguasMineralesMesa(): Promise<void> {
        await this.click(this.AGUAS_MINERALES_MESA)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburBebidasAguasMineralesMesa(): Promise<void> {
        await this.clickBebidasAguasMineralesMesa()
    }
}
