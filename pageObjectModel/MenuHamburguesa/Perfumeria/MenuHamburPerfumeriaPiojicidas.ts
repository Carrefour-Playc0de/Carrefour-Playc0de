import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburPerfumeriaPiojicidas extends BasePage {

    readonly PIOJICIDAS: Locator

    private env: any
    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.PIOJICIDAS = this.page.locator('//a [@id="menu-item-category-piojicidas"]')
        // Piojicidas
    }

    async clickPerfumeriaPiojicidas(): Promise<void> {
        await this.click(this.PIOJICIDAS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
        await this.page.waitForTimeout(3000)
    }

    async navigateToMenuHamburPerfumeriaPiojicidas(): Promise<void> {
        await this.clickPerfumeriaPiojicidas()
    }
}
