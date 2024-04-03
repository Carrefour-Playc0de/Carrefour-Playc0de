import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburPerfumeriaTapabocasMascaras extends BasePage {

    readonly TAPABOCAS_MASCARAS: Locator

    private env: any
    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.TAPABOCAS_MASCARAS = this.page.locator('//* [@id="menu-item-category-tapabocas-mascaras"]')
    }

    async clickPerfumeriaTapabocasMascaras(): Promise<void> {
        await this.click(this.TAPABOCAS_MASCARAS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburPerfumeriaTapabocasMascaras(): Promise<void> {
        await this.clickPerfumeriaTapabocasMascaras()
    }
}
