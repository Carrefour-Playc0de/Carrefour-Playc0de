import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburPerfumeriaEnBarraRollOn extends BasePage {

    readonly EN_BARRA_ROLL_ON: Locator

    private env: any
    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.EN_BARRA_ROLL_ON = this.page.locator('//* [@id="menu-item-category-masculinos"]')
        // En Barra y Roll On
    }

    async clickPerfumeriaEnBarraRollOn(): Promise<void> {
        await this.click(this.EN_BARRA_ROLL_ON)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navigateToMenuHamburPerfumeriaEnBarraRollOn(): Promise<void> {
        await this.clickPerfumeriaEnBarraRollOn()
    }
}
