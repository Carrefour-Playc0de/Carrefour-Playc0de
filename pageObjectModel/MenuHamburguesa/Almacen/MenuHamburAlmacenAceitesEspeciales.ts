import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburAlmacenAceitesEspeciales extends BasePage {

    readonly ACEITES_ESPECIALES: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.ACEITES_ESPECIALES = this.page.locator('//a [@id="menu-item-category-aceites-especiales"]')
    }

    async clickAlmacenAceitesEspeciales(): Promise<void> {
        await this.click(this.ACEITES_ESPECIALES)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburAlmacenAceitesEspeciales(): Promise<void> {
        await this.clickAlmacenAceitesEspeciales()
    }
}
