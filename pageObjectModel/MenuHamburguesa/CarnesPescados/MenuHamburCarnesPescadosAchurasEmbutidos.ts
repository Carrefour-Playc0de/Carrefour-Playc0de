import { Page, BrowserContext, Locator, expect } from '@playwright/test'
import { BasePage } from '../../commonActions'
import { loadEnvironmentConfig, loadTestDataConfig } from '../../../config/configLoader'

export class MenuHamburCarnesPescadosAchurasEmbutidos extends BasePage {

    readonly ACHURAS_EMBUTIDOS: Locator

    private env: any

    constructor(page: Page, context: BrowserContext, environment: string) {
        super(page, context)
        this.env = loadEnvironmentConfig(environment)

        this.ACHURAS_EMBUTIDOS = this.page.locator('//a [@id="menu-item-category-achuras-embutidos"]')
    }

    async clickCarnesPescadosAchurasEmbutidos(): Promise<void> {
        await this.click(this.ACHURAS_EMBUTIDOS)
        await this.page.waitForLoadState("domcontentloaded")
        await this.page.waitForFunction(() => document.readyState === 'complete')
    }

    async navigateToMenuHamburCarnesPescadosAchurasEmbutidos(): Promise<void> {
        await this.clickCarnesPescadosAchurasEmbutidos()
    }
}
